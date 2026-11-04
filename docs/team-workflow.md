# Working together with AI

## A lightweight rhythm

1. Agree on the user, the job, and the smallest useful outcome.
2. Ask Codex to inspect the relevant files and explain the current behavior.
3. Make one bounded change and name the files it may touch.
4. Review the diff together; run and inspect the app in a browser.
5. Commit when the slice works, then pick the next slice.

Keep a shared `DECISIONS.md` or a short team note with the chosen user, data source, design decisions, open questions, and who is working on what. Prefer one person integrating changes at a time if several people share one branch. Use separate branches for independent experiments and agree who will resolve conflicts.

## Use AI economically

- Start with the goal and relevant context; don't paste the whole repository by default.
- Ask for explanation or a small plan before a large change.
- Give one task at a time and state what should stay working.
- Reuse the conversation while the context is still relevant; start fresh when switching to an unrelated task.
- Ask the model to summarize decisions and changed files before handing work to a teammate.
- Verify generated code and data. AI output is a proposal, not evidence.

## Shared responsibility

The person who asked for a change should explain it to the team. Pair on unfamiliar areas, review each other's work, and keep the user and accessibility goals visible during implementation. Roles are ways to ensure coverage, not silos.
