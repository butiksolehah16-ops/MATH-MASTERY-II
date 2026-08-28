# Handoff — Form 2 Content Build

**Status: Form 2 is DONE.** All 13 chapters / 35 topics (Sistem Koordinat → Kebarangkalian Mudah) are
DSKP-verified, content-authored, and browser-tested to 100% mastery. `src/data/forms.js` has
`form2.status = "available"`. Production build is clean. Chapters/topics are NOT sequentially locked (see
house rules below) — this is a revision app, not a course. UASA/UPSA exam sets for Form 2 were NOT built
(deliberately deferred, see step 7 below) — decide separately if/when needed. If propagating this pattern to
Form 3, treat this file the same way it was used for Form 2: read it, then repeat the same steps against the
Form 3 DSKP document.

Read this file first, then `math-mastery-form1-spec.md` (original planning spec — still accurate for
architecture/principles). This file covers what actually got built for Form 1 and the conventions/gotchas
a fresh session won't know from the spec alone.

## Status: Form 1 is DONE (core learning loop)

All 13 chapters (Nombor Nisbah → Teorem Pythagoras) are DSKP-verified, content-authored, and browser-tested
to 100% mastery. All 5 engines are built and reusable. Mod Ulangkaji (UASA ×3 + UPSA ×3 mock exams) is done.
Production build is clean.

**NOT built** (deliberately deferred — see conversation, don't build these for Form 2, wait until Form 3 is
also content-complete): parent progress report, account/login/auth, account settings, notifications. These
are stubs in `src/screens/Profil.jsx` ("Akan Datang"). Progress currently lives only in the browser's
localStorage (`mm_progress_v1`) — no backend exists.

## Your task: propagate the same gold-template pattern to Form 2

Form 2 = Tingkatan 2, KSSM Matematik. Same engines, same UX, new DSKP-verified content. Steps, in order:

1. **Verify the DSKP KSSM Matematik Tingkatan 2 chapter/topic list** before writing any content — don't
   guess chapter names or topic numbering. This was the single most error-prone step for Form 1 (one chapter
   was initially mislabeled and had to be corrected). Cross-check chapter count, chapter titles, and topic
   breakdown per chapter against the official DSKP document.
2. Add the verified chapter/topic structure to `src/data/chapters.js` under a `form2` entry (mirror the
   `form1` shape exactly — `id`, `number`, `title`, `theme`, `topics: [{id, title}]`, `confirmed: true` only
   once you've actually verified it).
3. Author content per topic, 5 phases each, in `src/content/form2/babN/`:
   - `topik-N-M-slug.note.js` — Nota Interaktif (hook → exploration → insight → formula → example → check).
     **Must be thorough enough to be the pelajar's sole reference** — not a terse placeholder (see house
     rule below).
   - `topik-N-M-slug.diagnostik.js`
   - `topik-N-M-slug.pad.js` — Step Pad (step-by-step guided practice)
   - `topik-N-M-slug.latihan.js`
   - `topik-N-M-slug.mastery.js`
   Register each in `src/content/index.js` (getNoteContent/getPadContent/getDiagnostikContent/
   getLatihanContent/getMasteryContent maps — follow the existing `form1` entries as the template).
4. If a topic needs a new interactive exploration visual (not one of the existing ones), add it to
   `src/engines/note-stepper/visuals/registry.js`. Existing visuals: number-line, fraction/shape splitting,
   polygon diagonal/angle-sum, perimeter walk, set-builder, Venn complement, bar chart, square-grid
   (rectangle-capable). Reuse before adding new ones.
5. Update `src/data/forms.js`: set `form2.status` to `"available"` and fix the `tagline` once done.
6. **Test every chapter end-to-end in the browser** exactly like Form 1 was tested: dev server via
   `preview_start` (config already in `.claude/launch.json`, name `"math-mastery"`), click through Nota →
   Diagnostik → Pad → Latihan → Mastery for each topic, verify math correctness by hand before trusting the
   UI, check console for errors, then a final `vite build` to confirm no build errors.
7. Decide separately (don't build yet) whether Form 2 also gets its own UASA/UPSA exam sets — that's an
   easy extension of the existing pattern (see `src/content/uasa/` and `src/content/upsa/`) once the base
   13 chapters are solid, but wasn't asked for yet.

## House rules (from prior session feedback — apply these without being told again)

- **Nota content depth**: notes must be complete/thorough enough to be the sole study reference, not terse
  placeholders. The pelajar should be able to learn the concept from the note alone.
- **Question design**: shuffle MCQ choices at the engine level (don't pre-shuffle in content — `shuffleArray`
  in `src/engines/shared/shuffle.js` already handles this). Prefer typed numeric answers over MCQ for
  Latihan/Mastery phases where unambiguous. **Never** ask for a typed algebraic expression or inequality
  (e.g. "type 3+2k" or "type x<10") — these are ambiguous to grade. Instead redesign the question to ask for
  a concrete number (e.g. "what's the smallest positive integer satisfying..." → answer "7"). This was a
  deliberate fix applied across the UASA/UPSA papers.
- **React setState pattern**: never call a parent's setState from inside a child's setState updater — use
  `useEffect` instead. (Relevant if any new engine/component needs cross-component state sync.)
- **Premium visual direction**: ambient glows, gradient accents, glow box-shadows, smoother easing
  (`var(--ease-premium)`) — this is the house "premium teen" style. Match `src/index.css` custom properties
  (`--bg-0..3`, `--accent`, `--accent-2`, `--xp`, `--success`, `--danger`, `--radius-*`, `--shadow-card`,
  `--ease-premium`) rather than inventing new colors. No `--warning`/`--amber` token exists — reuse `--xp`
  (gold) for "special/highlight" badges like KBAT tags.
- **App positioning**: the goal is to replace physical textbooks as the phone-based go-to revision app —
  keep that in mind for tone/nada (avoid "exam panic" framing per the original spec too).

## Known tooling quirks (not app bugs — browser-automation environment artifacts)

- The in-app Browser pane sometimes drops the *first* click after a DOM change (especially right after a
  scroll or a `form_input` fill). If a click doesn't seem to register, just retry it once — don't assume the
  app is broken. Always verify with a fresh `screenshot` or `read_page`, not by trusting the prior tool
  result's stale coordinates.
- After restructuring a content file's exports (e.g. splitting an aggregator out of a data file), Vite's dev
  server can serve a stale module graph and throw a phantom `does not provide an export named ...` error even
  though the source is correct. Fix: stop and restart the preview server, then open a **fresh browser tab**
  (old tabs can keep a stale client-side module cache even after a server restart).
- `node`/`npm`/`npx` are not on PATH in the Bash tool's shell. Use the full path instead:
  `"/c/Program Files/nodejs/node.exe" node_modules/vite/bin/vite.js build`.

## Key files map

- `src/data/forms.js` — the 3-form list (id/label/tagline/status).
- `src/data/chapters.js` — chapter/topic structure per form, `getChapters(formId)` / `getChapter` / `getTopic`.
- `src/content/index.js` — content-map registry (per-phase getters), imports every topic's content files.
- `src/content/form1/babN/*.js` — Form 1 content, 65 files, use as the template for Form 2's shape.
- `src/engines/` — `note-stepper/`, `step-pad/`, `mastery/` (QuestionSet), `uasa-exam/` — all reusable,
  should NOT need changes for Form 2 content (content-only propagation).
- `src/screens/` — navigation shell (PilihForm → DashboardForm → PetaBab → BabTopikList → SkrinTopik), plus
  `SenaraiUjian.jsx`/`UjianUasa.jsx` for the UASA/UPSA exam mode.
- `src/state/ProgressContext.jsx` — localStorage-backed progress state, `examScores` for exam results.
- `.claude/launch.json` — dev server config for `preview_start`, name `"math-mastery"`, port 5173.
