// Kandungan Latihan Berpandu (Pad) — Bab 6, Topik 6.1 (Persamaan Linear Dalam Satu Pemboleh Ubah).
export const padSatuPembolehUbahContent = {
  problem: "Selesaikan 3x − 4 = 11",
  steps: [
    {
      prompt: "Langkah 1: Tambah 4 pada kedua-dua belah: 3x − 4 + 4 = 11 + 4. Berapakah 11 + 4?",
      choices: ["15", "7", "44", "3"],
      answer: "15",
      hint: "11 + 4 = 15.",
    },
    {
      prompt: "Langkah 2: Jadi 3x = 15. Bahagi kedua-dua belah dengan 3: 15 ÷ 3 = ?",
      choices: ["5", "12", "45", "3"],
      answer: "5",
      hint: "15 ÷ 3 = 5.",
    },
    {
      prompt: "Langkah 3: Jadi nilai x ialah? (taip nombor sahaja)",
      type: "input",
      answer: "5",
      hint: "3x = 15, jadi x = 15 ÷ 3 = 5.",
    },
  ],
};
