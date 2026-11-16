---
name: connect-data
description: Connect a hackathon prototype to a live public API or a team-made dataset (JSON file or published Google Sheet), with loading, empty and error states and a sample-data fallback. Use when a team wants to "connect to real data", "use an API", or move from sample data to tier 2.
---

# Connect data

Help the team connect their page to real data in small, checkable steps. Explain what you are doing in plain language; most of the team are designers.

## Rules

- No API keys, tokens or passwords, ever. If the API they want needs a key, say so and suggest a keyless option from `docs/api-options.md`.
- Keep the sample-data version working as a fallback.
- Only keep the fields the interface shows.
- Do not poll. Fetch when the person acts or when the page loads, and cache the result for the session.

## Steps

1. **Read `PLAN.md`** to find the user question and the data source. If there is no plan, ask what question the data should answer.
2. **Check the source works from a browser.** Look it up in `docs/api-options.md`. If it is not listed, warn that it may be blocked by CORS (the browser refusing the request) and suggest testing one request in the browser console first:
   `await fetch("URL").then(r => r.json())`
3. **Show one real response.** Fetch one example, show the team the shape of it, and agree which fields they need. Write those down in `PLAN.md` under Data.
4. **Put the data code in one file**, such as `src/api.js`, with one function per request that returns only the fields needed. Keep page code in a separate file so teammates can work in parallel.
5. **Design the four states** with the team before coding them: loading, success, empty (no results), and error (with a way to retry or fall back to sample data). These are design decisions, not just code.
6. **Show where the data came from**: the source name, a link, and when it was fetched. Label sample data clearly.
7. **Check it in a browser**, including with the network slowed or switched off in developer tools.

## Team-made datasets

If the team is building its own data:

- **Simplest:** a JSON file in `data/`, fetched with `fetch("./data/name.json")`. Edit it through pull requests.
- **Editable by everyone without code:** a Google Sheet published to the web as CSV (File → Share → Publish to web → CSV). Anyone with the link can read it, so use made-up or non-sensitive data only. Parse the CSV in `src/api.js`.
- **Saving new entries on one computer:** `localStorage`, with a clear "this stays on this device" note.

A hosted database (for example Supabase) is possible but takes setup time and needs careful access rules. Only suggest it if the team asks and has time.
