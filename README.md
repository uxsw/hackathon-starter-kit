# Product Design AI Hackathon starter

## Start here

Open [`index.html`](index.html) for the participant guide. It explains the four projects in plain language, gives teams a set of steps for each, and includes a copyable first prompt for Codex.

Open [`toolbox.html`](toolbox.html) for the skills, tools and tested APIs for each checkpoint, with a default and alternatives for each.

Open [`playground.html`](playground.html) to try a small working example. It is a demo, not a fifth project.

## Codex skills in this project

`AGENTS.md` holds the house rules Codex reads before every task. Five skills live in `.agents/skills/` and load automatically when you open this folder in Codex: `plan-the-build`, `ship-it`, `connect-data`, `fresh-eyes-test` and `team-handoff`. Ask for one by name, for example *“Use the plan-the-build skill.”*

## Run it locally

This is plain HTML, CSS, and JavaScript. It needs no package install or API key. From this folder, start a local server with `python3 -m http.server 8000`, then open `http://localhost:8000`. Some browsers block JavaScript modules if you open the HTML file directly.

## Project files

- `tokens.css` — design tokens (colour, type, spacing, shape), loosely based on the CGI design system
- `base.css` — shared styles for both pages: header, buttons, chips, form fields, status messages, footer
- `index.html` and `home.css` — participant guide and project briefs
- `toolbox.html` and `toolbox.css` — tools, skills and tested APIs for each checkpoint
- `AGENTS.md` and `.agents/skills/` — house rules and skills for Codex
- `playground.html` and `playground.css` — interactive example app
- `src/data.js` — example places and local mock helper
- `src/playground.js` — demo filters and helper interaction
- `src/guide.js` — copy buttons for Codex prompts
- `data/population-sample.csv` — invented practice data for the public-numbers project; the career-growth project uses skills and learning information entered by participants
- `docs/` — API options, team workflow, and facilitator run of show

Prepared sample data is labelled as invented; the career-growth project starts with information entered by participants. Every team aims to connect to real data; see [`docs/api-options.md`](docs/api-options.md) for APIs tested from a GitHub Pages site.
