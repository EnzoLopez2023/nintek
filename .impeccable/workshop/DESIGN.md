---
name: Workshop (Nintek portfolio surface)
description: A living plan table built from Workshop's current web UI and fresh iOS/iPadOS Simulator screens.
colors:
  vellum: "#eef4f2"
  vellum-recessed: "#e0ebe7"
  drafting-surface: "#fafcfb"
  spruce-ink: "#15332e"
  spruce-muted: "#58716b"
  divider: "#c9dad5"
  divider-strong: "#afc7c0"
  nav-vellum: "#e7f0ed"
  spruce-deep: "#15332e"
  on-spruce: "#f7fcfa"
  spruce-action: "#125447"
  spruce-action-hover: "#0d4137"
  spruce-action-fill: "#1e7666"
  on-action: "#f7fcfa"
  pencil-blue: "#356d85"
  pencil-blue-strong: "#29566a"
  pencil-blue-fill: "#477f97"
  amber-next: "#995d08"
  amber-next-fill: "#d99724"
  amber-next-hover: "#bf7b16"
  on-amber: "#2a1b04"
  success: "#2f7657"
  danger: "#a64139"
typography:
  display:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.5vw, 5.8rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.8vw, 3.7rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.038em"
  title:
    fontFamily: "ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "normal"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  compact: "10px"
  md: "14px"
  hero: "24px"
spacing:
  grid-unit: "24px"
  sm: "10px"
  md: "18px"
  lg: "42px"
  xl: "88px"
components:
  button-primary:
    backgroundColor: "{colors.spruce-action}"
    textColor: "{colors.on-action}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.spruce-action-hover}"
  button-secondary:
    backgroundColor: "{colors.drafting-surface}"
    textColor: "{colors.spruce-ink}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-next:
    backgroundColor: "{colors.amber-next-fill}"
    textColor: "{colors.on-amber}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-next-hover:
    backgroundColor: "{colors.amber-next-hover}"
  nav-link:
    textColor: "{colors.spruce-action}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "44px"
---

# Design System: Workshop (Nintek portfolio surface)

## Overview

**Creative North Star: "The Living Plan Table"**

Workshop's marketing surface is a drafting table, not a status board: cool vellum paper, deep spruce structural ink, a functional 24px grid across the dedicated page field and scoped shared placements, pencil-blue for annotation and wayfinding, and a single restrained amber for the one "next step" action per section. The system exists to hold real evidence — the current web app and fresh, read-only `WORKSHOP_DEMO_MODE=1` Simulator captures taken from iOS commit `4b9c2da7234aa8fd4dec58463ae1a73d85c087c8` on iPhone 17 Pro and iPad Pro 13-inch (M5) running iOS 26.5 — at readable scale, never to dress up an invented screen or a stale App Store/release asset.

This is a Workshop-scoped visual system, confined to `/workshop`, `/workshop/privacy`, and Workshop's guest appearances on the Nintek homepage and `/ios`. It does not restyle the Nintek shell, other product pages, or their sibling apps; every surface that carries it (`workshop-landing.css`, the `.workshop-promo` block in `global.css`, the `.workshop-iapp`/`.ios-workshop-proof` block in `ios.css`, and `WorkshopShowcase`'s own scoped styles) redeclares the same token values locally rather than leaking them outward. The build explicitly rejects the retired "Concourse Board" direction — a departure-board/flip-timetable treatment — in favor of this plan-table language.

**Key Characteristics:**
- Cool vellum paper with deep spruce-green ink, not warm Nintek neutrals.
- A faint 24px pencil-blue drafting grid across the dedicated page canvas and Workshop-owned shared placements.
- Two accent voices, never merged: pencil-blue for annotation/chrome, amber for the singular "next" action.
- Soft, all-rounded geometry — 10/14/24px — with no sharp corners anywhere.
- Real, current-source imagery only; no invented, superseded, or illustrative UI stands in for Workshop.

## Colors

Cool, low-saturation vellum and spruce-green carry the surface; two narrow accent voices do all of the pointing.

### Primary
- **Spruce Action** (`#125447`, hover `#0d4137`, fill `#1e7666`): the single primary-action color — "Explore real screens," "Request TestFlight access" (primary variant), in-nav links, and footer link color. On dark surfaces it inverts to a lighter mint (`#68c7b0`) under `prefers-color-scheme: dark`.

### Secondary
- **Pencil Blue** (`#356d85`, strong `#29566a`, fill `#477f97`): reserved for annotation and wayfinding chrome, never for calls to action — the 24px background grid tint, focus-visible outlines, the journey step counters and "Planning" stage badge, the browser-chrome dot, and the manifest table's rightmost "Where" column.

### Tertiary
- **Amber Next** (`#995d08`, fill `#d99724`, hover `#bf7b16`): the single "next step" progression accent — the hero fact-list separators, the "In progress" journey badge, and the `.next` action variant used specifically for "Request TestFlight access" inside the dark native section and the `/ios` proof card. It never appears as the primary CTA color.

### Neutral
- **Vellum** (`#eef4f2`) / **Vellum Recessed** (`#e0ebe7`): the cool paper canvas and its slightly deeper recessed variant (badge backgrounds, footer band, hover fills).
- **Drafting Surface** (`#fafcfb`): the near-white card/table/screenshot-frame background, lifted off the vellum canvas.
- **Spruce Ink** (`#15332e`) / **Spruce Muted** (`#58716b`): primary text and secondary/body text respectively. Spruce Ink doubles as the dark native section's background (`--wk-nav-deep`).
- **Divider** (`#c9dad5`) / **Divider Strong** (`#afc7c0`): hairline rules, table borders, and card borders.
- **On Spruce** (`#f7fcfa`): text/icon color for the dark native section and any surface painted with `spruce-action`/`spruce-deep`.

### Named Rules
**The Two-Voice Accent Rule.** Pencil-blue and amber never trade jobs. Pencil-blue marks *reading* affordances — annotation, counters, focus rings, table metadata. Amber marks the *one* progression action per section ("next," not "primary"). A screen with two amber elements or a pencil-blue button is off-system.

## Typography

**Display/Headline/Title Font:** `ui-rounded` ("SF Pro Rounded" on Apple platforms, `Arial Rounded MT Bold` fallback, then system sans)
**Body/Label Font:** `-apple-system` / system-ui stack

**Character:** A rounded, friendly display face over every heading — deliberately echoing the native iOS app's own display type — paired with a plain system body face for reading copy. The pairing is the visual handshake between the marketing page and the app it is proving.

### Hierarchy
- **Display** (700, `clamp(3rem, 7.5vw, 5.8rem)`, line-height 0.94, tracking −0.04em): the hero H1 only, capped at 9–10 characters wide.
- **Headline** (700, `clamp(2rem, 4.8vw, 3.7rem)`, line-height 1.08, tracking −0.038em): section H2s ("The shop record finally fits the shop.", the native section, the footer).
- **Title** (700, `clamp(1.75rem, 3.4vw, 2.7rem)`, line-height 1.08): the two mechanism H3s. Journey-card and native-highlight H3s use a smaller fixed step (1.35rem / 1.03rem) of the same rounded face rather than a new role.
- **Body** (400, 1.02rem baseline / up to `clamp(1.05rem, 1.8vw, 1.22rem)` in the hero, line-height 1.68, max ~62–70ch): all paragraph copy, always in spruce-muted.
- **Label** (700, 0.72–0.9rem, sentence case, no forced uppercase tracking): stage badges, hero facts, table headers, `dt` terms. The rounded face is used for a few label-tier elements that double as emphasis (proof-point `dt`, the manifest's first column) — treat those as title-weight labels, not a separate role.

### Named Rules
**The No-Kicker Rule.** Workshop deliberately opts out of Nintek's portfolio-wide `.eyebrow` kicker (the small uppercase dot+label seen on sibling app promos and the `/ios` page). Every place Workshop appears — the homepage promo grid, the `/ios` deep dive — explicitly suppresses it. Do not add an eyebrow, kicker, or uppercase micro-label to a Workshop heading; it is not this surface's voice.

## Layout

A 24px drafting grid (two 1px pencil-blue-tinted linear-gradients at `0 0 / 24px 24px`) spans the dedicated Workshop page field and repeats inside the dark native section, the `/ios` Workshop proof, and the homepage Workshop promo band. Opaque evidence surfaces interrupt it, so the motif reads as the plan-table field beneath the content rather than decoration applied to each card. The container is `min(100% - 40px, 1180px)` (nav uses a slightly wider `1240px` variant). Section rhythm runs on a `clamp()` scale from `clamp(64px,9vw,112px)` to `clamp(80px,10vw,124px)` vertical padding; internal gaps commonly land at 18px, 24px (proof-point rows), 42px, or the hero's `clamp(44px,7vw,88px)`.

The first viewport is a fixed two-column field (`0.82fr` copy / `1.18fr` real web app at `eager` load) under a slim sticky nav; below 980px this and the proof grid collapse to one column, and below 720px the nav collapses further (brand subtitle and "Actual screens" link hide), action buttons go full-width, and every two-column grid (journey, mechanisms, screen grid, native highlights, footer) stacks to one column.

## Elevation & Depth

Workshop is not flat: real evidence — the web-app screenshot, fresh Simulator captures, cards, and the manifest table — always carries an ambient resting shadow, as if paper is lifted slightly off the drafting table. Hover deepens the shadow and lifts the element 2–3px; nothing pops from zero to elevated on hover alone.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 10px 24px rgb(21 51 46 / 0.11)`, dark: `0 10px 24px rgb(0 0 0 / 0.3)`): journey cards, the manifest table, the sticky nav, the footer icon.
- **Hero/Proof** (`box-shadow: 0 24px 54px -30px rgb(21 51 46 / 0.42)`, dark: `0 24px 54px -26px rgb(0 0 0 / 0.62)`): the two mechanism screenshots and the four-up screen grid; hover deepens to `0 30px 60px -30px rgb(21 51 46 / 0.5)`.
- **Device** (`box-shadow: 0 22px 48px -26px rgba(9, 17, 15, 0.52–0.58)`): the phone/iPad screenshot frames inside `WorkshopShowcase` and the `/ios` sticky phone slot — a slightly darker, tighter shadow than Card/Hero because it is simulating a held device rather than a resting sheet of paper.

### Named Rules
**The Resting-Shadow Rule.** Evidence surfaces (screenshots, the manifest table, journey cards) carry their shadow at rest; shadows here signal "this is a real, physical artifact on the table," not "this element is interactive." Interactive-only lift (hover translateY) is a secondary cue layered on top, never the only depth cue.

## Shapes

Two radius steps do all systemic work: **14px** (`--wk-radius`) for interactive chrome — buttons, the nav "Actual screens" link — and **24px** (`--wk-radius-hero`) for anything holding evidence — screenshot frames, the journey grid shell, the privacy card, the `/ios` proof card. A narrower **10px** (`--wk-radius-compact`) exists in the token set but is not exercised by any current instance; treat it as reserved, not yet a system rule. Nothing in Workshop uses a sharp (0px) corner. Borders are hairline (1px, `divider`/`divider-strong`) and only ever appear on surfaces that also carry a Card or Hero shadow — never a border-only container.

## Components

### Buttons (`.wk-action`)
- **Shape:** 14px radius, min-height 46px, 10px/16px padding.
- **Primary** (`spruce-action` → `spruce-action-hover`, `on-action` text): the lead action in the hero and footer ("Explore real screens," "Request TestFlight access" primary instance).
- **Secondary** (`drafting-surface` fill, `divider-strong` border, `spruce-ink` text; hover moves the border to `pencil-blue` and fills `vellum-recessed`): the paired, lower-emphasis action next to Primary.
- **Next** (`amber-next-fill` → `amber-next-hover`, `on-amber` text): the single amber progression action, used only inside the dark native section and the `/ios` proof card for "Request TestFlight access."
- **States:** all three lift `translateY(-2px)` on hover with a 180ms `cubic-bezier(0.16,1,0.3,1)` transition; focus-visible gets a 3px pencil-blue outline with 3px offset, portfolio-wide.

### Cards / Containers
- **Corner Style:** 24px (journey grid shell, privacy card, `/ios` proof card) or 14px (manifest table wrap).
- **Background:** `drafting-surface` (near-white) floating on the `vellum`/`vellum-recessed` canvas.
- **Shadow Strategy:** Card shadow at rest (see Elevation & Depth).
- **Border:** 1px `divider` on the table wrap; journey cards are borderless, separated by a 1px `divider` gap grid instead (a mortised/graph-paper seam, not individual card borders).
- **Manifest table responsive rule:** at max-width 430px the three-column capability table sheds its header row (visually hidden, not removed, for screen readers) and stacks each row into a block; the third cell's platform value gets a generated `content: 'Available on'` label prefix so "Web · iOS" reads as "Available on Web · iOS" once the column header is gone.

### Navigation (`.wk-nav`)
- Sticky, glass (`rgb(250 252 251 / 0.88)` + `blur(18px) saturate(1.08)` where supported, falling back to solid `drafting-surface` under `prefers-reduced-transparency`), 1px `divider` bottom border, Card-tier shadow. Brand mark is a 42px rounded-11px icon plus wordmark; the sole nav link is `spruce-action` text with a `vellum-recessed` hover fill. Below 720px, the brand subtitle and nav link hide, leaving only the back-link and brand mark.

### Evidence Frames (signature component)
The system's defining custom pattern is the **real-device/browser frame**, not an illustrative mock: `WorkshopShowcase` renders either a browser-chrome frame (dotted chrome bar, URL label, 24px radius, Hero shadow) around `web-project.webp` — a deterministic current React crop, not a native capture — or a paired iPhone+iPad frame (Device shadow, 22–24px radius) around fresh `WORKSHOP_DEMO_MODE=1` Simulator captures (`iphone-projects.webp`, `iphone-shopping.webp`, `iphone-tables.webp`, `ipad-projects.webp`, `ipad-shaper.webp`, `ipad-project-detail.webp`) shot on iPhone 17 Pro and iPad Pro 13-inch (M5) at iOS 26.5, from iOS commit `4b9c2da7234aa8fd4dec58463ae1a73d85c087c8`. The paired iPhone+iPad frame and the dedicated iPad screen-grid entry both show the Projects/Shaper Hub split directly in current Simulator pixels — two distinct captured screens, not one screen relabeled. Every image in Workshop — hero, mechanisms, screen grid, `/ios` proof — comes from the current running web or SwiftUI app; the system does not draw an invented UI to stand in for the product, unlike sibling Nintek apps (Cairn, PulseWire, Hearth, ShopKeep, Tabloom), which use custom-coded illustrative mock components for their promo slots.

## Do's and Don'ts

### Do:
- **Do** render Workshop proof exclusively from the current web capture and fresh Simulator assets (`web-project.webp`, `iphone-*.webp`, `ipad-*.webp`) inside the browser-chrome or device frame — never an invented, stale App Store, or "concept" screen.
- **Do** give every functional image a descriptive, content-specific `alt` (e.g. "Workshop read-only demo on iPad showing the separate Shaper Hub context"); decorative marks (brand/footer icons) get `alt=""`.
- **Do** `loading="eager"` only the first-viewport hero web screenshot; every other Workshop image is `loading="lazy"` with `decoding="async"`.
- **Do** zero out `animation-duration`, `animation-iteration-count`, and `transition-duration` under `prefers-reduced-motion: reduce`, and fall back the nav's backdrop-filter to a solid surface under `prefers-reduced-transparency: reduce`.
- **Do** keep amber to one "next" action per section and spruce-action to the single primary action; let pencil-blue carry annotation instead of a third competing accent.

### Don't:
- **Don't** scale a dense iPad screenshot down to fit a narrow viewport. Below 430–720px, serve focused crops from the same current Simulator capture (`ipad-project-detail-focus.webp`, `ipad-shaper-focus.webp`) so the claimed detail remains readable. This is a deliberate evidence treatment for dense assets, not a license to crop away contradictory states.
- **Don't** apply Nintek's global `.eyebrow` kicker convention to a Workshop heading (see Typography's No-Kicker Rule) — this is a confirmed, portfolio-wide opt-out for this surface, not an oversight to "fix."
- **Don't** reintroduce the retired Concourse Board direction — flip-board rows, ticker/marquee motion, split-flap or timetable styling — that this build explicitly replaced with the Living Plan Table language.
- **Don't** let Workshop's tokens leak outward: the homepage promo card and the `/ios` deep dive both redeclare Workshop's CSS variables in a locally scoped block rather than changing the Nintek shell's own palette or sibling apps' promo styling.
