// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 6, Topik 6.3 (Luas
// Permukaan Bentuk Tiga Dimensi).
export const padLuasPermukaanContent = {
  problem: "Sebuah kuboid berukuran panjang 6 cm, lebar 4 cm, dan tinggi 5 cm. Cari luas permukaannya.",
  steps: [
    {
      prompt: "Langkah 1: Cari luas sepasang muka lw (2 × panjang × lebar). Apakah nilainya?",
      type: "input",
      answer: "48",
      hint: "2 × 6 × 4 = 48.",
    },
    {
      prompt: "Langkah 2: Cari luas sepasang muka lh (2 × panjang × tinggi). Apakah nilainya?",
      type: "input",
      answer: "60",
      hint: "2 × 6 × 5 = 60.",
    },
    {
      prompt:
        "Langkah 3: Cari luas sepasang muka wh (2 × lebar × tinggi), kemudian jumlahkan SEMUA tiga nilai " +
        "untuk dapat luas permukaan keseluruhan. Apakah luas permukaan kuboid?",
      type: "input",
      answer: "148",
      hint: "2 × 4 × 5 = 40, kemudian 48 + 60 + 40 = 148.",
    },
  ],
};
