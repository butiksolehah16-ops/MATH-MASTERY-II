// Kandungan Latihan Berpandu (Pad) — Bab 10, Topik 10.2 (Luas).
export const padLuasContent = {
  problem: "Segi tiga dengan tapak 14cm dan tinggi 9cm. Cari luasnya",
  steps: [
    {
      prompt: "Langkah 1: Formula luas segi tiga ialah?",
      choices: ["b × h", "½ × b × h", "2(b + h)", "b ÷ h"],
      answer: "½ × b × h",
      hint: "Luas segi tiga = ½ × tapak × tinggi.",
    },
    {
      prompt: "Langkah 2: 14 × 9 = ?",
      choices: ["126", "23", "63", "252"],
      answer: "126",
      hint: "14 × 9 = 126.",
    },
    {
      prompt: "Langkah 3: Luas = ½ × 126 = ? cm² (taip nombor sahaja)",
      type: "input",
      answer: "63",
      hint: "½ × 126 = 63.",
    },
  ],
};
