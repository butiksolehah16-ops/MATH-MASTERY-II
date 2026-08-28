// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 9, Topik 9.2 (Pecutan).
export const padPecutanContent = {
  problem: "Sebuah kereta bergerak dari laju 10 m/s ke 30 m/s dalam masa 5 saat. Cari pecutannya.",
  steps: [
    {
      prompt: "Langkah 1: Cari beza laju (v − u) = 30 − 10. Apakah nilainya?",
      type: "input",
      answer: "20",
      hint: "30 − 10 = 20.",
    },
    {
      prompt: "Langkah 2: Bahagikan beza laju dengan masa: 20 ÷ 5. Apakah pecutan kereta (m/s²)?",
      type: "input",
      answer: "4",
      hint: "20 ÷ 5 = 4.",
    },
    {
      prompt:
        "Langkah 3: Jika kereta itu bermula pada laju 10 m/s dan terus memecut pada 4 m/s² selama 10 saat, " +
        "apakah laju akhirnya (guna Laju Akhir = Laju Awal + Pecutan × Masa)?",
      type: "input",
      answer: "50",
      hint: "10 + (4 × 10) = 10 + 40 = 50.",
    },
  ],
};
