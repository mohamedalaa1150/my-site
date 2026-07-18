# Redesign Notes — "Modern Glass & Gold"

Status log for the visual/motion redesign of this portfolio. Read this before
picking the project back up — it explains what changed, why, and what's
intentionally left undone.

## Context

The site was a generic dark-template portfolio (dusty-rose accent, flat
sections, CSS keyframes that fired once on mount and were invisible for
anything below the fold, plus a handful of silently broken bits — a
`.gradient-text` class used on every headline that was never defined, a body
font declared but never loaded, etc.). It was fully re-skinned and
re-animated into a premium "Modern Glass & Gradient" look, with a gold/brass
accent and GSAP-driven scroll animation, while keeping the same single-page
section structure (Home → About → Qualification → Services → Projects →
Contact → Footer) and all existing data/logic.

## Design system

- **Colors**: one source of truth now — CSS custom properties in
  `src/styles/globals.css` (`--bg-void`, `--bg-surface`, `--gold`,
  `--gold-light`, `--gold-dark`, `--teal`, `--ink`, `--ink-muted`,
  `--ink-faint`, `--border-hairline`) registered as Tailwind colors in
  `tailwind.config.js` (`void`, `surface`, `footer`, `gold`/`gold-light`/
  `gold-dark`, `teal`, `ink`/`ink-muted`/`ink-faint`, `hairline`). The old
  dual system (Tailwind `colors.primary` + a same-named hand-rolled
  `.bg-primary` CSS class that silently won the cascade) is gone.
- **Typography**: `Fraunces` (display/serif, headlines) + `Inter` (body),
  both loaded via `next/font/google` in `src/app/layout.tsx`, exposed as
  `font-display` / `font-body` in Tailwind. Unified heading pattern lives in
  `src/components/ui/SectionHeading.tsx` — reused by every section instead of
  each one hand-rolling its own heading markup/scale.
- **Surfaces**: `.glass-card` / `.glass-panel` (frosted background, gold
  hairline border, hover lift + gold glow) replace the old flat `.card`.
  `.btn-gold` / `.btn-outline-gold` replace `.btn-primary` / `.btn-outline`.
  `.input-glass` for form fields.

## Motion system (GSAP + ScrollTrigger)

- `gsap` + `@gsap/react` (the official React binding, `useGSAP()`) — new
  dependencies. Plugin registration lives in `src/lib/gsap.ts`, imported
  everywhere as `import { gsap, ScrollTrigger } from "@/lib/gsap"`.
- Every animated component wraps its tweens in `gsap.matchMedia()` branching
  on `prefers-reduced-motion` (`no-preference` gets the real animation;
  `reduce` jumps straight to the final state).
- Shared hooks: `src/hooks/useStaggerReveal.ts` (scroll-triggered grid/list
  entrance via `ScrollTrigger.batch`, used by About/Services/Projects/
  Contact/Testimonials) and `src/hooks/useMagneticGlow.ts` (pointer-following
  gold glow on `.glass-card` hover).
- Flagship effect: `Qualification.tsx`'s timeline line is a real scrubbed
  GSAP timeline synced to scroll (the old CSS `::before` pseudo-element line
  was replaced with a real `<div class="timeline-line">` because GSAP can't
  target pseudo-elements).
- `src/components/BackgroundFX.tsx` — fixed ambient gold/teal gradient blobs
  behind the whole page, mounted once in `layout.tsx`, subtly parallaxed.

### ⚠️ The one gotcha that will bite you again if you're not careful

**Never let a CSS `transition` and a GSAP tween fight over the same property
on the same element.** Early in this pass, `.btn-outline-gold` had
`transition: all` and `.btn-gold` had `transition: ..., transform` — GSAP's
per-frame writes to `opacity`/`transform` on those same elements fought the
CSS transition and the elements visually froze at their *initial* (hidden)
state forever, even though GSAP's own `onComplete` fired normally. Fixed by:
narrowing CSS `transition` lists on GSAP-animated elements to properties GSAP
doesn't touch (e.g. `.btn-gold` only transitions `box-shadow` now), and where
a CSS hover effect genuinely needs `transform` (`.glass-card`'s hover lift),
adding `clearProps: "transform"` to the GSAP entrance tween so it releases
the inline style back to CSS once the one-off entrance animation finishes.
If you add a new animated component, check for this before assuming a
"stuck" animation is a logic bug.

## New files

| File | Purpose |
|---|---|
| `src/lib/gsap.ts` | GSAP + ScrollTrigger registration (import point everywhere) |
| `src/components/ui/SectionHeading.tsx` | Shared section heading + scroll reveal |
| `src/components/ui/Modal.tsx` | Shared modal shell (was duplicated 3× before) |
| `src/hooks/useStaggerReveal.ts` | Scroll-triggered grid/list entrance |
| `src/hooks/useMagneticGlow.ts` | Pointer-glow hover on `.glass-card` |
| `src/components/BackgroundFX.tsx` | Ambient background gradient blobs |
| `src/app/icon.tsx`, `apple-icon.tsx` | Code-generated favicon/apple touch icon (gold monogram) |
| `src/app/opengraph-image.tsx` | Code-generated OG share card |
| `src/app/manifest.ts` | PWA manifest |

## Bugs fixed along the way

Color cascade collision, undefined `.gradient-text`/`.animate-pulse-hover`,
unloaded body font, dead Tailwind tokens (`borderc`, `opacity-15`), unused
`.skeleton` CSS, inconsistent heading scales, an inline `<style>` block in
`Projects.tsx`, the Hero image's single-breakpoint size jump, missing
favicon/OG/manifest, unused `create-next-app` template SVGs in `public/`,
`Qualification.tsx` missing `"use client"`, `eslint-config-next` one major
behind `next`. Full detail in the plan file this redesign was built from:
`C:\Users\moham\.claude\plans\keen-skipping-bengio.md` (if it still exists —
treat this doc as the durable record either way).

## Intentionally left undone

- **Contact form has no real backend.** `Contact.tsx`'s `handleSubmit` still
  fakes a 2s delay + `alert()`. Needs a real decision (Next.js route handler
  + an email service like Resend, or a form service) — out of scope for a
  visual redesign, flagged for whenever that's wanted.
- **Testimonials stays disabled.** `Testimonials.tsx` was fully rebuilt in
  the new visual style and is ready to use, but `testimonials.json` still
  has fake/placeholder Pexels-photo quotes, so the import + render are still
  commented out in `src/app/page.tsx`. Swap in real client quotes, then
  uncomment both lines in `page.tsx`.
- **`Logo.tsx` is a code-generated glass-ring "MA" monogram**, not a
  hand-designed mark. Fine for now; a real logo from a designer/Figma would
  be a further upgrade, not a redesign requirement.
- `README.md` is still the untouched default `create-next-app` boilerplate —
  never updated to describe this project. Worth doing at some point, not
  done here since it wasn't part of the visual redesign ask.

## How to verify changes

```bash
npm run dev            # or: npm run build && npm run start
npm run lint
npx tsc --noEmit
```

No test suite exists — this is a visual/motion-heavy site, so changes need
an actual look-through in a browser (all sections, mobile width, card hover,
and ideally OS "reduce motion" turned on) rather than relying on lint/build
alone.
