---
name: fresh-eyes-test
description: Prepare and run a quick usability test of a hackathon prototype, then sort the findings into must fix, nice to have, and ignore. Use for the Day 2 fresh-eyes swap, when a team says "help us test this", or when deciding what to fix before feature freeze.
---

# Fresh-eyes test

Help a team learn from people trying their prototype, in under an hour. The aim is to find what confuses people, not to prove the idea works. You prepare and sort; people do the testing.

## 1. Write the test script (10 minutes)

Read `PLAN.md` and look at the live page. Then write `TESTING.md` with:

- **One-sentence intro** the facilitator reads out: what this is, that we are testing the prototype not them, and to think aloud.
- **Three to five tasks** written as scenarios, not instructions. Use the person's goal, not the button's label.
  - Good: "You have a free Saturday and want somewhere indoors that costs nothing. Find somewhere."
  - Not: "Click the Indoors filter."
- **What to watch for** under each task: where they hesitate, what they say, whether they finish.
- **Three closing questions**: What was confusing? What did you expect to happen that didn't? What would make you trust this information?
- **A findings table** with columns: Task, What happened, Quote, How many people.

Point out any leading words in the tasks and suggest neutral versions.

## 2. Run it (25 minutes, done by people)

Remind the team: one person facilitates, one notes; do not help or explain unless the tester is completely stuck; write down what people do and say, not what you think they meant.

## 3. Quick checks you can do yourself

While the team tests, offer to check the code for: keyboard access (can everything be reached and used with Tab and Enter?), visible focus, text contrast against the tokens, form labels, error messages that say what to do next, and whether sample data is labelled. List problems; do not fix them yet.

## 4. Sort the findings (15 minutes)

When the team pastes in their notes, group similar findings and sort them into three lists in `TESTING.md`:

- **Must fix:** stops someone completing the main task, misleads them about the data, or is an accessibility barrier. Keep this list short, ideally three items or fewer.
- **Nice to have:** real, but the main task still works.
- **Ignore for now:** one person's preference, or out of scope in `PLAN.md`.

Explain the reasoning for each must-fix item in one line. Only must-fix items go into the afternoon's work before the 14:00 feature freeze. Suggest who in the team could take each one, based on the file ownership in `PLAN.md`.
