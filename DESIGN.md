---
name: Nintek
description: The warm, product-led portfolio home for a family of small native apps — with per-product subworlds on dedicated app pages.
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
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  pill: "9999px"
  hard: "0px"
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
---

# Design System: Nintek

## Overview

**Creative North Star: "The Studio and Its Rooms"**

Nintek is one warm, crafted studio that opens onto a hallway of rooms. The house world — cream paper, copper hardware, walnut shadow, Space Grotesk wordmark — is calm, product-led, and consistent across the marketing surfaces (home, iOS catalogue, footers, cross-links). Each dedicated app page is a *room*: it is allowed to hold its own light, palette, type, and material so the product feels like itself, but it never stops being part of the house. Two things always travel with you between rooms — the Nintek home-link mark in the nav and the copper signature in the footer.

This documents the incumbent site system, not a redesign. The rooms are verified, product-native subworlds derived from real software and real captures; they are not free-for-all reskins. A subworld earns its palette from the actual game art and UI it advertises, keeps the shared discipline (semantic structure, keyboard-visible focus, strong contrast, responsive layout, stable media dimensions, honest reduced-motion, and truthful use of real assets), and states its private, internal, review-blocked, or public release boundary plainly. Sortie and Salvo are route-specific examples of the subworld pattern, never replacements for the house defaults.

**Key Characteristics:**
- One warm house system (cream / copper / walnut, Space Grotesk) shared by all marketing surfaces.
- Dedicated app pages adopt a verified product-native subworld — its own color, type, form language, and real media.
- The Nintek home-link mark (nav) and copper N signature (footer) are non-negotiable on every subworld.
- Real shipped/pre-release captures only; no invented product UI.
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

### Neutral
- **Cream** (`#f5f0ea`, soft `#faf7f4`, paper `#fdfaf7`): house page and card surfaces.
- **Walnut Ink** (`#1c0f07`, soft `#5c3d2a`, muted `#9c8476`): house text ramp.
- **Border** (`#ede8e3`, strong `#d4c4b8`): house hairlines and dividers.
- **Status chips** (`good` blue, `excellent` / `emerald` green, `amber`, `indigo`): reserved for factual state badges on cards; not decorative.

### Named Rules
**The Copper Signature Rule.** Copper (`#c17a2e`) is the family mark, not a subworld accent. Inside a subworld it appears only in the shared Nintek home-link and footer signature; the subworld's own actions use the subworld's own accent (Sortie cobalt, Salvo amber), never copper.

**The Earned-Palette Rule.** A subworld's colors must come from the real product it advertises (its art, its UI, its captures). Do not invent a palette to decorate a page.

## Typography

**Display / Brand Font (house):** Space Grotesk (with system-ui) — the wordmark and house headings.
**Body Font (house):** the native system stack (`system-ui, -apple-system, Segoe UI, Roboto…`).
**Subworld Display Font:** Archivo (with system-ui) — headings and body inside Sortie and Salvo.
**Data / Label Font:** Martian Mono (with `ui-monospace`) — uppercase telemetry, proof strips, and state chips inside subworlds.

**Character:** House type is confident and modern-humanist with tight tracking; subworld type is heavier and more architectural (Archivo 800, near-1.0 line-height) with a monospace "instrument readout" voice for micro-labels.

### Hierarchy
- **Brand** (Space Grotesk 700, 1.45rem, `-0.02em`): wordmark lockups.
- **Display** (Space Grotesk 800, `clamp(2.6rem, 6vw, 4.2rem)`, line-height ~1.04, `-0.035em`): house hero H1; copper-gradient emphasis span for the accented word.
- **Subworld Display** (Archivo 800, up to `clamp(3.2rem, 7vw, 6rem)`, line-height ~0.92, `-0.04em`): subworld hero H1; the accented line breaks to a colored `span` (Sortie steel-blue, Salvo amber).
- **Body** (system-ui 400, line-height 1.6): house prose; subworld lede runs longer line-height (~1.72) at `~54–57ch`.
- **Data / Label** (Martian Mono 700, `~0.58–0.66rem`, `+0.04em`, uppercase): proof/telemetry strips, figcaptions, state chips.

### Named Rules
**The Two-Voice Rule.** Each surface pairs exactly one display voice with the mono data voice. House = Space Grotesk + system body; a subworld = Archivo + Martian Mono. Do not mix a subworld's display face into the house chrome.

## Layout

Centered single-column shell. House container is `max-width: 1140px` with `28px` gutters (`.container`); subworld shells use `width: min(100% - 48px, 1180–1200px)`. Heroes are a two-column split — copy left, real device/footage right — using `grid-template-columns: minmax(0, ~1fr) minmax(0/440px, ~1.1fr)` with `clamp()` column gaps (`50–112px`). Rhythm is section-based (house `.promo` ≈ 64px block padding; subworld heroes 96–128px). The house breakpoint collapses the split at **880px** (`.promo-grid → 1fr`, mock reorders below copy); subworld heroes collapse and re-scale their H1 near the same width. Nav is a three-column grid (`1fr auto 1fr`) so the brand centers; it is `position: absolute` over the subworld hero and `position: sticky` on house pages.

## Elevation & Depth

Hybrid. The house leans on soft, warm, downward shadows for lift and a fixed grain overlay for texture; subworlds convey depth mostly through dark-field layering, colored glows, and real device mocks, with restraint.

### Shadow Vocabulary
- **Float** (`0 30px 80px -20px rgba(28,15,7,.28), 0 8px 24px -12px rgba(28,15,7,.18)`): house hero mock — the highest lift.
- **Card** (`0 14px 40px -10px rgba(28,15,7,.18), 0 4px 12px -6px rgba(28,15,7,.12)`): house cards/containers.
- **Accent** (`0 10px 28px -8px rgba(160,82,45,.45)`): under the copper CTA.
- **Subworld action glow** (e.g. Sortie `0 13px 30px -12px rgba(36,105,232,.75)`, Salvo `0 15px 32px -13px rgba(245,158,61,.7)`): the subworld's colored lift under its primary button; deepens on hover.

### Named Rules
**The Warm-Shadow Rule.** House shadows are tinted with walnut (`rgba(28,15,7,…)`), never neutral black. Subworld glows are tinted with that subworld's accent.

## Shapes

The house form language is soft: rounded radii `--r-sm 8px`, `--r-md 14px`, `--r-lg 20px`, `--r-xl 28px`, with fully-pill (`9999px`) CTAs, chips, and eyebrows. Subworlds choose their own form language to match the product, and the two newest diverge on purpose:

- **Sortie is rounded and cartographic:** pill actions (`999px`), circular nodes, and an organic "hand-drawn" blob mask on its atlas art (`border-radius: 46% 54% 40% 60% / 8% 11% 89% 92%`). The moving route line is its signature silhouette.
- **Salvo is hard and instrumented:** buttons, chips, panels, and rules are square (`border-radius: 0`) with `1px` steel strokes; the only curves are the nav wordmark tile (`9px`) and status dots. This "no-radius" stance is Salvo's identity.

## Components

### Buttons
- **House Primary (`.ns-btn`):** copper→sienna gradient (`linear-gradient(120deg, accent, copper)`), white text, **pill** (`9999px`), padding `13px 24px`, `shadow-accent`. Hover: `translateY(-2px)`, deeper shadow, and a `+4px` arrow-glyph nudge.
- **Sortie Primary (`.so-button-primary`):** cobalt fill, white text, pill, padding `11px 18px`, cobalt glow. **Quiet** variant: `1px` translucent-paper border on the dark field.
- **Salvo Primary (`.sa-button-primary`):** amber fill on dark-ink text (`#121b24`), **square** (no radius), `1px transparent` border, amber glow. **Secondary** variant: `1px` steel border, cool-white text.
- **Shared behavior:** `min-height: 48px`, `translateY(-2px)` on hover, `0.25s cubic-bezier(0.22, 1, 0.36, 1)` easing.

### Cards / Containers
- **House:** cream/paper surfaces, `--r-lg`/`--r-xl` corners, `border` hairline, `shadow-card` or `shadow-float`. Subworld panels adopt the subworld surface and its form language (Sortie rounded, Salvo square with steel rules).

### Navigation
- Three-column grid (`1fr auto 1fr`), brand centered. Links are quiet muted text that resolve to full ink/white on hover. On house pages the nav is sticky with a blurred cream backdrop; over a subworld hero it is absolute and transparent with a hairline bottom border. Subworlds may add a mono state chip (e.g. Salvo `.sa-nav-state`, brass on a steel border).

### Nintek Home-Link Mark (signature; `NintekBack.astro`)
The 3×3 copper N-grid at 50% opacity (→ 100% on hover) linking to `/`, followed by a faint vertical separator, placed left of the app's own brand mark in the subworld nav. **Required on every subworld.**

### Nintek Signature (signature; `BrandMark.astro`)
The copper/cream N-grid dot mark (7 copper dots trace the letter N) beside the word "Nintek" in the footer. **Required on every subworld** as the family return-to-house signature.

## Do's and Don'ts

### Do:
- **Do** keep every marketing surface on the house world (cream `#f5f0ea`, copper `#c17a2e`, walnut ink, Space Grotesk).
- **Do** give a dedicated app page its own verified subworld — palette, type (Archivo + Martian Mono), form language, and real media derived from the actual product.
- **Do** ship the Nintek home-link mark in the subworld nav and the copper N signature in the subworld footer, every time.
- **Do** use warm walnut-tinted shadows in the house and accent-tinted glows in subworlds.
- **Do** ship a complete `prefers-reduced-motion` block on every surface — subworlds disable their signature motion (Sortie route travel, Salvo instrument sweep) and clamp all animation/transition to `~0.001ms`.
- **Do** state pre-release status honestly and show only real shipped/pre-release captures.

### Don't:
- **Don't** use copper as a subworld action color — copper is the family signature only (subworld actions use the subworld accent: Sortie cobalt, Salvo amber).
- **Don't** invent a subworld palette or product UI to decorate a page; earn it from the real product.
- **Don't** carry one subworld's form language into another — Sortie stays rounded/pill/organic, Salvo stays square/steel/no-radius.
- **Don't** drop the Nintek nav home-link or footer signature from any app page, no matter how immersive the subworld.
- **Don't** mix a subworld's display face (Archivo) into the house chrome, or the house wordmark face into a subworld hero.
- **Don't** animate without a reduced-motion fallback, or claim features the product doesn't ship (no multiplayer, economy, or backend sync).
