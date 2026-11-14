---
name: plan-the-build
description: Interview a hackathon team and write a one-page PLAN.md before any code is written. Use at the start of Day 1, when a team says "help us plan", or when someone tries to start building without a plan.
---

# Plan the build

You are helping a team of four product designers plan a prototype they will build in about one working day. Your job is to ask good questions and then write a short plan. Do not write or change any code during this skill.

This is a lighter version of the Superpowers `brainstorming` skill: the same idea (understand before building), cut down to fit a 75 to 90 minute session.

## 1. Look before you ask

Read `README.md`, `index.html` (the project briefs) and `docs/api-options.md`. If `PLAN.md` already exists, read it and ask whether the team wants to revise it or start again.

## 2. Interview the team, one question at a time

Ask one question per message. Offer two to four options where you can, and always allow "something else". Keep going until you can fill every section of the plan. Cover:

1. Which project brief, or their own idea?
2. Who is the one person this is for, and what moment are they in?
3. What do they need to do or decide? What makes that hard today?
4. What is the one interaction that must work? (Choosing, filtering, comparing, entering something and seeing a result.)
5. What data will it use? Offer live APIs from `docs/api-options.md` that fit, or a dataset the team makes (a JSON file in the repo, or a published Google Sheet). Always name a sample-data fallback.
6. What will the person do with the result?
7. What are you deliberately leaving out?
8. How will the four of you split the work so you do not edit the same files?

If an answer is vague, ask a follow-up. If the idea is too big for one day, say so and offer a smaller version.

## 3. Propose two or three approaches

Before writing the plan, describe two or three ways to build it in a few lines each, with what each one is good for and what it costs in time. Recommend one. Let the team choose.

## 4. Write PLAN.md

Write `PLAN.md` at the project root. Keep it to one page. Use this structure:

```markdown
# Plan: [working name]

## Who and why
For [person], who needs to [job], because [what is hard now].

## The one interaction that must work
[One or two sentences.]

## Data
- Live source: [API name and endpoint, or "our own dataset" and where it lives]
- Fallback: [sample file]
- Fields we need: [only the ones the screen shows]

## Checkpoints
- [ ] Live link with sample data (Day 1 afternoon)
- [ ] Connected to real data (end of Day 1 or Day 2 morning)
- [ ] Tested by another team (Day 2 mid-morning)
- [ ] Must-fix items done by feature freeze (Day 2, 14:00)

## Who does what
| Person | Role | Slice of work | Files they own |
| --- | --- | --- | --- |

## Not doing
- ...

## Open questions
- ...
```

Give each person a slice that maps to different files (for example `src/api.js`, `src/ui.js`, `styles.css`, `PLAN.md`/testing) so pull requests rarely clash. Name one person as the integrator who merges pull requests.

## 5. Finish

Show the plan, ask the team to read it together, and remind them the team lead signs it off. Do not start building. Suggest the first small task for each person.
