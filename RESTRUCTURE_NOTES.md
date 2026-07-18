# Restructure Notes — Multi-Page Bento Dashboard + Dark/Light Theme

Status log for the second major pass on this portfolio. Read `REDESIGN_NOTES.md`
first for the visual/motion identity (gold glass in dark mode) established in
the prior pass — this document covers what changed on top of that: the site's
structure and a full theming system.

## What changed

- **Multi-page routing.** The single scrolling page became 6 real routes:
  `/`, `/about`, `/qualification`, `/services`, `/projects`, `/contact`, plus
  `/projects/[id]` for individual project case-study pages. `Navigation.tsx`
  and `Footer.tsx` moved into the root `src/app/layout.tsx` so they persist
  across client-side navigation instead of remounting.
- **Bento/dashboard grid layout.** Every page uses a new `.bento-grid`
  utility (`src/styles/globals.css`) — a mobile-first CSS Grid (1 col →
  4 → 6 → 12 columns at `sm`/`lg`/`xl`) with per-cell `col-span-*` Tailwind
  utilities for asymmetric sizing, replacing the old uniform vertical
  section stack. `/` is now a landing dashboard (hero + stats + featured
  project/services teasers + quick links + CV CTA) that links out to the
  other pages, which hold the full depth content.
- **Dark/light theme toggle.** Added `next-themes`. Defaults to OS
  preference, manual toggle (`ThemeToggle.tsx`, sun/moon in the nav)
  persists via `localStorage`. Dark mode is the existing gold-glass look;
  light mode is a deliberately different "warm paper/editorial" identity
  (cream background, flat opaque cards with ink-toned borders, soft neutral
  shadows, no backdrop-blur, no ambient glow blobs) — not just inverted
  colors. Implemented as a pure token-layer change: every component class
  (`.glass-card`, `.btn-gold`, `.modal-content`, etc.) now reads from
  generic tokens (`--card-bg`, `--card-border-color`, `--shadow-card`,
  `--overlay-scrim`, `--btn-gold-ink`) that get redefined under
  `[data-theme="light"]` — no component JSX/className changed for theming.
- **Projects: modal → real pages.** `/projects/[id]/page.tsx` replaced the
  old click-to-open modal with actual routes (`generateStaticParams` from
  `projects.json`, per-project `generateMetadata`, themed `not-found.tsx`
  for bad ids). The gallery/details/actions UI moved to
  `src/components/projects/ProjectDetail.tsx`. Services kept its modal
  (`ui/Modal.tsx`) — short content, doesn't need its own URL.
- **Qualification's flagship motion effect was replaced, not just reflowed.**
  The old scroll-scrubbed connecting line assumed one linear vertical list;
  a bento grid (variable cell spans, cells that reflow per breakpoint) has
  no single consistent line path to draw. It's gone. Replaced with a
  corner year-badge pill per card (inline in a `flex flex-wrap` header row,
  not absolutely positioned — see gotcha below) plus the same
  `useStaggerReveal` hook every other page uses.

## New files

| File | Purpose |
|---|---|
| `src/components/ThemeProvider.tsx` | Wraps `next-themes`, `attribute="data-theme"` |
| `src/components/ThemeToggle.tsx` | Sun/moon toggle button, mounted in `Navigation.tsx` |
| `src/components/Home.tsx` | The `/` dashboard assembly (Hero cell + stat/teaser/quick-link/CTA cells) |
| `src/components/projects/ProjectDetail.tsx` | Project case-study page content (was the Projects modal) |
| `src/app/{about,qualification,services,projects,contact}/page.tsx` | Route pages, each rendering its existing component |
| `src/app/projects/[id]/page.tsx` + `not-found.tsx` | Project detail route + themed 404 |
| `src/app/not-found.tsx` | Site-wide themed 404 |

## Gotchas hit and fixed during this pass

1. **CSS Grid + `overflow: hidden` can undersize a grid item's auto row
   height.** Per spec, a grid/flex item's automatic minimum size resolves
   to `0` instead of its content size when the item's `overflow` isn't
   `visible` — this can make an "auto" row track size smaller than the
   item actually needs. `.glass-card` had `overflow: hidden` (originally
   just to clip the magnetic-glow overlay to its rounded corners); removed
   it and instead gave the glow overlay itself `border-radius: inherit` +
   its own `overflow: hidden` in `useMagneticGlow.ts`, so it self-clips
   without constraining the parent's sizing. (In the end this specific
   symptom I was chasing turned out to be a screenshot-timing false alarm,
   not this bug — but the fix is a real, spec-documented hardening measure
   worth keeping regardless, and I'd rather have it than not.)
2. **Absolutely-positioned badges over flexible-width text will collide on
   narrow viewports.** Qualification's year badge was `absolute top-3
   right-3` and overlapped long card titles on mobile. Fixed by making it
   part of the normal flex flow (`flex items-start justify-between
   flex-wrap`) so it wraps below the title instead of overlapping — a more
   robust pattern than absolute positioning for any future badge-on-card
   design.
3. **Bento cells with `row-span > 1` plus variable/text-driven content
   height can leave large orphaned gaps.** A featured Projects card at
   `row-span-2` left a big empty void underneath it because its own
   content forced rows 1–2 taller than the shorter cards sharing those
   rows, and CSS Grid's sparse auto-placement doesn't backfill earlier
   skipped cells. Resolution used throughout: **never use `row-span` on a
   bento cell whose content height varies with data** (text length, image
   presence, etc.) — vary `col-span` (width) only, and let every cell be a
   single auto-height row. This is why every page's "featured" cell is
   wider, never taller-via-row-span.
4. **Stale dev-server processes on Windows silently serve a mismatched
   build.** `pkill -f "next-server"` doesn't reliably match the actual
   Windows process every time; a leftover `next start` process serving an
   old build (while the filesystem has newer content-hashed chunk
   filenames from a fresh `npm run build`) returns HTTP 500 for the CSS
   chunk specifically, rendering the page completely unstyled. If a
   verification screenshot ever looks totally unstyled again, check
   `netstat -ano | grep :3000` for a stale PID before assuming it's a code
   bug.
5. **`next-themes`' `useTheme()` mounted-guard effect trips
   `react-hooks/set-state-in-effect`** (the same newer, stricter
   `eslint-plugin-react-hooks` rule from the `eslint-config-next` v16 bump
   noted in `REDESIGN_NOTES.md`). This is the documented, correct
   `next-themes` pattern for avoiding a hydration mismatch on the
   dark/light icon — silenced with a scoped `eslint-disable-next-line` and
   a comment explaining why, same approach as `TypingAnimation.tsx`.
6. **A Playwright `fullPage: true` screenshot does not fire real scroll
   events**, so scroll-triggered (`ScrollTrigger.batch`) content below the
   fold can appear as "missing" (still at its pre-reveal `opacity: 0`) in
   such a screenshot even though it works correctly for an actual visiting
   user. When verifying scroll-reveal content, scroll in real steps
   (`window.scrollTo` + wait, repeated) before capturing, or just check
   `getComputedStyle(el).opacity` after a real scroll instead of trusting
   a full-page capture.

## Intentionally left as-is

- Contact form backend, Testimonials being disabled — still out of scope,
  see `REDESIGN_NOTES.md`.
- `src/app/icon.tsx` / `apple-icon.tsx` / `opengraph-image.tsx` /
  `manifest.ts` stay hardcoded to the dark navy/gold palette regardless of
  the visitor's theme choice — favicons/OG images/manifest colors are
  static, generated at build time, with no concept of "this visitor's
  current toggle state." This is normal and expected.
- `.grid-responsive` (the old uniform-grid CSS class) is still in
  `globals.css` even though nothing currently uses it — low-risk to leave,
  could be removed in a future pass if it's still unused then.

## How to verify changes

```bash
npm run dev            # or: npm run build && npm run start
npm run lint
npx tsc --noEmit
```

Still no test suite — this remains a visual/motion-heavy site. When
checking in a browser: click through all 6 top-level routes plus a
`/projects/[id]` page, toggle dark/light on each, check mobile/tablet/
desktop widths (the bento grid's degrade-to-single-column behavior is the
thing most likely to break), and check with OS "reduce motion" enabled.
If you start a local server for verification, make sure no earlier
instance is still bound to the port first (see gotcha #4 above).
