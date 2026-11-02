// CRM-stage conversions → Whop Ads.
//
// Called by GHL workflows (Webhook action) when a lead moves stage, e.g. Call Booked or Won,
// so Whop can optimise on what happens AFTER the form, not just the form fill.
//
//   POST https://rebatetools.co.uk/api/event?event=schedule&key=EVENT_SECRET
//   Body: the standard GHL webhook payload (contact_id is all that's needed).
//   Optional Custom Data in the GHL action:  event = schedule   value = {{opportunity.monetary_value}}
//
// The contact's stored ad data (Whop visitor ID, landing URL with Whop ad IDs, click IDs, IP, UA)
// is read back from GHL so the event matches the original ad click.
//
// Env: GHL_TOKEN, WHOP_ACCOUNT_ID, WHOP_API_KEY, EVENT_SECRET (any long random string you choose)

const { CF, clean, ghl, sendWhop } = require('./_lib');

const ALLOWED_EVENTS = new Set([
  'lead', 'partial_lead', 'contact', 'schedule', 'submit_application',
  'complete_registration', 'purchase', 'qualified_lead',
]);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const secret = process.env.EVENT_SECRET;
  const given = req.headers['x-rt-key'] || (req.query && req.query.key);
  if (!secret || given !== secret) return res.status(401).json({ ok: false, error: 'bad_key' });
  if (!process.env.GHL_TOKEN) return res.status(500).json({ ok: false, error: 'GHL_TOKEN not set' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = {}; } }
  b = b || {};
  const cd = b.customData || b.custom_data || {};
  const q = req.query || {};

  const event = clean(q.event || cd.event || b.event, 50).toLowerCase();
  if (!ALLOWED_EVENTS.has(event)) return res.status(400).json({ ok: false, error: 'unknown_event', event });

  const contactId = clean(b.contact_id || b.contactId || (b.contact && b.contact.id) || cd.contact_id || q.contact_id, 40);
  if (!contactId) return res.status(400).json({ ok: false, error: 'no_contact_id' });

  let value = parseFloat(String(q.value || cd.value || b.value || '').replace(/[^\d.]/g, ''));
  if (!(value > 0)) value = undefined;
  if (event === 'purchase' && !value) return res.status(200).json({ ok: false, skipped: 'purchase_needs_value' });

  try {
    const { contact } = await ghl('GET', `/contacts/${contactId}`);
    if (!contact) return res.status(404).json({ ok: false, error: 'contact_not_found' });
    const f = {};
    for (const x of contact.customFields || []) f[x.id] = x.value != null ? String(x.value) : '';
    const g = k => clean(f[CF[k]], 1000);

    // Stable IDs so a retried workflow never double-counts. "lead" reuses the website's ID when it exists,
    // so a lead the site already reported isn't counted twice.
    const id = event === 'lead' && g('eventId') ? g('eventId') : `${event}_${contactId}`;

    const r = await sendWhop({
      name: event, id, source: 'system_generated', url: g('landing') || g('page'), value,
      user: {
        anonymous_id: g('wuid'), email: contact.email, phone: contact.phone,
        first_name: contact.firstName, last_name: contact.lastName, external_id: contactId,
      },
      context: {
        ip_address: g('ip'), user_agent: g('ua'), fbclid: g('fbclid'), fbc: g('fbc'), fbp: g('fbp'),
        utm_source: g('utm_source'), utm_medium: g('utm_medium'), utm_campaign: g('utm_campaign'), utm_content: g('utm_content'),
      },
    });
    return res.status(200).json({ ok: !r.error && !(r.status >= 400), event, id, whop: r });
  } catch (e) {
    console.error('event error', e.message, JSON.stringify(e.detail || {}).slice(0, 600));
    return res.status(502).json({ ok: false, error: 'crm_error' });
  }
};
