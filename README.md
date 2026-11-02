# RebateTools — landing page

Static page + one Vercel serverless function.

```
index.html          landing page (HTML/CSS/JS inline)
privacy/index.html  Privacy Policy   → /privacy/
terms/index.html    Terms of Service → /terms/
api/lead.js         form → GoHighLevel (contact, tags, opportunity) + Whop / Meta conversions
api/event.js        GHL workflow webhook → Whop conversion for later stages (schedule, purchase…)
api/_lib.js         shared helpers + GHL field IDs
assets/             logos, favicon
```

## Vercel environment variables

| Name | Required | What |
|---|---|---|
| `GHL_TOKEN` | yes | GHL Private Integration Token (Core Capital sub-account). Scopes: contacts.readonly, contacts.write, opportunities.readonly, opportunities.write |
| `WHOP_ACCOUNT_ID` | for ads | Whop account ID (`biz_…`). Also paste into `window.WHOP_ACCOUNT_ID` in index.html |
| `WHOP_API_KEY` | for ads | Whop Account API key with `event:create` permission (server-side conversions) |
| `EVENT_SECRET` | for CRM events | Any long random string; used as `key=` on the GHL webhook URL for `/api/event` |
| `META_PIXEL_ID` | later | Meta pixel/dataset ID (also paste into `window.META_PIXEL_ID` in index.html) |
| `META_CAPI_TOKEN` | later | Meta Conversions API token |

## Lead flow

1. Valid UK mobile typed → contact upserted by phone, tags `rebatetools lead` + `rt partial`, opportunity in **RebateTools – Sales → Partial Lead**.
2. Each Continue → answers saved to the `RT …` custom fields.
3. Final answer → tag `rt complete`, `rt partial` removed, opportunity → **New Lead**, Meta `Lead` event.
4. Later stages: a GHL workflow calls `POST /api/event?event=schedule&key=EVENT_SECRET` (Webhook action). The function reads the contact's stored ad data and sends the event to Whop.

## Whop events

| Event | Fired by | When |
|---|---|---|
| `page` | Whop pixel | every page view |
| `partial_lead` | pixel + server (same event_id) | valid phone entered |
| `lead` | pixel + server (same event_id) | form completed (optimise on this) |
| `contact` | pixel | WhatsApp button clicked |
| `schedule` | GHL → /api/event | opportunity → Call Booked |
| `purchase` | GHL → /api/event (needs value) | opportunity → Won |
