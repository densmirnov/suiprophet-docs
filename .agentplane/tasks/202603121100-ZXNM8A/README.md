---
id: "202603121100-ZXNM8A"
title: "Normalize Russian docs and create English mirror"
result_summary: "Russian docs aligned to one canonical term set; English mirror added under docs/en; no auto-commit created."
status: "DONE"
priority: "med"
owner: "DOCS"
depends_on: []
tags:
  - "docs"
verify:
  - "node .agentplane/policy/check-routing.mjs"
  - "agentplane doctor"
plan_approval:
  state: "approved"
  updated_at: "2026-03-12T11:02:39.267Z"
  updated_by: "ORCHESTRATOR"
  note: "User requested treating the current Russian docs as the source of truth and creating an English mirror."
verification:
  state: "ok"
  updated_at: "2026-03-12T11:22:00.192Z"
  updated_by: "DOCS"
  note: "Verified docs normalization and English mirror. Checks: routing, doctor, git diff --check, markdown links, aggregate terminology."
commit:
  hash: "3964b3843a18b01c3fb9e9637dda557d66028136"
  message: "chore: install agentplane 0.3.5"
comments:
  -
    author: "DOCS"
    body: "Start: normalize the Russian docs as the source of truth, align terminology across the set, and create a consistent English mirror under docs/en."
  -
    author: "DOCS"
    body: "Verified: normalized Russian docs as the source of truth, created English mirror under docs/en, and confirmed routing, doctor, diff, markdown links, and terminology checks."
events:
  -
    type: "status"
    at: "2026-03-12T11:02:50.804Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: normalize the Russian docs as the source of truth, align terminology across the set, and create a consistent English mirror under docs/en."
  -
    type: "verify"
    at: "2026-03-12T11:22:00.192Z"
    author: "DOCS"
    state: "ok"
    note: "Verified docs normalization and English mirror. Checks: routing, doctor, git diff --check, markdown links, aggregate terminology."
  -
    type: "status"
    at: "2026-03-12T11:22:07.762Z"
    author: "DOCS"
    from: "DOING"
    to: "DONE"
    note: "Verified: normalized Russian docs as the source of truth, created English mirror under docs/en, and confirmed routing, doctor, diff, markdown links, and terminology checks."
doc_version: 3
doc_updated_at: "2026-03-12T11:22:07.762Z"
doc_updated_by: "DOCS"
description: "Treat the current Russian docs as the source of truth, normalize terminology and structure across them, and create a consistent English version under docs/en."
id_source: "generated"
---
## Summary

Treat the current Russian docs as the source of truth, normalize terminology and structure across the Russian set, and create a consistent English mirror under docs/en.

## Scope

In scope: docs/** wording and structure normalization, fixing internal links, enforcing one terminology set, and creating English mirror pages under docs/en. Out of scope: changing product behavior, restoring removed sections unless the Russian docs still imply them, or reintroducing facts not present in the current Russian source-of-truth set.

## Plan

1. Normalize the Russian docs so that product name, roles, core objects, and flow terminology are consistent across README, product-overview, rulebook, oracle, court, and QUESTIONS. 2. Fix structural issues in the Russian set that break usability, including malformed internal links and malformed tables, without changing the intended meaning. 3. Create an English mirror under docs/en using the Russian pages as the source of truth and preserving the same terminology. 4. Run docs verification for links, routing, and terminology consistency.

## Verify Steps

1. Run node .agentplane/policy/check-routing.mjs. Expected: routing check passes. 2. Run agentplane doctor. Expected: workflow doctor reports OK; any warnings are documented. 3. Check internal markdown links in docs and docs/en. Expected: all local links resolve. 4. Search docs and docs/en for term drift across product name, roles, and core objects. Expected: one consistent terminology set is used.

## Verification

Pending implementation and verification.

<!-- BEGIN VERIFICATION RESULTS -->
#### 2026-03-12T11:22:00.192Z — VERIFY — ok

By: DOCS

Note: Verified docs normalization and English mirror. Checks: routing, doctor, git diff --check, markdown links, aggregate terminology.

VerifyStepsRef: doc_version=3, doc_updated_at=2026-03-12T11:02:50.804Z, excerpt_hash=sha256:db0a7945ce5f394c7cb88da6dcef372439ad5d93665f03afd98cc30d5f9d7e3d

<!-- END VERIFICATION RESULTS -->

## Rollback Plan

If the normalization or translation changes intended meaning, restore the previous Russian wording and remove the affected English mirror files. No runtime artifacts are changed.

## Findings

The main risks are translating inconsistent Russian phrasing too literally and allowing terminology drift between pages. The Russian set must be normalized first, then mirrored into English.
