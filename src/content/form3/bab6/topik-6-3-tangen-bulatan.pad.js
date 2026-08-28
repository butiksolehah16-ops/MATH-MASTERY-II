// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 6, Topik 6.3 (Tangen kepada Bulatan).
export const padTangenBulatanContent = {
  problem: "Bulatan berpusat O berjejari 9 cm. Titik luar T dengan tangen TP = 12 cm (P titik sentuhan). Cari OT.",
  steps: [
    {
      prompt: "Langkah 1: Sebab OP ⊥ TP, segi tiga OPT ialah segi tiga bersudut tegak. Apakah sisi TERPANJANG (hipotenus) dalam segi tiga ini?",
      choices: ["OT", "OP", "TP", "Tiada"],
      answer: "OT",
      hint: "Sudut tegak berada di P, jadi sisi bertentangan dengannya (OT) ialah hipotenus.",
    },
    {
      prompt: "Langkah 2: Guna Pythagoras: OT² = OP² + TP². Kirakan OP² + TP² = 9² + 12².",
      choices: ["225", "441", "81", "144"],
      answer: "225",
      hint: "9² = 81, 12² = 144, jumlah = 81 + 144 = 225.",
    },
    {
      prompt: "Langkah 3: OT = √225. Taip jawapan kamu (cm).",
      type: "input",
      answer: "15",
      hint: "√225 = 15.",
    },
  ],
};
