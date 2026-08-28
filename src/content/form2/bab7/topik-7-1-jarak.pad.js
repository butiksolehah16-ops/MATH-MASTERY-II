// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 7, Topik 7.1 (Jarak dalam
// Sistem Koordinat Cartes).
export const padJarakContent = {
  problem: "Cari jarak antara titik A(2, 1) dan B(6, 4).",
  steps: [
    {
      prompt: "Langkah 1: Cari dx = beza nilai-x (6 − 2). Apakah nilainya?",
      type: "input",
      answer: "4",
      hint: "6 − 2 = 4.",
    },
    {
      prompt: "Langkah 2: Cari dy = beza nilai-y (4 − 1). Apakah nilainya?",
      type: "input",
      answer: "3",
      hint: "4 − 1 = 3.",
    },
    {
      prompt: "Langkah 3: Guna jarak = √(dx² + dy²) = √(4² + 3²). Apakah jarak AB?",
      type: "input",
      answer: "5",
      hint: "√(16 + 9) = √25 = 5.",
    },
  ],
};
