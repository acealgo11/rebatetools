# RebateTools — landing page

Static page + one Vercel serverless function.

```
index.html          landing page (HTML/CSS/JS inline)
privacy/index.html  Privacy Policy   → /privacy/
terms/index.html    Terms of Service → /terms/
api/lead.js         form → GoHighLevel (contact, tags, opportunity) + optional Meta CAPI
assets/             logos, favicon
```

## Vercel environment variables

| Name | Required | What |
|---|---|---|
| `GHL_TOKEN` | yes | GHL Private Integration Token (Core Capital sub-account). Scopes: contacts.readonly, contacts.write, opportunities.readonly, opportunities.write |
| `META_PIXEL_ID` | later | Meta pixel/dataset ID (also paste into `window.META_PIXEL_ID` in index.html) |
| `META_CAPI_TOKEN` | later | Meta Conversions API token |

## Lead flow

1. Valid UK mobile typed → contact upserted by phone, tags `rebatetools lead` + `rt partial`, opportunity in **RebateTools – Sales → Partial Lead**.
2. Each Continue → answers saved to the `RT …` custom fields.
3. Final answer → tag `rt complete`, `rt partial` removed, opportunity → **New Lead**, Meta `Lead` event.
