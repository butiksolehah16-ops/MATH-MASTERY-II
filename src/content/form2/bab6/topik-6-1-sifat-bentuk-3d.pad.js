// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 6, Topik 6.1 (Sifat
// Geometri Bentuk Tiga Dimensi).
export const padSifatBentuk3dContent = {
  problem:
    "Sebuah prisma segi tiga mempunyai 5 muka dan 6 bucu. Guna Euler (Muka+Bucu−Tepi=2), cari bilangan " +
    "tepinya.",
  steps: [
    {
      prompt: "Langkah 1: Apakah nilai Muka + Bucu?",
      type: "input",
      answer: "11",
      hint: "5 + 6 = 11.",
    },
    {
      prompt: "Langkah 2: Guna Euler, Tepi = (Muka + Bucu) − 2. Apakah bilangan tepinya?",
      type: "input",
      answer: "9",
      hint: "11 − 2 = 9.",
    },
    {
      prompt:
        "Langkah 3: Prisma segi tiga ada 2 muka segi tiga (tapak atas & bawah) dan baki muka segi empat " +
        "tepat (sisi tegak). Jika jumlah muka = 5, berapa muka segi empat tepat sahaja?",
      type: "input",
      answer: "3",
      hint: "5 − 2 = 3.",
    },
  ],
};
