# Facilitator run of show

The event spans two calendar days, with roughly one practical build day. Protect the build time: keep introductions and technical setup short, and treat deployment as a stretch goal rather than a condition of success.

## Before the event

- Ask participants to confirm access to Figma, Codex, and the shared GitHub organization or repository.
- Send the starter repo and ask each person to open it, run it locally, make one tiny change on a branch, and undo or commit that change.
- Provide a Figma file with a small set of editable variables and components, plus the four route briefs.
- Prepare a known-good copy of the starter and a local/demo-data fallback. Do not distribute working API credentials.
- Confirm which AI tools and accounts are approved for the event, and what data must not be entered into them.
- Have a facilitator-owned deployment demo ready in case Pages setup takes longer than expected.

## Day one — orient and choose

**Late morning:** welcome, purpose, guardrails, and a short live walkthrough of the starter. Show one example of a small code change and one example of checking keyboard access.

**Early afternoon:** form teams of four or five. Pick a route, identify a person and decision, and sketch the smallest useful experience. Agree on a shared definition of done and a lightweight branch/commit approach.

**Mid-afternoon:** test the idea with another team or a facilitator. Write down assumptions and select the one interaction to build first. End with a clear next action for each team member.

## Day two — build, check, share

**Morning:** build the core end-to-end slice. Use fixtures first; add a live API only when it improves the user outcome. Make small commits and review each other's changes.

**Early afternoon:** run a short accessibility and data-quality pass; improve the experience based on a quick peer test. Deploy to GitHub Pages if ready.

**Mid-afternoon:** demos and reflection. Each team shares the user need, working slice, data/AI role, one risk or limitation, and what they would test next.

## Suggested team roles

Rotate or pair up rather than creating handoffs: product/story and user advocate; interaction/design-system lead; data/API explorer; implementation and integration lead; accessibility, testing, and demo lead. Everyone should contribute to decisions and try the tools.

## Review prompts

- Who is this for, and what decision becomes easier?
- What data is shown, where did it come from, and what might be missing?
- What does the AI contribute that a simpler interaction could not?
- Can a person use the main flow by keyboard and understand errors or uncertainty?
- What did the team inspect or change rather than accepting from the AI?
- What would be needed before this prototype could be trusted in real use?
