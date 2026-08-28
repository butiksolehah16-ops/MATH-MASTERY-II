// Kandungan Latihan Berpandu (Pad) — Bab 6, Topik 6.2 (Persamaan Linear Dalam Dua Pemboleh Ubah).
export const padDuaPembolehUbahContent = {
  problem: "Diberi persamaan 3x + y = 20. Cari nilai y apabila x = 4",
  steps: [
    {
      prompt: "Langkah 1: Gantikan x = 4: 3(4) + y = 20. Berapakah 3 × 4?",
      choices: ["12", "7", "16", "20"],
      answer: "12",
      hint: "3 × 4 = 12.",
    },
    {
      prompt: "Langkah 2: 12 + y = 20. Jadi y = 20 − 12 = ?",
      choices: ["8", "32", "12", "20"],
      answer: "8",
      hint: "20 − 12 = 8.",
    },
    {
      prompt: "Langkah 3: Jadi nilai y ialah? (taip nombor sahaja)",
      type: "input",
      answer: "8",
      hint: "3(4) + y = 20 → 12 + y = 20 → y = 8.",
    },
  ],
};
