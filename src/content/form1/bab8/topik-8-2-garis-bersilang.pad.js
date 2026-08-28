// Kandungan Latihan Berpandu (Pad) — Bab 8, Topik 8.2 (Sudut yang Berkaitan dengan Garis Bersilang).
export const padGarisBersilangContent = {
  problem: "Dua garis bersilang membentuk sudut 48° pada satu bahagian. Cari sudut bersebelahan dengannya",
  steps: [
    {
      prompt: "Langkah 1: Sudut bersebelahan bersuplemen bermaksud jumlahnya?",
      choices: ["90°", "180°", "270°", "360°"],
      answer: "180°",
      hint: "Bersuplemen bermaksud jumlah dua sudut ialah 180°.",
    },
    {
      prompt: "Langkah 2: 180° − 48° = ?",
      choices: ["132", "228", "42", "148"],
      answer: "132",
      hint: "180 − 48 = 132.",
    },
    {
      prompt: "Langkah 3: Jadi sudut bersebelahan ialah? (taip nombor sahaja)",
      type: "input",
      answer: "132",
      hint: "180° − 48° = 132°.",
    },
  ],
};
