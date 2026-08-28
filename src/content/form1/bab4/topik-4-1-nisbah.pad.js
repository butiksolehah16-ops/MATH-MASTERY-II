// Kandungan Latihan Berpandu (Pad) — Bab 4, Topik 4.1 (Nisbah).
export const padNisbahContent = {
  problem: "Cari nisbah termudah bagi 18:24",
  steps: [
    {
      prompt: "Langkah 1: Cari HCF bagi 18 dan 24.",
      choices: ["6", "3", "9", "2"],
      answer: "6",
      hint: "Faktor sepunya terbesar bagi 18 dan 24 ialah 6.",
    },
    {
      prompt: "Langkah 2: 18 ÷ 6 = ?",
      choices: ["3", "2", "4", "6"],
      answer: "3",
      hint: "18 ÷ 6 = 3.",
    },
    {
      prompt: "Langkah 3: 24 ÷ 6 = 4. Jadi nisbah termudah bagi 18:24 ialah? Taip dalam bentuk a:b (cth: 3:4)",
      type: "input",
      answer: "3:4",
      hint: "18÷6=3 dan 24÷6=4, jadi nisbah termudah ialah 3:4.",
    },
  ],
};
