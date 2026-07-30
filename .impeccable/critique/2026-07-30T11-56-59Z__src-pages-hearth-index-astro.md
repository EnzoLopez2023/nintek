---
target: src/pages/hearth/index.astro
total_score: 19
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-07-30T11-56-59Z
slug: src-pages-hearth-index-astro
---
# Design Critique — Hearth landing page

Method: dual-agent (A: assessment-a / claude-opus-4.8 · B: assessment-b / gpt-5.6-sol)
Target: `src/pages/hearth/index.astro` · Mode: Persuade · Baseline commit `d8cb9fb`

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Mockup and "Right now" feed convey product state richly, but the feed blinks and never updates, and the hero instructs "press Ctrl K to jump anywhere" — an action this page cannot perform. |
| 2 | Match System / Real World | 3 | Domestic voice is exceptional; the infrastructure band then ships NUT, PoE, RADIUS, SMART, NVR and "whether that bond really has both legs" unglossed, at the page's emotional peak. |
| 3 | User Control and Freedom | 3 | Nintek home link and an in-page anchor; no forced flow. No door into the product and no back-to-top on a 15-screen page. |
| 4 | Consistency and Standards | 3 | Visual system is immaculate; the web-standards layer is not — 2 heading skips, no `<main>`, no ARIA roles, a 20x20 hit area, unstyled focus, and a CSS selector collision. |
| 5 | Error Prevention | n/a | No inputs, forms, or destructive actions exist on this surface. |
| 6 | Recognition Rather Than Recall | 3 | Self-contained cards and concrete numbers aid recognition; the infrastructure jargon demands prior knowledge. |
| 7 | Flexibility and Efficiency | n/a | Persuade surface, single scroll, no task to accelerate. |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely top-tier restraint per component; the two-act color structure is the page's spine. |
| 9 | Error Recovery | n/a | No error states are reachable on a static page. |
| 10 | Help and Documentation | n/a | Self-documenting; privacy policy linked in the footer. |
| **Total** | | **19/24** | **Good (79%)** |

Applicable maximum 24 (six heuristics scored). n/a: 5, 7, 9, 10.

Synthesis adjustment: Assessment A scored heuristic 2 a 4. Lowered to 3 — "speaks the
user's language fluently throughout" cannot hold when an entire band ships unglossed
acronyms. A's own evidence supports the correction; it counted the jargon only under
heuristic 6.

## Design Specificity Verdict

**Authored for this product, with one generic seam.**

**LLM assessment (A):** unmistakably built for Hearth, not dropped onto a template. The
voice ("The home you keep — kept warm", "Come in. The fire's lit."), the real-object
claims (Taylor K-2005 by drop count, DS1821+/DS1513+), and above all the two-act
information architecture that physically mirrors the app's dual nature — a warm
parchment "house you keep" half, then a dark plum "house itself" half. The palette
swatches *show* the 51-palettes claim rather than asserting it. No competitor could
reuse this copy or structure unchanged. The seam: the 6-up feature-card grid runs three
times consecutively (house / infrastructure / desk) in near-identical layout, and the
"desk" grid reads as a catch-all that dilutes the domestic thesis.

**Deterministic scan (B):** `detect.mjs` exit 2 on both source and built HTML.
- `.astro` source: 1 hard finding (`overused-font`: Inter), 0 advisory.
- `dist/hearth/index.html`: 1 hard (`overused-font`), 1 advisory (`em-dash-overuse`, 38).
- URL scans at 1440x900 and 390x844 returned exit 0 with `[]` but also printed
  `Error: puppeteer is required for URL scanning`. These are **unavailable lanes, not
  clean results**, and are reported as such.
- In-page headless detector: 73 anti-patterns across 16 rules.

The detector's aggregate signal corroborates A from a different angle: `kicker-above-heading`
fired 6 times and `side-tab` 12 times — mechanical confirmation of the structural
sameness A named independently.

**Detector caught what the design review missed:** `undersized-ui-text` x15. Confirmed
by direct measurement — "New" and "Taking shape" render at **9.92px/700**, infrastructure
tags at **10.88px**, feature tags at 11.2px.

**False positives (30 of 73 findings):**
- All 22 infrastructure `low-contrast` reports — the detector resolved the light page
  background instead of the dark band. Measured ratios 5.24–13.70:1, all pass AA.
- All 8 palette-chip `low-contrast` reports — compared against each gradient's light
  endpoint; labels sit on the dark endpoint. Measured 5.36–16.58:1, all pass.
- `overused-font` (Inter, 64%) — a saturated-pattern warning against a committed brief.
  Playfair Display + Inter is the pinned typographic world. The brief wins.
- `radial-spotlight-glow`, `dark-glow` x6, `cream-palette`, `italic-serif-display`,
  `oversized-h1` — all describe the deliberate incumbent world.

**Visual overlays: none available.** The only browser was a headless shell the human
cannot see. Script injection did succeed headlessly (title mutation plus an executing
`<script>` tag), and `detect.js` loaded from the live server, so the 73 findings are real
console output — but **no user-visible overlay exists** and none is claimed. Both live
servers were stopped and confirmed dead.

## Overall Impression

This is a good page with an exceptional middle. The two-act structure is the strongest
idea here: the parchment-to-plum shift at "And then it started watching *the house
itself*" is genuinely cinematic, and the power-cut origin story is the best writing on
the site. That section earns its length.

What undercuts it is that the page's *only* interactive path is broken end to end. The
single CTA jumps instantly rather than gliding, lands 61px underneath the fixed nav, and
delivers the visitor to the one component on the page with a visible rendering glitch.
Three small defects compound into the page's whole interactive story.

The biggest strategic question is not a defect: this page ends on "Welcome home." and
then offers nowhere to go. Given it is `noindex`, that may be entirely deliberate.

## What's Working

1. **Voice plus concrete claims.** "Furnace filter due in 12 days", the power-cut story,
   "come in, the fire's lit." Specificity is credibility — every line is a real capability,
   so warmth never tips into vagueness, and none of it is portable to another product.
2. **Two-act structure embodied in color.** The warm parchment domestic half against the
   dark plum infrastructure half gives a 15-screen page a memorable spine. The IA is the
   product's actual architecture, so the layout teaches you what Hearth is.
3. **Palette swatches as living proof.** Eight chips, each with a light/dark half-circle
   indicator, demonstrate the per-page-palette feature instead of claiming it.
4. **The measurable fundamentals are clean.** 0 console errors, 0 failed requests and no
   horizontal overflow at 1440/768/390; every sampled contrast pair passes AA (body 9.28:1,
   muted 5.01:1, dark-band tags 5.24–6.19:1); and all seven animations genuinely stop
   under `prefers-reduced-motion`.

## Priority Issues

### [P1] The live-feed window title collides with the first feed row
Confirmed independently by all three lanes. In `hearth-landing.css`, the rule
`.hl-now-windowdots span { width:10px; height:10px; border-radius:50% }` also matches
`.hl-now-windowtitle`, which is a `<span>` in that row. Measured: element box **10x10px**,
text paints **51.72x66.08px** across **4 line boxes** in a 1-line container, overlapping
`.hl-now-line` by **51.72x33.08px**. Present at all three viewports.

**Why it matters:** "hearth · live feed" stacks vertically over "Furnace filter" on the
flagship component — the exact element the hero CTA sends visitors to. It reads as broken
software on a page whose entire argument is that this software is well kept. Not P0
because nothing is blocked; P1 because it is the first thing a careful visitor sees.
**Fix:** scope the selector to `.hl-now-windowdots > span:not(.hl-now-windowtitle)`, or give
`.hl-now-windowtitle` explicit `width:auto; height:auto; flex:none; white-space:nowrap`.
**Suggested command:** `/impeccable polish`

### [P1] The page's only action mislands
`#hl-now-section` has `scroll-margin-top: 0px` under a **61px fixed `.hl-nav`**, so "Take a
look" parks its target underneath the navbar. `scroll-behavior` is `auto`, so it jumps
instantly. The destination is the glitched card above.

**Why it matters:** this page has exactly one interactive affordance, and all three of its
properties are wrong at once. In-repo precedent already exists — `src/styles/ios.css` sets
`scroll-margin-top: 90px` for the same fixed-nav situation.
**Fix:** add `scroll-margin-top` of roughly nav height plus breathing room to the anchor
target, and `scroll-behavior: smooth` guarded by `prefers-reduced-motion`.
**Suggested command:** `/impeccable polish`

### [P2] Web-standards and accessibility cluster
Measured, agreed by both assessments:
- Heading outline skips **H1 to H3** (the hero mockup's decorative "Hearth" is an `<h3>`)
  and **H2 to H4** (trust strip).
- **No `<main>` landmark** and no ARIA roles; `bare` layout renders only NAV and FOOTER.
- `a.nintek-back` hit area is **20x20**, below the WCAG 2.5.8 minimum of 24x24, on all
  three viewports. The footer privacy link is **125.52x15** at 1440/768.
- Focus indicator is Chromium's default `1px auto rgb(0,95,204)` — visible, but clashing
  with the plum/champagne world. No `outline:none` exists anywhere under `src/`, so this
  is unstyled rather than suppressed.
- Only **3 tab stops** exist on a 15-screen page.

**Why it matters:** the visual craft is high enough that the standards layer is the weakest
part of the build, and screen-reader and keyboard users get the worst version of the page.
**Fix:** demote the mockup's "Hearth" to a non-heading element, wrap page content in
`<main>`, add a plum `:focus-visible` ring, and pad the back-link hit area to 24x24 minimum.
**Suggested command:** `/impeccable harden`

### [P2] The infrastructure band hands the reader a jargon wall at the emotional peak
"Both UPS units over NUT", "port matrices with PoE state", "WPA keys and RADIUS secrets",
"SMART state", "whether that bond really has both legs" — all unglossed, in the section
that is otherwise the best-written on the page.

**Why it matters:** the band's opening story (the power cut, nobody home) is perfectly
legible to any reader; the cards immediately following it are not. The page peaks and
alienates half its audience in the same breath.
**Fix:** lead each infrastructure card with one plain-language sentence before the
technical detail, or gloss the two or three densest terms inline. Rephrasing only — no
claim may change.
**Suggested command:** `/impeccable clarify`

### [P2] Sub-11px type is carrying real meaning
Detector-caught, design-review-missed, then confirmed by measurement: `.hl-feat-new` and
`.hl-feat-new--wip` render at **9.92px/700**, `.hl-infra-tags span` at **10.88px**,
`.hl-feat-tag` at 11.2px. Fifteen instances.

**Why it matters:** the "Taking shape" flag is the page's honesty mechanism — it is how
Home Inventory is correctly marked as unfinished. At 9.92px it is the least legible text
on the page. The hedge should be easy to read, not easy to miss. This is about legibility
only; the wording and the dashed-border treatment are correct and should not change.
**Fix:** raise meaning-bearing badges and tags to a 11–12px floor. Chrome inside the
hero mockup can stay small — it is a scaled picture of an app.
**Suggested command:** `/impeccable typeset`

## Persona Red Flags

**Jordan (Confused First-Timer):** bounces off the undefined acronyms in the infrastructure
band (NUT, PoE, RADIUS, SMART, NVR). Follows the hero's instruction to "press Ctrl K" and
nothing happens. Sees "LIVE FEED" collided over "Furnace filter" and concludes the flagship
component is buggy. Reaches the end and finds no answer to "how do I get in?"

**Riley (Deliberate Stress Tester):** finds only **3 tab stops** on a 15-screen page, with a
generic blue focus ring. Presses Ctrl+K as instructed — dead. Notices the feed cursor blinks
but the feed never updates. Screen-reader outline is jumpy (H1→H3, H2→H4) with no `<main>`
to skip to. Credit where due: zoom and reflow are clean, with **no horizontal overflow at any
viewport** and reduced-motion fully honored.

**Casey (Distracted Mobile User, 390px):** **13,216px — 15.7 screens** of single-column scroll,
with the infrastructure peak and the palette proof far down; a half-attending user bounces
before the two-act reward. The back-link is a 20x20 target. Only one solid tap target exists
on the entire page ("Take a look", 128x54). The live-feed collision is present here too.

## Minor Observations

- **Cosmetic drift, all measured at 1440:** `.hl-look`'s gradient terminates on `--cream-2`
  against the transparent `.hl-trust` (which shows `--cream`), producing a visible seam —
  `.hl-features` correctly resolves back to `--cream`, so this band is the odd one out.
  `.hl-feat-meta` tag rows sit at **248 / 225 / 271px** from card top within a single grid
  row, so the tags fail to form a line across the row. `.hl-cta-sub` retains a 36px bottom
  margin from a CTA row that no longer exists, leaving **144px of dead space** below the
  last line of the page body.
- **Dead CSS** from the in-app landing port, 0 uses in built markup: `.hl-btn-primary`
  (plus hover/disabled), `.hl-nav-cta` (plus hover/disabled), `.hl-error`, `.hl-cta-row-center`.
  Notably `.hl-btn-primary` is the solid plum button — the page's one CTA uses the
  low-emphasis ghost style instead, which is defensible with no conversion goal but is
  worth making a conscious choice rather than an inherited one.
- **Line length:** the footer taxonomy line ("Kitchen · Maintenance · Garden · …") runs
  **115 characters on one line** at 1068px wide with no `max-width`. The `.hl-section-head p`
  measures 79 characters per line at 640px — borderline, acceptable.
- **`em-dash-overuse` (advisory): 38 em-dashes** in body text. The copy is genuinely good,
  but the density is high enough that the detector flagged it, and it is a recognizable
  machine-writing tell. Worth a deliberate pass to vary the punctuation, not a rewrite.
- **Inline styles bypassing the system:** `style="justify-content:center"` on two eyebrows,
  and `style="font-style:italic;color:var(--rust)"` on the `.hl-now` `<em>` — where
  `.hl-hero-title em`, `.hl-infra-title em` and `.hl-look-title em` already establish that
  exact treatment as a CSS rule.
- **Simulated liveness:** the blinking cursor implies a streaming feed; the source comments
  describe a deliberately "final settled state". A careful visitor may read it as fake.
- The trust item "51 long-form guides built in" duplicates the Knowledge Base card and sits
  oddly among three security signals.
- **Shared-component defects, out of scope for this target but affecting all 8 landing
  pages:** `NintekBack` emits its divider as a flex sibling, so every `space-between` nav
  strands it 414–643px from the link it belongs to (measured across all 8); its 20x20 hit
  area is under the WCAG minimum everywhere; and `BaseLayout`'s `bare` mode omits `<main>`
  on every one.

## Questions to Consider

1. This page is `noindex` and Hearth has no signup — so who actually arrives here, and what
   should they be able to do? Right now it ends on "Welcome home." with no door. If the
   audience is the household, a quiet "Enter Hearth" would complete the metaphor; if the
   audience is people you show it to personally, the dead end may be exactly right.
2. The infrastructure band is both the emotional peak and the jargon valley. Could the two
   halves speak in their own registers, so the household reader is not handed NUT and RADIUS
   at the high point?
3. Does "the desk in the corner" (Plex, Azure, Study Hub, Model labs) earn its place, or does
   it dilute the specificity that makes the top of the page sing?
4. The feed blinks but never moves. Would a genuine reduced-motion-guarded reveal make the
   showpiece feel alive, or does any simulated liveness risk reading as fake?
5. On a 15.7-screen mobile scroll, what would you cut to get a distracted visitor to the
   infrastructure peak in half the distance?
