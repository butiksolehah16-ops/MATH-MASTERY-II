# Handoff — Web Jualan & Ads (next phase)

**Status: the PRODUCT (the app) is done and stable.** Forms 1, 2 & 3 are all content-complete,
DSKP-verified, and deployed. This next phase is a **separate deliverable** — a marketing/sales website
and ads to sell access to the app — not further work on the app's learning content or engines. Read this
file first before touching anything.

## What's already done (the product)

- **App**: React + Vite PWA, "Math Mastery — KSSM Matematik". Covers Tingkatan 1–3, all 13/13/9 chapters,
  5-phase learning loop per topic (Nota → Diagnostik → Pad → Latihan → Mastery) + UASA/UPSA mock exam mode.
  Fully client-side — **no backend, no accounts, no payment system**. All progress lives in the browser's
  own `localStorage`. See `HANDOFF-FORM2.md` and `math-mastery-form1-spec.md` if you need architecture
  detail on the app itself — you shouldn't need to touch app code for this phase.
- **Repo**: `https://github.com/butiksolehah16-ops/MATH-MASTERY-II` (GitHub Desktop is the user's push
  workflow — they're not comfortable with raw git commands, always guide them through GitHub Desktop's UI:
  Summary field → "Commit to master" → "Push origin").
- **Live deployment**: `https://math-mastery-ii.vercel.app` — auto-redeploys on every push to `master`.
  **This is for BETA TESTING and safe backup ONLY.** The user was explicit about this: it is NOT the final
  sales infrastructure. Don't assume this URL/Vercel project is where a sales/marketing site should live —
  that's an open decision (see below).
- **PWA installable**: works properly now (PNG icons fixed, in-app "Pasang" install button added for
  Android Chrome — confirmed working by the user on their own phone). iOS Safari has no automatic install
  API; users there must use Share → "Add to Home Screen" manually — this is an Apple platform limitation,
  not something fixable in code.
- **Login/payment**: explicitly deferred. The user confirmed a real login system (for later per-Form or
  bundle purchases) can be layered on top of the current local-only architecture later **without conflict**
  — so don't let "no accounts yet" block sales-page planning; it's a known, accepted gap for now.
- **Automated testing**: none exists (no unit/component/e2e tests, no test framework installed). Explicitly
  deferred by the user as lower priority than shipping — don't bring this up as a blocker for the web/ads
  phase, it's unrelated.

## What this phase actually is

The user's own words: they want to finish "web jualan" (a sales/marketing website) and "ads" to actually
sell the product. **Nothing about this has been scoped yet** — no platform choice, no domain, no pricing,
no payment processor, no copy/design direction. Do not assume or invent answers to these; ask first.

## Open questions to ask the user before doing any real work

Ask these before writing code or making platform decisions — don't guess:

1. **Platform**: a simple static landing page (could live in this same repo or a new one, deployed
   separately), a page builder (e.g. WordPress/Carrd/Framer), or something else? Does it need a CMS for
   updating copy later, or is a one-off static page fine?
2. **Domain**: is there a custom domain already bought, or does one need to be chosen/purchased? (Currently
   nothing but the `vercel.app` subdomain exists.)
3. **Pricing/what's being sold**: per-Form purchase, bundle, subscription, one-time? This affects what the
   sales page needs to communicate and whether checkout/payment integration is in scope for this phase or a
   later one.
4. **Payment processor**: if checkout is in scope now (vs. just a "coming soon"/waitlist page first) — which
   processor (Stripe, ToyyibPay, Billplz, etc. — Malaysian market context matters here for local payment
   method support).
5. **Ads**: which platform(s) — Facebook/Instagram ads, Google Ads, TikTok ads? This affects what tracking
   pixels/analytics need wiring into the sales page, and affects copy/creative needs.
6. **Relationship to the app**: does the sales page need to link out to the existing `vercel.app` app (as a
   free-trial/demo), or will the final sold product live at a different URL entirely once real sales infra
   exists? Get this clear before building navigation/CTAs.

## House rules that still apply (from the product-build phase)

- **Premium visual direction**: ambient glows, gradient accents, glow shadows, smoother easing — this is
  the established "premium teen" style (see `src/index.css` custom properties `--bg-0..3`, `--accent`,
  `--accent-2`, `--xp`, `--success`, `--danger`, `--radius-*`, `--shadow-card`, `--ease-premium`). If a
  marketing site should visually match the product, reuse these tokens rather than inventing a new palette.
- **App positioning**: the product replaces physical textbooks as the phone-based go-to revision app for
  KSSM Matematik Tingkatan 1–3 — keep this framing in mind for any marketing copy (avoid "exam panic"
  framing, per the original product spec).
- **Language**: the app itself is 100% Bahasa Malaysia. Confirm with the user whether the sales site should
  match (likely yes, given the target market), before assuming English.
- **GitHub Desktop workflow**: the user pushes via GitHub Desktop's GUI, not terminal `git push` (terminal
  pushes hang for them — no credential helper configured). If the sales site lives in a new repo, the same
  guided GitHub Desktop flow will be needed to get them comfortable with it.

## Key files map (product repo, for reference only — shouldn't need editing for this phase)

- `src/data/forms.js` — the 3-form list (id/label/tagline/status) — useful for accurate feature-list copy.
- `vite.config.js` — PWA manifest (name, icons, theme colors) — useful if marketing assets need to match.
- `public/icon.svg`, `public/icon-192.png`, `public/icon-512.png`, `public/icon-180.png` — existing brand
  icon assets, reusable for marketing materials instead of redesigning from scratch.
