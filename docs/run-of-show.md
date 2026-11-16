# Facilitator run of show

Two calendar days, roughly one day of actual building. Four teams of four, each with an experienced team lead. This matches the kick-off slides (`slides.html`); if you change one, change the other.

The structure is four checkpoints. Each has one thing a team shows. Between checkpoints, teams have room to follow their own threads. The [Toolbox](../toolbox.html) gives a default tool and alternatives for each checkpoint.

| Checkpoint | What the team shows | Default skill |
| --- | --- | --- |
| 1. Plan | `PLAN.md`, signed off by the team lead | `plan-the-build` |
| 2. Live link | GitHub Pages link with sample data | `ship-it` |
| 3. Connected | Page reading a live API or a team-made dataset | `connect-data` |
| 4. Tested | Findings sorted into must fix / nice to have / ignore | `fresh-eyes-test` |

`team-handoff` runs throughout, for pull requests and merge conflicts.

## Before the event

- Confirm everyone has Codex (app or VS Code extension), a GitHub account and GitHub Desktop.
- Ask each person to clone the starter, open it in Codex and ask: *“Which skills are available in this project?”* They should see the five skills from `.agents/skills/`. If not, check they opened the project folder itself, not a parent folder.
- Ask each team lead to fork the starter into a team repository and invite their team, or do it for them. Turn on GitHub Pages for each fork early, so Checkpoint 2 is not blocked on settings.
- Re-check the API list in the Toolbox a day or two before. Services change.
- If teams will use a Google Sheet as their dataset, publish a test sheet as CSV and fetch it from a GitHub Pages site to confirm it works.
- Confirm which AI tools and accounts are approved, and what data must not be entered into them.
- Have a known-good copy of the starter and a facilitator-owned Pages site ready as a fallback.

## Day 1

**Morning: welcome (15 minutes).** The day, the starter kit, the Toolbox, and Codex. Show the four checkpoints. Demonstrate one skill live: open the starter in Codex and say *“Use the plan-the-build skill”* to show the interview start.

**Morning: plan (75 to 90 minutes).** Teams use `plan-the-build` (or an alternative from the Toolbox) to write `PLAN.md`. Facilitators check that each plan names one interaction, a data source with a fallback, and file ownership for each person. Team lead signs off in five minutes.

**After lunch: build.** First target: a live link with sample data (Checkpoint 2). Then connect it (Checkpoint 3). Facilitators circulate. Common stuck points: Pages paths, CORS-blocked APIs, merge conflicts.

**Last hour: show and tell.** Four minutes per team, live link only: what we showed, a dead end, and what we decided for tomorrow.

## Day 2

**09:00: build and test.** Keep going. Aim to be connected to data before the swap.

**Mid-morning: fresh-eyes swap (about 45 minutes).**
- 5 minutes, whole room: team leads mark their team on a shared board. Is it live? Is it connected? What will be done by 14:00?
- 25 minutes: two people from each team try another team's prototype cold, using that team's `fresh-eyes-test` script.
- 15 minutes, own team: sort feedback into must fix, nice to have, and ignore. Only must-fix items go into the afternoon.

**After lunch to 15:00: build, fix, polish.** Feature freeze at 14:00. From 14:00 to 15:00, tidy up and fill in the team card.

**15:00: playback and close (75 minutes).** Five-minute live demo per team plus three minutes for questions, with the team card on screen for the last minute. Then pull it together on the wall: learned, wary, business benefit. Everyone gets three dots. Read out the top themes; everyone names one thing they will try at work in the next two weeks.

## Team roles

Four roles, one main role each, swapped if it helps: **Git steward** (looks after the shared project and merges pull requests), **data scout** (finds and shapes the data), **prompt lead** (drives Codex), **tester and storyteller** (tries the prototype and prepares the playback). Everyone still gets hands-on.

## Review prompts for facilitators

- Who is this for, and what decision becomes easier?
- What data is shown, where did it come from, and what might be missing?
- Which tool did you choose for this step, and why that one?
- Can a person use the main flow by keyboard and understand errors or uncertainty?
- What did the team inspect or change rather than accepting from the AI?
- What would be needed before this prototype could be trusted in real use?
