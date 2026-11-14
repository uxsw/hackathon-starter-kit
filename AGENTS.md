# Notes for Codex

Codex reads this file before every task in this repository. Keep it short. Teams can add their own notes at the bottom.

## What this project is

A two-day hackathon starter for product designers. Teams of four build a small working prototype that reads real data, publish it on GitHub Pages, and test it with another team. Most people here are designers, not engineers: explain changes in plain language and keep the stack simple.

## How to work

- Plain HTML, CSS and JavaScript only. No frameworks, build tools or package installs unless the team asks for one and understands why.
- Read `PLAN.md` before you change anything, if it exists. Stay inside the slice the person you are helping owns. If a change would touch another person's files, say so and stop.
- Before a large change, explain which files you will touch and why, and wait for a yes.
- Make one small change at a time. Do not reformat, rename or reorder code you were not asked to change; it causes merge conflicts for teammates.
- Use the existing tokens in `tokens.css` and styles in `base.css` before adding new ones.
- Check the result in a browser: keyboard focus, a narrow phone width, and loading, empty and error states for anything that fetches data.

## Data and safety

- Never put API keys, passwords or tokens in this repository. Everything here is public once it is published. Only use APIs that work without a key (see `docs/api-options.md`).
- Do not invent data, skills, achievements or evidence. If information is missing, ask.
- Label sample or invented data as sample data. Show the source and when live data was fetched.
- Do not use confidential client, bid or personal review information.

## Skills in this repository

Skills live in `.agents/skills/`. Use them when the task matches, or when someone asks for one by name:

- `plan-the-build`: interview the team and write a one-page `PLAN.md`
- `connect-data`: connect the page to a live API or a team-made dataset
- `ship-it`: publish to GitHub Pages and check the live link
- `fresh-eyes-test`: write a quick usability test script and sort the findings
- `team-handoff`: get a branch ready for a pull request, or review a teammate's

## Team notes

Add anything your team wants Codex to know below this line.
