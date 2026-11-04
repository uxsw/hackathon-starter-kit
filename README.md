# Product Design AI Hackathon starter

## Start here

Open [`index.html`](index.html) for the participant guide. It explains the four projects in plain language, gives teams a set of steps for each, and includes a copyable first prompt for Codex.

Open [`playground.html`](playground.html) to try a small working example. It is a demo, not a fifth project.

## Run it locally

This is plain HTML, CSS, and JavaScript. It needs no package install or API key. From this folder, start a local server with `python3 -m http.server 8000`, then open `http://localhost:8000`. Some browsers block JavaScript modules if you open the HTML file directly.

## Project files

- `index.html` and `guide.css` — participant guide and project briefs
- `playground.html` and `playground.css` — interactive example app
- `src/data.js` — example places and local mock helper
- `src/playground.js` — demo filters and helper interaction
- `src/guide.js` — copy buttons for Codex prompts
- `data/books.json` and `data/population-sample.csv` — invented practice data for two project routes
- `docs/` — API options, team workflow, and facilitator run of show

The project data files are clearly labelled as invented examples. The live API connections are optional learning stretches; see [`docs/api-options.md`](docs/api-options.md) before using them.
