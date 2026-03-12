---
id: "202603121332-VZBH1X"
title: "Strengthen canonical docs messaging"
result_summary: "The published site now presents itself as the canonical documentation for Suiprophet rather than a minimal English subset, with the updated wording live on docs.suiprophet.app."
status: "DONE"
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
  state: "ok"
  updated_at: "2026-03-12T13:36:14.325Z"
  updated_by: "DOCS"
  note: "Verified that the public site no longer frames itself as minimal or secondary, the updated canonical wording is live on docs.suiprophet.app, and the latest Pages deploy succeeded."
commit:
  hash: "7a88570623eb826df14f7ad04b91c0795b91a07d"
  message: "✨ docs: strengthen canonical messaging"
comments:
  -
    author: "DOCS"
    body: "Start: replace minimal and secondary framing in the public docs copy so the published site reads as the canonical documentation for Suiprophet."
  -
    author: "DOCS"
    body: "Verified: removed minimal and secondary framing from the public docs messaging, confirmed the updated canonical wording on the live site, and verified a successful GitHub Pages deployment."
events:
  -
    type: "status"
    at: "2026-03-12T13:33:38.308Z"
    author: "DOCS"
    from: "TODO"
    to: "DOING"
    note: "Start: replace minimal and secondary framing in the public docs copy so the published site reads as the canonical documentation for Suiprophet."
  -
    type: "verify"
    at: "2026-03-12T13:36:14.325Z"
    author: "DOCS"
    state: "ok"
    note: "Verified that the public site no longer frames itself as minimal or secondary, the updated canonical wording is live on docs.suiprophet.app, and the latest Pages deploy succeeded."
  -
    type: "status"
    at: "2026-03-12T13:36:26.926Z"
    author: "DOCS"
    from: "DOING"
    to: "DONE"
    note: "Verified: removed minimal and secondary framing from the public docs messaging, confirmed the updated canonical wording on the live site, and verified a successful GitHub Pages deployment."
doc_version: 3
doc_updated_at: "2026-03-12T13:36:26.926Z"
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
- Command: `rg -n "Minimal English|English documentation site|English docs site" . -g '!node_modules' -g '!.git'`
  Result: pass
  Evidence: no remaining occurrences of the minimal or secondary framing after the copy updates.
  Scope: `docs/en`, `README.md`, `package.json`
  Links: `docs/en/index.md`, `docs/en/.vitepress/config.mts`, `README.md`, `package.json`
- Command: `npm run docs:build`
  Result: pass
  Evidence: VitePress build completed successfully with the updated homepage hero and site metadata copy.
  Scope: `docs/en`, `package.json`
  Links: `docs/en/index.md`, `docs/en/.vitepress/config.mts`
- Command: `git diff --check`
  Result: pass
  Evidence: no whitespace or merge-marker issues after the messaging changes.
  Scope: tracked task changes
  Links: `docs/en/index.md`, `README.md`
- Command: `node .agentplane/policy/check-routing.mjs`
  Result: pass
  Evidence: `policy routing OK`
  Scope: repository policy graph
  Links: `AGENTS.md`, `.agentplane/policy/*.md`
- Command: `agentplane doctor`
  Result: pass
  Evidence: `doctor (OK)` with the pre-existing warning about archived DONE-task READMEs missing from the git index.
  Scope: repository workflow state
  Links: `.agentplane/tasks/202603121332-VZBH1X/README.md`
- Command: `gh run list -R densmirnov/suiprophet-docs --limit 5`
  Result: pass
  Evidence: deploy run `23004595553` completed with `success`.
  Scope: remote GitHub Pages deployment
  Links: `https://github.com/densmirnov/suiprophet-docs/actions/runs/23004595553`
- Command: `curl -sL https://docs.suiprophet.app/ | rg -n "Canonical documentation|Minimal English|English documentation site|English docs site" -n`
  Result: pass
  Evidence: the published homepage now contains the canonical wording and no longer contains the removed secondary framing.
  Scope: live homepage content
  Links: `https://docs.suiprophet.app/`

#### 2026-03-12T13:36:14.325Z — VERIFY — ok

By: DOCS

Note: Verified that the public site no longer frames itself as minimal or secondary, the updated canonical wording is live on docs.suiprophet.app, and the latest Pages deploy succeeded.

VerifyStepsRef: doc_version=3, doc_updated_at=2026-03-12T13:33:38.308Z, excerpt_hash=sha256:bc7e97d881cee837e70ddb311208822c0808b52dc34a78c2044f87854e8e3bd0

<!-- END VERIFICATION RESULTS -->

## Rollback Plan

- Revert task-related commit(s).
- Re-run required checks to confirm rollback safety.

## Findings

- The public homepage tagline now reads as canonical product documentation instead of a minimal English subset.
- The live site metadata now presents the docs as the canonical documentation for Suiprophet.
- Repository-level copy in `README.md` and `package.json` was aligned to the same canonical framing.
