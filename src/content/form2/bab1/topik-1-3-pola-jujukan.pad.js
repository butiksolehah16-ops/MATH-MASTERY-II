// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 1, Topik 1.3 (Pola dan Jujukan).
export const padPolaJujukanContent = {
  problem: "Diberi jujukan 6, 11, 16, 21, ..., cari sebutan ke-15 (T15) menggunakan formula am.",
  steps: [
    {
      prompt: "Langkah 1: Kenal pasti a dan d bagi jujukan ini.",
      choices: ["a = 6, d = 5", "a = 6, d = 11", "a = 5, d = 6", "a = 11, d = 6"],
      answer: "a = 6, d = 5",
      hint: "a ialah sebutan pertama (6). d ialah beza antara sebutan berturutan: 11 − 6 = 5.",
    },
    {
      prompt:
        "Langkah 2: Gantikan a = 6, d = 5, n = 15 ke dalam formula Tn = a + (n − 1)d. Ungkapan yang betul " +
        "ialah?",
      choices: ["6 + (15 − 1)(5)", "6 + (15)(5)", "15 + (6 − 1)(5)", "6 + (14)(15)"],
      answer: "6 + (15 − 1)(5)",
      hint: "n − 1 = 15 − 1 = 14, darab dengan d = 5, kemudian tambah a = 6.",
    },
    {
      prompt: "Langkah 3: Selesaikan pengiraan untuk dapatkan T15. Taip jawapan kamu.",
      type: "input",
      answer: "76",
      hint: "(15 − 1) × 5 = 14 × 5 = 70, kemudian 6 + 70 = 76.",
    },
  ],
};
