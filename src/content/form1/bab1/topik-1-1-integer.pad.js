// Kandungan Latihan Berpandu (Pad) — Bab 1, Topik 1.1 (Integer), GOLD TEMPLATE.
// Sambungan terus dari nota (topik-1-1-integer.note.js): pelajar berlatih
// operasi TOLAK NOMBOR NEGATIF secara berpandu, langkah demi langkah.
export const padIntegerContent = {
  problem: "Kirakan (−4) − (−9)",
  steps: [
    {
      prompt: "Langkah 1: Tukar operasi tolak nombor negatif kepada bentuk tambah.",
      choices: ["(−4) + 9", "(−4) − 9", "4 + (−9)", "(−4) + (−9)"],
      answer: "(−4) + 9",
      hint:
        "Tolak nombor negatif (−9) bertukar jadi tambah nombor positifnya (+9). Nombor pertama, (−4), kekal " +
        "tidak berubah.",
    },
    {
      prompt: "Langkah 2: (−4) dan 9 tanda berbeza (satu negatif, satu positif). Apa kita buat pada magnitud?",
      choices: [
        "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
        "Tambah kedua-dua magnitud, kekalkan tanda negatif",
        "Abaikan tanda, terus darab kedua-dua nombor",
        "Tolak magnitud besar daripada magnitud kecil",
      ],
      answer: "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
      hint:
        "Bila tanda dua nombor BERBEZA, tolak magnitud yang kecil daripada yang besar (9 − 4), dan jawapan " +
        "ikut tanda nombor yang magnitudnya lebih besar (di sini, 9 lebih besar dan positif).",
    },
    {
      prompt: "Langkah 3: Selesaikan pengiraan untuk dapat jawapan akhir. Taip jawapan kamu.",
      type: "input",
      answer: "5",
      hint: "9 − 4 = 5. Magnitud 9 (daripada +9) lebih besar berbanding 4, jadi jawapan akhir positif: 5.",
    },
  ],
};
