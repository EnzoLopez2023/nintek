# Marketing evidence ledger

Canonical marketing evidence for `www.nintek.com`.

**Base verification:** 2026-08-22 against each repository's default branch and,
for deployed web products, a live version or health response matching that
branch. **Release-state refresh:** 2026-08-23 for Tare, Workshop, ShopKeep,
Cortex, Sortie, and Salvo against their current default-branch records. Product
code and the cross-repo release ledger win if they diverge. A code change flows
into this site; this site never drives an app implementation.

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
- PWA, installability, offline, and background-delivery claims are product
  decisions. Never infer them from the existence of a web route or native app.

## Claim evidence

| Product | Public claim boundary | Authoritative evidence |
| --- | --- | --- |
| Tare | iOS-first native successor at draft 1.0 (31), assigned only to internal TestFlight; no App Review submission, public listing, verified price, or territory decision. It has no account, uses SwiftData plus private CloudKit, and imports approved Apple Health data after opt-in when the app opens or returns; `Sync now` remains available. The retired browser runtime is relay-only, not a PWA. Legacy web databases remain while physical-device, soak, review, and explicit cleanup gates finish. | [`Tare-for-iOS@36b681a`](https://github.com/EnzoLopez2023/Tare-for-iOS/tree/36b681a3ce9b63d7ca3488dd966f3b60093ae9af), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/36b681a3ce9b63d7ca3488dd966f3b60093ae9af/APP_STORE_STATUS.md). Release binary source is `cc26830`; relay and retirement authority remains [`Tare@04a2904`](https://github.com/EnzoLopez2023/Tare/tree/04a2904e0c03a154d12d06747d31a7495842fc8b). |
| Workshop | The account-backed web service is current and online-only. Native draft 2.2.1 (12) is `VALID` in internal TestFlight under fallback name **Nintek Workshop**. Existing commercial configuration is free with zero IAPs/subscriptions, but there is no public release or acquisition link. Build 12 is non-submittable and binary remediation is in progress; this site's corrected `More → Account` and provider-scope guidance is documentation, not a claim that build 12 contains newer contextual copy. Apple and Microsoft identities remain separate workspaces with no automatic linking or merge, and deletion affects only the current provider workspace. Physical-device, accessibility, App Privacy, reviewer-account, EU trader, and Guideline 2.1 evidence gates remain. | [`workshop@b45c028`](https://github.com/EnzoLopez2023/workshop/tree/b45c028e33a1b2cdb961870858d1374c7dbe5e6e) and [`Workshop-for-iOS@87d1743`](https://github.com/EnzoLopez2023/Workshop-for-iOS/tree/87d174388204e196ddf4018c61c24b49ef9fcdbe), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/Workshop-for-iOS/blob/87d174388204e196ddf4018c61c24b49ef9fcdbe/APP_STORE_STATUS.md). Release source is `a6d8003`; the web health SHA matched `b45c028` on 2026-08-22. |
| ShopKeep | Apple and Microsoft sign-in remain separate accounts. Primary photos/documents are SQLite BLOBs served only through bearer-authenticated private routes. Native source is 2.0.1 (30). Distribution may be in flight, so this site does not infer TestFlight, App Store, price, or release outcomes; no public listing is claimed. | [`ShopKeep@948c439`](https://github.com/EnzoLopez2023/ShopKeep/tree/948c439d1c2ce7c8121c185a759f8ff14e0c9bcc) and [`ShopKeepNative@14157ca`](https://github.com/EnzoLopez2023/ShopKeepNative/tree/14157ca46f8b23f32c770b9642eb0b55a8e86eb7). The live server version matched `948c439` on 2026-08-22. |
| Cairn | The web workspace is online, account-backed, and not an installable/offline PWA. CairnNative is a separate offline/local-first product; optional private iCloud sync is Apple-only and never connects to the web account or progress store. Version 3.0 build 2 is rejected; the combined submission is unresolved; the $14.99 US Full Exam Library IAP remains in review. There is no public listing. Rights/provenance remediation is source-ready on the current branch, but a higher-numbered build and resubmission remain. | Web authority: [`Cairn@5865b87`](https://github.com/EnzoLopez2023/Cairn/tree/5865b87c8b20a88c774b399463f654a693150911). Native authority: [`CairnNative@48f6472`](https://github.com/EnzoLopez2023/CairnNative/tree/48f6472afd0d6131afa88bde4c57ecf59ae925e5), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/APP_STORE_STATUS.md), [`Cairn.entitlements`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/Cairn/Cairn.entitlements), and [`PrivacyInfo.xcprivacy`](https://github.com/EnzoLopez2023/CairnNative/blob/48f6472afd0d6131afa88bde4c57ecf59ae925e5/Cairn/PrivacyInfo.xcprivacy). |
| Cortex | Private iPhone-only pre-release build with eight native games, optional Game Center, private iCloud only for Sudoku statistics, and no Nintek account or backend. The current default-branch record says the signed 1.1 (20) IPA was not uploaded and no replacement build was attached. Later distribution may be in flight, so no TestFlight or public App Store availability is claimed. | [`Cortex@e09c594`](https://github.com/EnzoLopez2023/Cortex/tree/e09c594bfd4e70aeefaf53038771f2bee1f8f833), especially [`AppStore/P0-07_PREPARATION.md`](https://github.com/EnzoLopez2023/Cortex/blob/e09c594bfd4e70aeefaf53038771f2bee1f8f833/AppStore/P0-07_PREPARATION.md). |
| PulseWire | Entra-protected owner reader plus a separate 24-hour read-only demo. Uses PostgreSQL + pgvector, configured Azure AI Foundry deployments, RSS/source egress, revocable session ledger, and explicit unencrypted IndexedDB Saved snapshots. No self-service account export or deletion exists. The current catalog proves 317 unique URLs in 328 placements across 64 categories. No production host is published here. | [`PulseWire@5e64d62`](https://github.com/EnzoLopez2023/PulseWire/tree/5e64d62df4b67fdf40ff0673935db8fd0497fdd1), especially [`catalog.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/discover/catalog.ts), [`session-ledger.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/auth/session-ledger.ts), [`retention.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/retention.ts), and [`store.ts`](https://github.com/EnzoLopez2023/PulseWire/blob/5e64d62df4b67fdf40ff0673935db8fd0497fdd1/src/lib/offline/store.ts). The live health commit matched on 2026-08-22. |
| Tabloom | Private owner-and-guest PWA with Microsoft identity/email/activity, a shared SQLite workspace and persistent uploads. Explicit offline reading is bounded, read-only, identity-scoped IndexedDB and not end-to-end encrypted. Anthropic, Voyage AI, Azure Computer Vision Read API, and Azure OpenAI `gpt-image-1` have distinct roles. Workspace ZIP includes Markdown and attachments by default. Trash is 30 days, history is 50 versions, and self-service account deletion is absent. | [`tabloom@c4fad48`](https://github.com/EnzoLopez2023/tabloom/tree/c4fad4809d69d13c6c3f7dfde00e579ed2d99219), especially [`offline-reading.md`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/docs/offline-reading.md), [`pdf-image.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/lib/pdf-image.js), [`trash-sweep.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/lib/trash-sweep.js), and [`server.js`](https://github.com/EnzoLopez2023/tabloom/blob/c4fad4809d69d13c6c3f7dfde00e579ed2d99219/server.js). The live version SHA matched on 2026-08-22. |
| Sortie | Version 1.0 build 13 is `VALID` and in internal TestFlight, not attached for review and not public. The portrait iPhone-only iOS 14+ game uses local saves and optional Game Center with no account or backend. No final price, territory, or availability is configured. | [`Sortie@d4d5b67`](https://github.com/EnzoLopez2023/Sortie/tree/d4d5b673d772fad040e3f41d9cd134f99f27ae76), especially [`APP_STORE_STATUS.md`](https://github.com/EnzoLopez2023/Sortie/blob/d4d5b673d772fad040e3f41d9cd134f99f27ae76/APP_STORE_STATUS.md); release binary source is `af92dda`. |
| Salvo | In-development portrait iPad game with 16 current operations and a wider five-era plan. Game Center is disabled and excluded from the v1 export and is not claimed. There is no public listing or announced price; distribution may still be in flight, and the physical review and campaign gates remain. | [`Salvo@4f6cde0`](https://github.com/EnzoLopez2023/Salvo/tree/4f6cde08766a6d1113683b00de63a5bbf6ecd409), especially [`salvo-refactor-plan.md`](https://github.com/EnzoLopez2023/Salvo/blob/4f6cde08766a6d1113683b00de63a5bbf6ecd409/salvo-refactor-plan.md). |

## Platform delivery decisions

| Product | Web decision | Native relationship |
| --- | --- | --- |
| Tare | **Retired, relay-only.** No browser app, PWA install, offline web mode, web sign-in, or browser background reminders. | Native successor for iPhone, iPad, and Apple Watch; local SwiftData/private iCloud. |
| Workshop | **Online and account-backed.** Not an installable/offline PWA; no browser background-reminder claim. | Separate native client; draft 2.2.1 (12) is internal TestFlight preparation, not public. |
| Cairn | **Online and account-backed.** Not an installable/offline PWA. | Separate offline/local-first app with optional private iCloud; no shared identity, progress, or data. |

## Search and host policy

- Indexed canonical routes are `/`, `/about`, `/ios`, `/terms`, `/tare`,
  `/workshop`, `/cairn`, `/cortex`, `/sortie`, and `/salvo`.
- Privacy and support pages remain public and canonical but carry
  `noindex, follow`. Private/gated product surfaces (`/shopkeep`, `/tabloom`,
  `/pulsewire`, `/hearth`) and retired `/puzzlebox` remain `noindex, follow`.
- `https://www.nintek.com` is the canonical Azure Static Web Apps host. On
  2026-08-22, `GET https://nintek.com/` returned `301` to
  `http://www.nintek.com`, while apex subpaths such as `/cairn/`, `/robots.txt`,
  and `/sitemap.xml` returned `404`. That registrar-owned apex/subpath forwarding
  defect remains a blocked external task. This change does not mutate GoDaddy;
  all canonicals, sitemap entries, and social URLs stay on HTTPS `www`.

## Legal lifecycle routes

All reviewed privacy and support routes are public, canonical, and intentionally
`noindex, follow`; `/terms` is indexed. Product pages and the site footer link the
app-specific documents and shared terms. Dates below reflect source verification,
not a claim that provider terms or legal requirements cannot change.

| Route | Verified coverage | Current product evidence |
| --- | --- | --- |
| `/terms` | Shared plain-language site/app terms: content ownership and responsibility, acceptable use, providers, AI and professional-advice limits, pre-release status, warranties/liability, changes, and contact. | Nintek source and every product-specific policy below, verified 2026-08-22. |
| `/tare/privacy`, `/tare/support` | Native-only release boundary; SwiftData/private CloudKit/HealthKit; scoped stateless Anthropic relay; 16-table JSON export, 14 rolling backups, no account or in-app erase-all; legacy web cleanup explicitly incomplete. | `Tare-for-iOS@36b681a`; `Tare@04a2904`. |
| `/workshop/privacy`, `/workshop/support` | Separate Apple/Microsoft accounts; per-user SQLite/uploads; optional Anthropic URL analysis; online-only boundary; limited JSON summary; account deletion; seven local backups; internal-draft availability; manual post-restore deletion reconciliation. | `workshop@b45c028`; `Workshop-for-iOS@87d1743`. |
| `/shopkeep/privacy`, `/shopkeep/support` | Separate provider accounts; bearer-authenticated SQLite BLOB media; CSV/PDF/database exports; no offline mode; generation-safe deletion/recreation/restore; physical/App Store readiness gap. | `ShopKeep@948c439`; `ShopKeepNative@9f5597a`. |
| `/cairn/privacy`, `/cairn/support` | No account/backend; local SwiftData and private CloudKit; unresolved rejected submission/IAP boundary; Apple-controlled purchase and data records. | `CairnNative@48f6472`. |
| `/cortex/privacy`, `/cortex/support` | No account/backend; local gameplay; Sudoku-only private iCloud key-value data; App Group widgets; optional Game Center; no erase-all/export. | `Cortex@e09c594`. |
| `/sortie/privacy`, `/sortie/support` | iPhone-only internal-TestFlight boundary; local save and Apple-managed backup limits; optional Game Center; no Nintek account/backend or public listing. | `Sortie@d4d5b67`. |
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
| `public/social/tare.png` | **Deterministic branded composition; no product UI** | Built from the byte-verified Tare icon and the established Tare page visual language. Editable source: `public/social/source/tare.svg`. |
| `public/social/workshop.png` | **Deterministic composition with a real current web capture** | Built from the byte-verified Workshop icon and `public/apps/workshop/web-project.webp`, already classified above as a current web capture. Editable source: `public/social/source/workshop.svg`. |
| `public/social/cairn.png` | **Deterministic branded composition; no product UI** | Built from the byte-verified Cairn icon and established certification-trail motifs. Editable source: `public/social/source/cairn.svg`. |

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
