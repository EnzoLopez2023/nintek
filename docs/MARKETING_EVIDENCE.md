# Marketing evidence ledger

Canonical marketing evidence for `www.nintek.com`.

**Verified:** 2026-08-22 against each repository's default branch and, for
deployed web products, a live version or health response matching that branch. Product code
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
| Tare | Native successor with no account; SwiftData plus private CloudKit; Apple Health imports automatically after opt-in when the app opens or returns; `Sync now` remains available. The browser app is retired and production is relay-only. The stateless consent-gated Anthropic relay remains. Legacy web databases are intact while physical-device, soak, review, and explicit cleanup gates finish; deletion is not claimed complete. No public store link or price is published. | [`Tare-for-iOS@91f2638`](https://github.com/EnzoLopez2023/Tare-for-iOS/tree/91f26388f19b847df620c6def6199400d92285f5), especially [`BackupService.swift`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Migration/BackupService.swift), [`HealthService.swift`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Logic/HealthService.swift), and [`AGENTS.md`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/AGENTS.md). Relay and retirement authority: [`Tare@04a2904`](https://github.com/EnzoLopez2023/Tare/tree/04a2904e0c03a154d12d06747d31a7495842fc8b); its live health SHA matched on 2026-08-22. |
| Workshop | The account-backed web service is current and online-only. Apple and Microsoft are separate Workshop identities with per-user SQLite databases and uploads. Anthropic URL analysis is optional. Native iPhone/iPad release is withdrawn for rework; no public App Store, TestFlight, free, or price claim is published. | [`workshop@b45c028`](https://github.com/EnzoLopez2023/workshop/tree/b45c028e33a1b2cdb961870858d1374c7dbe5e6e) and [`Workshop-for-iOS@9b102dd`](https://github.com/EnzoLopez2023/Workshop-for-iOS/tree/9b102dd45f99a00f0d6469f9abef6d3b0625fc71). The live web health SHA matched `b45c028` on 2026-08-22. [`RECOVERY.md`](https://github.com/EnzoLopez2023/workshop/blob/b45c028e33a1b2cdb961870858d1374c7dbe5e6e/RECOVERY.md) is authority for seven local bundles, 30/366-day off-host windows, and the manual post-restore deletion-reconciliation requirement. |
| ShopKeep | Apple and Microsoft sign-in remain separate accounts. Primary photos/documents are SQLite BLOBs served only through bearer-authenticated, private no-store routes. Account deletion, lifecycle generations, safe restoration, and clean recreation are implemented. No offline inventory exists. Physical-device and App Store readiness remain open; no public listing or price is claimed. | [`ShopKeep@948c439`](https://github.com/EnzoLopez2023/ShopKeep/tree/948c439d1c2ce7c8121c185a759f8ff14e0c9bcc) and [`ShopKeepNative@9f5597a`](https://github.com/EnzoLopez2023/ShopKeepNative/tree/9f5597abce031ce44c9c1a28471e4b831c5d0345). The live server version matched `948c439` on 2026-08-22. Restore authority: [`recovery-lib.mjs`](https://github.com/EnzoLopez2023/ShopKeep/blob/948c439d1c2ce7c8121c185a759f8ff14e0c9bcc/recovery/recovery-lib.mjs); native cleanup/export authority: [`AppModel.swift`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/9f5597abce031ce44c9c1a28471e4b831c5d0345/ShopKeep/App/AppModel.swift) and [`SettingsSupport.swift`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/9f5597abce031ce44c9c1a28471e4b831c5d0345/ShopKeep/Features/Settings/SettingsSupport.swift). |
| Cairn | Version 3.0 build 2 is rejected; the combined submission is unresolved; the $14.99 US Full Exam Library IAP remains in review. There is no public listing. Progress sync is Apple/iCloud only and never connects to the web store. Rights/provenance remediation is source-ready on the current branch, but a higher-numbered build and resubmission remain. | [`CairnNative@48f6472`](https://github.com/EnzoLopez2023/CairnNative/tree/48f6472afd0d6131afa88bde4c57ecf59ae925e5), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/APP_STORE_STATUS.md), [`Cairn.entitlements`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/Cairn/Cairn.entitlements), and [`PrivacyInfo.xcprivacy`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/Cairn/PrivacyInfo.xcprivacy). |
| Cortex | iPhone-only TestFlight beta, eight native games, optional Game Center, private iCloud only for Sudoku statistics, no Nintek account or backend, and no public App Store listing. | [`Cortex@e09c594`](https://github.com/EnzoLopez2023/Cortex/tree/e09c594bfd4e70aeefaf53038771f2bee1f8f833) (2026-08-21). Preserve the Cortex page and legal copy unless newer app evidence changes it. |
| PulseWire | Entra-protected owner reader plus a separate 24-hour read-only demo. Uses PostgreSQL + pgvector, configured Azure AI Foundry deployments, RSS/source egress, revocable session ledger, and explicit unencrypted IndexedDB Saved snapshots. No self-service account export or deletion exists. The current catalog proves 317 unique URLs in 328 placements across 64 categories. No production host is published here. | [`PulseWire@5e64d62`](https://github.com/EnzoLopez2023/PulseWire/tree/5e64d62df4b67fdf40ff0673935db8fd0497fdd1), especially [`catalog.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/discover/catalog.ts), [`session-ledger.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/auth/session-ledger.ts), [`retention.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/retention.ts), and [`store.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/offline/store.ts). The live health commit matched on 2026-08-22. |
| Tabloom | Private owner-and-guest PWA with Microsoft identity/email/activity, a shared SQLite workspace and persistent uploads. Explicit offline reading is bounded, read-only, identity-scoped IndexedDB and not end-to-end encrypted. Anthropic, Voyage AI, Azure Computer Vision Read API, and Azure OpenAI `gpt-image-1` have distinct roles. Workspace ZIP includes Markdown and attachments by default. Trash is 30 days, history is 50 versions, and self-service account deletion is absent. | [`tabloom@c4fad48`](https://github.com/EnzoLopez2023/tabloom/tree/c4fad4809d69d13c6c3f7dfde00e579ed2d99219), especially [`offline-reading.md`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/docs/offline-reading.md), [`pdf-image.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/lib/pdf-image.js), [`trash-sweep.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/lib/trash-sweep.js), and [`server.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/server.js). The live version SHA matched on 2026-08-22. |
| Sortie | Pre-release, portrait, iPhone-only game for iOS 14+; local saves, optional Game Center, no account or backend. Preserve its verified page and pre-release acquisition boundary. | [`Sortie@60b5cdd`](https://github.com/EnzoLopez2023/Sortie/tree/60b5cdd92aa03dcf74b9e22bdd91fea76d447250) (2026-08-22), especially [`export_presets.cfg`](https://github.com/EnzoLopez2023/Sortie/blob/60b5cdd92aa03dcf74b9e22bdd91fea76d447250/export_presets.cfg) and [`README.md`](https://github.com/EnzoLopez2023/Sortie/blob/60b5cdd92aa03dcf74b9e22bdd91fea76d447250/README.md). |
| Salvo | In-development portrait iPad game with 16 current operations and a wider five-era plan. No public listing or announced price. | [`Salvo@6573e3a`](https://github.com/EnzoLopez2023/Salvo/tree/6573e3a086fba6f0e718e693b2bae0824e84cae5) (2026-08-21). |

## Legal lifecycle routes

All reviewed privacy and support routes are public, canonical, and intentionally
`noindex, follow`; `/terms` is indexed. Product pages and the site footer link the
app-specific documents and shared terms. Dates below reflect source verification,
not a claim that provider terms or legal requirements cannot change.

| Route | Verified coverage | Current product evidence |
| --- | --- | --- |
| `/terms` | Shared plain-language site/app terms: content ownership and responsibility, acceptable use, providers, AI and professional-advice limits, pre-release status, warranties/liability, changes, and contact. | Nintek source and every product-specific policy below, verified 2026-08-22. |
| `/tare/privacy`, `/tare/support` | Native-only release boundary; SwiftData/private CloudKit/HealthKit; scoped stateless Anthropic relay; 16-table JSON export, 14 rolling backups, no account or in-app erase-all; legacy web cleanup explicitly incomplete. | `Tare-for-iOS@91f2638`; `Tare@04a2904`. |
| `/workshop/privacy`, `/workshop/support` | Separate Apple/Microsoft accounts; per-user SQLite/uploads; optional Anthropic URL analysis; online-only boundary; limited JSON summary; account deletion; seven local backups; manual post-restore deletion reconciliation. | `workshop@b45c028`; `Workshop-for-iOS@9b102dd`. |
| `/shopkeep/privacy`, `/shopkeep/support` | Separate provider accounts; bearer-authenticated SQLite BLOB media; CSV/PDF/database exports; no offline mode; generation-safe deletion/recreation/restore; physical/App Store readiness gap. | `ShopKeep@948c439`; `ShopKeepNative@9f5597a`. |
| `/cairn/privacy`, `/cairn/support` | No account/backend; local SwiftData and private CloudKit; unresolved rejected submission/IAP boundary; Apple-controlled purchase and data records. | `CairnNative@48f6472`. |
| `/cortex/privacy`, `/cortex/support` | No account/backend; local gameplay; Sudoku-only private iCloud key-value data; App Group widgets; optional Game Center; no erase-all/export. | `Cortex@e09c594`. |
| `/sortie/privacy`, `/sortie/support` | iPhone-only pre-release boundary; local save and Apple-managed backup limits; optional Game Center; no Nintek account/backend or public listing. | `Sortie@60b5cdd`. |
| `/tabloom/privacy`, `/tabloom/support` | Microsoft identity/email/activity; Anthropic/Voyage/Azure OCR and scan cleanup; shared SQLite/uploads; unencrypted read-only IndexedDB; ZIP/HTML export, 30-day Trash, 50-version history, quotas, manual account-deletion gap. | `tabloom@c4fad48`. |
| `/pulsewire/privacy`, `/pulsewire/support` | Entra owner plus read-only demo; PostgreSQL/pgvector; Azure AI Foundry; source egress; unencrypted Saved snapshots; retention tiers; session revocation; manual export/deletion gap. | `PulseWire@5e64d62`. |

## Asset evidence

| Public asset or surface | Classification | Provenance |
| --- | --- | --- |
| `public/apps/tare.png` | **Real production icon** | Byte-identical to [`Tare-for-iOS@91f2638`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/91f26388f19b847df620c6def6199400d92285f5/Tare/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). Tare interface illustrations in Astro are **synthetic UI studies with sample data**. |
| `public/apps/workshop.png` | **Real production icon** | Byte-identical to [`Workshop-for-iOS@9b102dd`](https://github.com/EnzoLopez2023/Workshop-for-iOS/blob/9b102dd45f99a00f0d6469f9abef6d3b0625fc71/Workshop/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). |
| `public/apps/workshop/*.webp` | **Simulator captures** and one current web capture | Read-only demo captures from [`Workshop-for-iOS@4b9c2da`](https://github.com/EnzoLopez2023/Workshop-for-iOS/commit/4b9c2da7234aa8fd4dec58463ae1a73d85c087c8), published by [`nintek@24be303`](https://github.com/EnzoLopez2023/nintek/commit/24be303e4410545776bce6679143b6536169a4ab). They are not App Store cards, user screenshots, or Concourse-era media. |
| `public/apps/shopkeep.png` | **Real production icon** | Copied byte-for-byte from [`ShopKeepNative@9f5597a`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/9f5597abce031ce44c9c1a28471e4b831c5d0345/ShopKeep/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png). ShopKeep interface and receipt scenes on this site are **synthetic UI studies with sample records**. |
| `public/apps/cairn.png` | **Real production icon** | Byte-identical to [`CairnNative@48f6472`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/Cairn/Assets.xcassets/AppIcon.appiconset/Icon-1024.png). Cairn Astro device views are **synthetic UI studies**. |
| `src/assets/cortex/*.webp` | **Real release-build captures** | Preserved from the verified Cortex release-build screenshot set; current code authority is [`Cortex@e09c594`](https://github.com/EnzoLopez2023/Cortex/tree/e09c594bfd4e70aeefaf53038771f2bee1f8f833). |
| `public/apps/pulsewire.png` | **Real production icon** | Copied byte-for-byte from [`PulseWire@5e64d62`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/app-store/AppIcon-1024.png). The portfolio dashboard is a **synthetic, non-live diagram** with no fabricated headline or link. |
| `public/apps/tabloom.png`, `public/apps/tabloom.svg` | **Real production icon** | Copied from [`tabloom@c4fad48`](https://github.com/EnzoLopez2023/tabloom/tree/c4fad4809d69d13c6c3f7dfde00e579ed2d99219). |
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
