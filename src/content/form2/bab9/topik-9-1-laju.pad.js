// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 9, Topik 9.1 (Laju).
export const padLajuContent = {
  problem: "Sebuah motosikal menempuh jarak 108 km dalam masa 3 jam. Cari lajunya, kemudian tukar kepada m/s.",
  steps: [
    {
      prompt: "Langkah 1: Cari laju (km/j) = 108 ÷ 3. Apakah nilainya?",
      type: "input",
      answer: "36",
      hint: "108 ÷ 3 = 36.",
    },
    {
      prompt: "Langkah 2: Tukar 36 km/j kepada m/s (bahagi dengan 3.6). Apakah nilainya?",
      type: "input",
      answer: "10",
      hint: "36 ÷ 3.6 = 10.",
    },
    {
      prompt:
        "Langkah 3: Jika motosikal itu kekal pada laju 36 km/j selama 5 jam, berapakah jarak yang akan " +
        "dilaluinya (guna Jarak = Laju × Masa)?",
      type: "input",
      answer: "180",
      hint: "36 × 5 = 180.",
    },
  ],
};
