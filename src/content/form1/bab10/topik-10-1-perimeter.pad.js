// Kandungan Latihan Berpandu (Pad) — Bab 10, Topik 10.1 (Perimeter).
export const padPerimeterContent = {
  problem: "Segiempat tepat dengan panjang 15cm dan lebar 6cm. Cari perimeternya",
  steps: [
    {
      prompt: "Langkah 1: Formula perimeter segiempat tepat ialah?",
      choices: ["p × l", "2(p + l)", "p + l", "4l"],
      answer: "2(p + l)",
      hint: "Perimeter segiempat tepat = 2 × (panjang + lebar).",
    },
    {
      prompt: "Langkah 2: 15 + 6 = ?",
      choices: ["21", "9", "90", "19"],
      answer: "21",
      hint: "15 + 6 = 21.",
    },
    {
      prompt: "Langkah 3: Perimeter = 2 × 21 = ? (taip nombor sahaja)",
      type: "input",
      answer: "42",
      hint: "2 × 21 = 42.",
    },
  ],
};
