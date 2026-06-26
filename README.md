# SĀRA·SUDDHI / Sotā Public Landing Draft

Static public landing/demo draft for a cautious Jetha-facing preview.

This directory is intentionally separate from the internal protected reviewer tool. It contains a public landing page and a frictionless public review-preview route using a small curated set of exploratory subtitle candidates.

It includes:

- `index.html`
- `styles.css`
- `app.js`
- `review/index.html`
- `review/internal-jetha-protected-preview-v1/`
- `README.md`

The `/review/?demo=jetha` route is exploratory review support only. Candidate subtitles are not reviewed, not approved, not published, not canonical, and not sealed. Local candidate downloads, if used, remain local and are not delivered.

It does not include raw ASR JSON, word/segment timestamp JSON, audio/video files, logs, review submissions, private Human Insight payloads, credentials, local machine paths, MASTERLIST, corpus exports, backend code, upload flow, or persistent storage.

## Local preview

```bash
python3 -m http.server 8787 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8787/
http://127.0.0.1:8787/review/?demo=jetha
```

## Status

Draft only. Do not push, deploy, publish, or send without explicit human approval.
