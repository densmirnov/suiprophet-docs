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
  state: "needs_rework"
  updated_at: "2026-03-12T13:10:32.324Z"
  updated_by: "DOCS"
  note: "The CNAME file fix is deployed successfully, but GitHub Pages is still serving a *.github.io certificate and has not switched to https_enforced for docs.suiprophet.app yet."
commit: null
comments:
  -
    author: "DOCS"
    body: "Start: add the missing CNAME file to the English VitePress site, push a new Pages deployment, and verify whether GitHub issues the custom-domain certificate for docs.suiprophet.app."
  -
    author: "DOCS"
    body: "Blocked: repository and DNS configuration are correct after the CNAME fix, but GitHub Pages has not yet issued the custom-domain certificate for docs.suiprophet.app."
events:
  -
    type: "status"
    at: "2026-03-12T13:06:51.963Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: add the missing CNAME file to the English VitePress site, push a new Pages deployment, and verify whether GitHub issues the custom-domain certificate for docs.suiprophet.app."
  -
    type: "status"
    at: "2026-03-12T13:10:32.181Z"
    author: "DOCS"
    from: "DOING"
    to: "BLOCKED"
    note: "Blocked: repository and DNS configuration are correct after the CNAME fix, but GitHub Pages has not yet issued the custom-domain certificate for docs.suiprophet.app."
  -
    type: "verify"
    at: "2026-03-12T13:10:32.324Z"
    author: "DOCS"
    state: "needs_rework"
    note: "The CNAME file fix is deployed successfully, but GitHub Pages is still serving a *.github.io certificate and has not switched to https_enforced for docs.suiprophet.app yet."
doc_version: 3
doc_updated_at: "2026-03-12T13:10:32.325Z"
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
- Command: `npm run docs:build`
  Result: pass
  Evidence: build completed successfully and `docs/en/.vitepress/dist/CNAME` was generated with `docs.suiprophet.app`.
  Scope: `docs/en/public/CNAME`, `docs/en/.vitepress/dist`
  Links: `docs/en/public/CNAME`
- Command: `git diff --check`
  Result: pass
  Evidence: no whitespace or merge-marker issues after adding the `CNAME` file.
  Scope: tracked task changes
  Links: `docs/en/public/CNAME`
- Command: `node .agentplane/policy/check-routing.mjs`
  Result: pass
  Evidence: `policy routing OK`
  Scope: repository policy graph
  Links: `AGENTS.md`, `.agentplane/policy/*.md`
- Command: `agentplane doctor`
  Result: pass
  Evidence: `doctor (OK)` with the pre-existing warning about archived DONE-task READMEs missing from the git index.
  Scope: repository workflow state
  Links: `.agentplane/tasks/202603121305-MWNRC3/README.md`
- Command: `gh run list -R densmirnov/suiprophet-docs --limit 3`
  Result: pass
  Evidence: deploy run `23003488713` completed with `success` after the `CNAME` file was added.
  Scope: remote GitHub Pages deployment
  Links: `https://github.com/densmirnov/suiprophet-docs/actions/runs/23003488713`
- Command: `gh api repos/densmirnov/suiprophet-docs/pages`
  Result: fail
  Evidence: GitHub Pages still reports `https_enforced: false` even though `cname` remains `docs.suiprophet.app`.
  Scope: GitHub Pages custom-domain TLS state
  Links: `https://github.com/densmirnov/suiprophet-docs/settings/pages`
- Command: `openssl s_client -connect 185.199.108.153:443 -servername docs.suiprophet.app | openssl x509 -noout -subject -issuer -dates`
  Result: fail
  Evidence: the server still presents `subject=CN=*.github.io`, not a certificate for `docs.suiprophet.app`.
  Scope: live TLS certificate served by GitHub Pages
  Links: `docs.suiprophet.app`

#### 2026-03-12T13:10:32.324Z — VERIFY — needs_rework

By: DOCS

Note: The CNAME file fix is deployed successfully, but GitHub Pages is still serving a *.github.io certificate and has not switched to https_enforced for docs.suiprophet.app yet.

VerifyStepsRef: doc_version=3, doc_updated_at=2026-03-12T13:10:32.181Z, excerpt_hash=sha256:535f4f49b66e7aa43cb61cff03fab3fedce65071a93bbf89a0b9f6d2fa247588

<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings

- The `CNAME` file fix is implemented and is present in the local build artifact.
- The post-fix GitHub Pages deployment succeeded.
- DNS and GitHub Pages domain configuration are still correct.
- The remaining issue is external to the repository state: GitHub has not yet issued the custom-domain certificate, so browsers still see the wildcard `*.github.io` certificate.
