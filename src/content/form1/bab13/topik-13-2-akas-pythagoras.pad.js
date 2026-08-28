// Kandungan Latihan Berpandu (Pad) — Bab 13, Topik 13.2 (Akas Teorem
// Pythagoras).
export const padAkasPythagorasContent = {
  problem: "Segi tiga dengan sisi 5cm, 12cm, dan 13cm. Sahkan sama ada ia bersudut tegak",
  steps: [
    {
      prompt: "Langkah 1: Kira 5² + 12² = ?",
      choices: ["169", "144", "25", "17"],
      answer: "169",
      hint: "5² + 12² = 25 + 144 = 169.",
    },
    {
      prompt: "Langkah 2: Kira 13² = ?",
      choices: ["169", "144", "26", "39"],
      answer: "169",
      hint: "13² = 169.",
    },
    {
      prompt: "Langkah 3: Beza antara 169 dan 169 ialah? (taip nombor sahaja)",
      type: "input",
      answer: "0",
      hint: "169 − 169 = 0, jadi segi tiga itu bersudut tegak.",
    },
  ],
};
