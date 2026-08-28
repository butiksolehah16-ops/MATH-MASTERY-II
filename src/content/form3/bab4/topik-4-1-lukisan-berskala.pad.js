// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 4, Topik 4.1 (Lukisan Berskala).
export const padLukisanBerskalaContent = {
  problem: "Sebuah peta guna skala 1:25000. Jarak sebenar antara dua pekan ialah 10 km. Cari jarak pada peta (dalam cm).",
  steps: [
    {
      prompt: "Langkah 1: Tukar 10 km kepada cm dahulu (1 km = 100000 cm).",
      choices: ["1000000 cm", "10000 cm", "100000 cm", "100 cm"],
      answer: "1000000 cm",
      hint: "10 × 100000 = 1000000 cm.",
    },
    {
      prompt: "Langkah 2: Guna Ukuran Lukisan = Ukuran Sebenar ÷ n. Apakah operasi yang betul?",
      choices: ["1000000 ÷ 25000", "1000000 × 25000", "25000 ÷ 1000000", "1000000 − 25000"],
      answer: "1000000 ÷ 25000",
      hint: "Ukuran lukisan = ukuran sebenar ÷ n, dengan n = 25000.",
    },
    {
      prompt: "Langkah 3: Kirakan 1000000 ÷ 25000. Taip jawapan kamu (cm).",
      type: "input",
      answer: "40",
      hint: "1000000 ÷ 25000 = 40.",
    },
  ],
};
