---
id: "202603121150-03KYKT"
title: "Build and publish English docs site"
status: "DOING"
priority: "med"
owner: "DOCS"
depends_on: []
tags:
  - "docs"
verify: []
plan_approval:
  state: "approved"
  updated_at: "2026-03-12T11:54:23.188Z"
  updated_by: "ORCHESTRATOR"
  note: "User requested selecting a minimal docs framework, publishing the English docs site to GitHub Pages, wiring origin to densmirnov/suiprophet-docs, and providing Cloudflare domain setup instructions."
verification:
  state: "pending"
  updated_at: null
  updated_by: null
  note: null
commit: null
comments:
  -
    author: "DOCS"
    body: "Start: evaluate a minimal Markdown-first docs framework, implement the English site, configure GitHub Pages with a custom domain, connect the origin remote, and publish the site-ready repo state."
events:
  -
    type: "status"
    at: "2026-03-12T11:54:29.379Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: evaluate a minimal Markdown-first docs framework, implement the English site, configure GitHub Pages with a custom domain, connect the origin remote, and publish the site-ready repo state."
doc_version: 3
doc_updated_at: "2026-03-12T11:54:29.379Z"
doc_updated_by: "DOCS"
description: "Select a minimal documentation framework, implement an English docs site, connect the Git remote, and publish via GitHub Pages with custom domain guidance for docs.suiprophet.app."
id_source: "generated"
---
## Summary

Build and publish English docs site

Select a minimal documentation framework, implement an English docs site, connect the Git remote, and publish via GitHub Pages with custom domain guidance for docs.suiprophet.app.

## Scope

- In scope: Select a minimal documentation framework, implement an English docs site, connect the Git remote, and publish via GitHub Pages with custom domain guidance for docs.suiprophet.app.
- Out of scope: unrelated refactors not required for "Build and publish English docs site".

## Plan

1. Evaluate minimal docs frameworks for this repo and choose the smallest viable stack for Markdown-first English docs on GitHub Pages.
2. Implement the site structure and theme, using the English docs as the published source and keeping terminology consistent with the canonical docs.
3. Wire GitHub Pages deployment, add the custom domain configuration for `docs.suiprophet.app`, set the git remote, and publish the repository state.
4. Verify build, routing, and deployment configuration, then record Cloudflare DNS steps required on the user side.

## Verify Steps

1. Run `npm run docs:build`. Expected: the VitePress site builds without errors from the English docs source.
2. Run `git diff --check`, `node .agentplane/policy/check-routing.mjs`, and `agentplane doctor`. Expected: no whitespace issues, routing passes, and doctor returns OK aside from known archive warnings.
3. Validate links and deployment files. Expected: internal markdown links resolve, GitHub Pages workflow is present, and the custom domain is configured for `docs.suiprophet.app`.

## Verification

<!-- BEGIN VERIFICATION RESULTS -->
<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings
