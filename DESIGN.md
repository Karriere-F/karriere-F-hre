---
name: Karriere Fähre
description: Trilingual (FR/DE/EN) recruitment and German-language-training agency site — black, gold and cream, built for trust over hype.
colors:
  brand-black: "#1a1a1a"
  brand-black-2: "#262626"
  brand-gold: "#b08d2b"
  brand-gold-light: "#d9be6b"
  brand-gold-text: "#8a6f22"
  brand-card: "#f6f1e3"
  brand-white: "#ffffff"
  brand-grey: "#6b6b6b"
  brand-ink: "#0b0b0b"
  brand-ink-secondary: "#52514e"
  brand-ink-muted: "#6e6c66"
  brand-grid: "#e1e0d9"
  brand-good: "#0ca30c"
typography:
  display:
    fontFamily: "ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "8px"
  pill: "9999px"
spacing:
  section-y: "4rem"
  section-y-lg: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-gold}"
    textColor: "{colors.brand-black}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.brand-gold-light}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.brand-gold-light}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
---

# Design System: Karriere Fähre

## 1. Overview

**Creative North Star: "The Trusted Ferry"**

Karriere Fähre ("career ferry") carries candidates from Central Africa across to
careers in Germany, and the design should read the same way a good ferry operator
does: calm, competent, unflashy. Visitors are making a high-stakes, often first-time
decision about relocating or retraining — the interface's job is to lower anxiety, not
generate excitement. This explicitly rejects the generic AI-SaaS register: no gradient
text, no eyebrow labels stacked above every section, no identical icon-card grids, no
cream-by-default body background chosen for its own sake. The black/gold/cream palette
comes directly from the founder's provided logo, not a template default, and is used
with intent — black carries authority and calm, gold marks the few places action is
invited, cream is reserved for content sections that need to feel warmer and more
approachable than the black hero bands.

**Key Characteristics:**
- Black hero/header bands anchor trust and gravity; light content sections carry the
  reading experience.
- Gold is scarce and always actionable — if it's gold, it's clickable.
- Flat by default; elevation only appears as a response to hover/interaction, never as
  decoration at rest.
- Serif headings, sans body — a classic institutional pairing that reads as
  established rather than trendy, appropriate for an agency handling people's careers.

## 2. Colors

A near-monochrome black/cream base with one warm gold accent — Restrained strategy,
not Committed: gold covers a small fraction of any given screen, and its rarity is
what makes it register as "call to action."

### Primary
- **Karriere Gold** (`#b08d2b`): the only actionable color in the system. Primary CTA
  *fills* (with black text on top) and borders. If an element is gold, it is
  interactive. Do not use this exact value as a text color on white/cream — at
  body text sizes it lands at ~3.1:1, below WCAG AA. Reserve it for fills/borders.
- **Karriere Gold Light** (`#d9be6b`): hover/lighter state for gold elements, never
  used as a resting color on its own.
- **Karriere Gold (text)** (`#8a6f22`): the AA-compliant (~4.8:1 on white) darker
  gold used whenever gold is a *text* color on a light background — headings,
  labels, links. On the black hero/header, the base `#b08d2b` is used directly for
  text instead (passes ~5.5:1 there), so this token is light-background-only.

### Neutral
- **Ferry Black** (`#1a1a1a`): header, footer, and hero band backgrounds. Carries the
  brand's institutional weight.
- **Ferry Black Panel** (`#262626`): borders and subtle panel separation within black
  sections (header/footer bottom border).
- **Paper Cream** (`#f6f1e3`): content-section background, used deliberately for the
  "why us" and value-proposition sections to feel warmer than the hero — not the
  default page background.
- **Pure White** (`#ffffff`): card surfaces and default page background on content
  pages.
- **Ink** (`#0b0b0b`) / **Ink Secondary** (`#52514e`) / **Ink Muted** (`#898781`): body
  text hierarchy on light backgrounds, darkest to lightest.
- **Hairline Grid** (`#e1e0d9`): card borders and dividers on light backgrounds.

### Named Rules
**The Scarce Gold Rule.** Gold marks action, not decoration. If more than roughly 10%
of a screen is gold, something has been mis-applied — check for a button, link, or
heading that should have reverted to ink or white.

## 3. Typography

**Display Font:** ui-serif stack (Georgia and system serif fallbacks) via Tailwind's
`font-serif` utility — no custom webfont is currently loaded.
**Body Font:** Arial, Helvetica, sans-serif.

**Character:** A classic serif/sans pairing on the contrast axis (serif headings,
sans body) — reads as an established institution rather than a startup. This is a
deliberate placeholder: a licensed display serif (e.g. a Garamond or Fraunces-family
face) would sharpen this further without changing the pairing logic, and is worth
revisiting once there's budget for webfont loading.

### Hierarchy
- **Display** (400, `clamp(1.875rem, 4vw, 3rem)`, 1.2): page hero H1s (`text-4xl
  sm:text-5xl font-serif`).
- **Headline** (400, `1.5rem–1.875rem`, 1.3): section H2s (`text-2xl` / `text-3xl
  font-serif`).
- **Title** (400, `1.125rem–1.25rem`, 1.4): card and subsection H3s (`text-lg` /
  `text-xl font-serif`).
- **Body** (400, `0.875rem–1rem`, 1.6): all paragraph copy, capped implicitly by
  `max-w-xl`/`max-w-2xl` containers rather than an explicit ch value.
- **Label** (500, `0.75rem`, uppercase, tracked): category tags on occupation cards
  (`text-xs uppercase tracking-wide text-brand-gold`).

## 4. Elevation

Flat by default. Cards and sections rest on borders (`border border-brand-grid`), not
shadows. Elevation is reserved entirely for interaction state: the `.lift-on-hover`
utility raises a card 3px with a soft shadow only while hovered, and floating elements
(WhatsApp popover, mobile nav panel) carry a resting `shadow-lg` because they visually
float above page content by design, not for decoration.

### Shadow Vocabulary
- **Hover lift** (`0 10px 24px -12px rgb(0 0 0 / 0.18)`): applied only on `:hover` via
  `.lift-on-hover`, paired with `translateY(-3px)`.
- **Floating panel** (Tailwind `shadow-lg`): WhatsApp popover, mobile nav panel —
  elements that are structurally "above" the page.

### Named Rules
**The Flat-At-Rest Rule.** Nothing carries a shadow while idle. If a card looks
elevated without being hovered or being a floating panel, remove the shadow.

## 5. Components

### Buttons
- **Shape:** full pill (`rounded-full`) for all CTAs; no square or barely-rounded
  buttons in the system.
- **Primary:** gold fill (`bg-brand-gold`), black text, `px-6 py-3`.
- **Secondary / Ghost:** transparent fill, gold border and text, fills gold on hover
  (`border-brand-gold text-brand-gold-light hover:bg-brand-gold hover:text-brand-black`).
- **Hover / Focus / Active:** color transition at 150ms; every button also carries the
  `.press` utility (scale to 0.97 on `:active`, gated behind `(hover: hover) and
  (pointer: fine)` so touch devices don't get a stuck pressed state).

### Cards
- **Corner Style:** `rounded-lg` (8px) — never larger. Occupation cards, step cards,
  value cards, track cards all share this radius.
- **Background:** white on cream sections, cream-adjacent white on white sections —
  always a shade lighter than its parent section so the card reads as a surface.
- **Shadow Strategy:** flat at rest; `.lift-on-hover` on any card that is itself a
  link/interactive target (occupation cards, track cards, step cards). Purely
  informational cards (the three "why us" cards) lift too, for consistency of feel
  across the page, but do not additionally scale.
- **Border:** 1px `border-brand-grid` always present; the interactive hover state
  changes the border color to gold rather than adding a second visual layer.

### Inputs / Fields
- **Style:** 1px `border-brand-grid`, `rounded` (4px, deliberately tighter than card
  radius so fields read as functional, not decorative), white background.
- **Focus:** border shifts to gold plus a soft `ring-2 ring-brand-gold/20` — visible
  without being loud, consistent across contact, booking, and auth forms via a shared
  `inputClass` constant.
- **Error:** red-600 helper text beneath the field, no border-color change (avoids
  competing with the gold focus ring).

### Navigation
- **Header:** black background, logo image left, horizontal text links at `lg` and
  above, gold-pill "book appointment" CTA, locale switcher.
- **Mobile (below `lg`):** an animated hamburger icon (three bars, morphs to an X)
  toggles a full-width dropdown panel anchored under the header, links staggered in
  with `.animate-fade-up` on open.
- **Active/Hover:** links shift from white/70% to gold-light on hover; no active-route
  underline or background treatment currently implemented.

## 6. Do's and Don'ts

### Do:
- **Do** keep gold reserved for actionable elements — CTAs, active states, category
  labels that lead somewhere.
- **Do** use the full pill shape (`rounded-full`) for every button; keep cards at
  `rounded-lg` (8px), never larger.
- **Do** keep sections flat at rest; only add elevation as a hover/interaction
  response via `.lift-on-hover`.
- **Do** stagger multi-item reveals (`.animate-fade-up` with 40–80ms per-item delay)
  rather than animating every section identically.
- **Do** gate scale/transform hover effects behind `(hover: hover) and (pointer:
  fine)` so touch devices never get a stuck hover or press state.
- **Do** design every form and layout at mobile width first — the primary candidate
  audience is majority-mobile.

### Don't:
- **Don't** introduce gradient text, tiny uppercase "eyebrow" labels above every
  section, or numbered `01 / 02 / 03` section markers as default scaffolding — none
  currently exist in the system; keep it that way.
- **Don't** default to a cream/sand page background "for warmth." Cream (`#f6f1e3`)
  is reserved for specific content sections that intentionally contrast with the
  black hero and white card sections — it is not the page default.
- **Don't** pair a 1px border with a wide, soft `box-shadow` on the same card or
  button ("ghost-card" pattern) — pick the border (resting state) or the shadow
  (hover state via `.lift-on-hover`), never both.
- **Don't** show pricing anywhere on the public site — an explicit, standing
  founder decision, not a visual preference.
- **Don't** exceed `rounded-lg` (8px) on cards/sections/inputs, even for "friendlier"
  redesigns — full-pill is reserved for pill-shaped buttons/tags only.
- **Don't** animate elements the user will see dozens of times a day (form field
  focus, admin dashboard toggles) with anything beyond an instant color/opacity
  change — reserve `.animate-fade-up` entrance motion for pages and sections seen
  occasionally.

---

*Scope note: this file follows the DESIGN.md spec's six required sections. The
optional `.impeccable/design.json` sidecar (tonal ramps, full component HTML/CSS
snippets for Stitch's live-variant panel) was intentionally skipped — this project
isn't using `$impeccable live` mode, so that machinery has no consumer yet. Generate
it later with `$impeccable document` if live mode is adopted.*
