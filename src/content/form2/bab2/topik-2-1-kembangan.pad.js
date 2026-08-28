// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 2, Topik 2.1 (Kembangan).
// Langkah akhir kekal MCQ (bukan input) sebab hasil kembangan ialah ungkapan
// dua sebutan — menaip ungkapan bebas berisiko jadi ambiguous untuk disemak
// (rujuk house rule: tak taip ungkapan/ketaksamaan bebas).
export const padKembanganContent = {
  problem: "Kembangkan 4(3x + 5)",
  steps: [
    {
      prompt: "Langkah 1: Darab 4 dengan sebutan pertama, 3x. Apakah hasilnya?",
      choices: ["12x", "7x", "3x", "4x"],
      answer: "12x",
      hint: "Darab pekali sahaja: 4 × 3 = 12, kekalkan pemboleh ubah x. Jadi 4 × 3x = 12x.",
    },
    {
      prompt: "Langkah 2: Darab 4 dengan sebutan kedua, 5. Apakah hasilnya?",
      choices: ["20", "9", "5", "4"],
      answer: "20",
      hint: "4 × 5 = 20.",
    },
    {
      prompt: "Langkah 3: Gabungkan kedua-dua hasil untuk dapatkan ungkapan yang telah dikembang.",
      choices: ["12x + 20", "12x + 5", "20x + 12", "3x + 20"],
      answer: "12x + 20",
      hint: "Gabungkan hasil Langkah 1 (12x) dan Langkah 2 (20): 4(3x + 5) = 12x + 20.",
    },
  ],
};
