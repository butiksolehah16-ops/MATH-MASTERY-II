// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 2, Topik 2.1 (Angka Bererti).
export const padAngkaBerertiContent = {
  problem: "Bundarkan 0.03457 kepada 3 angka bererti.",
  steps: [
    {
      prompt: "Langkah 1: Sifar depan (0.0) tidak bererti. Apakah 3 angka bererti PERTAMA dalam 0.03457?",
      choices: ["3, 4, 5", "0, 3, 4", "4, 5, 7", "3, 4, 0"],
      answer: "3, 4, 5",
      hint: "Sifar sebelum digit bukan sifar pertama (3) tidak dikira. Mula kira dari 3: 3, 4, 5.",
    },
    {
      prompt: "Langkah 2: Digit SETERUSNYA (selepas 5) ialah 7. Sebab 7 ≥ 5, apa yang perlu kita buat kepada digit ke-3 (5)?",
      choices: ["Bulatkan naik jadi 6", "Kekalkan sebagai 5", "Tukar jadi 0", "Buang terus"],
      answer: "Bulatkan naik jadi 6",
      hint: "Digit selepas (7) adalah 5 atau lebih, jadi digit terakhir yang dikekalkan dibulatkan NAIK.",
    },
    {
      prompt: "Langkah 3: Tulis jawapan akhir (0.03457 dibundarkan kepada 3 angka bererti). Taip jawapan kamu.",
      type: "input",
      answer: "0.0346",
      hint: "Gabungkan: 3, 4, dan 5 dibulatkan naik jadi 6 → 0.0346.",
    },
  ],
};
