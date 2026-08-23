---
name: Nintek
description: The warm, product-led portfolio home for a family of web and native apps — with evidence-led, route-specific rooms.
colors:
  # House (Nintek warm world) — global.css :root
  cream: "#f5f0ea"
  cream-soft: "#faf7f4"
  paper: "#fdfaf7"
  ink: "#1c0f07"
  ink-soft: "#5c3d2a"
  ink-muted: "#9c8476"
  border: "#ede8e3"
  border-strong: "#d4c4b8"
  accent: "#a0522d"
  accent-deep: "#8b4513"
  copper: "#c17a2e"
  copper-soft: "#fef3e8"
  copper-edge: "#c9a882"
  walnut: "#1a0f07"
  walnut-text: "#f5ede0"
  # ShopKeep subworld (Native iOS Inventory Canon) — shopkeep-landing.css .sk-root
  shopkeep-system-grouped-background: "#f2f2f7"
  shopkeep-system-background: "#ffffff"
  shopkeep-label: "#1c1c1e"
  shopkeep-secondary-label: "#636366"
  shopkeep-separator: "#d1d1d6"
  shopkeep-system-blue: "#007aff"
  shopkeep-system-blue-deep: "#0057b8"
  shopkeep-dark: "#111217"
  shopkeep-on-dark: "#f5f5f7"
  # Sortie subworld (campaign atlas) — sortie-landing.css .so-root
  sortie-ink: "#10192a"
  sortie-ink-soft: "#41516a"
  sortie-paper: "#f7f2df"
  sortie-paper-deep: "#eadfbd"
  sortie-cobalt: "#2469e8"
  sortie-cobalt-deep: "#123d9d"
  sortie-signal-red: "#d4473f"
  sortie-gold: "#d4ae68"
  sortie-route: "#f0d18c"
  sortie-steel-blue: "#80aefc"
  sortie-night: "#07101d"
  # Salvo subworld (field-command dispatch) — salvo-landing.css .sa-root
  salvo-night: "#07101c"
  salvo-navy: "#10243a"
  salvo-steel: "#29445d"
  salvo-white: "#f4f7f8"
  salvo-bluegray: "#9eb0bf"
  salvo-amber: "#f59e3d"
  salvo-brass: "#ffd188"
  salvo-paper: "#eee8dc"
typography:
  brand:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  subworld-display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  data:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.63rem"
    fontWeight: 700
    lineHeight: 1.7
    letterSpacing: "0.04em"
  shopkeep-display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.8rem)"
    fontWeight: 760
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  shopkeep-body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  tabloom-display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.4rem, 5.5vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  tabloom-body:
    fontFamily: "Geist, -apple-system, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.008em"
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  pill: "9999px"
  hard: "0px"
  shopkeep-control: "12px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "13px 24px"
  sortie-button-primary:
    backgroundColor: "{colors.sortie-cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  sortie-button-quiet:
    textColor: "{colors.sortie-paper}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  salvo-button-primary:
    backgroundColor: "{colors.salvo-amber}"
    textColor: "#121b24"
    rounded: "{rounded.hard}"
    padding: "11px 18px"
  salvo-button-secondary:
    textColor: "{colors.salvo-white}"
    rounded: "{rounded.hard}"
    padding: "11px 18px"
  shopkeep-button-primary:
    backgroundColor: "{colors.shopkeep-system-blue}"
    textColor: "{colors.shopkeep-system-background}"
    rounded: "{rounded.shopkeep-control}"
    padding: "11px 19px"
  shopkeep-evidence-surface:
    backgroundColor: "{colors.shopkeep-system-grouped-background}"
    textColor: "{colors.shopkeep-label}"
    rounded: "{rounded.xl}"
    padding: "clamp(22px, 4vw, 38px)"
---

# Design System: Nintek

## Overview

**Creative North Star: "The Studio and Its Rooms"**

Nintek is one warm, crafted studio that opens onto a hallway of rooms. The house world — cream paper, copper hardware, walnut shadow, Space Grotesk wordmark — is calm, product-led, and consistent across the marketing surfaces (home, iOS catalogue, footers, cross-links). Each dedicated app page is a *room*: it is allowed to hold its own light, palette, type, and material so the product feels like itself, but it never stops being part of the house. The Nintek home-link mark always travels in the nav; immersive game rooms that ship a shared branded footer repeat the copper signature there.

This documents the incumbent site system, not a redesign. The rooms are verified, product-native subworlds derived from executable software and manifest-backed visual evidence; they are not free-for-all reskins. A subworld earns its palette from the product it advertises, keeps the shared discipline (semantic structure, keyboard-visible focus, strong contrast, responsive layout, stable media dimensions, honest reduced-motion, and truthful release boundaries), and identifies what kind of evidence the visitor is seeing.

The portfolio is evidence-first. Each release visual starts with an immutable product authority and its manifest, then uses only the exact local asset and capture class supported there. A missing screenshot is represented as a visible gap — normally a canonical icon with release facts — rather than filled with stale art, synthetic UI, an App Store recompression, or a different capture class. Sortie, Salvo, and ShopKeep are route-specific examples of the room pattern, never replacements for the house defaults.

**Key Characteristics:**
- One warm house system (cream / copper / walnut, Space Grotesk) shared by all marketing surfaces.
- Dedicated app pages adopt a verified product-native subworld — its own color, type, form language, and real media.
- The Nintek home-link mark is non-negotiable; the copper footer signature remains scoped to rooms that ship the shared branded footer.
- Release evidence is manifest-backed, with exact capture classes and visible provenance labels.
- Missing screenshot masters resolve to honest icon-led evidence, never substitute UI.
- ShopKeep build 35 and Workshop build 13 use icon-led native evidence because their exact screenshot masters are untracked; Workshop separately retains its current web capture.
- Tare uses labeled Simulator marketing/support derivatives; Salvo uses labeled automated iPad release captures and remains content-blocked.
- Cortex and Sortie preserve distinct exact social handoffs; Tabloom and PulseWire use deterministic fictional fixtures, with PulseWire owner data excluded.
- Complete `prefers-reduced-motion` coverage on every surface, including subworlds.

## Colors

A warm, low-glare house palette anchored on cream and walnut with a single copper family accent; each subworld overlays its own product-native scheme while copper is held back to the signature.

### Primary
- **Sienna Accent** (`#a0522d`): the house action color — CTA gradients, links, active nav. Paired with **Bark Accent** (`#8b4513`) as its deep stop.
- **Nintek Copper** (`#c17a2e`): the family signature hue. It carries the brand mark's amber dots, the "native" nav pulse, and the footer copper gradient. It is deliberately scarce.

### Secondary — Sortie subworld (campaign atlas)
- **Cobalt Keep** (`#2469e8`, deep `#123d9d`): Sortie's primary action and one anchor of the route line.
- **Signal-Red Keep** (`#d4473f`): the opposing keep; the far end of the supply route.
- **Parchment Gold / Route** (`#d4ae68` / `#f0d18c`): the drawn supply line and atlas gilding.
- **Steel-Blue** (`#80aefc` on ink `#10192a`, paper `#f7f2df`): heading emphasis and cool type over parchment-dark fields.

### Tertiary — Salvo subworld (field-command dispatch)
- **Ordnance Amber / Brass** (`#f59e3d` / `#ffd188`): Salvo's primary action and the single instrument sweep.
- **Command Navy / Night / Steel** (`#10243a` / `#07101c` / `#29445d`): the dark command surface and its hard rules.
- **Cool White** (`#f4f7f8`, muted blue-gray `#9eb0bf`): type on the command surface.

### Product-native — ShopKeep (Native iOS Inventory Canon)
- **System Blue** (`#007aff`, deep `#0057b8`): ShopKeep's sole selectable interaction accent for links, focus, state, and primary action.
- **System Surfaces** (`#f2f2f7` grouped background, `#ffffff` surface): the iOS inventory field and its continuous white records.
- **System Labels** (`#1c1c1e`, secondary `#636366`, separator `#d1d1d6`): native-weight text and hairlines; the destructive/deletion passage moves to near-black `#111217` with cool-white `#f5f5f7`.

### Neutral
- **Cream** (`#f5f0ea`, soft `#faf7f4`, paper `#fdfaf7`): house page and card surfaces.
- **Walnut Ink** (`#1c0f07`, soft `#5c3d2a`, muted `#9c8476`): house text ramp.
- **Border** (`#ede8e3`, strong `#d4c4b8`): house hairlines and dividers.
- **Status chips** (`good` blue, `excellent` / `emerald` green, `amber`, `indigo`): reserved for factual state badges on cards; not decorative.

### Named Rules
**The Copper Signature Rule.** Copper (`#c17a2e`) is the family mark, not a subworld accent. Inside a room it appears in the shared Nintek home-link and, where implemented, the branded footer signature; the room's own actions use its own accent, never copper.

**The Earned-Palette Rule.** A subworld's colors must come from the real product it advertises (its art, its UI, its captures). Do not invent a palette to decorate a page.

## Typography

**Display / Brand Font (house):** Space Grotesk (with system-ui) — the wordmark and house headings.
**Body Font (house):** the native system stack (`system-ui, -apple-system, Segoe UI, Roboto…`).
**Subworld Display Font:** Archivo (with system-ui) — headings and body inside Sortie and Salvo.
**Data / Label Font:** Martian Mono (with `ui-monospace`) — uppercase telemetry, proof strips, and state chips inside the campaign rooms.
**ShopKeep Display Font:** the Apple system stack with `SF Pro Display` named for headings.
**ShopKeep Body Font:** the Apple system stack with `SF Pro Text` named for prose and evidence facts.
**Tabloom Display Font:** Newsreader — the product's editorial notebook voice.
**Tabloom Body Font:** Geist — the product's compact worktable and navigation voice.

**Character:** House type is confident and modern-humanist with tight tracking. The campaign rooms are heavier and more architectural (Archivo 800, near-1.0 line-height) with a monospace instrument-readout voice. ShopKeep deliberately removes the display-font performance and follows native SF hierarchy instead. Tabloom pairs Newsreader's editorial warmth with Geist's compact workspace utility because those faces are part of the product-native visual manifest.

### Hierarchy
- **Brand** (Space Grotesk 700, 1.45rem, `-0.02em`): wordmark lockups.
- **Display** (Space Grotesk 800, `clamp(2.6rem, 6vw, 4.2rem)`, line-height ~1.04, `-0.035em`): house hero H1; copper-gradient emphasis span for the accented word.
- **Subworld Display** (Archivo 800, up to `clamp(3.2rem, 7vw, 6rem)`, line-height ~0.92, `-0.04em`): subworld hero H1; the accented line breaks to a colored `span` (Sortie steel-blue, Salvo amber).
- **Body** (system-ui 400, line-height 1.6): house prose; subworld lede runs longer line-height (~1.72) at `~54–57ch`.
- **Data / Label** (Martian Mono 700, `~0.58–0.66rem`, `+0.04em`, uppercase): proof/telemetry strips, figcaptions, state chips.
- **ShopKeep Display** (SF Pro Display/system 760, `clamp(3rem, 7vw, 5.8rem)`, line-height 0.98, `-0.04em`): native-inventory hero and section headings.
- **ShopKeep Body** (SF Pro Text/system 400, 1rem baseline, line-height 1.7): inventory and release explanation; compact release labels use the same system family at 0.72–0.78rem.
- **Tabloom Display** (Newsreader 500, up to 4rem, line-height 1.12): notebook hero and editorial emphasis.
- **Tabloom Body** (Geist 400–700, 1rem baseline, line-height 1.65): workspace prose, controls, and fixture captions.

### Named Rules
**The Two-Voice Campaign Rule.** Sortie and Salvo pair Archivo with Martian Mono. The house keeps Space Grotesk with system body, while ShopKeep uses SF display/text throughout. A room's product-native voice never leaks into the house chrome.

## Layout

Centered single-column shell. House container is `max-width: 1140px` with `28px` gutters (`.container`); subworld shells use `width: min(100% - 48px, 1160–1200px)`. Heroes are a two-column split — copy left, evidence right — using `grid-template-columns: minmax(0, ~1fr) minmax(0/380–440px, ~1.1fr)` with `clamp()` column gaps (`48–112px`). Rhythm is section-based (house `.promo` ≈ 64px block padding; subworld heroes 72–128px). The house breakpoint collapses the split at **880px**; ShopKeep collapses at **900px** and switches to 32px total gutters/full-width actions at **620px**. Nav is a three-column grid (`1fr auto 1fr`) so the brand centers; it may be absolute over an immersive subworld hero or sticky over product-native system surfaces.

Evidence media keeps its recorded aspect ratio and declared dimensions. Responsive changes may choose a separately manifest-backed mobile capture, as Tabloom and PulseWire do at 620px, but never crop or relabel one class to impersonate another.

## Elevation & Depth

Hybrid. The house leans on soft, warm, downward shadows for lift and a fixed grain overlay for texture; subworlds convey depth through dark-field layering, colored glows, and manifest-backed evidence frames, with restraint.

### Shadow Vocabulary
- **Float** (`0 30px 80px -20px rgba(28,15,7,.28), 0 8px 24px -12px rgba(28,15,7,.18)`): house hero mock — the highest lift.
- **Card** (`0 14px 40px -10px rgba(28,15,7,.18), 0 4px 12px -6px rgba(28,15,7,.12)`): house cards/containers.
- **Accent** (`0 10px 28px -8px rgba(160,82,45,.45)`): under the copper CTA.
- **Subworld action glow** (e.g. Sortie `0 13px 30px -12px rgba(36,105,232,.75)`, Salvo `0 15px 32px -13px rgba(245,158,61,.7)`): the subworld's colored lift under its primary button; deepens on hover.
- **ShopKeep evidence** (`0 24px 60px -36px rgba(28,28,30,.44)`): quiet native-system lift under the icon-led release card.

### Named Rules
**The Warm-Shadow Rule.** House shadows are tinted with walnut (`rgba(28,15,7,…)`), never neutral black. Subworld glows are tinted with that subworld's accent.

## Shapes

The house form language is soft: rounded radii `--r-sm 8px`, `--r-md 14px`, `--r-lg 20px`, `--r-xl 28px`, with fully-pill (`9999px`) CTAs, chips, and eyebrows. Subworlds choose their own form language to match the product, and the documented examples diverge on purpose:

- **Sortie is rounded and cartographic:** pill actions (`999px`), circular nodes, and an organic "hand-drawn" blob mask on its atlas art (`border-radius: 46% 54% 40% 60% / 8% 11% 89% 92%`). The moving route line is its signature silhouette.
- **Salvo is hard and instrumented:** buttons, chips, panels, and rules are square (`border-radius: 0`) with `1px` steel strokes; the only curves are the nav wordmark tile (`9px`) and status dots. This "no-radius" stance is Salvo's identity.
- **ShopKeep is continuous and native:** 12px controls, 14px records, 28px evidence panels, and canonical app icons clipped to 22.5%. Hairline system separators carry structure instead of decorative framing.

## Components

### Buttons
- **House Primary (`.ns-btn`):** copper→sienna gradient (`linear-gradient(120deg, accent, copper)`), white text, **pill** (`9999px`), padding `13px 24px`, `shadow-accent`. Hover: `translateY(-2px)`, deeper shadow, and a `+4px` arrow-glyph nudge.
- **Sortie Primary (`.so-button-primary`):** cobalt fill, white text, pill, padding `11px 18px`, cobalt glow. **Quiet** variant: `1px` translucent-paper border on the dark field.
- **Salvo Primary (`.sa-button-primary`):** amber fill on dark-ink text (`#121b24`), **square** (no radius), `1px transparent` border, amber glow. **Secondary** variant: `1px` steel border, cool-white text.
- **ShopKeep Primary (`.sk-button-primary`):** system-blue fill, white text, 12px continuous corner, padding `11px 19px`. **Secondary** keeps the surface open with a system-blue stroke and deep-blue text.
- **Shared behavior:** `min-height: 48px` and `translateY(-2px)` on hover. Campaign buttons use 250ms easing; ShopKeep uses 180ms with the same `cubic-bezier(0.22, 1, 0.36, 1)` curve.

### Cards / Containers
- **House:** cream/paper surfaces, `--r-lg`/`--r-xl` corners, `border` hairline, `shadow-card` or `shadow-float`. Subworld panels adopt the subworld surface and its form language (Sortie rounded, Salvo square with steel rules, ShopKeep continuous iOS grouping).

### Navigation
- Three-column grid (`1fr auto 1fr`), brand centered. Links are quiet muted text that resolve to full ink/white on hover. On house pages the nav is sticky with a blurred cream backdrop; over an immersive subworld hero it is absolute and transparent with a hairline bottom border. ShopKeep keeps the nav sticky over a blurred system-grouped background and uses a system-blue private-build pill. Campaign rooms may add a mono state chip (e.g. Salvo brass on steel).

### Nintek Home-Link Mark (signature; `NintekBack.astro`)
The 3×3 copper N-grid at 50% opacity (→ 100% on hover) linking to `/`, followed by a faint vertical separator, placed left of the app's own brand mark in the subworld nav. **Required on every subworld.**

### Nintek Signature (signature; `BrandMark.astro`)
The copper/cream N-grid dot mark (7 copper dots trace the letter N) beside the word "Nintek" in the footer. It remains the return-to-house signature on routes that ship the shared branded footer; route-specific footers do not add a decorative copy merely to satisfy a template.

### Release Evidence Frames (signature system)

**The Evidence-First Rule.** Start with the immutable product authority and manifest, then select the exact asset bytes the manifest permits. When an exact screenshot master is unavailable, show the canonical icon and release facts; never fill the gap with retired art, synthetic UI, a CDN recompression, or a screenshot from another build.

**The Exact Capture-Class Rule.** `simulator-marketing-derivative`, `simulator-support-derivative`, `automated-ipad-release-capture`, `current-web-capture`, `deterministic-fictional-fixture`, `source-art-derivative`, `deterministic-branded-composition`, `upstream-authored-social-source`, and physical-device evidence are different things. Preserve the manifest class internally and use a plain-language visible caption that does not upgrade the evidence.

- **ShopKeep:** the Native iOS Inventory Canon uses system surfaces, SF typography, system blue, continuous containers, and an icon-led build card. Build 2.0.1 (35) reads “Attached · VALID” and “Private · not public.” Fourteen exact screenshot masters are untracked, so the canonical icon is the only native visual; the retained 1200×630 social image is a deterministic branded composition, not product UI.
- **Tare:** paired iPhone/iPad assets are `simulator-marketing-derivative` captures. The hero labels read “iOS 26.5 Simulator · fictional data” and “iPadOS 26.5 Simulator · fictional data”; the release grid reads “iPhone / iPad Simulator pair · fictional sample data.” The Watch image is a `simulator-support-derivative` labeled “Recorded support capture · setup state,” followed by what it does not prove. None is physical-device evidence.
- **Workshop:** retain the separately classified `current-web-capture` in browser chrome. Native build 2.2.1 (13) is icon-only evidence labeled Attached · VALID, Internal TestFlight, and Not available; ten manifest-recorded screenshot masters are untracked, so unavailable and superseded native images stay absent.
- **Cortex / Sortie social:** Cortex's `editable-social-source` renders a `deterministic-branded-composition` at 1200×630 from its canonical icon and violet/teal identity, without product UI or availability claims. Sortie uses the exact upstream handoff: its SVG is `upstream-authored-social-source` and its PNG is `deterministic-branded-composition`; source art and handoff footage keep their own classes and are never renamed gameplay screenshots.
- **Salvo:** six exact 2064×2752 assets are `automated-ipad-release-capture`, with visible “not physical-device evidence” labeling. Version 1.0.0 (4) remains prepare-for-submission and content-blocked: only 16 Age of Siege operations are current, while the wider five-era campaign is not release proof.
- **Tabloom / PulseWire:** desktop and mobile product views are exact `deterministic-fictional-fixture` captures selected responsively. Tabloom labels its fictional local fixture; PulseWire labels its controlled fictional fixture and absence of owner data. PulseWire's social handoff uses the same fictional-fixture boundary.

## Do's and Don'ts

### Do:
- **Do** keep every marketing surface on the house world (cream `#f5f0ea`, copper `#c17a2e`, walnut ink, Space Grotesk).
- **Do** give a dedicated app page its own verified subworld — product-native palette, typography, form language, and evidence treatment.
- **Do** ship the Nintek home-link mark in every room; preserve the copper N signature wherever the route already uses the shared branded footer.
- **Do** use warm walnut-tinted shadows in the house and accent-tinted glows in subworlds.
- **Do** ship a complete `prefers-reduced-motion` block on every surface — subworlds disable their signature motion (Sortie route travel, Salvo instrument sweep) and clamp all animation/transition to `~0.001ms`.
- **Do** state release status honestly and caption every evidence visual with its exact class in human-readable language.
- **Do** use an icon-led evidence state when exact screenshot masters are absent.

### Don't:
- **Don't** use copper as a subworld action color — copper is the family signature only (subworld actions use the subworld accent: Sortie cobalt, Salvo amber).
- **Don't** invent a subworld palette or product UI to decorate a page; earn it from the real product.
- **Don't** collapse Simulator, automated, deterministic-fixture, source-art, social-composition, and physical-device evidence into the generic word “screenshot.”
- **Don't** replace an unavailable manifest-backed master with stale, regenerated, recompressed, or synthetic UI.
- **Don't** carry one subworld's form language into another — Sortie stays rounded/pill/organic, Salvo stays square/steel/no-radius.
- **Don't** drop the Nintek nav home-link, or remove the copper signature from a route that ships the shared branded footer.
- **Don't** mix a subworld's display face (Archivo) into the house chrome, or the house wordmark face into a subworld hero.
- **Don't** animate without a reduced-motion fallback, or claim features the product doesn't ship (no multiplayer, economy, or backend sync).
