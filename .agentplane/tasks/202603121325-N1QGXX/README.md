---
id: "202603121325-N1QGXX"
title: "Unpublish questions page and refine dark theme"
status: "DOING"
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
  state: "pending"
  updated_at: null
  updated_by: null
  note: null
commit: null
comments:
  -
    author: "DOCS"
    body: "Start: remove the public questions page from the English docs site, adjust the dark theme palette, redeploy GitHub Pages, and verify the published result."
events:
  -
    type: "status"
    at: "2026-03-12T13:27:02.074Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: remove the public questions page from the English docs site, adjust the dark theme palette, redeploy GitHub Pages, and verify the published result."
doc_version: 3
doc_updated_at: "2026-03-12T13:27:02.074Z"
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
<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings
