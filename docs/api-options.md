# Data and API options

Every team aims to connect its prototype to real data (tier 2 in the slides). That can be a public API that updates, or a dataset the team designs. Start with sample data so you can get a live link up, then connect it. The `connect-data` skill in `.agents/skills/` walks through this.

## Public APIs tested from a GitHub Pages site

Tested on 14 November 2026 with a `fetch()` from `https://uxsw.github.io`, the same kind of place a team's prototype runs. "Works" means the browser could read the response without a key. Re-check shortly before the event.

| API | Example request | Fits | Status |
| --- | --- | --- | --- |
| ESCO skills and occupations | `https://ec.europa.eu/esco/api/search?text=user%20research&type=skill&language=en&limit=5` | CGI growth story | Works |
| GitHub REST API | `https://api.github.com/users/USERNAME/repos` | CGI growth story | Works; 60 requests an hour without signing in |
| Open Library | `https://openlibrary.org/search.json?q=service%20design&limit=5` | CGI growth story | Works |
| Open-Meteo (forecast, air quality, geocoding) | `https://api.open-meteo.com/v1/forecast?latitude=50.72&longitude=-3.53&current=temperature_2m` | Day out | Works; non-commercial terms |
| Postcodes.io | `https://api.postcodes.io/postcodes/EX44QJ` | Day out | Works |
| Food Standards Agency ratings | `https://api.ratings.food.gov.uk/Establishments?name=cafe&address=exeter&pageSize=5` | Day out | Works; send header `x-api-version: 2` |
| Environment Agency flood monitoring | `https://environment.data.gov.uk/flood-monitoring/id/floods` | Day out, public data | Works |
| TfL Unified API | `https://api.tfl.gov.uk/Line/Mode/tube/Status` | Day out | Works without a key at low volume |
| Sunrise Sunset | `https://api.sunrise-sunset.org/json?lat=50.72&lng=-3.53&formatted=0` | Day out | Works |
| Nominatim (OpenStreetMap) | `https://nominatim.openstreetmap.org/search?q=Exeter&format=json&limit=1` | Day out | Works; at most one request a second |
| World Bank Indicators | `https://api.worldbank.org/v2/country/GB;FR/indicator/SP.POP.TOTL?format=json&date=2015:2023` | Public data | Works |
| ONS | `https://api.beta.ons.gov.uk/v1/datasets` | Public data | Works; harder to navigate |
| Carbon Intensity (GB) | `https://api.carbonintensity.org.uk/intensity` | Public data | Works |
| Police UK | `https://data.police.uk/api/crimes-street/all-crime?lat=50.72&lng=-3.53` | Public data | Works; large responses |
| GOV.UK bank holidays | `https://www.gov.uk/bank-holidays.json` | Any | Works |
| UK Parliament Members | `https://members-api.parliament.uk/api/Members/Search?Name=smith&take=5` | Public data | Works |
| Wikipedia summaries | `https://en.wikipedia.org/api/rest_v1/page/summary/Exeter` | Any | Works |
| GBIF, iNaturalist | `https://api.gbif.org/v1/occurrence/search?country=GB&limit=5` | Day out, public data | Works |
| data.gov.uk catalogue (CKAN) | `https://data.gov.uk/api/action/package_search?q=skills` | None | Blocked by CORS |
| REST Countries | `https://restcountries.com/v3.1/alpha/gb` | None | Blocked by CORS |
| Art Institute of Chicago | `https://api.artic.edu/api/v1/artworks` | None | Blocked by CORS |
| Overpass (OpenStreetMap) | `https://overpass-api.de/api/interpreter` | None | Unreliable: busy and timing out |

"Blocked by CORS" means the service does not allow browser requests from other websites. It works from a server, but not from GitHub Pages.

## Team-made datasets

| Option | Good for | Watch out for |
| --- | --- | --- |
| JSON file in `data/` | Quickest; changes go through pull requests | Only people with repository access can edit |
| Google Sheet published as CSV | Whole team edits in a spreadsheet; page reads the latest version | Public to anyone with the link; not yet tested from Pages, so check early |
| Browser storage (`localStorage`) | Saving new entries on one computer | Stays in that browser only; say so on screen |
| Supabase or another hosted database | Learning how a real database works | Account, setup and access rules take time |

## Safe API pattern

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

## Career-growth project sources (research, not APIs)

This project does not need a live API and comes without a pre-filled career dataset. Participants build their own profile by entering selected skills, confidence ratings, work evidence, learning opportunities, and goals. AI can help structure or summarise information they choose to provide; it should not invent evidence or ratings. For broader discussion, teams can review the [World Economic Forum Future of Jobs 2025 skills outlook](https://www.weforum.org/publications/the-future-of-jobs-report-2025/3-skills-outlook) or the [UK Digital and Data Profession Capability Framework](https://understand-digital-data-roles-skills.service.gov.uk/skills/). These are general references, not CGI policy or a reliable list of CGI client demands. Teams can also compare a few public job descriptions manually. Do not scrape job boards or include confidential client bids or project details. Follow CGI guidance for the AI tools used, especially when entering personal or work information.
