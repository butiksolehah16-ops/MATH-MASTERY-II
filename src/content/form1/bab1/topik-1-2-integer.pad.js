// Kandungan Latihan Berpandu (Pad) — Bab 1, Topik 1.2 (Operasi Asas Integer).
// Sambungan dari nota: pelajar berlatih TAMBAH integer tanda berbeza secara
// berpandu, langkah demi langkah.
export const padIntegerAdditionContent = {
  problem: "Kirakan (−12) + 7",
  steps: [
    {
      prompt: "Langkah 1: Tentukan — tanda kedua-dua nombor SAMA atau BERBEZA?",
      choices: [
        "Berbeza (satu negatif, satu positif)",
        "Sama (kedua-dua negatif)",
        "Sama (kedua-dua positif)",
        "Tidak dapat ditentukan",
      ],
      answer: "Berbeza (satu negatif, satu positif)",
      hint: "(−12) negatif, 7 positif — dua tanda yang berlainan.",
    },
    {
      prompt: "Langkah 2: Oleh kerana tanda berbeza, apa kita buat pada magnitud?",
      choices: [
        "Tambah kedua-dua magnitud, kekalkan tanda negatif",
        "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
        "Abaikan tanda, terus tambah macam biasa",
        "Darab kedua-dua magnitud",
      ],
      answer: "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
      hint:
        "Bila tanda BERBEZA, tolak magnitud yang kecil (7) daripada magnitud yang besar (12), dan jawapan " +
        "ikut tanda nombor bermagnitud besar (di sini, −12 lebih besar magnitudnya dan negatif).",
    },
    {
      prompt: "Langkah 3: Selesaikan pengiraan untuk dapat jawapan akhir. Taip jawapan kamu.",
      type: "input",
      answer: "−5",
      hint: "12 − 7 = 5. Magnitud 12 (daripada −12) lebih besar berbanding 7, jadi jawapan akhir negatif: −5.",
    },
  ],
};
