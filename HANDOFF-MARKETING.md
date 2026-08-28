# Handoff — Marketing & Ads (next phase)

**Status: the web jualan phase (previous handoff, `HANDOFF-WEB-SALE.md`) is DONE and verified live.**
This next phase is ads/marketing to drive traffic to what's already built — not further work on the
app, the landing page structure, or the checkout system, unless something is found broken. Read
this file first before touching anything. If you need deeper history on how the sale pipeline was
built (decisions, back-and-forth, rejected drafts), it's not repeated here — this file only states
current state and what's next.

## What's already done (verified with a REAL live transaction, 2026-08-28)

- **Landing page**: live at `https://skormastery.com`. Separate static repo (plain HTML/CSS/JS, no
  build step) at `C:\Users\butiksolehah16\OneDrive\Documents\GitHub\skormastery-landing\`, published
  to GitHub (`butiksolehah16-ops/skormastery-landing`), deployed on Vercel. Visual direction is
  **navy (#1e3a5f) + gold (#a3752e) on warm white/cream** — deliberately different from the app's
  dark "premium teen" theme, because the landing page's audience is the PARENT (buyer), not the
  student. Don't reuse the app's dark tokens here if asked to edit this page later.
- **App**: live at `https://math-mastery-ii.vercel.app`, Forms 1-3 complete. Has a client-side
  access-code lock (`src/data/accessCodes.js`, `src/state/AccessContext.jsx`, `src/screens/
  AccessGate.jsx`) — no backend/accounts. Existing users with saved progress are auto-grandfathered.
- **Pricing**: RM39 one-time bundle (all 3 Tingkatan), shown as a launch offer with RM49 struck
  through. This is meant to stay low for a while (through end of 2026 or so) — raise later once
  reviews/testimonials exist or the product line grows (e.g. more subjects/Forms).
- **Checkout**: ToyyibPay, live payment link `https://toyyibpay.com/Math-Mastery-Bundle`. A single
  shared permanent code `MM2026PAID` is delivered automatically via ToyyibPay's own receipt email
  (configured in the bill's "Extra Email Content") — no manual work needed per sale. This was
  tested end-to-end with a real RM39 payment: payment approved → email arrived within ~1 minute →
  code entered in the app → unlocked successfully.
- **Beta program**: 8 codes (`BETA2026A`-`BETA2026H`) for a hand-picked group of 8 people, expiring
  2026-09-27 (30-day trial). Distributed manually via WhatsApp (013-921 6335) — NOT through the
  public checkout flow. As of this handoff, distribution to the 8 testers may still be pending —
  check with the user.
- **WhatsApp's role now**: kept ONLY for (a) the 8 manual beta testers, and (b) general inquiries
  (landing page footer link). It is explicitly NOT used for paid-customer code delivery — the user
  deliberately chose email for that (felt WhatsApp was intrusive, especially at night; parents
  check email after online purchases). Don't revert this without the user asking.

## What this phase actually is

The user wants to run **Facebook ads** to drive traffic to `skormastery.com`. Nothing about ad
budget, audience specifics beyond "parents of Tingkatan 1-3 students in Malaysia", ad creative, or
campaign structure has been decided yet.

## Hard constraint — read before doing anything here

**No AI/agent, including Claude, can log into the user's Facebook account or authorize ad spend.**
This isn't a "Claude vs. some other tool" thing — it's a fundamental login/payment-authorization
constraint (same reason Claude couldn't create the GitHub repo, Vercel project, or DNS records
directly during the web-jualan phase; the user had to click through those themselves with Claude
guiding step-by-step via screenshots). The user has asked before whether some other tool/"Cowork"
could do this instead — the answer stays the same regardless of which tool is asked: it requires
the user's own login and their own final approval on real ad spend.

**What Claude CAN do**: draft ad copy (headlines, body text, CTA) in Bahasa Malaysia, suggest
targeting (age, location, interests — parents of secondary-school-aged kids in Malaysia), suggest
what kind of creative (image/video) would work, and walk the user through Facebook Ads Manager's
UI step-by-step the same way the ToyyibPay/Vercel/GitHub setup was guided — screenshot by
screenshot, confirming what to click.

## House rules that still apply

- **Bahasa Malaysia**: all copy — the app, landing page, and ads should all be 100% Bahasa
  Malaysia, formal/professional register (not colloquial/rojak — an earlier landing-page draft was
  rejected for being too casual). Avoid "exam panic" framing; the product's angle is
  convenience/portability/structure, not fear.
- **GitHub Desktop workflow**: the user pushes via GitHub Desktop's GUI only, never terminal `git
  push` (hangs, no credential helper configured). Guide them through Summary field → "Commit to
  master" → "Push origin" for either repo (app or landing page) if any code changes are needed.
- **Visual identity split**: the app (student-facing) stays dark/gamified/premium-teen. Any
  parent-facing material (landing page, and by extension any ad creative/landing pages for ads)
  should default to the navy+gold, serious/trustworthy system established on the landing page —
  don't default to the app's dark tokens for ad creative either.
- **Verify before claiming success**: when previous work was "done," it was always verified with
  real browser testing (and in the checkout's case, an actual real transaction) before being
  reported as complete — keep that bar for any ad-flow verification too (e.g., if a Facebook Pixel
  or conversion tracking gets added later, verify it actually fires before saying it works).

## Key files map (for reference)

- App repo root: `C:\Users\butiksolehah16\OneDrive\Documents\MATH MASTERY II\`
- Landing page repo root: `C:\Users\butiksolehah16\OneDrive\Documents\GitHub\skormastery-landing\`
- `public/icon-512.png` (app repo) — brand logo, 512×512 PNG, already used as the user's Facebook
  profile picture; reuse this asset for ad creative branding instead of redesigning from scratch.
- `src/data/accessCodes.js` (app repo) — where new access codes (beta or paid) get added.
