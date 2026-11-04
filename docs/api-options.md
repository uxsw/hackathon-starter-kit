# API options for the routes

Use the prepared fixture first so the team can design and build without waiting on a service. Treat live API work as a learning choice, not a requirement. Verify current terms and endpoints shortly before the event; public APIs can change.

| Source | Good for | Setup considerations | Starter recommendation |
| --- | --- | --- | --- |
| [Open-Meteo](https://open-meteo.com/en/docs) | City route: geocoding and weather forecast data | Free access is for non-commercial use and subject to published request limits and attribution terms. Check current terms. | Best live API candidate; keep calls low and make location choice explicit. |
| [Open Library](https://openlibrary.org/developers/api) | Reading route: search books, authors, or subjects | Their guidance asks users to cache responses, identify frequent-use apps, and avoid bulk requests. | Use for user-triggered search; keep results small and cached. |
| [World Bank Indicators API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) | Public numbers route: population and many other country-level indicators | JSON output is available and API keys are not required. Check the indicator's units, source note, and data coverage. | A good optional live-data stretch; use one indicator and a small set of countries. |
| [TfL Unified API](https://api.tfl.gov.uk/) | London transport and places | Account registration and an app key are recommended; the portal describes a 500-request plan. Browser use exposes any key. | Optional advanced route; use a fake key in the workshop exercise or facilitator proxy for a real demo. |
| Prepared CSV/JSON | Any route, especially data explainer and design-system explorer | No network, account, or secret required. | Always available; include source, date, units, and limitations with the data. |

## Safe API pattern for a one-day prototype

1. Choose a user question that needs the data.
2. Find one endpoint and inspect one example response.
3. Keep only the fields the interface needs; explain any transformation.
4. Add loading, empty, and error states.
5. Cache results and avoid repeated polling.
6. Show the source and a timestamp where useful.
7. Keep credentials out of client code. If a key is required, use mock data for the public demo or a facilitator-managed proxy.

## AI assistant options

- **Default:** local mock assistant, like the one in the starter, for prototyping the conversation and evidence display.
- **Data-grounded prototype:** prewrite a few responses or use deterministic filters and summaries so teams can test the interface without a model key.
- **Optional live model:** only through an approved facilitator-managed service that keeps credentials server-side. Do not put personal, confidential, or sensitive information into prompts.

For the credential-awareness exercise, use a clearly fake value such as `demo_key_not_real_123`. Ask participants to locate it in the browser's network/source tools, then remove it and discuss what a server-side proxy changes. Never use a real credential to teach this lesson.
