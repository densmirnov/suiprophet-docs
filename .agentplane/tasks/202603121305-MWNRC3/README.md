---
id: "202603121305-MWNRC3"
title: "Add GitHub Pages CNAME file"
status: "DOING"
priority: "med"
owner: "DOCS"
depends_on: []
tags:
  - "docs"
verify: []
plan_approval:
  state: "approved"
  updated_at: "2026-03-12T13:06:33.166Z"
  updated_by: "ORCHESTRATOR"
  note: "User approved adding the missing CNAME file, redeploying GitHub Pages, and rechecking TLS for docs.suiprophet.app."
verification:
  state: "pending"
  updated_at: null
  updated_by: null
  note: null
commit: null
comments:
  -
    author: "DOCS"
    body: "Start: add the missing CNAME file to the English VitePress site, push a new Pages deployment, and verify whether GitHub issues the custom-domain certificate for docs.suiprophet.app."
events:
  -
    type: "status"
    at: "2026-03-12T13:06:51.963Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: add the missing CNAME file to the English VitePress site, push a new Pages deployment, and verify whether GitHub issues the custom-domain certificate for docs.suiprophet.app."
doc_version: 3
doc_updated_at: "2026-03-12T13:06:51.963Z"
doc_updated_by: "DOCS"
description: "Add the missing CNAME file to the English VitePress site, redeploy GitHub Pages, and verify whether custom-domain TLS becomes valid for docs.suiprophet.app."
id_source: "generated"
---
## Summary

Add GitHub Pages CNAME file

Add the missing CNAME file to the English VitePress site, redeploy GitHub Pages, and verify whether custom-domain TLS becomes valid for docs.suiprophet.app.

## Scope

- In scope: Add the missing CNAME file to the English VitePress site, redeploy GitHub Pages, and verify whether custom-domain TLS becomes valid for docs.suiprophet.app.
- Out of scope: unrelated refactors not required for "Add GitHub Pages CNAME file".

## Plan

1. Add `docs/en/public/CNAME` with `docs.suiprophet.app` so the custom domain is present in the published artifact.
2. Rebuild locally, commit the change, and push to trigger a new GitHub Pages deployment.
3. Verify the deployment run, GitHub Pages custom-domain state, and whether TLS switches from `*.github.io` to `docs.suiprophet.app`.

## Verify Steps

1. Run `npm run docs:build`. Expected: the generated output contains `docs/en/.vitepress/dist/CNAME`.
2. Run `git diff --check`, `node .agentplane/policy/check-routing.mjs`, and `agentplane doctor`. Expected: no whitespace issues, routing passes, and doctor returns OK aside from known archive warnings.
3. Check GitHub Pages and TLS. Expected: the latest deploy succeeds and GitHub stops serving a `*.github.io` certificate for `docs.suiprophet.app` once issuance completes.

## Verification

<!-- BEGIN VERIFICATION RESULTS -->
<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings
