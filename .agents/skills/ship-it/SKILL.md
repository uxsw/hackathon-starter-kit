---
name: ship-it
description: Get a hackathon prototype live on GitHub Pages and check the published link. Use when a team wants to publish, deploy, "get a live link", or when the live site is broken or out of date.
---

# Ship it

Help the team publish the prototype on GitHub Pages and confirm the live link works. Codex cannot click through GitHub settings for them, so give exact steps and check what you can from the code.

## Before publishing

1. Make sure `index.html` is at the root of the repository, or agree which page is the entry point.
2. Check that every link, stylesheet, script and data file uses a relative path (`./src/app.js`, not `/src/app.js` or a path on someone's computer). GitHub Pages serves the site from `/repository-name/`, so paths starting with `/` break.
3. Search the repository for anything that looks like a secret: `key`, `token`, `secret`, `password`, long random strings. Stop and tell the team if you find one; it must be removed and the key changed.
4. Check that any sample or personal data is safe to be public.

## Publish

Explain these steps to the person:

1. Merge the work into `main` through a pull request.
2. On GitHub, open the team repository, then **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
4. Wait a minute or two, then refresh. The live link appears at the top of the Pages settings.

If the GitHub CLI (`gh`) is installed and signed in, you may check the Pages status with `gh api repos/OWNER/REPO/pages`, but ask before running commands that change settings.

## After publishing

Open the live link and check that the page loads without console errors, the data loads (APIs that work locally can fail on the live site if they block other websites), and it works at phone width. Add the live link to the top of `PLAN.md` and the README so the team and facilitators can find it.
