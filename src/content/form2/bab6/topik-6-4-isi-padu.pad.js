// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 6, Topik 6.4 (Isi Padu
// Bentuk Tiga Dimensi).
export const padIsiPaduContent = {
  problem: "Sebuah kon mempunyai jejari tapak 7 cm dan tinggi 6 cm. Guna π = 22/7, cari isi padunya.",
  steps: [
    {
      prompt: "Langkah 1: Cari luas tapak (πr²). Apakah nilainya?",
      type: "input",
      answer: "154",
      hint: "22/7 × 7 × 7 = 154.",
    },
    {
      prompt: "Langkah 2: Darab luas tapak dengan tinggi (154 × 6). Apakah nilainya?",
      type: "input",
      answer: "924",
      hint: "154 × 6 = 924.",
    },
    {
      prompt: "Langkah 3: Bahagikan dengan 3 (sebab kon = ⅓ prisma/silinder sepadan). Apakah isi padu kon?",
      type: "input",
      answer: "308",
      hint: "924 ÷ 3 = 308.",
    },
  ],
};
