# AGENTS.md — nintek

Public marketing site for the portfolio. Hosts the app registry at `src/data/apps.ts`.

## Start here
- **Cross-app standards:** https://github.com/EnzoLopez2023/azure-infra/blob/main/STANDARDS.md
- **Cross-repo product map:** https://github.com/EnzoLopez2023/azure-infra/blob/main/PORTFOLIO.md

> Agent sessions run in git worktrees, so relative paths into sibling repos (`../foo/BAR.md`) do **not** resolve. The cross-repo facts below are inlined deliberately. Always link other repos by absolute GitHub URL.

## ⚠️ `src/data/apps.ts` is marketing copy, not engineering truth

It carries `platforms {web, ios}` and `native` blocks that describe other repos — and it **drifts**. Verified examples:

- ~~Listed Tare as `ios: false` / `status: 'next'`.~~ **Fixed** — [Tare for iOS](https://github.com/EnzoLopez2023/Tare-for-iOS) is the most complete native app in the portfolio, and the entry now says so. Left here as the worked example: this drift sat in the registry for months because nothing in this repo can detect it.
- Lists `hearth` as `ios: false`. **Correct by design** — Hearth for iOS is a private tool, deliberately absent from the public registry.
- ShopKeep's entry and both mockups were rebuilt against the shipped app in Aug 2026 — icon byte-identical to `AppIcon-1024.png`, `native.highlights` checked feature by feature against [ShopKeepNative](https://github.com/EnzoLopez2023/ShopKeepNative). Treat it as verified until an app-side change lands.

> **When this file disagrees with a repo's code, the code wins.** Never "fix" another repo to match `apps.ts`. Update `apps.ts` instead, and check https://github.com/EnzoLopez2023/azure-infra/blob/main/PORTFOLIO.md first.

## Propagation rule

**INBOUND ONLY.** Product facts flow *into* this repo from the app repos. Nothing here should drive a change in an app repo. Adding a feature to an app may require updating `apps.ts`; changing `apps.ts` never requires touching an app.
