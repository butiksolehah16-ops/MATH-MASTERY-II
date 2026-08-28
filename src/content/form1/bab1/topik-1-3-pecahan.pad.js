// Kandungan Latihan Berpandu (Pad) — Bab 1, Topik 1.3 (Pecahan Positif dan Negatif).
export const padPecahanContent = {
  problem: "Kirakan (−2/3) + (−1/4)",
  steps: [
    {
      prompt: "Langkah 1: Cari penyebut sepunya (LCD) bagi 3 dan 4.",
      choices: ["12", "7", "3", "4"],
      answer: "12",
      hint: "LCD ialah gandaan sepunya terkecil bagi 3 dan 4. Gandaan 3: 3,6,9,12... Gandaan 4: 4,8,12...",
    },
    {
      prompt:
        "Langkah 2: Selepas tukar kepada perduabelas, (−2/3) = (−8/12) dan (−1/4) = (−3/12). Tanda kedua-duanya " +
        "sama (negatif) — apa kita buat?",
      choices: [
        "Tambah magnitud, kekalkan tanda negatif",
        "Tolak magnitud kecil daripada magnitud besar",
        "Abaikan tanda, terus darab",
        "Tolak magnitud besar daripada magnitud kecil",
      ],
      answer: "Tambah magnitud, kekalkan tanda negatif",
      hint: "Tanda SAMA (kedua-dua negatif) → gabungkan (tambah) magnitud dan kekalkan tanda negatif tu.",
    },
    {
      prompt: "Langkah 3: Selesaikan pengiraan akhir (sebagai pecahan, cth. −11/12). Taip jawapan kamu.",
      type: "input",
      answer: "−11/12",
      hint: "8/12 + 3/12 = 11/12. Kekalkan tanda negatif kerana kedua-dua pecahan asal negatif.",
    },
  ],
};
