// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 2, Topik 2.3 (Ungkapan
// Algebra dan Hukum Operasi Asas Aritmetik).
export const padOperasiGabunganContent = {
  problem: "Permudahkan 3(x + 4) + 2(x − 1)",
  steps: [
    {
      prompt: "Langkah 1: Kembangkan bahagian pertama, 3(x + 4).",
      choices: ["3x + 12", "3x + 4", "x + 12", "3x + 7"],
      answer: "3x + 12",
      hint: "3 × x = 3x, dan 3 × 4 = 12.",
    },
    {
      prompt: "Langkah 2: Kembangkan bahagian kedua, 2(x − 1).",
      choices: ["2x − 2", "2x − 1", "x − 2", "2x + 2"],
      answer: "2x − 2",
      hint: "2 × x = 2x, dan 2 × (−1) = −2.",
    },
    {
      prompt: "Langkah 3: Gabungkan sebutan x: 3x + 2x. Apakah pekali x akhir (nombor sahaja)?",
      type: "input",
      answer: "5",
      hint: "3 + 2 = 5.",
    },
    {
      prompt: "Langkah 4: Gabungkan sebutan malar: 12 + (−2). Apakah nilainya?",
      type: "input",
      answer: "10",
      hint: "12 − 2 = 10.",
    },
  ],
};
