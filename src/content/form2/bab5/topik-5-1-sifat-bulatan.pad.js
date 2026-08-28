// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 5, Topik 5.1 (Sifat Bulatan).
export const padSifatBulatanContent = {
  problem:
    "Sebuah bulatan mempunyai diameter 30 cm. Cari jejarinya, kemudian cari diameter bulatan kedua yang " +
    "jejarinya 2 kali ganda jejari bulatan pertama.",
  steps: [
    {
      prompt: "Langkah 1: Jejari = Diameter ÷ 2. Apakah jejari bulatan pertama?",
      type: "input",
      answer: "15",
      hint: "30 ÷ 2 = 15.",
    },
    {
      prompt: "Langkah 2: Jejari bulatan kedua ialah 2 × jejari bulatan pertama. Apakah jejari bulatan kedua?",
      type: "input",
      answer: "30",
      hint: "2 × 15 = 30.",
    },
    {
      prompt: "Langkah 3: Diameter bulatan kedua = 2 × jejarinya. Apakah diameter bulatan kedua?",
      type: "input",
      answer: "60",
      hint: "2 × 30 = 60.",
    },
  ],
};
