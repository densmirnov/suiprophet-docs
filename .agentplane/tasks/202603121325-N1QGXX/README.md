---
id: "202603121325-N1QGXX"
title: "Unpublish questions page and refine dark theme"
result_summary: "The English docs site no longer publishes the questions page, the dark theme has improved contrast, the latest GitHub Pages deployment succeeded, and the custom domain now serves over HTTPS."
status: "DONE"
priority: "med"
owner: "DOCS"
depends_on: []
tags:
  - "docs"
verify: []
plan_approval:
  state: "approved"
  updated_at: "2026-03-12T13:26:50.148Z"
  updated_by: "ORCHESTRATOR"
  note: "User requested unpublishing the public questions page and adjusting the dark theme for the published English docs site."
verification:
  state: "ok"
  updated_at: "2026-03-12T13:30:56.355Z"
  updated_by: "DOCS"
  note: "Verified that the questions page is no longer published, the dark-theme palette was updated, the latest Pages deploy succeeded, and docs.suiprophet.app is now served over HTTPS."
commit:
  hash: "43829a0cb633ad639c2610404fa081242862d985"
  message: "✨ docs: unpublish questions page and refine dark theme"
comments:
  -
    author: "DOCS"
    body: "Start: remove the public questions page from the English docs site, adjust the dark theme palette, redeploy GitHub Pages, and verify the published result."
  -
    author: "DOCS"
    body: "Verified: unpublished the public questions page from the English docs site, refined the dark theme palette, confirmed a successful GitHub Pages redeploy, and verified that docs.suiprophet.app is live over HTTPS."
events:
  -
    type: "status"
    at: "2026-03-12T13:27:02.074Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: remove the public questions page from the English docs site, adjust the dark theme palette, redeploy GitHub Pages, and verify the published result."
  -
    type: "verify"
    at: "2026-03-12T13:30:56.355Z"
    author: "DOCS"
    state: "ok"
    note: "Verified that the questions page is no longer published, the dark-theme palette was updated, the latest Pages deploy succeeded, and docs.suiprophet.app is now served over HTTPS."
  -
    type: "status"
    at: "2026-03-12T13:31:05.221Z"
    author: "DOCS"
    from: "DOING"
    to: "DONE"
    note: "Verified: unpublished the public questions page from the English docs site, refined the dark theme palette, confirmed a successful GitHub Pages redeploy, and verified that docs.suiprophet.app is live over HTTPS."
doc_version: 3
doc_updated_at: "2026-03-12T13:31:05.221Z"
doc_updated_by: "DOCS"
description: "Remove the public questions page from the English docs site, refine dark theme colors, redeploy GitHub Pages, and verify the published result."
id_source: "generated"
---
## Summary

Unpublish questions page and refine dark theme

Remove the public questions page from the English docs site, refine dark theme colors, redeploy GitHub Pages, and verify the published result.

## Scope

- In scope: Remove the public questions page from the English docs site, refine dark theme colors, redeploy GitHub Pages, and verify the published result.
- Out of scope: unrelated refactors not required for "Unpublish questions page and refine dark theme".

## Plan

1. Remove the public `QUESTIONS` page from the English VitePress site by deleting the published source file and clearing every navigation and content link to it.
2. Refine the dark theme palette in the VitePress custom stylesheet to improve contrast and readability without changing the light theme structure.
3. Rebuild, redeploy, and verify that the questions page is no longer published and the updated dark theme is live on GitHub Pages.

## Verify Steps

1. Run `npm run docs:build`. Expected: the site builds without errors and no `QUESTIONS.html` file is emitted.
2. Run `git diff --check`, `node .agentplane/policy/check-routing.mjs`, and `agentplane doctor`. Expected: no whitespace issues, routing passes, and doctor returns OK aside from known archive warnings.
3. Verify the published site. Expected: navigation no longer exposes the questions page and the latest GitHub Pages deploy completes successfully.

## Verification

<!-- BEGIN VERIFICATION RESULTS -->
- Command: `rg -n "QUESTIONS|Open Questions|roadmap" docs/en -S`
  Result: pass
  Evidence: no remaining published-source references to the removed questions page.
  Scope: `docs/en`
  Links: `docs/en/.vitepress/config.mts`, `docs/en/index.md`, `docs/en/README.md`
- Command: `npm run docs:build`
  Result: pass
  Evidence: VitePress build completed successfully and the final build artifact no longer contains `QUESTIONS.html`.
  Scope: `docs/en`
  Links: `docs/en/.vitepress/dist`
- Command: `git diff --check`
  Result: pass
  Evidence: no whitespace or merge-marker issues after unpublishing the page and updating the theme.
  Scope: tracked task changes
  Links: `docs/en/.vitepress/theme/custom.css`
- Command: `node .agentplane/policy/check-routing.mjs`
  Result: pass
  Evidence: `policy routing OK`
  Scope: repository policy graph
  Links: `AGENTS.md`, `.agentplane/policy/*.md`
- Command: `agentplane doctor`
  Result: pass
  Evidence: `doctor (OK)` with the pre-existing warning about archived DONE-task READMEs missing from the git index.
  Scope: repository workflow state
  Links: `.agentplane/tasks/202603121325-N1QGXX/README.md`
- Command: `gh run list -R densmirnov/suiprophet-docs --limit 3`
  Result: pass
  Evidence: deploy run `23004336198` completed with `success`.
  Scope: remote GitHub Pages deployment
  Links: `https://github.com/densmirnov/suiprophet-docs/actions/runs/23004336198`
- Command: `curl -I -L --max-time 20 https://densmirnov.github.io/suiprophet-docs/QUESTIONS`
  Result: pass
  Evidence: the old public URL now resolves to `404`.
  Scope: published site behavior
  Links: `https://densmirnov.github.io/suiprophet-docs/QUESTIONS`
- Command: `gh api repos/densmirnov/suiprophet-docs/pages`
  Result: pass
  Evidence: GitHub Pages now reports `html_url=https://docs.suiprophet.app/` and `https_enforced=true`.
  Scope: live custom-domain state
  Links: `https://github.com/densmirnov/suiprophet-docs/settings/pages`

#### 2026-03-12T13:30:56.355Z — VERIFY — ok

By: DOCS

Note: Verified that the questions page is no longer published, the dark-theme palette was updated, the latest Pages deploy succeeded, and docs.suiprophet.app is now served over HTTPS.

VerifyStepsRef: doc_version=3, doc_updated_at=2026-03-12T13:27:02.074Z, excerpt_hash=sha256:2809f720ea7061f4ef2cd94a1bdcdaca883435b5a090d49f55ffdae3eb9e6244

<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings

- The public questions page has been unpublished by removing `docs/en/QUESTIONS.md` and clearing its navigation and homepage links.
- The dark theme now has an explicit palette for background, text, dividers, feature cards, and alt buttons, while the light theme structure remains unchanged.
- `docs.suiprophet.app` is now live over HTTPS with the GitHub Pages certificate approved and enforced.
