# Design System — Yu-Hsin Lin Inspired Portfolio Style

> A detailed visual and motion system for recreating the editorial, monochrome, refined portfolio language inspired by `https://www.yuhsinlin.com/`.  
> Scope: typography, color, background, cards, layout, footer underlay, brand asterisk, loaders, transitions, interaction flows, and implementation notes.  
> Excludes: drawing area, playground canvas, draw gallery, and playful drawing-specific UI.

---

## 0. Intent

This design system is not a generic portfolio template. It is an editorial, content-first, quietly expressive system built around:

- elegant serif display typography;
- strict but airy grid structure;
- monochrome warmth rather than cold dashboard neutrals;
- a recurring asterisk/star brand motif;
- refined card systems with thin borders and soft motion;
- generous footer-as-destination treatment;
- calm page-load choreography.

The goal is to make the interface feel like a designer’s portfolio, a small editorial publication, and a crafted product system at the same time.

---

## 1. Brand DNA

### 1.1 Core Personality

| Attribute | Direction |
|---|---|
| Clarity | The interface should feel precise, legible, and easy to scan. |
| Character | The asterisk, serif type, and subtle movement give the system personality. |
| Editorial calm | Layouts should feel typeset, not assembled from generic UI blocks. |
| Human systems | Even structured components should feel tactile, soft, and approachable. |
| Restrained motion | Animation should guide and delight, never distract. |
| Whitespace as material | Empty space is part of the design, not leftover space. |
| Monochrome warmth | Use black, ivory, grey, and paper tones rather than sterile white/black contrast. |

### 1.2 Visual Keywords

Use these words to evaluate every page:

**editorial, warm, precise, airy, quiet, tactile, refined, minimal, human, deliberate, slightly playful.**

Avoid:

**dashboard-like, SaaS-generic, over-rounded, colorful gradients, blue-purple AI styling, glassmorphism, loud shadows, neon accents, excessive icons.**

---

## 2. Brand Motif: The Asterisk / Star

### 2.1 Symbol

The core mark is an asterisk-like starburst:

```txt
✱
```

or a custom 8-point symbol built with thick strokes.

### 2.2 Role

The star should appear as:

- the primary logo mark in navigation;
- the first visual during loading;
- a motion cue during page transitions;
- a decorative divider in hero/section breaks;
- a footer CTA object;
- a small bullet in principle lists or implementation notes;
- an interactive object on hover, click, or page reveal.

### 2.3 Usage Rules

| Usage | Size | Behavior |
|---|---:|---|
| Navigation logo | 24–32px | Slight rotate on hover. |
| Loader mark | 56–96px | Scale in, rotate subtly, breathe once. |
| Footer CTA | 64–112px | Circular border container; slow hover spin. |
| Section marker | 16–24px | Static or faint fade-up. |
| Bullet marker | 10–14px | Static; use sparingly. |

### 2.4 Motion Personality

The star should move like a confident signature, not a spinner.

Recommended motion:

```css
.star {
  transform-origin: center;
  transition:
    transform 500ms cubic-bezier(.16, 1, .3, 1),
    opacity 300ms ease;
}

.star:hover {
  transform: rotate(22.5deg) scale(1.04);
}
```

For loader:

```css
@keyframes star-intro {
  0% {
    opacity: 0;
    transform: scale(0.82) rotate(-18deg);
    filter: blur(6px);
  }
  55% {
    opacity: 1;
    transform: scale(1.04) rotate(4deg);
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: blur(0);
  }
}
```

---

## 3. Color System

The palette should feel like paper, ink, graphite, and soft shadow.

### 3.1 Core Tokens

```css
:root {
  --color-black: #111111;
  --color-ink: #171717;
  --color-charcoal: #1f1f1f;
  --color-graphite: #4f4f4f;
  --color-muted: #747474;
  --color-soft-muted: #9a9a9a;

  --color-paper: #f8f7f3;
  --color-paper-soft: #fbfaf7;
  --color-paper-warm: #f3f0ea;
  --color-panel: #f6f4ee;
  --color-panel-raised: #fffefa;

  --color-border: #dedbd2;
  --color-border-soft: #ebe8df;
  --color-hairline: rgba(17, 17, 17, 0.12);

  --color-shadow-soft: rgba(17, 17, 17, 0.05);
  --color-shadow-medium: rgba(17, 17, 17, 0.09);
}
```

### 3.2 Usage

| Token | Use |
|---|---|
| `--color-black` | Primary text, logo, arrows, strong dividers. |
| `--color-ink` | Headings and rich body text. |
| `--color-charcoal` | Secondary dark surfaces or hover states. |
| `--color-muted` | Captions, metadata, index labels. |
| `--color-paper` | Primary page background. |
| `--color-paper-soft` | Card background and footer panel base. |
| `--color-paper-warm` | Section contrast blocks and underlay areas. |
| `--color-border` | Card borders, nav borders, footer columns. |
| `--color-border-soft` | Internal separators and hairlines. |

### 3.3 Background Treatment

The background must never be flat pure white. Use warm white with a subtle paper texture.

```css
body {
  background:
    radial-gradient(circle at 20% 10%, rgba(255,255,255,0.75), transparent 26rem),
    radial-gradient(circle at 80% 0%, rgba(238,235,225,0.58), transparent 24rem),
    linear-gradient(180deg, #fbfaf7 0%, #f7f5ef 100%);
  color: var(--color-ink);
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.28;
  background-image:
    radial-gradient(rgba(17,17,17,0.16) 0.45px, transparent 0.45px);
  background-size: 3px 3px;
  mix-blend-mode: multiply;
  z-index: 9999;
}
```

### 3.4 Border Philosophy

Use borders more often than shadows.

```css
border: 1px solid var(--color-border);
```

For internal dividers:

```css
border-top: 1px solid var(--color-border-soft);
```

For very fine editorial rules:

```css
border-color: rgba(17, 17, 17, 0.10);
```

---

## 4. Typography System

The system depends heavily on type contrast: expressive serif for voice, neutral sans for structure.

### 4.1 Recommended Font Pairing

Because the public page view does not expose a reliable font manifest in the captured text, use this high-fidelity pairing:

| Role | Preferred | Alternatives |
|---|---|---|
| Editorial display | Playfair Display | Cormorant Garamond, Noe Display, Canela, Editorial New, Libre Baskerville |
| UI/body sans | Satoshi | Inter, Neue Haas Grotesk, Helvetica Neue, Suisse Intl, Arial |
| Mono/metadata optional | IBM Plex Mono | JetBrains Mono, Space Mono |

### 4.2 CSS Font Stack

```css
:root {
  --font-display: "Playfair Display", "Cormorant Garamond", Georgia, serif;
  --font-sans: "Satoshi", "Inter", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "IBM Plex Mono", "Space Mono", monospace;
}
```

### 4.3 Type Scale

| Style | Font | Size | Line height | Tracking | Weight |
|---|---|---:|---:|---:|---:|
| Hero display | Display serif | clamp(56px, 8.8vw, 136px) | 0.92–1.02 | -0.055em | 400 |
| Page display | Display serif | clamp(48px, 7vw, 104px) | 0.95–1.05 | -0.045em | 400 |
| Section title | Sans | clamp(32px, 4vw, 64px) | 1.04 | -0.04em | 500–600 |
| Card title | Sans or serif | 22–32px | 1.05–1.15 | -0.02em | 500 |
| Body | Sans | 15–18px | 1.55–1.75 | -0.01em | 400 |
| Small body | Sans | 13–14px | 1.55 | 0 | 400 |
| Overline | Sans | 10–12px | 1 | 0.12–0.2em | 600 |
| Nav | Sans | 11–13px | 1 | 0.12–0.18em | 600 |
| Metadata/chip | Sans | 11–12px | 1 | 0.04–0.08em | 500 |

### 4.4 Hero Type Rules

Hero text should feel typeset by hand.

```css
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8.8vw, 9.5rem);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-weight: 400;
  color: var(--color-black);
  max-width: 12ch;
}
```

Rules:

- Keep lines short.
- Let the serif breathe.
- Avoid centered hero text unless the full page is intentionally poster-like.
- Use asymmetric layout: text block on one side, media/card/negative space on the other.
- Avoid heavy bold serif.

### 4.5 Navigation Labels

```css
.nav-link {
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
}
```

### 4.6 Microcopy

Use parenthetical labels and index labels often:

```txt
(ABOUT)
(2021 — 2026)
(SELECTED PROJECTS)
(AVAILABLE FOR WORK)
```

Microcopy should look intentional, not like helper text.

---

## 5. Layout System

### 5.1 Page Shell

```css
.page-shell {
  width: min(100% - 32px, 1480px);
  margin-inline: auto;
}
```

Desktop margins should feel wide. On very large screens, content should not stretch endlessly.

### 5.2 Grid

Use a 12-column grid for desktop, but allow editorial asymmetry.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: clamp(16px, 2vw, 32px);
}
```

### 5.3 Vertical Rhythm

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;
  --space-11: 176px;
  --space-12: 224px;
}
```

Recommended section spacing:

| Section | Top | Bottom |
|---|---:|---:|
| Hero | 80–128px | 120–180px |
| About intro | 96–140px | 80–120px |
| Project list | 96–160px | 128–200px |
| Footer underlay | 160–220px | 0 |

### 5.4 Structural Flow

Recommended page order:

```txt
1. Loader splash
2. Fixed/persistent nav
3. Hero statement
4. Intro/about micro-section
5. Curated project list
6. Other work / smaller references
7. Closing statement
8. Footer underlay
```

Exclude playground/draw interactions unless the page specifically needs them.

### 5.5 Editorial Composition Rules

- Do not center every block.
- Use large left-aligned serif statements.
- Pair dense project metadata with airy spacing.
- Let cards sit in a grid, but break the rhythm with one wider card or text module.
- Use thin horizontal lines to separate sections.
- Use large empty areas as visual pauses.
- Let the footer feel like a revealed destination.

---

## 6. Navigation Component

### 6.1 Structure

```txt
[✱]   WORK   ABOUT   RESUME                         AVAILABLE FOR WORK ●
```

### 6.2 Styling

```css
.site-nav {
  position: sticky;
  top: 16px;
  z-index: 50;
  width: min(100% - 32px, 1480px);
  margin: 16px auto 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  min-height: 56px;
  padding: 0 18px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: rgba(251, 250, 247, 0.78);
  backdrop-filter: blur(18px);
}

.site-nav__links {
  display: flex;
  justify-content: center;
  gap: clamp(20px, 4vw, 56px);
}

.site-nav__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.site-nav__dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--color-black);
}
```

### 6.3 Interactions

| Element | Hover |
|---|---|
| Star logo | Rotate 22.5deg and scale to 1.04. |
| Nav links | Slight opacity drop + underline slide. |
| Status dot | Tiny pulse every 3–4 seconds. |

```css
.nav-link {
  position: relative;
  color: var(--color-black);
  text-decoration: none;
  opacity: 0.84;
  transition: opacity 180ms ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 220ms cubic-bezier(.16, 1, .3, 1);
}

.nav-link:hover {
  opacity: 1;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

---

## 7. Loader / Page Intro System

The loader is a signature part of the site feel. It should be calm, editorial, and brand-led.

### 7.1 Loader Sequence

```txt
Frame 1: Warm blank paper background
Frame 2: Centered asterisk/star scales in
Frame 3: Star breathes / rotates subtly
Frame 4: Name fades in below or beside the star
Frame 5: Loader softly clips/fades away
Frame 6: Navigation + hero reveal begins
```

### 7.2 Timing

| Step | Duration | Delay | Easing |
|---|---:|---:|---|
| Star intro | 700ms | 0ms | cubic-bezier(.16, 1, .3, 1) |
| Star breathe | 500ms | 350ms | ease-in-out |
| Name reveal | 500ms | 450ms | ease-out |
| Loader exit | 650ms | 1000–1200ms | cubic-bezier(.76, 0, .24, 1) |
| Hero reveal | 900–1200ms | after exit begins | staggered ease-out |

### 7.3 Loader CSS

```css
.loader {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: grid;
  place-items: center;
  background: var(--color-paper);
  color: var(--color-black);
  overflow: hidden;
}

.loader__inner {
  display: grid;
  gap: 24px;
  justify-items: center;
}

.loader__star {
  font-size: clamp(56px, 8vw, 104px);
  line-height: 1;
  animation: star-intro 800ms cubic-bezier(.16, 1, .3, 1) both;
}

.loader__name {
  font-family: var(--font-sans);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  opacity: 0;
  animation: name-intro 520ms ease-out 480ms both;
}

@keyframes name-intro {
  from {
    opacity: 0;
    transform: translateY(8px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.loader.is-exiting {
  animation: loader-exit 700ms cubic-bezier(.76, 0, .24, 1) both;
}

@keyframes loader-exit {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-3%);
    opacity: 0;
    pointer-events: none;
  }
}
```

### 7.4 Feel

The loader should feel like a title card, not a progress screen.

Do:

- use a centered composition;
- keep it under 2 seconds;
- animate the star once;
- reveal the name softly;
- transition directly into the hero.

Avoid:

- looping spinner behavior;
- progress bars;
- loading percentages;
- noisy particles;
- exaggerated rotation.

---

## 8. Hero Section

### 8.1 Structure

```txt
[Nav]

Large editorial statement                             Optional image/card/negative space
Small link / about CTA
```

### 8.2 Example Copy Style

```txt
I bring clarity
and character to
systems and
products,
making them more human
```

### 8.3 Hero Styling

```css
.hero {
  min-height: calc(100vh - 96px);
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(280px, 5fr);
  gap: clamp(32px, 6vw, 96px);
  align-items: center;
  padding-block: clamp(72px, 12vh, 144px);
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(64px, 8.7vw, 148px);
  line-height: 0.94;
  letter-spacing: -0.06em;
  font-weight: 400;
}

.hero__line {
  display: block;
  overflow: hidden;
}

.hero__word,
.hero__line-inner {
  display: inline-block;
}

.hero__cta {
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
```

### 8.4 Hero Reveal Animation

Each line or word should rise gently from below.

```css
.hero__line-inner {
  opacity: 0;
  transform: translateY(110%);
  animation: hero-line-in 900ms cubic-bezier(.16, 1, .3, 1) both;
}

.hero__line:nth-child(1) .hero__line-inner { animation-delay: 80ms; }
.hero__line:nth-child(2) .hero__line-inner { animation-delay: 160ms; }
.hero__line:nth-child(3) .hero__line-inner { animation-delay: 240ms; }
.hero__line:nth-child(4) .hero__line-inner { animation-delay: 320ms; }

@keyframes hero-line-in {
  from {
    opacity: 0;
    transform: translateY(110%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 8.5 Hero Image / Visual Area

If using media, it should not overpower the type.

```css
.hero__visual {
  min-height: clamp(320px, 42vw, 620px);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.58), rgba(240,238,230,0.8)),
    var(--color-panel);
  overflow: hidden;
}
```

Use grayscale or low-saturation visuals. Avoid bright color blocks.

---

## 9. Section Headers

### 9.1 Anatomy

```txt
(ABOUT)        Body paragraph or section heading
```

or

```txt
CURATED
PROJECTS                         (2021 — 2026)
```

### 9.2 Style

```css
.section-kicker {
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
}

.section-title {
  font-family: var(--font-sans);
  font-size: clamp(40px, 6vw, 96px);
  line-height: 0.94;
  letter-spacing: -0.055em;
  font-weight: 500;
}
```

### 9.3 Divider Lines

```css
.section-rule {
  height: 1px;
  background: var(--color-border-soft);
  margin-block: var(--space-8);
}
```

---

## 10. Project Cards

### 10.1 Card Philosophy

Cards should look like editorial specimens: a mix of image, metadata, number, and clear CTA. Avoid heavy dashboard cards.

### 10.2 Anatomy

```txt
┌─────────────────────────────────────┐
│ (01)                         VIEW   │
│                                     │
│ [image / muted visual]              │
│                                     │
│ Design System                       │
│ Mobile  Web  Accessibility          │
│                                     │
│ Project title                       │
│ Short summary text...               │
│                                     │
│ VIEW PROJECT                    →   │
└─────────────────────────────────────┘
```

### 10.3 Card CSS

```css
.project-card {
  position: relative;
  display: grid;
  min-height: 520px;
  padding: 18px;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: rgba(251, 250, 247, 0.72);
  overflow: hidden;
  transition:
    transform 320ms cubic-bezier(.16, 1, .3, 1),
    box-shadow 320ms cubic-bezier(.16, 1, .3, 1),
    border-color 320ms ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(17,17,17,0.24);
  box-shadow: 0 18px 48px rgba(17,17,17,0.08);
}

.project-card__media {
  aspect-ratio: 1.35 / 1;
  border-radius: 13px;
  overflow: hidden;
  background: var(--color-panel);
  margin-bottom: 24px;
}

.project-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(0.94) brightness(1.02);
  transform: scale(1.02);
  transition: transform 700ms cubic-bezier(.16, 1, .3, 1), filter 700ms ease;
}

.project-card:hover .project-card__media img {
  transform: scale(1.075);
  filter: grayscale(0.85) contrast(0.98) brightness(1.03);
}
```

### 10.4 Metadata Tags

```css
.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-muted);
  background: rgba(255,255,255,0.34);
}
```

### 10.5 Card Hover CTA

```css
.card-link {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.card-link__arrow {
  transition: transform 240ms cubic-bezier(.16, 1, .3, 1);
}

.project-card:hover .card-link__arrow {
  transform: translateX(6px);
}
```

---

## 11. About / Text Modules

### 11.1 Structure

Use a small label on the left and a confident paragraph on the right.

```txt
(ABOUT)    As a designer with experience in product systems...
```

### 11.2 Styling

```css
.about-strip {
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: clamp(24px, 4vw, 80px);
  padding-block: clamp(80px, 10vw, 160px);
  border-top: 1px solid var(--color-border-soft);
  border-bottom: 1px solid var(--color-border-soft);
}

.about-strip__copy {
  max-width: 980px;
  font-family: var(--font-sans);
  font-size: clamp(24px, 3vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.04em;
}
```

### 11.3 Text Module Cards

```css
.text-module {
  padding: clamp(24px, 3vw, 40px);
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: rgba(251,250,247,0.58);
}
```

---

## 12. Buttons and Links

### 12.1 Text Links

Text links should be understated and directional.

```txt
ABOUT ME  →
VIEW PROJECT  →
LEARN MORE  →
```

```css
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-sans);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-black);
  text-decoration: none;
}

.text-link span {
  position: relative;
}

.text-link span::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 220ms cubic-bezier(.16, 1, .3, 1);
}

.text-link:hover span::after {
  transform: scaleX(1);
  transform-origin: left;
}

.text-link svg,
.text-link .arrow {
  transition: transform 220ms cubic-bezier(.16, 1, .3, 1);
}

.text-link:hover svg,
.text-link:hover .arrow {
  transform: translateX(5px);
}
```

### 12.2 Circular Icon Button

```css
.icon-button {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border: 1px solid var(--color-black);
  border-radius: 999px;
  background: transparent;
  color: var(--color-black);
  transition:
    transform 420ms cubic-bezier(.16, 1, .3, 1),
    background 220ms ease,
    color 220ms ease;
}

.icon-button:hover {
  transform: rotate(22.5deg) scale(1.03);
  background: var(--color-black);
  color: var(--color-paper);
}
```

---

## 13. Footer Underlay System

The footer should feel like a final destination, not an afterthought.

### 13.1 Structure

```txt
┌───────────────────────────────────────────────────────────────┐
│ ✱        Ready to create something cool together,              │
│          or just press the star                         [✱]    │
│                                                               │
│ (EXPLORE)          (CONTACT)                 (LOCATION/NOTE)   │
│ WORK               LINKEDIN                  Based in ...      │
│ ABOUT              EMAIL                     working globally. │
│ RESUME                                                        │
└───────────────────────────────────────────────────────────────┘
```

### 13.2 Underlay Behavior

At the end of the page, the footer should feel like it is being revealed from beneath the content.

Implementation options:

1. **Sticky underlay:** footer is sticky at bottom while previous content scrolls over it.
2. **Clip reveal:** footer content appears through a vertical mask on scroll.
3. **Fade-up reveal:** footer title and columns stagger in when the section enters viewport.

Recommended: sticky underlay for a premium reveal.

```css
.footer-spacer {
  position: relative;
  min-height: 100vh;
}

.site-footer {
  position: sticky;
  bottom: 0;
  min-height: 72vh;
  display: grid;
  align-content: end;
  padding: clamp(32px, 5vw, 80px);
  background:
    radial-gradient(circle at 82% 18%, rgba(255,255,255,0.75), transparent 24rem),
    var(--color-paper-warm);
  border-top: 1px solid var(--color-border);
}
```

### 13.3 Footer Panel Styling

```css
.footer-panel {
  display: grid;
  grid-template-columns: 1.2fr 2.2fr 1.2fr;
  gap: clamp(32px, 5vw, 88px);
  padding: clamp(32px, 5vw, 72px);
  border: 1px solid var(--color-border);
  border-radius: 22px;
  background: rgba(251,250,247,0.66);
  box-shadow: 0 20px 80px rgba(17,17,17,0.05);
}

.footer-title {
  font-family: var(--font-display);
  font-size: clamp(44px, 6vw, 104px);
  line-height: 0.96;
  letter-spacing: -0.055em;
  font-weight: 400;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer-column + .footer-column {
  border-left: 1px solid var(--color-border-soft);
  padding-left: 32px;
}
```

### 13.4 Footer Motion

```css
.footer-title,
.footer-column,
.footer-star {
  opacity: 0;
  transform: translateY(32px);
}

.footer.is-visible .footer-title,
.footer.is-visible .footer-column,
.footer.is-visible .footer-star {
  animation: footer-rise 850ms cubic-bezier(.16, 1, .3, 1) both;
}

.footer.is-visible .footer-column:nth-child(1) { animation-delay: 120ms; }
.footer.is-visible .footer-column:nth-child(2) { animation-delay: 200ms; }
.footer.is-visible .footer-column:nth-child(3) { animation-delay: 280ms; }
.footer.is-visible .footer-star { animation-delay: 360ms; }

@keyframes footer-rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 14. Motion System

### 14.1 Motion Principles

| Principle | Meaning |
|---|---|
| Soft reveal | Elements arrive with opacity and slight vertical motion. |
| Clip with restraint | Use overflow-hidden masks for hero and section reveals. |
| Slow confidence | Durations should be slightly slower than generic web UI. |
| One signature flourish | The star may rotate/pulse; everything else stays calm. |
| Directional hints | Arrows and drag prompts may subtly move. |
| No bouncy UI | Avoid springy, playful SaaS animation unless extremely subtle. |

### 14.2 Timing Tokens

```css
:root {
  --duration-fast: 160ms;
  --duration-base: 240ms;
  --duration-soft: 420ms;
  --duration-slow: 700ms;
  --duration-loader: 1200ms;

  --ease-out: cubic-bezier(.16, 1, .3, 1);
  --ease-in-out: cubic-bezier(.76, 0, .24, 1);
  --ease-soft: cubic-bezier(.22, .61, .36, 1);
}
```

### 14.3 Page Load Flow

```txt
0ms      page is paper-white
100ms    star appears
300ms    star reaches full scale
500ms    name begins fade-in
1000ms   loader begins exit
1200ms   nav appears
1300ms   hero line 1 begins
1380ms   hero line 2 begins
1460ms   hero line 3 begins
1540ms   hero CTA appears
```

### 14.4 Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);
  clip-path: inset(0 0 18% 0);
  transition:
    opacity 700ms var(--ease-out),
    transform 700ms var(--ease-out),
    clip-path 700ms var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  clip-path: inset(0 0 0 0);
}
```

### 14.5 Card Hover Flow

```txt
Default:
card flat, soft border, no heavy shadow

Hover 0–120ms:
border darkens, card lifts 2–4px

Hover 120–280ms:
shadow expands softly, image scales to 1.05

Hover 180–320ms:
arrow moves right, link underline appears
```

### 14.6 Link Hover Flow

```txt
1. opacity rises from 0.78 to 1
2. underline slides left-to-right
3. arrow moves 4–6px
4. all returns softly on mouse leave
```

### 14.7 Star Interaction Flow

```txt
1. pointer enters
2. star rotates 22.5deg
3. star scales to 1.03–1.06
4. optional background inversion for circular buttons
5. pointer leaves; star returns slowly
```

### 14.8 Directional Prompt

For small prompts like “drag →” or “scroll →”, keep the animation tiny.

```css
.direction-prompt {
  animation: prompt-nudge 1.8s ease-in-out infinite;
}

@keyframes prompt-nudge {
  0%, 100% { transform: translateX(0); opacity: 0.58; }
  50% { transform: translateX(6px); opacity: 1; }
}
```

---

## 15. Component Library

### 15.1 Top Navigation

See Section 6.

Required states:

- default;
- hover link;
- active link;
- scrolled/sticky;
- mobile collapsed.

### 15.2 Hero Text Block

Required states:

- initial hidden;
- line reveal;
- completed state;
- responsive stacked state.

### 15.3 Project Card

Required elements:

- project index;
- type/category metadata;
- image or visual field;
- project title;
- short description;
- CTA arrow;
- optional featured chip.

Required states:

- default;
- hover;
- focus-visible;
- pressed/tap;
- reduced-motion state.

### 15.4 Tags / Chips

Chips should be small, quiet, and structural.

```css
.chip:hover {
  border-color: rgba(17,17,17,0.22);
  color: var(--color-black);
  background: rgba(255,255,255,0.58);
}
```

### 15.5 Text Module

Use for about, capability notes, process summaries, or case study intro blocks.

Visual qualities:

- thin border;
- warm white background;
- short title;
- paragraph with comfortable line height;
- optional small CTA.

### 15.6 Footer Contact Columns

Use overline headings:

```txt
(EXPLORE)
WORK
ABOUT
RESUME

(CONTACT)
LINKEDIN
EMAIL
```

Each column should feel typeset, not like a typical sitemap.

### 15.7 Arrow Treatments

Use simple arrows:

```txt
→
↗
```

Avoid complex icon packs. Stroke should be thin, crisp, and typographic.

---

## 16. Responsive Behavior

### 16.1 Breakpoints

```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```

### 16.2 Desktop

- Sticky nav with centered links.
- Hero uses two columns.
- Project grid can be 2–4 columns depending on content.
- Footer uses multi-column layout.

### 16.3 Tablet

- Hero becomes 1.2-column or stacked.
- Type remains large but less extreme.
- Project cards become 2 columns.
- Footer columns compress.

### 16.4 Mobile

```css
@media (max-width: 768px) {
  .site-nav {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .site-nav__links {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-block: 72px 112px;
  }

  .hero__title {
    font-size: clamp(56px, 17vw, 88px);
    max-width: 8ch;
  }

  .about-strip {
    grid-template-columns: 1fr;
  }

  .footer-panel {
    grid-template-columns: 1fr;
  }

  .footer-columns {
    grid-template-columns: 1fr;
  }

  .footer-column + .footer-column {
    border-left: 0;
    border-top: 1px solid var(--color-border-soft);
    padding-left: 0;
    padding-top: 24px;
  }
}
```

### 16.5 Mobile Philosophy

Keep the editorial feeling. Do not shrink everything into a standard mobile dashboard.

- Preserve large serif type.
- Keep generous section spacing.
- Stack content confidently.
- Make nav minimal.
- Use fewer cards per row, not smaller cards.

---

## 17. Accessibility

### 17.1 Contrast

- Primary text on paper background should be near-black.
- Muted metadata must remain readable.
- Avoid low-contrast grey body copy.

### 17.2 Focus States

Focus states should be visible but elegant.

```css
:focus-visible {
  outline: 1px solid var(--color-black);
  outline-offset: 4px;
  border-radius: 8px;
}
```

### 17.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

### 17.4 Hit Areas

- Nav links: minimum 36px vertical hit area.
- Icon buttons: minimum 44px.
- Footer links: spaced enough for touch.

---

## 18. Implementation Blueprint

### 18.1 Global CSS Starter

```css
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--color-paper);
}

body {
  margin: 0;
  font-family: var(--font-sans);
  color: var(--color-ink);
  background: var(--color-paper);
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

a {
  color: inherit;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
}

button {
  font: inherit;
}
```

### 18.2 Page Skeleton

```tsx
export function PortfolioPage() {
  return (
    <>
      <Loader />
      <SiteNav />
      <main className="page-shell">
        <Hero />
        <AboutStrip />
        <ProjectSection />
        <OtherWork />
      </main>
      <FooterUnderlay />
    </>
  );
}
```

### 18.3 Motion Hook Concept

Use `IntersectionObserver` for reveal classes.

```ts
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
```

---

## 19. Design Checklist

Before shipping any page in this style, verify:

- [ ] Background is warm paper, not pure white.
- [ ] Serif display type is large, elegant, and not over-bold.
- [ ] UI text is neutral sans, uppercase where appropriate.
- [ ] Borders are thin and consistent.
- [ ] Shadows are subtle and rare.
- [ ] Cards have enough breathing room.
- [ ] Project cards include index, metadata, image/visual, title, summary, and CTA.
- [ ] The asterisk/star motif appears in nav, loader, and footer.
- [ ] Page loader feels like a title card.
- [ ] Hero text reveals line-by-line or word-by-word.
- [ ] Section reveals are slow and confident.
- [ ] Footer feels like a destination section with underlay/reveal behavior.
- [ ] No colorful dashboard styling has crept in.
- [ ] No playground/draw-area components are included.
- [ ] Mobile keeps the editorial mood.
- [ ] Reduced-motion fallback exists.

---

## 20. Do / Don’t

### Do

- Use monochrome restraint.
- Use one strong typographic idea per section.
- Use generous whitespace.
- Let the star become a recurring signature.
- Use thin borders and subtle texture.
- Make motion feel premium and intentional.
- Make the footer memorable.

### Don’t

- Do not use bright gradients.
- Do not use generic AI/SaaS cards.
- Do not use heavy drop shadows.
- Do not over-animate every element.
- Do not use too many icons.
- Do not make the layout feel like an admin dashboard.
- Do not include the draw/playground area for this design direction.

---

## 21. Final Creative Direction

The finished website should feel like this:

> A quiet editorial portfolio with the precision of a design system, the warmth of paper, the confidence of strong typography, and the charm of one recurring star-shaped signature.

Every component should be simple, but not basic. Every animation should be soft, but not invisible. Every layout should be minimal, but not empty. The style should feel authored.
