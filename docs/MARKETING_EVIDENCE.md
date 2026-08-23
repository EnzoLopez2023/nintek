# Marketing evidence ledger

Canonical marketing evidence for `www.nintek.com`.

**Base verification:** 2026-08-22 for deployed services and standing legal
boundaries. **Canonical visual sync:** 2026-08-23 against the immutable release
manifests listed below. Product code and its app-local manifest win if they
diverge. Product facts flow into this site; this site never drives an app change.

The machine-readable mirror is [`docs/release-visuals.json`](release-visuals.json).

## Publication rules

- A valid, attached, internal-TestFlight, or App-Store-eligible build is not a
  public release. Publish no acquisition link without dated public evidence.
- Do not infer a price, territory, approval, submission, or release date.
- Do not expose private hosts, backend locators, credentials, reviewer accounts,
  or owner-pending social copy.
- A Simulator capture, automated offscreen capture, deterministic fixture,
  source-art derivative, and physical-device capture are different evidence
  classes. Label each precisely.
- Never substitute source art, an Astro mock, an App Store CDN recompression, or
  a regenerated image when an exact manifest-backed screenshot is unavailable.
- PWA, offline, account, provider, and background-delivery claims are
  product-specific and must remain scoped to the product that implements them.

## Canonical release authorities

| Product | Immutable authority | Public claim boundary |
| --- | --- | --- |
| Tare | [`Tare-for-iOS@9154a7e`](https://github.com/EnzoLopez2023/Tare-for-iOS/tree/9154a7e061fe9be31426741ee94ba09da5a4c050), [`app-store/release-visuals.json`](https://github.com/EnzoLopez2023/Tare-for-iOS/blob/9154a7e061fe9be31426741ee94ba09da5a4c050/app-store/release-visuals.json), SHA-256 `2a63f42b0953585543e0d65d81170f25c5153e97c861e0734a9af58b86e2ab2f` | Version 1.0 build 31 is VALID, attached, and internal TestFlight only. No public listing, price, territory, App Review submission, physical-device proof, HealthKit proof, or App Attest proof is claimed. |
| Workshop | [`Workshop-for-iOS@32248fc`](https://github.com/EnzoLopez2023/Workshop-for-iOS/tree/32248fcfec06195f847aaaa56e036f5b92d2981a), [`AppStore/RELEASE_VISUAL_MANIFEST.json`](https://github.com/EnzoLopez2023/Workshop-for-iOS/blob/32248fcfec06195f847aaaa56e036f5b92d2981a/AppStore/RELEASE_VISUAL_MANIFEST.json), SHA-256 `89615b9c298415591e180ea629424663b8af5b5c73acab8322064daa6ab3e4b2` | Build 2.2.1 (13) is VALID, attached, and internal TestFlight under listing name **Nintek Workshop**. Build 12 is detached and non-submittable. No public release, acquisition link, price, or completed physical/reviewer/privacy gate is claimed. |
| ShopKeep | [`ShopKeepNative@b1a757b`](https://github.com/EnzoLopez2023/ShopKeepNative/tree/b1a757b84500fc7b051b0c0b7599b9f7906a0a1e), [`AppStorePreview/release-visual-manifest.json`](https://github.com/EnzoLopez2023/ShopKeepNative/blob/b1a757b84500fc7b051b0c0b7599b9f7906a0a1e/AppStorePreview/release-visual-manifest.json), SHA-256 `6de1f3573886c0cfd1947197c54f4842f5e1290dcb538ff8d87ac81b71b3df03` | Version 2.0.1 build 35 is VALID and attached to a PREPARE_FOR_SUBMISSION version named **ShopKeep for iOS**. Apple and Microsoft create separate workspaces. No public listing, TestFlight link, price, review submission, or completed physical-device gate is claimed. |
| Cairn | [`CairnNative@07f2ece`](https://github.com/EnzoLopez2023/CairnNative/tree/07f2ecea7e31bddb0b66612571010ac1514ac14f), [`AppStore/ReleaseVisuals/manifest.json`](https://github.com/EnzoLopez2023/CairnNative/blob/07f2ecea7e31bddb0b66612571010ac1514ac14f/AppStore/ReleaseVisuals/manifest.json), SHA-256 `607e525f9efbb8c64cb59b345538cf3ec7c3b6ac1eaa927233186e7f443b63d4` | Version 3.0 build 2 remains rejected; the combined submission is unresolved; the $14.99 US Full Exam Library IAP remains in review. No public listing exists. |
| Cortex | [`Cortex@32a7bde`](https://github.com/EnzoLopez2023/Cortex/tree/32a7bde9cb5a4cc4af0507a35e53faa5ae58d01f), [`AppStore/release_visual_manifest.json`](https://github.com/EnzoLopez2023/Cortex/blob/32a7bde9cb5a4cc4af0507a35e53faa5ae58d01f/AppStore/release_visual_manifest.json), SHA-256 `c0b8758bab7e4201ab5d61bd774eb4a097dfb79d6b809558448d08fb7f603ec2` | Version 1.1 build 21 is VALID, attached, and internal TestFlight. External beta is not available; there is no App Review submission or public listing. |
| Sortie | [`Sortie@be654b9`](https://github.com/EnzoLopez2023/Sortie/tree/be654b971f5011537c479511f1122c0b94b5d337), [`appstore/release-visuals.json`](https://github.com/EnzoLopez2023/Sortie/blob/be654b971f5011537c479511f1122c0b94b5d337/appstore/release-visuals.json), SHA-256 `4d3b23985ede46439daca018e346fd17ea7f9728f320fbd76b46dea48fd20da8` | Version 1.0 build 13 is VALID and internal TestFlight, but is not attached for review or public. Physical-iPhone gameplay screenshots remain blocked. |
| Salvo | [`Salvo@3fb91b0`](https://github.com/EnzoLopez2023/Salvo/tree/3fb91b02f9ec1d29c63caa7ba3080290b3b9e607), [`release/release-visuals.json`](https://github.com/EnzoLopez2023/Salvo/blob/3fb91b02f9ec1d29c63caa7ba3080290b3b9e607/release/release-visuals.json), SHA-256 `1bd4308390cac4f66005bf5691afd4f3504d2afaec90f6cbf2740de28732fc20` | Version 1.0.0 build 4 is VALID and attached but remains PREPARE_FOR_SUBMISSION. Only 16 Age of Siege operations are current; wider campaign publication is blocked. Game Center is excluded from v1. |
| Tabloom | [`tabloom@acfa8a9`](https://github.com/EnzoLopez2023/tabloom/tree/acfa8a95d1b9e39b995c9e34549f638aafd77352), [`docs/release-visuals/manifest.json`](https://github.com/EnzoLopez2023/tabloom/blob/acfa8a95d1b9e39b995c9e34549f638aafd77352/docs/release-visuals/manifest.json), SHA-256 `e26df22695e3bf0fb41c0c2beb2837401955200c1646555c654db6b394474c85` | Current private web deployment is 2.5.0+59 at `acfa8a9`. Offline access is bounded, explicit, identity-scoped, and read only; no offline writes, queued mutations, Background Sync, or Web Share Target. |
| PulseWire | [`PulseWire@6b4c1c7`](https://github.com/EnzoLopez2023/PulseWire/tree/6b4c1c79e5158ad1d1ec8b89195751e469e7310e), [`docs/release-visuals/manifest.json`](https://github.com/EnzoLopez2023/PulseWire/blob/6b4c1c79e5158ad1d1ec8b89195751e469e7310e/docs/release-visuals/manifest.json), SHA-256 `e490a4664ced9cf06e1334178ff28ee402c17296176b8968d1b3f3469c345fe7` | Private Entra owner reader plus separate 24-hour read-only demo. Release visuals use controlled fictional fixtures and establish no live feed count, so neither 237 nor 317 is published. |

## Platform delivery decisions

| Product | Web decision | Native relationship |
| --- | --- | --- |
| Tare | **Retired, relay-only.** No browser app, PWA install, offline web mode, web sign-in, or browser background reminders. | Native successor for iPhone, iPad, and Apple Watch; local SwiftData/private iCloud. |
| Workshop | **Online and account-backed.** Not an installable/offline PWA; no browser background-reminder claim. | Separate native client; build 13 is internal TestFlight, attached, and not public. |
| ShopKeep | **Private and account-backed.** The web shell does not imply offline inventory. | Native build 35 uses the same service; Apple and Microsoft workspaces remain separate. |
| Cairn | **Online and account-backed.** Not an installable/offline PWA. | Separate offline/local-first app with optional private iCloud; no shared identity, progress, or data. |
| Tabloom | **Private installable PWA.** Offline reading is explicit, bounded, and read only. | No native app is claimed. |
| PulseWire | **Private owner workspace plus fictional read-only demo.** Explicit Saved snapshots are the only offline content. | No native app is claimed. |

## Search and host policy

- Indexed canonical routes are `/`, `/about`, `/ios`, `/terms`, `/tare`,
  `/workshop`, `/cairn`, `/cortex`, `/sortie`, and `/salvo`.
- Privacy and support pages remain public and canonical but carry
  `noindex, follow`. Private/gated product surfaces (`/shopkeep`, `/tabloom`,
  `/pulsewire`, `/hearth`) and retired `/puzzlebox` remain `noindex, follow`.
- `https://www.nintek.com` is canonical. The default SWA host is
  `https://lively-field-047efca0f.7.azurestaticapps.net`.
- The registrar-owned apex/subpath forwarding defect remains outside this repository;
  all canonicals, sitemap entries, and social URLs stay on HTTPS `www`.

## Legal lifecycle routes

All reviewed privacy and support routes are public, canonical, and intentionally
`noindex, follow`; `/terms` is indexed.

| Route | Verified coverage | Current authority |
| --- | --- | --- |
| `/terms` | Shared plain-language terms for content, providers, AI, unavailable software, warranties, and contact. | Nintek source, 2026-08-23. |
| `/tare/privacy`, `/tare/support` | Native-only boundary; SwiftData/private CloudKit/HealthKit; optional stateless relay; backups; retained legacy web data; internal TestFlight only. | `Tare-for-iOS@9154a7e`; `Tare@04a2904`. |
| `/workshop/privacy`, `/workshop/support` | Separate Apple/Microsoft workspaces; online-only account data; limited export; provider-scoped deletion; build 13 internal and not public. | `Workshop-for-iOS@32248fc`; `workshop@b45c028`. |
| `/shopkeep/privacy`, `/shopkeep/support` | Separate Apple/Microsoft workspaces; private SQLite BLOB media; exports; server-confirmed provider-scoped deletion; build 35 private and attached. | `ShopKeepNative@b1a757b`; `ShopKeep@948c439`. |
| `/cairn/privacy`, `/cairn/support` | No account/backend; local SwiftData/private CloudKit; unresolved rejected submission and IAP boundary. | `CairnNative@07f2ece`. |
| `/cortex/privacy`, `/cortex/support` | No Nintek account/backend; local play; Sudoku-only private iCloud; widgets; optional Game Center; build 21 internal only. | `Cortex@32a7bde`. |
| `/sortie/privacy`, `/sortie/support` | iPhone-only internal-TestFlight boundary; local save; optional Game Center; no public listing; physical screenshots blocked. | `Sortie@be654b9`. |
| `/salvo/privacy`, `/salvo/support` | Offline local save; no account/backend/analytics/IAP/Game Center; 16-operation content boundary; unreleased build 4. | `Salvo@3fb91b0`. |
| `/tabloom/privacy`, `/tabloom/support` | Microsoft identity; provider processing; bounded unencrypted read-only IndexedDB; export, Trash, history, and manual deletion limits. | `tabloom@acfa8a9`. |
| `/pulsewire/privacy`, `/pulsewire/support` | Entra owner plus read-only demo; source egress; Saved snapshots; retention/session controls; manual export/deletion gap. | `PulseWire@6b4c1c7`. |

## Asset evidence

| Surface | Classification and provenance |
| --- | --- |
| Tare | Canonical icon plus 12 iPhone/iPad Simulator derivatives and one Watch Simulator support/setup derivative from `Tare-for-iOS@9154a7e`. All use fictional data. The Watch image does not prove Quick Log, queue delivery, complications, or physical-device behavior. |
| Workshop | Canonical icon remains byte-identical. The current web capture remains separately classified as a real web capture. Ten build 13 native masters are manifest-recorded but untracked and unavailable from the immutable commit; stale native screenshots were removed instead of substituted. |
| ShopKeep | Canonical build 35 icon plus the retained PR #9 1200x630 branded social composition. Fourteen build 35 Simulator masters are manifest-recorded but untracked and unavailable; retired toolpath-arrow art and synthetic interface mockups were removed. |
| Cairn | Canonical icon remains byte-identical. The social card remains a deterministic branded composition with no product UI. The rejected release state is unchanged. |
| Cortex | Canonical icon and all nine existing Simulator-derived game views match the immutable manifest. The new 1200x630 social card uses the canonical icon and violet/teal neural identity without depicting product UI or availability. |
| Sortie | The existing icon, wordmark, video/poster handoff, two biome derivatives, and three keep derivatives retain their exact hashes. Source art is never labeled gameplay. The new social SVG/PNG pair is copied byte-for-byte from `Sortie@be654b9`. Physical-device gameplay screenshots remain blocked. |
| Salvo | Six exact 2064x2752 automated iPad release candidates were copied from `Salvo@3fb91b0` and are not physical-device evidence. Social approval is still pending, so the page uses the canonical icon rather than a release screenshot as its social image. |
| Tabloom | Exact 1440x900 desktop and 390x844 mobile captures from `tabloom@acfa8a9`; both show current product UI with controlled fictional local fixtures. The existing square SVG/PNG is the manifest-backed social handoff. |
| PulseWire | Exact current icon plus 1440x900 desktop, 390x844 mobile, and 1200x630 social captures from `PulseWire@6b4c1c7`. All use controlled fictional fixtures and contain no owner data. |

## Deterministic social pipeline

`npm run social:build` renders each nintek-authored SVG at 1200x630 with pinned
Sharp 0.35.3, density 144, PNG compression level 9, adaptive filtering, and no
palette. The script inlines local raster references, then inserts CRC-valid PNG
`tEXt` chunks immediately after `IHDR` in this exact order: `Title`, `Prompt`,
`Source`, `Generator`. The `Generator` chunk retains the original canonical
`sharp 0.34.5` provenance string; the secured 0.35.3 renderer reproduces those
bytes exactly. Sharp writes `pHYs=(5669,5669,1)`.

`npm run social:check` renders in memory and requires byte equality. Tare,
Workshop, and Cairn reproduce their existing canonical hashes; Cortex is
generated from its new SVG. ShopKeep's exact PR #9 PNG is preserved byte-for-byte
and hash-checked rather than rerendered. Sortie and PulseWire are upstream-authored
exact PNG handoffs and are therefore copied, not regenerated locally. CI runs
the checked-in source/output hash verification in `check:site`; raster
regeneration remains an explicit pinned-environment maintenance command because
the incumbent SVGs use platform fonts.

## Refresh procedure

1. Read the app manifest at an immutable commit on the remote default branch.
2. Record the exact commit, manifest path, manifest SHA-256, and UTC verification date.
3. Fetch only bytes available from that immutable commit and verify hash plus dimensions.
4. Record the capture class and source/output relationship in `docs/release-visuals.json`.
5. Omit unavailable exact masters instead of substituting stale or recompressed images.
6. Update release copy, privacy/support boundaries, social metadata, and the app registry together.
7. Run `npm run check`, the Impeccable detector, and one bounded desktop/mobile inspection plus one confirmation pass.
