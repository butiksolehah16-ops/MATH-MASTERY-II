// Kandungan Latihan Berpandu (Pad) — Bab 8, Topik 8.3 (Sudut yang Berkaitan dengan Garis Selari dan Garis Rentas Lintang).
export const padGarisSelariContent = {
  problem: "Garis rentas lintang memotong dua garis selari membentuk sudut 84° pada satu titik. Cari sudut pedalamannya",
  steps: [
    {
      prompt: "Langkah 1: Sudut pedalaman bersuplemen bermaksud jumlahnya?",
      choices: ["90°", "180°", "270°", "360°"],
      answer: "180°",
      hint: "Bersuplemen bermaksud jumlah dua sudut ialah 180°.",
    },
    {
      prompt: "Langkah 2: 180° − 84° = ?",
      choices: ["96", "264", "16", "104"],
      answer: "96",
      hint: "180 − 84 = 96.",
    },
    {
      prompt: "Langkah 3: Jadi sudut pedalaman ialah? (taip nombor sahaja)",
      type: "input",
      answer: "96",
      hint: "180° − 84° = 96°.",
    },
  ],
};
