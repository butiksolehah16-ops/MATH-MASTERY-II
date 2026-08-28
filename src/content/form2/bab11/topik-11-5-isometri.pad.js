// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 11, Topik 11.5 (Isometri).
export const padIsometriContent = {
  problem:
    "Objek M(1, 1), N(9, 7) diputar menjadi imej M'(3, 3), N'(11, 9). Sahkan putaran ini isometri dengan " +
    "bandingkan jarak MN dan M'N'.",
  steps: [
    {
      prompt: "Langkah 1: Cari jarak MN (dx = 8, dy = 6). Apakah nilainya?",
      type: "input",
      answer: "10",
      hint: "√(8² + 6²) = √100 = 10.",
    },
    {
      prompt: "Langkah 2: Cari jarak M'N' (dx = 8, dy = 6). Apakah nilainya?",
      type: "input",
      answer: "10",
      hint: "√(8² + 6²) = √100 = 10, sama macam MN.",
    },
    {
      prompt: "Langkah 3: Sebab MN = M'N' = 10, jarak dikekalkan. Berapakah nilai MN + M'N' (jumlah kedua-duanya)?",
      type: "input",
      answer: "20",
      hint: "10 + 10 = 20.",
    },
  ],
};
