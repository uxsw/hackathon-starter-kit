# Working together with AI

Four people, each with their own Codex session, changing one small project. Most of the difficulty is the same one engineering teams have always had, merging people's work, only it happens faster because each assistant can change a lot of code very quickly.

## The rules that make it work

1. **The plan is the contract.** `PLAN.md` says who owns which files. Codex reads it (see `AGENTS.md`) and stays inside your slice.
2. **Split by file, not by feature step.** For example: one person on `src/api.js` (data), one on `src/ui.js` (page behaviour), one on the stylesheet and markup, one on `PLAN.md`, `TESTING.md` and the demo. Shared files such as `index.html` and `tokens.css` need a quick word before editing.
3. **Pull before you prompt.** At the start of each working block: GitHub Desktop → **Fetch origin** → **Pull origin**. Codex then works from the latest version.
4. **Small pull requests, often.** One each every hour or two. Small changes merge cleanly; big ones conflict.
5. **One integrator.** The Git steward merges pull requests and keeps `main` working (and therefore the live site).
6. **Don't let the AI tidy up.** Ask Codex for the change you need, not a refactor. Reformatting is the most common cause of conflicts.

## A rhythm for each change

1. Agree what you are changing and which files it touches.
2. Ask Codex to explain the current code first, then propose a plan. Say which files it may touch.
3. Let it make one bounded change. Check it in a browser.
4. Use the `team-handoff` skill to check scope, update from `main`, and write the pull request description.
5. A teammate reviews (Codex can explain the change to them), and the integrator merges.

## When things go wrong

- **Merge conflict:** ask Codex to use the `team-handoff` skill. It shows both versions in plain language and asks which to keep. Never pick a side without looking.
- **Going in circles on a bug:** stop prompting. Describe what you expected, what happens, and what you have tried. Ask Codex to find the cause before it changes anything. (The Superpowers `systematic-debugging` skill does this well.)
- **`main` is broken:** the integrator reverts the last merged pull request on GitHub, then the team works out why.

## Use AI economically

- Start with the goal and the relevant files; don't paste the whole repository.
- Ask for an explanation or a small plan before a large change.
- Start a fresh conversation when switching to an unrelated task.
- Ask the model to summarise decisions and changed files before handing over to a teammate.
- Verify generated code and data. AI output is a proposal, not evidence.
