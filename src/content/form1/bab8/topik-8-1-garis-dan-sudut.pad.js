// Kandungan Latihan Berpandu (Pad) — Bab 8, Topik 8.1 (Garis dan Sudut).
export const padGarisDanSudutContent = {
  problem: "Dua sudut pada satu pusingan penuh ialah 250° dan z°. Cari nilai z",
  steps: [
    {
      prompt: "Langkah 1: Jumlah sudut pada satu pusingan penuh ialah?",
      choices: ["180°", "270°", "360°", "90°"],
      answer: "360°",
      hint: "Satu pusingan penuh ialah 360°.",
    },
    {
      prompt: "Langkah 2: z° = 360° − 250°. Berapakah 360 − 250?",
      choices: ["110", "210", "610", "150"],
      answer: "110",
      hint: "360 − 250 = 110.",
    },
    {
      prompt: "Langkah 3: Jadi nilai z ialah? (taip nombor sahaja)",
      type: "input",
      answer: "110",
      hint: "360° − 250° = 110°.",
    },
  ],
};
