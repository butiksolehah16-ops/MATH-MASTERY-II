// Kandungan Latihan Berpandu (Pad) — Bab 4, Topik 4.4 (Nisbah, Kadar dan Kadaran).
export const padNisbahKadarKadaranContent = {
  problem: "Kongsikan RM280 mengikut nisbah 3:4. Cari bahagian yang lebih besar",
  steps: [
    {
      prompt: "Langkah 1: Jumlah bahagian = 3 + 4 = ?",
      choices: ["7", "12", "1", "8"],
      answer: "7",
      hint: "3 + 4 = 7.",
    },
    {
      prompt: "Langkah 2: Nilai satu bahagian = RM280 ÷ 7 = ?",
      choices: ["40", "35", "45", "30"],
      answer: "40",
      hint: "280 ÷ 7 = 40.",
    },
    {
      prompt: "Langkah 3: Bahagian lebih besar = 4 × RM40 = ? (taip nombor sahaja)",
      type: "input",
      answer: "160",
      hint: "4 × 40 = 160.",
    },
  ],
};
