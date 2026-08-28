// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 7, Topik 7.3 (Sistem
// Koordinat Cartes).
export const padSistemKoordinatCartesContent = {
  problem: "Plot tanah segi tiga mempunyai bucu P(0, 0), Q(8, 0), dan R(0, 6). Cari perimeter plot tersebut.",
  steps: [
    {
      prompt: "Langkah 1: Cari jarak PQ (dx = 8, dy = 0). Apakah nilainya?",
      type: "input",
      answer: "8",
      hint: "√(8² + 0²) = 8.",
    },
    {
      prompt: "Langkah 2: Cari jarak PR (dx = 0, dy = 6). Apakah nilainya?",
      type: "input",
      answer: "6",
      hint: "√(0² + 6²) = 6.",
    },
    {
      prompt:
        "Langkah 3: Cari jarak QR (dx = 8, dy = 6), kemudian jumlahkan ketiga-tiga sisi (PQ + PR + QR) untuk " +
        "dapat perimeter. Apakah perimeter plot tersebut?",
      type: "input",
      answer: "24",
      hint: "QR = √(8² + 6²) = √100 = 10, jadi perimeter = 8 + 6 + 10 = 24.",
    },
  ],
};
