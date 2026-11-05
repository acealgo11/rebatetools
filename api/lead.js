// RebateTools lead capture → GoHighLevel (+ optional Meta Conversions API)
//
// Vercel serverless function. Receives form progress from the landing page and writes it into GHL:
//   - creates/updates ONE contact per phone number (no duplicates, so SMS + WhatsApp share one thread)
//   - saves answers + attribution into the "RT …" custom fields
//   - tags: "rebatetools lead" + "rt partial" | "rt complete"
//   - opportunity in "RebateTools – Sales": Partial Lead → New Lead (never moved backwards)
//   - optional: sends PartialLead / Lead to Meta CAPI (deduplicated with the browser pixel via event_id)
//
//   - optional: sends partial_lead / lead to Whop Ads (Events API), deduplicated with the Whop pixel
//
// Required Vercel environment variables (Project → Settings → Environment Variables):
//   GHL_TOKEN        Private Integration Token from the Core Capital sub-account (starts with "pit-")
//                    Scopes: contacts.readonly, contacts.write, opportunities.readonly, opportunities.write
// Optional:
//   GHL_LOCATION_ID  defaults to Core Capital
//   WHOP_ACCOUNT_ID  Whop account ID (biz_…)  — same value as window.WHOP_ACCOUNT_ID in index.html
//   WHOP_API_KEY     Whop Account API key with the event:create permission
//   META_PIXEL_ID    Meta pixel / dataset ID
//   META_CAPI_TOKEN  Conversions API access token
//   ALLOWED_ORIGINS  comma-separated extra origins allowed to post (e.g. a preview URL)

const crypto = require('crypto');
const { LOCATION_ID, PIPELINE_ID, STAGE, CF, OCF, TAGS, clean, ghl, urlParam, sendWhop } = require('./_lib');

const ALLOWED = [
  'https://rebatetools.co.uk', 'https://www.rebatetools.co.uk',
  'https://rebatetools.com', 'https://www.rebatetools.com',
  ...(process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean),
];
const originOk = o => !o || ALLOWED.includes(o) || /^https:\/\/[a-z0-9-]+\.vercel\.app$/.test(o) || /^http:\/\/localhost(:\d+)?$/.test(o);

// ---------- helpers ----------
function ukE164(raw) {
  let d = String(raw || '').replace(/[^\d+]/g, '');
  if (d.startsWith('+44')) d = d.slice(3);
  else if (d.startsWith('0044')) d = d.slice(4);
  d = d.replace(/\D/g, '');
  if (d.startsWith('44') && d.length >= 12) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  if (!/^7\d{9}$/.test(d) && !/^[1-9]\d{8,9}$/.test(d)) return null;
  return '+44' + d;
}

const sha = v => (v ? crypto.createHash('sha256').update(String(v).trim().toLowerCase()).digest('hex') : undefined);

async function sendCapi(eventName, d, req) {
  const pixel = process.env.META_PIXEL_ID, token = process.env.META_CAPI_TOKEN;
  if (!pixel || !token) return;
  const ip = clean((req.headers['x-forwarded-for'] || '').split(',')[0], 64) || undefined;
  const user_data = {
    ph: [sha(d.phone.replace(/\D/g, ''))],
    em: d.email ? [sha(d.email)] : undefined,
    fn: d.first ? [sha(d.first)] : undefined,
    ln: d.last ? [sha(d.last)] : undefined,
    country: [sha('gb')],
    external_id: d.contactId ? [sha(d.contactId)] : undefined,
    fbc: d.fbc || undefined,
    fbp: d.fbp || undefined,
    client_ip_address: ip,
    client_user_agent: d.ua || clean(req.headers['user-agent'], 400) || undefined,
  };
  const body = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventName === 'Lead' ? d.eventId : d.partialEventId,
      action_source: 'website',
      event_source_url: d.page || undefined,
      user_data,
    }],
  };
  try {
    await fetch(`https://graph.facebook.com/v21.0/${pixel}/events?access_token=${encodeURIComponent(token)}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
  } catch (_) { /* never block the lead on Meta */ }
}

// ---------- handler ----------
module.exports = async (req, res) => {
  const origin = req.headers.origin;
  if (originOk(origin) && origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  if (!originOk(origin)) return res.status(403).json({ ok: false });
  if (!process.env.GHL_TOKEN) return res.status(500).json({ ok: false, error: 'GHL_TOKEN not set' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (clean(b.company_website)) return res.status(200).json({ ok: true });

  const phone = ukE164(b.phone);
  if (!phone) return res.status(400).json({ ok: false, error: 'invalid_phone' });

  const complete = b.stage === 'complete';
  const platforms = Array.isArray(b.platforms) ? b.platforms.map(x => clean(x, 40)).filter(Boolean).join(', ') : clean(b.platforms);
  const email = clean(b.email, 160).toLowerCase();
  const d = {
    phone, email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? email : '',
    first: clean(b.first, 60), last: clean(b.last, 60),
    platforms, now: clean(b.now, 40), goal: clean(b.goal, 40),
    step: Math.max(1, Math.min(9, parseInt(b.step, 10) || 1)),
    utm_source: clean(b.utm_source), utm_medium: clean(b.utm_medium), utm_campaign: clean(b.utm_campaign), utm_content: clean(b.utm_content),
    fbclid: clean(b.fbclid, 400), fbc: clean(b.fbc, 400), fbp: clean(b.fbp, 200),
    eventId: clean(b.eventId, 80), partialEventId: clean(b.partialEventId, 80),
    ua: clean(b.ua || req.headers['user-agent'], 400), page: clean(b.page, 500),
    contactId: clean(b.contactId, 40),
    landing: clean(b.landing, 1000), wuid: clean(b.wuid, 120),
    wacid: clean(b.wacid, 80), wasid: clean(b.wasid, 80), waid: clean(b.waid, 80),
    ip: clean((req.headers['x-forwarded-for'] || '').split(',')[0], 64),
  };
  if (!d.wacid) d.wacid = clean(urlParam(d.landing, 'wacid'), 80);
  if (!d.waid) d.waid = clean(urlParam(d.landing, 'waid'), 80);

  // Only send fields that have values, so a later partial update never blanks earlier answers.
  const cf = [];
  const put = (id, v) => { if (v !== '' && v != null) cf.push({ id, field_value: String(v) }); };
  put(CF.platforms, d.platforms); put(CF.now, d.now); put(CF.goal, d.goal);
  put(CF.step, d.step);
  put(CF.utm_source, d.utm_source); put(CF.utm_medium, d.utm_medium); put(CF.utm_campaign, d.utm_campaign); put(CF.utm_content, d.utm_content);
  put(CF.fbclid, d.fbclid); put(CF.fbc, d.fbc); put(CF.fbp, d.fbp); put(CF.ua, d.ua); put(CF.page, d.page);
  put(CF.landing, d.landing); put(CF.wuid, d.wuid); put(CF.ip, d.ip); put(CF.wacid, d.wacid); put(CF.waid, d.waid);
  if (complete) { put(CF.eventId, d.eventId); put(CF.completedAt, new Date().toISOString()); }

  const contactBody = { phone, country: 'GB', customFields: cf };
  if (d.first) contactBody.firstName = d.first;
  if (d.last) contactBody.lastName = d.last;
  if (d.email) contactBody.email = d.email;

  try {
    // 1. Contact: one per phone number
    let contactId = d.contactId, isNew = false;
    if (contactId) {
      try { await ghl('PUT', `/contacts/${contactId}`, contactBody); }
      catch (e) { contactId = ''; } // stale/foreign id → fall back to upsert
    }
    if (!contactId) {
      const r = await ghl('POST', '/contacts/upsert', { ...contactBody, locationId: LOCATION_ID, source: 'RebateTools landing page' });
      contactId = r.contact && r.contact.id; isNew = !!r.new;
    }
    if (!contactId) throw new Error('no contact id');
    d.contactId = contactId;

    // 2. Existing opportunity in RebateTools – Sales?
    const q = new URLSearchParams({ locationId: LOCATION_ID, contactId, pipelineId: PIPELINE_ID, limit: '20' });
    let found = {};
    try { found = await ghl('GET', `/opportunities/search?${q}`, null, 'v3'); }
    catch (_) { found = await ghl('GET', `/opportunities/search?${q}`); }
    const opp = (found.opportunities || []).find(o => o.contactId === contactId && o.pipelineId === PIPELINE_ID);
    const alreadyBeyondPartial = !!opp && opp.pipelineStageId !== STAGE.partial;

    // 3. Tags (a lead that's already progressed is never re-marked as partial)
    if (complete) {
      await ghl('POST', `/contacts/${contactId}/tags`, { tags: [TAGS.base, TAGS.complete] });
      try { await ghl('DELETE', `/contacts/${contactId}/tags`, { tags: [TAGS.partial] }); } catch (_) {}
    } else {
      await ghl('POST', `/contacts/${contactId}/tags`, { tags: alreadyBeyondPartial ? [TAGS.base] : [TAGS.base, TAGS.partial] });
    }

    // 4. Opportunity (never moved backwards)
    const name = [d.first, d.last].filter(Boolean).join(' ') || phone;
    let oppId = opp && opp.id;
    if (!opp) {
      const r = await ghl('POST', '/opportunities/upsert', {
        locationId: LOCATION_ID, pipelineId: PIPELINE_ID, contactId,
        pipelineStageId: complete ? STAGE.newLead : STAGE.partial, status: 'open', name: `${name} – RebateTools`,
      });
      oppId = r.opportunity && r.opportunity.id;
    } else {
      const upd = { locationId: LOCATION_ID, id: opp.id, pipelineId: PIPELINE_ID, contactId, name: `${name} – RebateTools` };
      if (complete && opp.pipelineStageId === STAGE.partial) upd.pipelineStageId = STAGE.newLead;
      await ghl('POST', '/opportunities/upsert', upd);
    }

    // 4b. Form answers + ad source onto the opportunity (only non-empty values, so nothing is blanked)
    if (oppId) {
      const ocf = [];
      const oput = (id, v) => { if (v !== '' && v != null) ocf.push({ id, fieldValue: String(v) }); };
      const viaWhop = !!(d.wacid || d.waid || /whop/i.test(d.utm_source));
      oput(OCF.platforms, d.platforms); oput(OCF.now, d.now); oput(OCF.goal, d.goal);
      if (complete) oput(OCF.status, 'Complete');
      else if (!alreadyBeyondPartial) oput(OCF.status, `Partial (step ${d.step})`);
      if (d.utm_source || viaWhop || d.fbclid || !opp) oput(OCF.source, d.utm_source || (viaWhop ? 'whop' : (d.fbclid ? 'meta' : 'direct')));
      oput(OCF.campaign, d.utm_campaign || d.wacid);
      oput(OCF.ad, d.utm_content || d.waid);
      oput(OCF.landing, d.landing);
      try { await ghl('PUT', `/opportunities/${oppId}`, { customFields: ocf }); }
      catch (e) { console.error('opp fields error', e.message, JSON.stringify(e.detail || {}).slice(0, 400)); }
    }

    // 5. Conversions: Whop Ads (Events API) + Meta CAPI. Both optional, both deduplicated with the browser via event_id.
    const whopEvt = name => sendWhop({
      name, id: name === 'lead' ? d.eventId : d.partialEventId, source: 'website', url: d.landing || d.page,
      user: { anonymous_id: d.wuid, email: d.email, phone, first_name: d.first, last_name: d.last, external_id: contactId },
      context: { ip_address: d.ip, user_agent: d.ua, fbclid: d.fbclid, fbc: d.fbc, fbp: d.fbp,
        utm_source: d.utm_source, utm_medium: d.utm_medium, utm_campaign: d.utm_campaign, utm_content: d.utm_content },
    });
    if (complete) await Promise.all([sendCapi('Lead', d, req), whopEvt('lead')]);
    else if (b.firstCapture) await Promise.all([sendCapi('PartialLead', d, req), whopEvt('partial_lead')]);

    return res.status(200).json({ ok: true, contactId, isNew });
  } catch (e) {
    console.error('lead error', e.message, JSON.stringify(e.detail || {}).slice(0, 800));
    return res.status(502).json({ ok: false, error: 'crm_error' });
  }
};
