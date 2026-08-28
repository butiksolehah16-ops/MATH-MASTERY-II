// Kandungan Latihan Berpandu (Pad) — Bab 9, Topik 9.2 (Sifat Segi Tiga dan Sudutnya).
export const padSegiTigaContent = {
  problem: "Dua sudut segi tiga ialah 48° dan 97°. Cari sudut ketiga",
  steps: [
    {
      prompt: "Langkah 1: Jumlah dua sudut yang diketahui: 48° + 97° = ?",
      choices: ["145", "49", "135", "155"],
      answer: "145",
      hint: "48 + 97 = 145.",
    },
    {
      prompt: "Langkah 2: Sudut ketiga = 180° − 145° = ?",
      choices: ["35", "25", "45", "55"],
      answer: "35",
      hint: "180 − 145 = 35.",
    },
    {
      prompt: "Langkah 3: Jadi sudut ketiga ialah? (taip nombor sahaja)",
      type: "input",
      answer: "35",
      hint: "180° − 145° = 35°.",
    },
  ],
};
