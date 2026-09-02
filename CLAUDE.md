# Math Mastery II — Project Context

This file is the master context for the whole Math Mastery business: the app, the sales landing
page, and the Facebook Ads marketing phase. It consolidates what used to be spread across
`HANDOFF-FORM2.md`, `HANDOFF-MARKETING.md`, `HANDOFF-WEB-SALE.md` (all in this folder) and
`HANDOFF-FB-ADS-PLAN.md` (in the separate landing-page repo). Those files are kept as detailed
history/reference — this file is what a fresh session should read first.

**Read this whole file before doing anything new in either repo.**

## Current status (most recent first)

1. **App** (this repo): Forms 1–3 are content-complete, DSKP-verified, deployed. Stable — no
   further content work planned unless the user asks.
2. **Landing page / web jualan** (`skormastery-landing` repo): done and live at
   `https://skormastery.com`. A real RM39 transaction was tested end-to-end successfully.
3. **Facebook Ads marketing phase** (current focus): Facebook Page created, Meta Pixel installed
   and verified firing (`PageView` + `InitiateCheckout`). **Next step: draft ad copy + targeting,
   then launch.** See "Facebook Ads — current phase" below for full detail.

## The business, in one paragraph

Math Mastery is a KSSM Matematik (Tingkatan 1–3) revision app sold as a one-time RM39 bundle to
Malaysian parents. The app itself is a React PWA with no backend — progress lives in
`localStorage`, and access is gated by a shared code delivered by email after payment. A separate
static landing page (`skormastery.com`) handles marketing/sales and links out to ToyyibPay for
checkout. The current push (as of Sept 2026) is running Facebook Ads to drive traffic to the
landing page — the primary/only paid channel the user wants to focus on for now ("aku ingat nak
terus jual pakai fb ads je la... bab lain aku tak tau nak handle").

## Repos

- **App**: `C:\Users\butiksolehah16\OneDrive\Documents\MATH MASTERY II\` — this folder. GitHub:
  `butiksolehah16-ops/MATH-MASTERY-II`. Live: `https://math-mastery-ii.vercel.app` (auto-redeploys
  on push to `master`).
- **Landing page**: `C:\Users\butiksolehah16\OneDrive\Documents\GitHub\skormastery-landing\` —
  separate repo, plain static HTML/CSS/JS (no build step). GitHub:
  `butiksolehah16-ops/skormastery-landing`. Live: `https://skormastery.com`, deployed on Vercel.

**Push workflow for both repos: GitHub Desktop GUI only.** The user is not comfortable with
terminal git — `git push` from a terminal hangs for them (no credential helper configured). Always
guide them through GitHub Desktop: review changes → Summary field → "Commit to master" → "Push
origin". Never suggest terminal git commands.

## The app — architecture (read `HANDOFF-FORM2.md` for full detail if editing app content)

- React 19 + Vite 8 + react-router-dom, PWA (`vite-plugin-pwa`). No TypeScript (uses `@types/*`
  for editor support only). Linting via `oxlint`.
- Fully client-side — **no backend, no accounts, no payment system in the app itself.** Progress
  in `localStorage` (`mm_progress_v1`). Access gated by a client-side code check
  (`src/data/accessCodes.js`, `src/state/AccessContext.jsx`, `src/screens/AccessGate.jsx`).
- Content structure: Tingkatan 1–3, all chapters DSKP-verified. 5-phase learning loop per topic —
  Nota (interactive note) → Diagnostik → Pad (step-by-step guided practice) → Latihan → Mastery —
  plus a UASA/UPSA mock-exam mode. Form 1 & 2 both have full exam sets; Form 2/3 exam-set decision
  was left open, check current state before assuming.
- Key files: `src/data/forms.js` (form list/status), `src/data/chapters.js` (chapter/topic
  structure per form), `src/content/index.js` (per-phase content registry),
  `src/content/form1/babN/*.js` / `form2/babN/*.js` (content, use Form 1/2 as the template for any
  new content), `src/engines/` (note-stepper, step-pad, mastery/QuestionSet, uasa-exam — reusable,
  shouldn't need changes for pure content work), `src/screens/` (navigation shell),
  `src/state/ProgressContext.jsx` (localStorage-backed progress).
- `.claude/launch.json` has the dev server config for `preview_start` (name `"math-mastery"`, port
  5173). `node`/`npm`/`npx` are not on PATH in some shells — use full path
  `"/c/Program Files/nodejs/node.exe" node_modules/vite/bin/vite.js build` if needed.
- **Deliberately deferred** (don't build unless asked): parent progress report, login/auth,
  account settings, notifications (stubs exist in `src/screens/Profil.jsx`), automated tests (none
  exist, explicitly lower priority than shipping).
- **Content house rules**: notes must be thorough enough to be the student's *sole* study
  reference, not terse placeholders. MCQ choices shuffle at the engine level
  (`src/engines/shared/shuffle.js`) — don't pre-shuffle in content. Prefer typed numeric answers
  over MCQ where unambiguous; never ask for a typed algebraic expression/inequality (ambiguous to
  grade) — redesign to ask for a concrete number instead. React: never call a parent's setState
  from inside a child's setState updater — use `useEffect`.
- **Visual direction (app only)**: dark "premium teen" style — ambient glows, gradient accents,
  glow box-shadows, `var(--ease-premium)` easing. Match `src/index.css` tokens (`--bg-0..3`,
  `--accent`, `--accent-2`, `--xp`, `--success`, `--danger`, `--radius-*`, `--shadow-card`)
  rather than inventing new colors. No `--warning`/`--amber` token — reuse `--xp` (gold) for
  highlight/special badges (e.g. KBAT tags). **This dark theme is app-only — do NOT reuse it for
  the landing page or ad creative, which use a different, parent-facing visual system (see below).**
- **Known tooling quirks** (browser-automation artifacts, not app bugs): the in-app Browser pane
  sometimes drops the first click after a DOM change — retry once. After restructuring a content
  file's exports, Vite's dev server can serve a stale module graph — restart the server and open a
  fresh browser tab (old tabs cache stale modules).
- **Positioning**: replaces physical textbooks as the phone-based go-to revision app for KSSM
  Matematik Tingkatan 1–3. Avoid "exam panic" framing — angle is convenience/portability/structure.

## Web jualan (landing page) — done, live, verified

- Original build: static HTML/CSS/JS landing page, no CMS/build step, deployed on Vercel.
- **Style pivot (most recent redesign)**: moved from a subtle "premium navy+gold brochure" look to
  an aggressive Malaysian-market hard-sell sales-letter style (bold highlighter text, urgency,
  bonus stacking, big CTAs, pulse-glow CTA animation, sticky mini-CTA bar) — this **supersedes**
  the older "avoid casual/rojak tone, keep formal register" house rule. Language stays 100% Bahasa
  Malaysia; tone is now punchier/urgent, not subdued. Visual palette is still navy (#1e3a5f) +
  gold (#a3752e/#f0b429) on warm white/cream — deliberately different from the app's dark theme,
  since the landing page's audience is the parent (buyer), not the student.
- **Pricing**: RM39 one-time bundle (all 3 Tingkatan), shown as launch offer vs. struck-through
  RM49. Meant to stay low through ~end of 2026, raise later once reviews/testimonials exist.
- **Checkout**: ToyyibPay, `https://toyyibpay.com/Math-Mastery-Bundle`. A single shared code
  `MM2026PAID` delivered automatically via ToyyibPay's receipt email ("Extra Email Content" field
  in ToyyibPay's dashboard — external, login required, Claude can't edit directly). **Tested with
  a real RM39 transaction end-to-end**: payment → email within ~1 min → code entered in app →
  unlocked successfully. A full draft email body (access code + app link + bonus PDF links) was
  handed to the user to paste into ToyyibPay's Extra Email Content — confirm with the user whether
  this has actually been pasted in, if it comes up.
- **Beta program**: 8 codes `BETA2026A`–`BETA2026H`, expiring 2026-09-27, distributed manually via
  WhatsApp (013-921 6335) to a hand-picked group — NOT through the public checkout flow.
- **WhatsApp's role**: kept only for (a) the 8 beta testers and (b) general inquiries (landing page
  footer link). Deliberately NOT used for paid-customer code delivery — the user chose email
  instead (WhatsApp felt intrusive, especially at night). Don't revert this without the user asking.
- **No real customer testimonials exist yet** — beta testers are mostly relatives who used free
  access half-heartedly. Don't fabricate testimonials, purchase-notification tickers, or
  unverified statistics (raised and respected as a real limit, not a style choice, when a
  reference site's fake "recent buyer" popup came up). A founder-note trust section
  ("Kenapa Saya Bina Math Mastery") is used instead — transparent that the product is new.
- **Product's real differentiator/hook** (user's own words, used in landing copy): most online
  Math references/apps in Malaysia focus on SPM; structured Form 1-3 material is hard to find
  online, and it matters more now because Form 3 students face a new "matrik pembelajaran"
  starting 2027 — foundations need to be solid earlier, not deferred.
- **OneDrive gotcha**: OneDrive's built-in file-preview panel renders raw HTML without loading
  `style.css` or images — looks like "the design disappeared." That's expected OneDrive preview
  behavior, not a bug. Always check the actual live site, or open `index.html` in a real browser.

## Facebook Ads — current phase (what to pick up next)

**This is the active phase.** Prerequisites status:

1. ✅ **Facebook Page "Math Mastery"** — live in Meta Business Suite, has profile picture (the
   app's "M" logo) and a custom navy/teal cover photo (app-mockup style, stats, student photos)
   the user sourced/made herself.
2. ✅ **Meta Pixel** — "Math Mastery Pixel", **ID `1393854592861746`** (note: `225966717` seen in
   some notes is the unrelated Ad Account ID — never use it for tracking). Installed in
   `skormastery-landing/index.html`'s `<head>`, pushed, and confirmed firing `PageView` via Meta
   Pixel Helper (Chrome extension — more reliable for verification than the Events Manager
   Overview dashboard, which lags). Also fires `InitiateCheckout` (`content_name: "Math Mastery
   Bundle"`, `value: 39`, `currency: "MYR"`) on click of any of the 3 CTA buttons that link to
   ToyyibPay — added via a click listener in `script.js`, also confirmed firing. **Purchase itself
   can't be tracked** — checkout happens off-site on ToyyibPay with no callback into this repo; if
   ToyyibPay ever supports a post-payment redirect/webhook, a real `Purchase` event could be added
   then, but nothing indicates that's available.
3. ⏳ **Ad copy** (headline/body/CTA, Bahasa Malaysia, punchy hard-sell register matching the
   landing page) — in progress, drafts have been proposed (angles: cost of tuition, "hard to find
   Form 1-3 online references" hook, launch-price urgency). Not yet finalized with the user.
4. ⏳ **Targeting** — proposed but not finalized: Malaysia, ages 30–50 (parents, not the students
   themselves), all genders, interests around parenting/education/tuition/KSSM/SPM, ad language
   Bahasa Malaysia.
5. **Not started**: actual Ads Manager campaign setup/launch.

### Facebook account handling — important lessons from this phase

- **The user's Facebook account got locked by Meta** ("may have been hacked") once, after a burst
  of account-changing actions in one sitting (2FA/password reset + repeated Page-creation attempts
  + editing an old page's name/photos). Resolved via Meta's own identity-verification (video
  selfie) flow, ~48h turnaround. **Avoid bursts of account-changing actions on Facebook in one
  session** — spread them out, check in with the user between steps.
- **The user prefers doing Facebook/Business Suite UI actions herself**, with Claude giving plain
  text/screenshot-guided instructions, rather than Claude driving the browser pane directly on
  facebook.com/business.facebook.com. This worked well for both Page creation and Pixel setup —
  default to offering this mode for any further Facebook account-level work.
- **Facebook/Meta's UI shows many similar-looking ID numbers** (Ad Account ID, Pixel ID, Business
  ID, Page ID) in different corners of the UI — don't assume which is which. A wrong-ID mistake
  happened once this phase (used the Ad Account ID as the Pixel ID). Always confirm the label next
  to a number before using it in code.
- **To verify Pixel/tracking behavior, use the Meta Pixel Helper Chrome extension in the user's
  own real browser** — this is faster and more reliable than the Events Manager Overview dashboard
  (which can lag significantly) or than testing inside Claude's own browser pane (was inconclusive
  this session for unrelated reasons).

## Hard constraints — apply everywhere in this project

- **No AI/agent, including Claude, can log into the user's Facebook account, authorize ad spend,
  enter passwords, or complete 2FA/identity verification.** This is a fundamental
  login/payment-authorization limit, not a tool gap — same reason Claude couldn't create the
  GitHub repo, Vercel project, or DNS records directly during the web-jualan phase either; the
  user always clicks through account-level/payment actions herself, with Claude guiding
  step-by-step (screenshots or plain text instructions, per her preference — see above).
- **What Claude CAN do**: draft ad copy, suggest targeting/creative, walk the user through any
  UI step-by-step, and make code changes directly (via the device bridge) to either repo's actual
  files — the constraint is specifically about Facebook/payment account actions, not code.
- **Verify before claiming success.** Every "done" claim in this project's history was backed by
  real testing (a real RM39 transaction for checkout; Meta Pixel Helper confirmation for tracking)
  before being reported as complete — keep that bar for anything new.
- **Don't fabricate testimonials, fake purchase-notification tickers, or unverified statistics** —
  a real limit that's been raised and respected multiple times, not just a style preference.
- **Bahasa Malaysia** throughout — app, landing page, and ads. Register is now the punchier
  hard-sell tone established in the landing-page redesign (supersedes an earlier "always
  formal/never rojak" rule).
