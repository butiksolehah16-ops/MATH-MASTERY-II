// Kandungan Latihan Berpandu (Pad) — Bab 6, Topik 6.3 (Persamaan Linear Serentak Dalam Dua Pemboleh Ubah).
export const padSerentakContent = {
  problem: "Selesaikan persamaan serentak: x + y = 18 dan x − y = 6",
  steps: [
    {
      prompt: "Langkah 1: Tambah kedua-dua persamaan: (x+y)+(x−y) = 18+6. Apakah hasil di sebelah kiri?",
      choices: ["2x", "2y", "x+y", "x−y"],
      answer: "2x",
      hint: "(x+x) + (y−y) = 2x + 0 = 2x.",
    },
    {
      prompt: "Langkah 2: 18 + 6 = ? (nilai di sebelah kanan selepas tambah)",
      choices: ["24", "12", "108", "3"],
      answer: "24",
      hint: "18 + 6 = 24.",
    },
    {
      prompt: "Langkah 3: 2x = 24, jadi nilai x ialah? (taip nombor sahaja)",
      type: "input",
      answer: "12",
      hint: "24 ÷ 2 = 12.",
    },
  ],
};
