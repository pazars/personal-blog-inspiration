# Visual Style Guide

Reference for reproducing the visual aesthetic of this personal portfolio/blog. Written for LLMs generating code in this codebase.

---

## Overall Aesthetic

**Minimal, editorial, professional.** The site feels like a well-designed portfolio from someone who cares about craft — not flashy, not sterile. It uses generous whitespace, restrained color, and quiet interaction details. Think: a designer's personal site that lets the work speak for itself.

Key adjectives: **clean, understated, typographic, spacious, warm-neutral, intentional.**

---

## Color Philosophy

Two-tone foundation with a single accent. The palette is almost monochromatic — deep navy text on white, with one saturated blue for emphasis. Gray scale handles hierarchy. No gradients, no decorative color.

### Light Mode

| Token                    | Value                       | Usage                              |
|--------------------------|-----------------------------|-------------------------------------|
| `--color-fg-default`     | `#090e24` (dark navy)       | Primary text, headings              |
| `--color-fg-muted`       | `#757676` (warm gray)       | Secondary text, descriptions, icons |
| `--color-fg-emphasis`    | `#283cff` (saturated blue)  | Links with emphasis, accent color   |
| `--color-fg-inverse`     | `#ffffff`                   | Text on dark backgrounds            |
| `--color-bg-default`     | `#ffffff`                   | Page background                     |
| `--color-bg-subtle`      | `#f6f7f9` (cool off-white)  | Cards, list items, hover states     |
| `--color-bg-emphasis`    | `rgb(241, 242, 246)`        | Stronger hover, active nav          |
| `--color-bg-success`     | `#1dab62` (green)           | Pulsing "currently working" dot     |
| `--color-border-default` | `#e7eaf1`                   | Card borders, dividers              |
| `--color-border-subtle`  | `rgba(0, 0, 0, 0.075)`     | Very faint borders                  |
| `--color-line-default`   | `#e6e7e7`                   | Link underlines (default)           |
| `--color-line-emphasis`  | `#757676`                   | Link underlines (hover)             |

### Dark Mode

| Token                    | Value                       |
|--------------------------|-----------------------------|
| `--color-fg-default`     | `#e2e8f0` (soft light gray) |
| `--color-bg-default`     | `#121212` (near-black)      |
| `--color-bg-subtle`      | `#1c1c1c`                   |
| `--color-bg-emphasis`    | `#1f1f22`                   |
| `--color-bg-inverse`     | `#303036`                   |
| `--color-border-default` | `rgba(255, 255, 255, 0.141)`|
| `--color-border-subtle`  | `rgba(255, 255, 255, 0.086)`|
| `--color-line-default`   | `rgba(255, 255, 255, 0.204)`|

Images get `filter: brightness(0.9) contrast(1.2)` in dark mode.

---

## Typography

System font stack — no custom fonts. Relies on weight, size, and spacing for hierarchy.

```
--system-ui: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
```

### Scale

| Element        | Mobile   | Desktop  | Weight | Letter-spacing | Line-height |
|----------------|----------|----------|--------|----------------|-------------|
| h1             | 24px     | 28px     | 600    | -0.03em        | 1.25        |
| h2             | 20px     | 24px     | 600    | -0.03em        | 1.25        |
| h3             | 18px     | 20px     | 400*   | —              | —           |
| Body           | 14px     | 16px     | 400    | —              | 1.6         |
| Body large     | —        | 18px     | —      | —              | —           |
| Extra large    | 22px     | 24px     | —      | —              | 1.3–1.4     |
| Small          | 14px     | 14px     | —      | —              | —           |
| Extra small    | 12px     | 12px     | —      | —              | —           |

*h3 becomes `font-weight: 600` when followed by a description element.

### Weight tokens

| Token                   | Value |
|-------------------------|-------|
| `--font-weight-light`   | 300   |
| `--font-weight-default` | 400   |
| `--font-weight-medium`  | 500   |
| `--font-weight-semibold`| 600   |

### Key typographic details

- **Headings** use tight negative letter-spacing (`-0.03em`) for a crisp, editorial feel.
- **Section headers** (e.g. "Recent ships") are small, muted, medium-weight — label-like, not shouty.
- **Body text** is 1.6 line-height — generous, readable, relaxed.
- **Blockquotes** use the extra-large size (22–24px) with no border or background — just bigger text. Minimal, quote-as-emphasis style.
- **All text** gets `-webkit-font-smoothing: antialiased` for crisp rendering.

---

## Spacing System

Built on a 4px base unit. Body padding increases with viewport.

| Level | Value | Usage example               |
|-------|-------|-----------------------------|
| 1     | 4px   | Tight gaps, icon margins    |
| 2     | 8px   | List item gaps, small pads  |
| 3     | 12px  | Component internal padding  |
| 4     | 16px  | Card padding, grid col gap  |
| 5     | 20px  | Body padding (mobile)       |
| 6     | 24–32px | Section margin-bottom     |
| 7     | 40px  | Major section spacing       |
| 8     | 60px  | Body padding (tablet)       |
| 9     | 80px  | Body padding (desktop), hero section top padding |
| 10    | 120px | Footer top margin           |

Grid row gap: `32px`. Grid column gap: `16px`.

### Body max-width

- Tablet (768px+): `64em` (~1024px)
- Desktop (1012px+): `60em` (~960px)

The content column is narrower than you'd expect — it reads like a centered editorial column, not a full-bleed layout.

---

## Border & Radius

| Token                | Value | Usage                         |
|----------------------|-------|-------------------------------|
| `--border-rounded`   | 12px  | Cards, list items, images     |
| `--border-rounded-sm`| 4px   | Small UI elements             |
| `--border-rounded-lg`| 20px  | Avatar container, nav pills   |
| `--border-radius`    | 6px   | Buttons, dropdown items       |
| `--border-width`     | 1.5px | Dividers, top borders         |

Borders are very subtle — `rgba(0, 0, 0, 0.075)` in light mode, `rgba(255, 255, 255, 0.086)` in dark. You should barely notice them. They define edges without drawing attention.

---

## Shadows

Shadows are minimal and functional, never decorative:

- **Cards/dropdowns**: `0 4px 8px #424a5308` — barely visible, just enough depth.
- **General shadow**: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`
- **Active nav pill**: Uses the general shadow for a subtle raised effect.
- **Avatar**: `0 0 0 1px rgba(31, 35, 40, 0.15)` — a ring, not a drop shadow.

---

## Component Patterns

### Header

- Left: 40x40px rounded avatar + name (medium weight) + role line (extra-small, muted).
- Right: Navigation pills + email dropdown + theme toggle.
- Mobile: nav collapses into a hamburger that expands with a snappy slide animation.
- Nav links are text in pill-shaped containers (`border-radius: 20px`). Active state gets a subtle background + shadow. Hover gets `--color-bg-subtle`.

### Section Headers

Small, muted, label-like. Format: "Recent ships", "Previous work", "Experience". Use `--text-body-size-small` at `--font-weight-medium` in `--color-fg-muted`. An anchor link icon appears on desktop hover (hidden by default, revealed on `:hover`). Optional green pulsing dot for "currently active" sections.

### Content Cards (Project Cards)

- Vertical layout: image on top, title + role below.
- Image has `border-radius: 12px` and sits inside an overflow-hidden wrapper.
- On hover, the image wrapper scales to `0.98` with a `0.2s` transition — a subtle "press" effect.
- Title is `font-weight: 600`, description is `font-size: 14px` in muted color.
- External link indicator: a small diagonal arrow icon (↗) in muted color, right-aligned.
- Side project variant: image sits on a colored background pad (`padding: 16px 16px 0`).

### Content Grid

- Asymmetric grid layout using CSS Grid Areas.
- Default: first two items span full width, remaining split into columns.
- Equal variant (`-equal`): uniform 2-column grid.
- At 544px+: expands to 3-column with varied area assignments.
- Row gap `32px`, column gap `16px`.

### List Items

- Full-width rows with `background-color: --color-bg-subtle` and `border-radius: 12px`.
- `padding: 16px`, gap `8px` between items.
- Content left (title, optional description), trailing right (date range or external link icon).
- Hover: background shifts to `--color-bg-emphasis` — only for items that are links.
- Title is body-size by default, becomes `font-weight: 600` when a description is present.

### Buttons

- **Icon buttons**: 40px circle (mobile), 32px circle (desktop). Transparent background, muted color. Hover: subtle background + default text color.
- **Active press**: `transform: scale(0.95)` with a quick easing.
- **Secondary**: subtle background + faint border. Hover: emphasis background.

### Tooltips

- Dark inverse background, white text, `border-radius: 8px`.
- `font-size: 12px`, `padding: 6px 8px`.
- Fade in with `opacity 0.2s ease-in-out`.
- Only shown on 544px+ screens.

### Dropdowns

- Positioned absolutely below trigger.
- `border-radius: 12px`, faint border, very subtle shadow.
- Items have `border-radius: 6px`, hover background.
- Footer area has `--color-bg-subtle` background, separated by a thin border.

### Footer

- Large top margin (`120px`) — lots of breathing room before the footer.
- Grid layout: copyright left, nav links + socials in columns to the right.
- Links are muted, underline on hover.

---

## Interactions & Animation

Interactions are **quiet and responsive** — they confirm user actions without being distracting.

| Interaction          | Effect                                      | Duration/Easing                          |
|----------------------|----------------------------------------------|------------------------------------------|
| Button press         | `scale(0.95)`                                | `0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)` |
| Card image hover     | Wrapper `scale(0.98)`                        | `0.2s`                                   |
| List item hover      | Background color shift                       | Instant (CSS transition)                 |
| Nav link hover       | Subtle background color                      | Instant                                  |
| Tooltip appear       | `opacity: 0 → 1`                             | `0.2s ease-in-out`                       |
| Mobile nav open      | Slide from right + staggered link fade-in    | `0.3s cubic-bezier(0.33, 1.6, 0.66, 1)` |
| Pulsing dot          | Scale 0.9→1 + expanding shadow ring          | `3s infinite`                            |
| Link underline hover | Underline color darkens                      | Instant                                  |

The snappy mobile nav easing (`cubic-bezier(0.33, 1.6, 0.66, 1)`) overshoots slightly — it's bouncy without being playful. Nav links stagger in at 0.02–0.05s delays for a cascading reveal.

---

## Responsive Breakpoints

| Breakpoint | Width   | Key changes                                           |
|------------|---------|-------------------------------------------------------|
| Base       | < 544px | Single column, hamburger nav, smaller text, 20px pad  |
| Small      | 544px   | Nav becomes horizontal pills, 3-col grid available    |
| Medium     | 768px   | Body text 16px, body padding 60px, max-width 64em     |
| Large      | 1012px  | Max-width 60em, body padding 80px, section header anchor icons visible |

Mobile-first approach. The design is complete and usable at mobile — desktop adds space and polish, not new features.

---

## Links

- Inherit text color (not blue).
- Underline with `text-decoration-color: --color-line-default` (very light).
- `text-underline-offset: 0.25em` — the underline sits slightly below, not touching descenders.
- On hover: underline darkens to `--color-line-emphasis`.
- Navigation links and card links have **no underline** — they use background color changes instead.

---

## Iconography

All icons are inline SVGs from Lucide (16x16 viewBox, `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`). Icons used:

- **Menu**: three horizontal lines
- **Close**: X mark
- **Email**: envelope with letter line
- **Sun/Moon**: theme toggle
- **External link**: diagonal arrow (↗) — `path d="M7 7h10v10"` + `path d="M7 17 17 7"`
- **Anchor link**: link/chain icon for section headers

Icons are always `currentColor` for automatic theme adaptation. Trailing external-link arrows are `14x14px` and use `--color-fg-muted`.

---

## Dark Mode Strategy

Dual approach: respects `prefers-color-scheme: dark` media query AND supports manual toggle via `.light`/`.dark` classes on `<html>`. Theme persisted in `localStorage`. Classes override the media query.

Dark mode is not an inversion — it's a considered remap:
- Background goes near-black (`#121212`), not gray.
- Text becomes `#e2e8f0`, not pure white — easier on the eyes.
- Borders switch to white with low opacity (RGBA) for natural blending.
- Images get slightly dimmed (`brightness(0.9)`) and sharpened (`contrast(1.2)`).

---

## Design Principles (Inferred)

1. **Content over chrome.** No decorative elements. Every visual element serves information hierarchy.
2. **Whitespace is structural.** Generous padding and margins create rhythm and group content.
3. **Interactions confirm, not entertain.** Hover/press states are subtle acknowledgments, not animations.
4. **Typography does the heavy lifting.** Size, weight, and color create hierarchy — not borders, backgrounds, or icons.
5. **Cards are quiet containers.** Subtle background (`--color-bg-subtle`), gentle radius, no loud shadows or borders.
6. **Mobile is complete, desktop adds breathing room.** The same content, same hierarchy — just more space.
7. **One accent color.** Blue (`#283cff`) is used sparingly for emphasis. Green only for the "active" dot.
