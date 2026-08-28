// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 4, Topik 4.2 (Sudut
// Pedalaman dan Sudut Peluaran Poligon).
export const padSudutPoligonContent = {
  problem: "Cari jumlah sudut pedalaman bagi heptagon (poligon 7 sisi), kemudian selesaikan masalah berkaitan.",
  steps: [
    {
      prompt: "Langkah 1: Berapakah nilai (n − 2) bagi heptagon, dengan n = 7?",
      type: "input",
      answer: "5",
      hint: "7 − 2 = 5.",
    },
    {
      prompt: "Langkah 2: Darab (n − 2) dengan 180° untuk dapat jumlah sudut pedalaman. Apakah jawapannya (nombor sahaja)?",
      type: "input",
      answer: "900",
      hint: "5 × 180 = 900.",
    },
    {
      prompt: "Langkah 3: 6 daripada 7 sudut heptagon ini berjumlah 770°. Apakah nilai sudut ke-7?",
      type: "input",
      answer: "130",
      hint: "Jumlah keseluruhan ialah 900° (dari Langkah 2). Sudut ke-7 = 900 − 770 = 130.",
    },
  ],
};
