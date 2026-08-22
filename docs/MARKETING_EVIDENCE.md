# Marketing evidence ledger

Canonical marketing evidence for `www.nintek.com`.

**Verified:** 2026-08-21 against each repository's default branch. Product code
wins over this ledger if they diverge. A code change flows into this site; this
site never drives an app implementation.

## Publication rules

- A native build is not a public App Store release. Publish a store or
  TestFlight acquisition link only when dated release evidence proves it.
- Do not infer a price from StoreKit configuration. Cairn is the exception
  because its dated App Store status records the submitted US price and review
  state.
- Do not expose private production hosts, backend hosts, credentials, review
  accounts, or internal locators.
- A real screenshot shows an app or Simulator render. A synthetic preview is a
  marketing reconstruction or deterministic fixture. Every asset below is
  classified explicitly.

## Claim evidence

| Product | Public claim boundary | Authoritative evidence |
| --- | --- | --- |
| Tare | Native successor with no account; private iCloud data; Apple Health imports automatically after opt-in when the app opens or returns; `Sync now` remains available. The browser UI is retiring, while the stateless consent-gated relay remains. No public store link or price is published. | [`Tare-for-iOS@91f2638`](https://github.com/EnzoLopez2023/Tare-for-iOS/tree/91f26388f19b847df620c6def6199400d92285f5) (2026-08-21), especially [`HealthSettingsView.swift`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Views/Settings/HealthSettingsView.swift), [`HealthService.swift`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Logic/HealthService.swift), and [`AGENTS.md`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/AGENTS.md). Web retention work is on [`Tare@bb4327c`](https://github.com/EnzoLopez2023/Tare/commit/bb4327c6ce6785529dbc59cfd574dd895c861689) (2026-08-21). |
| Workshop | Current web and private native product use the Living Plan Table system. The native release is withdrawn for rework; no public App Store, TestFlight, free, or price claim is published. | [`Workshop-for-iOS@9b102dd`](https://github.com/EnzoLopez2023/Workshop-for-iOS/tree/9b102dd45f99a00f0d6469f9abef6d3b0625fc71) (2026-08-20); Living Plan Table redesign [`4fd83a6`](https://github.com/EnzoLopez2023/Workshop-for-iOS/commit/4fd83a64335b37210c05859ed543cd4ce31a94ae) (2026-08-18). The release-withdrawal boundary is the dated P0-10 review directive; the repository contains no current public acquisition proof, so marketing publishes none. |
| ShopKeep | Apple and Microsoft sign-in, authenticated account-scoped media, and permanent in-app account deletion are integrated. Apple and Microsoft remain separate ShopKeep accounts. No public listing or price is claimed. | [`ShopKeepNative@1d8f880`](https://github.com/EnzoLopez2023/ShopKeepNative/tree/1d8f880e3aeffdbfda0a6960406cbde12609f167) (2026-08-21), especially [`PRIVACY.md`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/1d8f880e3aeffdbfda0a6960406cbde12609f167/PRIVACY.md), [`SignInView.swift`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/1d8f880e3aeffdbfda0a6960406cbde12609f167/ShopKeep/Auth/SignInView.swift), and [`AccountLifecycle.swift`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/1d8f880e3aeffdbfda0a6960406cbde12609f167/ShopKeep/Auth/AccountLifecycle.swift). Matching backend: [`ShopKeep@dbcb2fa`](https://github.com/EnzoLopez2023/ShopKeep/commit/dbcb2fa64c05753ee5762fea043aaf87575516bd) (2026-08-21). |
| Cairn | Version 3.0 build 2 is rejected; the combined submission is unresolved; the $14.99 US Full Exam Library IAP remains in review. There is no public listing. Progress sync is Apple/iCloud only and never connects to the web store. Rights and attribution remediation is pending integration. | [`CairnNative@2374c25`](https://github.com/EnzoLopez2023/CairnNative/tree/2374c254fe1cc72c6a131d27a23104837ce30d60) (2026-08-21), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/CairnNative/blob/2374c254fe1cc72c6a131d27a23104837ce30d60/APP_STORE_STATUS.md) and [`Cairn.storekit`](https://github.com/EnzoLopez2023/CairnNative/blob/2374c254fe1cc72c6a131d27a23104837ce30d60/Cairn/Cairn.storekit). Pending, divergent remediation branch tip: [`07e618e`](https://github.com/EnzoLopez2023/CairnNative/commit/07e618e1540b7500aedb0c54f88269ac74dc28d8) (2026-08-20); do not market it as integrated. |
| Cortex | iPhone-only TestFlight beta, eight native games, optional Game Center, private iCloud only for Sudoku statistics, no Nintek account or backend, and no public App Store listing. | [`Cortex@e09c594`](https://github.com/EnzoLopez2023/Cortex/tree/e09c594bfd4e70aeefaf53038771f2bee1f8f833) (2026-08-21). Preserve the Cortex page and legal copy unless newer app evidence changes it. |
| PulseWire | Private single-owner reader using the Premium News Dashboard, Microsoft Entra, PostgreSQL + pgvector, Azure AI, and explicit offline Saved snapshots. The current Discover catalog proves 317 unique feeds in 328 placements across 64 categories. No production host or demo entry point is published here. | [`PulseWire@c96b0c5`](https://github.com/EnzoLopez2023/PulseWire/tree/c96b0c5597b7c4733612fbfe4078a6a8c7828dc1) (2026-08-21), especially [`README.md`](https://github.com/EnzoLopez2023/PulseWire/blob/c96b0c5597b7c4733612fbfe4078a6a8c7828dc1/README.md), [`catalog.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/c96b0c5597b7c4733612fbfe4078a6a8c7828dc1/src/lib/discover/catalog.ts), and [`package.json`](https://github.com/EnzoLopez2023/PulseWire/blob/c96b0c5597b7c4733612fbfe4078a6a8c7828dc1/package.json). Counts are evaluated from `CATALOG`, not copied from older notes. |
| Tabloom | Archive and restore are current features. Offline reading is explicit, bounded, read-only, identity-scoped IndexedDB; it is not local-first or end-to-end encrypted. Anthropic, Voyage AI, and configured Azure AI image processing have distinct roles. | [`tabloom@e67904d`](https://github.com/EnzoLopez2023/tabloom/tree/e67904d6c5f25f756ed4be34127e20b925a3aecc) (2026-08-21), especially [`README.md`](https://github.com/EnzoLopez2023/tabloom/blob/e67904d6c5f25f756ed4be34127e20b925a3aecc/README.md), [`offline-reading.md`](https://github.com/EnzoLopez2023/tabloom/blob/e67904d6c5f25f756ed4be34127e20b925a3aecc/docs/offline-reading.md), [`db.ts`](https://github.com/EnzoLopez2023/tabloom/blob/e67904d6c5f25f756ed4be34127e20b925a3aecc/src/offline/db.ts), and [`archiveModel.ts`](https://github.com/EnzoLopez2023/tabloom/blob/e67904d6c5f25f756ed4be34127e20b925a3aecc/src/layout/archiveModel.ts). |
| Sortie | Pre-release iPhone/iPad game; local saves, optional Game Center, no account or backend. Preserve its verified page and pre-release acquisition boundary. | [`Sortie@8f3847b`](https://github.com/EnzoLopez2023/Sortie/tree/8f3847b16e22c0cbcd28d971fc9f84814bed632c) (2026-08-21). |
| Salvo | In-development portrait iPad game with 16 current operations and a wider five-era plan. No public listing or announced price. | [`Salvo@6573e3a`](https://github.com/EnzoLopez2023/Salvo/tree/6573e3a086fba6f0e718e693b2bae0824e84cae5) (2026-08-21). |

## Asset evidence

| Public asset or surface | Classification | Provenance |
| --- | --- | --- |
| `public/apps/tare.png` | **Real production icon** | Byte-identical to [`Tare-for-iOS@91f2638`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). Tare interface illustrations in Astro are **synthetic UI studies with sample data**. |
| `public/apps/workshop.png` | **Real production icon** | Byte-identical to [`Workshop-for-iOS@9b102dd`](https://github.com/EnzoLopez2023/Workshop-for-iOS/blob/9b102dd45f99a00f0d6469f9abef6d3b0625fc71/Workshop/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). |
| `public/apps/workshop/*.webp` | **Simulator captures** and one current web capture | Read-only demo captures from [`Workshop-for-iOS@4b9c2da`](https://github.com/EnzoLopez2023/Workshop-for-iOS/commit/4b9c2da7234aa8fd4dec58463ae1a73d85c087c8), published by [`nintek@24be303`](https://github.com/EnzoLopez2023/nintek/commit/24be303e4410545776bce6679143b6536169a4ab). They are not App Store cards, user screenshots, or Concourse-era media. |
| `public/apps/shopkeep.png` | **Real production icon** | Copied byte-for-byte from [`ShopKeepNative@1d8f880`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/1d8f880e3aeffdbfda0a6960406cbde12609f167/ShopKeep/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). ShopKeep interface and receipt scenes on this site are **synthetic UI studies with sample records**. |
| `public/apps/cairn.png` | **Real production icon** | Byte-identical to [`CairnNative@2374c25`](https://github.com/EnzoLopez2023/CairnNative/blob/2374c254fe1cc72c6a131d27a23104837ce30d60/Cairn/Assets.xcassets/AppIcon.appiconset/Icon-1024.png). Cairn Astro device views are **synthetic UI studies**. |
| `src/assets/cortex/*.webp` | **Real release-build captures** | Preserved from the verified Cortex release-build screenshot set; current code authority is [`Cortex@e09c594`](https://github.com/EnzoLopez2023/Cortex/tree/e09c594bfd4e70aeefaf53038771f2bee1f8f833). |
| `public/apps/pulsewire.png` | **Real production icon** | Copied byte-for-byte from [`PulseWire@c96b0c5`](https://github.com/EnzoLopez2023/PulseWire/blob/c96b0c5597b7c4733612fbfe4078a6a8c7828dc1/app-store/AppIcon-1024.png). The portfolio dashboard is a **synthetic, non-live diagram** with no fabricated headline or link. |
| `public/apps/tabloom.png`, `public/apps/tabloom.svg` | **Real production icon** | Copied from [`tabloom@e67904d`](https://github.com/EnzoLopez2023/tabloom/tree/e67904d6c5f25f756ed4be34127e20b925a3aecc). |
| `public/apps/tabloom/*.webp` | **Real current interface captures with redaction** | Private notebook and page content is visibly obscured. No synthetic note text is presented as a real record. |
| `src/assets/sortie/*`, `public/apps/sortie/hero-loop.mp4` | **Real pre-release capture and source art** | [`Sortie@8f3847b`](https://github.com/EnzoLopez2023/Sortie/tree/8f3847b16e22c0cbcd28d971fc9f84814bed632c). |
| `src/assets/salvo/*` | **Real pre-release captures and source art** | [`Salvo@6573e3a`](https://github.com/EnzoLopez2023/Salvo/tree/6573e3a086fba6f0e718e693b2bae0824e84cae5). |

## Refresh procedure

1. Read the current default branch from GitHub; do not assume `main` (`Tare`
   uses `master`).
2. Record the exact commit and UTC date.
3. Verify the executable code or dated release document behind each changed
   claim.
4. Compare icon bytes against the authoritative app asset.
5. Reclassify every changed image as real capture, Simulator capture, redacted
   capture, deterministic fixture, or synthetic marketing diagram.
6. Run the site assertions and inspect the bounded desktop/mobile render before
   publishing.
