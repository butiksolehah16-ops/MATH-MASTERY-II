// Kandungan Latihan Berpandu (Pad) — Bab 7, Topik 7.2 (Ketaksamaan Linear Dalam Satu Pemboleh Ubah).
export const padSatuPembolehUbahKetaksamaanContent = {
  problem: "Selesaikan 2x − 3 ≥ 7",
  steps: [
    {
      prompt: "Langkah 1: Tambah 3 pada kedua-dua belah: 2x − 3 + 3 ≥ 7 + 3. Berapakah 7 + 3?",
      choices: ["10", "4", "21", "3"],
      answer: "10",
      hint: "7 + 3 = 10.",
    },
    {
      prompt: "Langkah 2: Jadi 2x ≥ 10. Bahagi kedua-dua belah dengan 2 (positif, simbol KEKAL): 10 ÷ 2 = ?",
      choices: ["5", "20", "12", "8"],
      answer: "5",
      hint: "10 ÷ 2 = 5. Sebab 2 ialah nombor positif, simbol ≥ kekal sama.",
    },
    {
      prompt: "Langkah 3: Jadi penyelesaian ialah x ≥ ? (taip nombor sahaja)",
      type: "input",
      answer: "5",
      hint: "2x ≥ 10, bahagi dengan 2, jadi x ≥ 5.",
    },
  ],
};
