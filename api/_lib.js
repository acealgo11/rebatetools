// Shared helpers for the RebateTools API functions (files starting with "_" are not exposed as routes on Vercel).

const API = 'https://services.leadconnectorhq.com';
const VERSION = '2021-07-28';
const LOCATION_ID = process.env.GHL_LOCATION_ID || '2zRWujfV6pZbfyQdRvfr'; // Core Capital

const PIPELINE_ID = 'YmfAjD6vPfP60m3QoIKU'; // RebateTools – Sales
const STAGE = {
  partial: '958b28a1-995c-418a-ac49-b5b46713eb93', // Partial Lead
  newLead: 'e36ec003-928b-4418-bd04-411e0fef89db', // New Lead
};

// GHL contact custom fields ("RT …")
const CF = {
  platforms: 'msIcTl4HQT4GNB5X7TRl',
  now: 'VxWXiiKIHlAfEXtbQ4x9',
  goal: 'tk5pOHOAgMfXcKymuwUB',
  step: 'D1ZjIw0yk9fX3juhS3ou',
  utm_source: '4oaeE1dDfl2C9egBzFrp',
  utm_medium: 'qA0xQHTytmIxdqZP2Zt6',
  utm_campaign: 'WX9DVV7zBAX0J2KZgP4u',
  utm_content: 'H60GVJxkNUzn5LWG1mGK',
  fbclid: 'PiYes2mtTQZsyvuyVpB3',
  fbc: '6hCnmpQ87ls3NbdGv7lR',
  fbp: 'QE5SzvKtGlTtj3Pw1Mbx',
  eventId: 'jSf7bUaGpSpc2YqacmdN',
  ua: 'a0HR0GsQHBf2i3nBaVaT',
  page: 'KYju9s4Gp94DpWcTPWDe',
  completedAt: 'zoHJmc4Sh9v41wbnwj9B',
  landing: 'FCLQ8kbuxSua6o4WhXjz',
  wuid: '0eLDj3qFkswgDaZCj6D3',
  ip: 'qkJVwjaqCeE0CS7jSKtE',
  wacid: 'UnUHQrLHsQ1uWpJz5HVv',
  waid: 'lzA0N46QZBjSLdtfWEjF',
};

const TAGS = { base: 'rebatetools lead', partial: 'rt partial', complete: 'rt complete' };

const clean = (v, max = 200) => (v == null ? '' : String(v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max));

async function ghl(method, path, body, version = VERSION) {
  const r = await fetch(API + path, {
    method,
    headers: {
      Authorization: 'Bearer ' + process.env.GHL_TOKEN,
      Version: version,
      Accept: 'application/json',
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await r.text();
  let data; try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  if (!r.ok) { const e = new Error(`GHL ${method} ${path} → ${r.status}`); e.detail = data; throw e; }
  return data;
}

// Pull Whop ad IDs out of a landing URL if they weren't captured separately
const urlParam = (url, k) => { try { return new URL(url).searchParams.get(k) || ''; } catch { return ''; } };

// Whop Events API (server-side conversions for Whop Ads). No-op until WHOP_API_KEY + WHOP_ACCOUNT_ID are set.
// e = { name, id, source, url, value, currency, user:{...}, context:{...} }
async function sendWhop(e) {
  const key = process.env.WHOP_API_KEY, account = process.env.WHOP_ACCOUNT_ID;
  if (!key || !account) return { skipped: 'whop_not_configured' };
  const strip = o => Object.fromEntries(Object.entries(o || {}).filter(([, v]) => v !== '' && v != null));
  const body = strip({
    account_id: account,
    event_name: e.name,
    event_id: e.id,
    event_time: new Date().toISOString(),
    action_source: e.source || 'website',
    url: e.url,
    value: e.value,
    currency: e.value ? (e.currency || 'gbp') : undefined,
  });
  const user = strip(e.user), context = strip(e.context);
  if (Object.keys(user).length) body.user = user;
  if (Object.keys(context).length) body.context = context;
  try {
    const r = await fetch('https://api.whop.com/api/v1/events', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const t = await r.text();
    if (!r.ok) console.error('whop event failed', r.status, t.slice(0, 400));
    return { status: r.status };
  } catch (err) {
    console.error('whop event error', err.message);
    return { error: err.message };
  }
}

module.exports = { API, VERSION, LOCATION_ID, PIPELINE_ID, STAGE, CF, TAGS, clean, ghl, urlParam, sendWhop };
