// English content — Form 2, Chapter 5, Topic 5.1 (Properties of Circles).
// PILOT translation, mirrors topik-5-1-sifat-bulatan.note.js exactly in
// structure/keys — see that file for the Bahasa Malaysia original.
export const notaSifatBulatanContentEn = {
  visualType: "circle-parts",

  hook: {
    mentorLine: "New chapter — let's explore CIRCLES! Let's start with a real situation.",
    title: "A Circular Park in a Housing Complex",
    body:
      "The local council wants to build a circular park with a fountain right at the centre, a walking path " +
      "around the park, and a few \"pizza slice\" shaped grass areas for different activities. To plan all " +
      "this precisely, we first need to know the NAME of every part of a circle.",
  },

  exploration: {
    mentorLine: "Let's reveal each part of the circle one by one.",
    prompt:
      "Click \"Reveal next part\" to identify each part of a circle: centre, radius, diameter, chord, arc, " +
      "sector, and segment.",
    parts: ["center", "radius", "diameter", "chord", "arc", "sector", "segment"],
  },

  insight: {
    mentorLine: "Notice how each part plays a different role?",
    title: "Seven Main Parts of a Circle",
    bullets: [
      "CENTRE — a fixed point in the middle of the circle, EQUIDISTANT from every point on the circumference (the circle's boundary).",
      "RADIUS — a line from the centre to any point on the circumference; ALL radii of the same circle are EQUAL in length.",
      "DIAMETER — a straight line through the centre, joining two opposite points on the circumference (diameter = 2 × radius).",
      "CHORD — a straight line joining TWO points on the circumference WITHOUT passing through the centre (the diameter is actually the longest possible chord).",
      "ARC — a part of the circumference.",
      "SECTOR — the region bounded by TWO radii and an arc (like a slice of pizza).",
      "SEGMENT — the region bounded by ONE chord and ONE arc. DIFFERENT from a sector: a segment does NOT pass through the centre at all.",
      "MINOR vs MAJOR — an arc, sector, AND segment can each be split into a SMALLER part (minor) and a LARGER part (major) — compare against HALF the circle to decide which is which.",
    ],
  },

  formula: {
    mentorLine: "This is the official relationship between radius and diameter — keep it in mind.",
    title: "Official Formula",
    expression: "Diameter = 2 × Radius",
    body:
      "Because the diameter crosses the circle THROUGH the centre, it's actually made up of TWO radii joined " +
      "together (one in each direction from the centre). So the diameter is ALWAYS twice the radius, no " +
      "matter how big the circle is. The reverse: Radius = Diameter ÷ 2.",
  },

  example: {
    mentorLine: "Let's try one more, step by step.",
    title: "Worked Example",
    problem: "A circle has a radius of 9 cm. What is its diameter?",
    steps: ["Use the formula: Diameter = 2 × Radius", "Diameter = 2 × 9", "= 18 cm"],
  },

  checkQuestion: {
    mentorLine: "Try it yourself — one quick question before we move to full practice.",
    prompt: "A circle has a diameter of 24 cm. What is its radius?",
    choices: ["12", "48", "6", "24"],
    answer: "12",
    feedbackCorrect: "Correct! Radius = Diameter ÷ 2 = 24 ÷ 2 = 12.",
    feedbackIncorrect: "Not quite. Use Radius = Diameter ÷ 2: 24 ÷ 2.",
  },
};
