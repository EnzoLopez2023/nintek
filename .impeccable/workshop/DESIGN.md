---
name: Workshop (Nintek portfolio surface)
description: A living plan table built around Workshop's current web capture and icon-led build 13 native evidence.
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
  on-action: "#f7fcfa"
  pencil-blue: "#356d85"
  pencil-blue-strong: "#29566a"
  pencil-blue-fill: "#477f97"
  amber-next: "#995d08"
  amber-next-fill: "#d99724"
  success: "#2f7657"
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
  nav-link:
    textColor: "{colors.spruce-action}"
    rounded: "{rounded.md}"
    padding: "0 14px"
    height: "44px"
---

# Design System: Workshop (Nintek portfolio surface)

## Overview

**Creative North Star: "The Living Plan Table"**

Workshop's marketing surface is a drafting table, not a status board: cool vellum paper, deep spruce structural ink, a functional 24px grid across the dedicated page field and scoped shared placements, pencil-blue for annotation and wayfinding, and restrained amber for progress cues. The system exists to hold exact evidence at readable scale. The current web workspace appears as a real web capture in browser chrome; native release evidence is deliberately icon-led because the build 13 screenshot masters are recorded but untracked upstream.

Release-state copy follows `Workshop-for-iOS@32248fc`: version 2.2.1 (13) is VALID, attached, and assigned to internal TestFlight under the listing name **Nintek Workshop**. It is not public, and physical-device, privacy, reviewer-account, and final review-evidence gates remain. The native frame therefore pairs the canonical icon with exact build, channel, and public-release facts instead of substituting a stale capture or an Apple-recompressed asset.

This is a Workshop-scoped visual system, confined to `/workshop`, `/workshop/privacy`, and Workshop's guest appearances on the Nintek homepage and `/ios`. It does not restyle the Nintek shell, other product pages, or their sibling apps; every surface that carries it (`workshop-landing.css`, the `.workshop-promo` block in `global.css`, the `.workshop-iapp`/`.ios-workshop-proof` block in `ios.css`, and `WorkshopShowcase`'s own scoped styles) redeclares the same token values locally rather than leaking them outward. The build explicitly rejects the retired "Concourse Board" direction — a departure-board/flip-timetable treatment — in favor of this plan-table language.

**Key Characteristics:**
- Cool vellum paper with deep spruce-green ink, not warm Nintek neutrals.
- A faint 24px pencil-blue drafting grid across the dedicated page canvas and Workshop-owned shared placements.
- Two accent voices, never merged: pencil-blue for annotation/chrome, amber for progress and sequence.
- Soft, all-rounded geometry — 14/24px plus platform icon corners — with no sharp corners anywhere.
- Current web capture plus canonical icon-led native evidence; unavailable screenshot masters remain visibly absent.

## Colors

Cool, low-saturation vellum and spruce-green carry the surface; two narrow accent voices do all of the pointing.

### Primary
- **Spruce Action** (`#125447`, hover `#0d4137`): the single primary-action color — “Review build 13 evidence,” privacy/support actions, in-nav links, and footer link color. On dark surfaces it inverts to a lighter mint (`#68c7b0`) under `prefers-color-scheme: dark`.

### Secondary
- **Pencil Blue** (`#356d85`, strong `#29566a`, fill `#477f97`): reserved for annotation and wayfinding chrome, never for calls to action — the 24px background grid tint, focus-visible outlines, the journey step counters and "Planning" stage badge, the browser-chrome dot, and the manifest table's rightmost "Where" column.

### Tertiary
- **Amber Next** (`#995d08`, fill `#d99724`): the progression accent — hero fact-list separators and the "In progress" journey badge. It never becomes the primary CTA color or implies public acquisition.

### Neutral
- **Vellum** (`#eef4f2`) / **Vellum Recessed** (`#e0ebe7`): the cool paper canvas and its slightly deeper recessed variant (badge backgrounds, footer band, hover fills).
- **Drafting Surface** (`#fafcfb`): the near-white card/table/screenshot-frame background, lifted off the vellum canvas.
- **Spruce Ink** (`#15332e`) / **Spruce Muted** (`#58716b`): primary text and secondary/body text respectively. Spruce Ink doubles as the dark native section's background (`--wk-nav-deep`).
- **Divider** (`#c9dad5`) / **Divider Strong** (`#afc7c0`): hairline rules, table borders, and card borders.
- **On Spruce** (`#f7fcfa`): text/icon color for the dark native section and any surface painted with `spruce-action`/`spruce-deep`.

### Named Rules
**The Separated Accent Rule.** Pencil-blue and amber never trade jobs. Pencil-blue marks reading affordances — annotation, counters, focus rings, and table metadata. Amber marks progress and sequence. Neither becomes the primary action; spruce carries actions.

## Typography

**Display/Headline Font:** `ui-rounded` ("SF Pro Rounded" on Apple platforms, `Arial Rounded MT Bold` fallback, then system sans)
**Body/Label Font:** `-apple-system` / system-ui stack

**Character:** A rounded, friendly display face over every heading — deliberately echoing the native iOS app's own display type — paired with a plain system body face for reading copy. The pairing is the visual handshake between the marketing page and the app it is proving.

### Hierarchy
- **Display** (700, `clamp(3rem, 7.5vw, 5.8rem)`, line-height 0.94, tracking −0.04em): the hero H1 only, capped at 9–10 characters wide.
- **Headline** (700, `clamp(2rem, 4.8vw, 3.7rem)`, line-height 1.08, tracking −0.038em): section H2s ("The shop record finally fits the shop.", the native section, the footer).
- **Body** (400, 1.02rem baseline / up to `clamp(1.05rem, 1.8vw, 1.22rem)` in the hero, line-height 1.68, max ~62–70ch): all paragraph copy, always in spruce-muted.
- **Label** (700, 0.72–0.9rem, sentence case, no forced uppercase tracking): stage badges, hero facts, table headers, `dt` terms. The rounded face is used for a few label-tier elements that double as emphasis (proof-point `dt`, the manifest's first column) — treat those as title-weight labels, not a separate role.

### Named Rules
**The No-Kicker Rule.** Workshop deliberately opts out of Nintek's portfolio-wide `.eyebrow` kicker (the small uppercase dot+label seen on sibling app promos and the `/ios` page). Every place Workshop appears — the homepage promo grid, the `/ios` deep dive — explicitly suppresses it. Do not add an eyebrow, kicker, or uppercase micro-label to a Workshop heading; it is not this surface's voice.

## Layout

A 24px drafting grid (two 1px pencil-blue-tinted linear-gradients at `0 0 / 24px 24px`) spans the dedicated Workshop page field and repeats inside the dark native section, the `/ios` Workshop proof, and the homepage Workshop promo band. Opaque evidence surfaces interrupt it, so the motif reads as the plan-table field beneath the content rather than decoration applied to each card. The container is `min(100% - 40px, 1180px)` (nav uses a slightly wider `1240px` variant). Section rhythm runs on a `clamp()` scale from `clamp(64px,9vw,112px)` to `clamp(80px,10vw,124px)` vertical padding; internal gaps commonly land at 18px, 24px (proof-point rows), 42px, or the hero's `clamp(44px,7vw,88px)`.

The first viewport is a two-column field (`0.82fr` copy / `1.18fr` current web capture at eager load) under a slim sticky nav. The build-13 proof section uses a second split (`0.7fr` copy / `1.3fr` icon-led native evidence). Below 980px both collapse to one column; below 720px the brand subtitle and “Build 13 evidence” link hide, action buttons go full-width, and the journey, native-highlight, and footer grids stack.

## Elevation & Depth

Workshop is not flat: the web capture, canonical native icon, journey grid, manifest table, sticky nav, and footer icon carry ambient resting shadows, as if paper and tools sit just above the drafting table. Buttons lift 2px on hover; evidence frames themselves remain stable and do not imply interactivity.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 10px 24px rgb(21 51 46 / 0.11)`, dark: `0 10px 24px rgb(0 0 0 / 0.3)`): journey cards, the manifest table, the sticky nav, the footer icon.
- **Web Evidence** (`box-shadow: 0 22px 48px -28px rgba(21,51,46,.42)`): the current web capture inside browser chrome.
- **Native Icon** (`box-shadow: 0 22px 48px -26px rgba(9,17,15,.52)`): the canonical icon inside the build-13 evidence panel.

### Named Rules
**The Resting-Shadow Rule.** Evidence and record surfaces carry their shadow at rest; shadows signal “artifact on the table,” not interactivity. Only actual controls gain hover lift.

## Shapes

Two radius steps do the systemic work: **14px** (`--wk-radius`) for interactive chrome, release notes, status facts, and the manifest table; **24px** (`--wk-radius-hero`) for the web/native evidence frames, journey shell, and privacy card. Canonical app icons retain platform-style corners (22.5% in the native evidence frame). Nothing in Workshop uses a sharp (0px) corner. Hairline `divider`/`divider-strong` strokes define tables, notes, and evidence panels whether or not the enclosing surface also carries a shadow.

## Components

### Buttons (`.wk-action`)
- **Shape:** 14px radius, min-height 46px, 10px/16px padding.
- **Primary** (`spruce-action` → `spruce-action-hover`, `on-action` text): the lead “Review build 13 evidence” action in the hero and footer.
- **Secondary** (`drafting-surface` fill, `divider-strong` border, `spruce-ink` text; hover moves the border to `pencil-blue` and fills `vellum-recessed`): the paired, lower-emphasis action next to Primary.
- **States:** both variants lift `translateY(-2px)` on hover with a 180ms `cubic-bezier(0.16,1,0.3,1)` transition; focus-visible gets a 3px pencil-blue outline with 3px offset.

### Cards / Containers
- **Corner Style:** 24px (journey grid shell, web/native evidence, privacy card, `/ios` proof card) or 14px (manifest table wrap and release facts).
- **Background:** `drafting-surface` (near-white) floating on the `vellum`/`vellum-recessed` canvas.
- **Shadow Strategy:** Card shadow at rest (see Elevation & Depth).
- **Border:** 1px `divider` on the table wrap; journey cards are borderless, separated by a 1px `divider` gap grid instead (a mortised/graph-paper seam, not individual card borders).
- **Manifest table responsive rule:** at max-width 430px the three-column capability table sheds its header row (visually hidden, not removed, for screen readers) and stacks each row into a block; the third cell's platform value gets a generated `content: 'Available on'` label prefix so "Web · iOS" reads as "Available on Web · iOS" once the column header is gone.

### Navigation (`.wk-nav`)
- Sticky, glass (`rgb(250 252 251 / 0.88)` + `blur(18px) saturate(1.08)` where supported, falling back to solid `drafting-surface` under `prefers-reduced-transparency`), 1px `divider` bottom border, Card-tier shadow. Brand mark is a 42px rounded-11px icon plus wordmark; the sole “Build 13 evidence” link is `spruce-action` text with a `vellum-recessed` hover fill. Below 720px, the brand subtitle and nav link hide, leaving only the back-link and brand mark.

### Evidence Frames (signature component)
`WorkshopShowcase` has two exact modes. **Web** wraps `web-project.webp`, a current web-app capture, in restrained browser chrome with dotted controls, a 24px frame, and the Web Evidence shadow. **Native** shows the canonical Workshop icon over the 24px drafting grid and lists version 2.2.1 (13), Attached · VALID, Internal TestFlight, and Not available. Its caption states that the build-13 screenshot masters are recorded but untracked upstream, so no substitute screenshot is shown. This icon-led gap is the correct native evidence state until exact masters become available.

## Do's and Don'ts

### Do:
- **Do** render Workshop proof from the retained current web capture or the canonical icon-led build-13 evidence frame — never an invented, stale App Store, or “concept” screen.
- **Do** give the web capture and canonical icon descriptive, content-specific `alt`; decorative nav marks get `alt=""`.
- **Do** `loading="eager"` only the first-viewport web capture; all other Workshop evidence is `loading="lazy"` with `decoding="async"`.
- **Do** zero out `animation-duration`, `animation-iteration-count`, and `transition-duration` under `prefers-reduced-motion: reduce`, and fall back the nav's backdrop-filter to a solid surface under `prefers-reduced-transparency: reduce`.
- **Do** keep spruce as the action color, pencil-blue for annotation, and amber for progression state.

### Don't:
- **Don't** publish any native screenshot until its exact manifest-backed master is available; do not revive removed captures or substitute an App Store CDN recompression.
- **Don't** apply Nintek's global `.eyebrow` kicker convention to a Workshop heading (see Typography's No-Kicker Rule) — this is a confirmed, portfolio-wide opt-out for this surface, not an oversight to "fix."
- **Don't** reintroduce the retired Concourse Board direction — flip-board rows, ticker/marquee motion, split-flap or timetable styling — that this build explicitly replaced with the Living Plan Table language.
- **Don't** let Workshop's tokens leak outward: the homepage promo card and the `/ios` deep dive both redeclare Workshop's CSS variables in a locally scoped block rather than changing the Nintek shell's own palette or sibling apps' promo styling.
