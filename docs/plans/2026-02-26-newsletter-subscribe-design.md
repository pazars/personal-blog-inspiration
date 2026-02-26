# Newsletter Subscribe — Design

## Goal

Add newsletter subscription to the portfolio/blog site. Two placements: a contextual CTA at the end of blog posts (high-trust moment) and a permanent `/subscribe` page linked from the footer (for intent-driven users).

## Psychology Model

The user's trust arc: stranger → impressed by portfolio → curious about blog → invested after reading a post. The subscribe ask should only appear at stage 4 (post-article) or be passively available for users who are already looking (footer link). Never interrupt, never appear before value has been delivered.

## Components

### NewsletterForm (shared component)

Single `NewsletterForm.astro` component used in both placements.

**Props:**
- `heading` (string, optional) — section header text. Default: "Subscribe"
- `description` (string, optional) — pitch paragraph

**Structure:**
- `SectionHeader` for heading
- `<p>` for description
- `<form>` with email input + submit button
- Status `<div>` for success/error

**Visual treatment:**
- Input: `--color-bg-subtle`, `border-radius: 12px`, `padding: 16px` (looks like a list item)
- Button: `btn-secondary` style
- Side-by-side on desktop, stacked below 544px

**States:**
- Idle: form visible
- Submitting: button shows "...", input disabled
- Success: form replaced with "You're in — thanks." in muted text
- Error: small muted line below input

### /subscribe Page

Mirrors contact page structure: header, single section, footer. Uses NewsletterForm with a longer description.

### End-of-Article CTA

A `<section>` with `border-top` at the bottom of blog posts, before the footer. Uses NewsletterForm with heading "Keep reading" and a short pitch.

Hides itself via `localStorage` flag (`newsletter-subscribed`) after successful subscription.

### Footer Link

"Subscribe" added to footer nav links, points to `/subscribe`.

## Form Behavior (vanilla JS)

- Client-side email validation
- Posts to a configurable endpoint (placeholder — will wire Resend or ConvertKit later)
- Manages idle/submitting/success/error states
- Sets `newsletter-subscribed` in localStorage on success
- End-of-article CTA checks this flag and hides if already subscribed
