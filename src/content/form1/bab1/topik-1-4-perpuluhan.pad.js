// Kandungan Latihan Berpandu (Pad) — Bab 1, Topik 1.4 (Perpuluhan Positif dan Negatif).
export const padPerpuluhanContent = {
  problem: "Kirakan (−3.6) + 1.2",
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
      hint: "(−3.6) negatif, 1.2 positif — dua tanda yang berlainan.",
    },
    {
      prompt: "Langkah 2: Oleh kerana tanda berbeza, apa kita buat pada magnitud?",
      choices: [
        "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
        "Tambah kedua-dua magnitud, kekalkan tanda negatif",
        "Abaikan tanda, terus tambah macam biasa",
        "Darab kedua-dua magnitud",
      ],
      answer: "Tolak magnitud kecil daripada magnitud besar, guna tanda nombor bermagnitud besar",
      hint:
        "Bila tanda BERBEZA, tolak magnitud yang kecil (1.2) daripada magnitud yang besar (3.6), dan jawapan " +
        "ikut tanda nombor bermagnitud besar (di sini, −3.6 lebih besar magnitudnya dan negatif).",
    },
    {
      prompt: "Langkah 3: Selesaikan pengiraan untuk dapat jawapan akhir. Taip jawapan kamu.",
      type: "input",
      answer: "−2.4",
      hint: "3.6 − 1.2 = 2.4. Magnitud 3.6 lebih besar berbanding 1.2, jadi jawapan akhir negatif: −2.4.",
    },
  ],
};
