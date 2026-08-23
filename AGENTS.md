# AGENTS.md — nintek

Public marketing site for the portfolio. Hosts the app registry at `src/data/apps.ts`.

## Start here
- **Cross-app standards:** https://github.com/EnzoLopez2023/azure-infra/blob/main/STANDARDS.md
- **Cross-repo product map:** https://github.com/EnzoLopez2023/azure-infra/blob/main/PORTFOLIO.md

> Agent sessions run in git worktrees, so relative paths into sibling repos (`../foo/BAR.md`) do **not** resolve. The cross-repo facts below are inlined deliberately. Always link other repos by absolute GitHub URL.

## `src/data/apps.ts` is marketing copy, not engineering truth

It carries `platforms {web, ios}` and `native` blocks that describe other repos, so it can drift.

- Check the cross-repo release ledger before changing availability, version, build, price, TestFlight, or App Store claims: https://github.com/EnzoLopez2023/azure-infra/blob/main/RELEASE_LEDGER.md
- Hearth remains `ios: false` by design because its native tool is private and deliberately absent from the public registry.
- ShopKeep's icon and native highlights were verified against [ShopKeepNative](https://github.com/EnzoLopez2023/ShopKeepNative), but later distribution work remains app-owned and must not be inferred here.

> **When this file disagrees with an app repo or the release ledger, those authorities win.** Never "fix" another repo to match `apps.ts`. Update `apps.ts` instead.

## Propagation rule

**INBOUND ONLY.** Product facts flow *into* this repo from the app repos. Nothing here should drive a change in an app repo. Adding a feature to an app may require updating `apps.ts`; changing `apps.ts` never requires touching an app.
