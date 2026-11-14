---
name: team-handoff
description: Get a branch ready for a pull request, write the PR description, or review a teammate's pull request in plain language. Use when someone says "I'm ready to share my changes", "open a PR", "review this PR", or when a merge conflict appears.
---

# Team handoff

Four people, each working with their own AI assistant, are changing the same small project. This skill keeps their changes small, explained and easy to merge.

## Getting your branch ready

1. **Check scope.** Read `PLAN.md` and compare the changed files with the slice this person owns. Point out changes outside it, including accidental reformatting, and offer to undo them.
2. **Summarise the change** in plain language: what a person using the page will notice, which files changed, anything a teammate needs to know.
3. **Bring in the latest main first.** Explain the GitHub Desktop steps: switch to `main`, **Fetch origin**, **Pull origin**, switch back to your branch, then **Branch → Update from main** (or **Merge into current branch** and choose `main`). If there is a conflict, see below.
4. **Check it still works** in a browser after updating.
5. **Write the pull request description** using this template, and offer to save it to the clipboard:

```markdown
## What changed
[One or two sentences a non-coder understands.]

## Why
[Link to the line in PLAN.md or TESTING.md.]

## How to check it
1. ...

## Files changed
- ...

## Anything to watch
[Shared files touched, known gaps.]
```

## Reviewing a teammate's pull request

Read the changes and explain them in plain language: what will look or behave differently, which files changed, and anything that worries you (secrets, invented data, broken paths, missing error states, changes outside their slice). End with a clear suggestion: merge, merge after a small fix, or talk first.

## Merge conflicts

A conflict means two people changed the same lines. Do not pick a side silently. Show both versions in plain language, say whose change each one is, and ask which to keep or how to combine them. After resolving, check the page in a browser before committing.

## Habits that prevent conflicts

- Pull from `main` at the start of every working block.
- Keep pull requests small; merge little and often (aim for one per person every hour or two).
- One integrator merges pull requests; everyone else asks them.
- Agree before anyone edits a shared file such as `index.html` or `tokens.css`.
