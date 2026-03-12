---
id: "202603121332-VZBH1X"
title: "Strengthen canonical docs messaging"
status: "DOING"
priority: "med"
owner: "DOCS"
depends_on: []
tags:
  - "docs"
verify: []
plan_approval:
  state: "approved"
  updated_at: "2026-03-12T13:33:15.821Z"
  updated_by: "ORCHESTRATOR"
  note: "User requested removing minimal/secondary framing from the published docs so the site reads as the canonical source of truth."
verification:
  state: "pending"
  updated_at: null
  updated_by: null
  note: null
commit: null
comments:
  -
    author: "DOCS"
    body: "Start: replace minimal and secondary framing in the public docs copy so the published site reads as the canonical documentation for Suiprophet."
events:
  -
    type: "status"
    at: "2026-03-12T13:33:38.308Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: replace minimal and secondary framing in the public docs copy so the published site reads as the canonical documentation for Suiprophet."
doc_version: 3
doc_updated_at: "2026-03-12T13:33:38.308Z"
doc_updated_by: "DOCS"
description: "Replace public-facing English site copy that frames the docs as minimal or secondary, and make the published site read as the canonical source of truth."
id_source: "generated"
---
## Summary

Strengthen canonical docs messaging

Replace public-facing English site copy that frames the docs as minimal or secondary, and make the published site read as the canonical source of truth.

## Scope

- In scope: Replace public-facing English site copy that frames the docs as minimal or secondary, and make the published site read as the canonical source of truth.
- Out of scope: unrelated refactors not required for "Strengthen canonical docs messaging".

## Plan

1. Replace public-facing wording that frames the site as minimal or secondary, starting with the VitePress homepage hero and related repository copy.
2. Rephrase the published English docs so they read as the canonical documentation for Suiprophet rather than an English subset.
3. Rebuild and verify that the updated copy is reflected in the generated site without introducing link or formatting regressions.

## Verify Steps

1. Run `npm run docs:build`. Expected: the site builds successfully with the updated homepage and metadata copy.
2. Run `git diff --check`, `node .agentplane/policy/check-routing.mjs`, and `agentplane doctor`. Expected: no whitespace issues, routing passes, and doctor returns OK aside from known archive warnings.
3. Check the published text sources. Expected: the site no longer describes itself as `Minimal English` or as a secondary English docs site.

## Verification

<!-- BEGIN VERIFICATION RESULTS -->
<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings
