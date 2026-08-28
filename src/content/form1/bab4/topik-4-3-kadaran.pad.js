// Kandungan Latihan Berpandu (Pad) — Bab 4, Topik 4.3 (Kadaran).
export const padKadaranContent = {
  problem: "Kadaran 5:8 = x:24. Cari nilai x",
  steps: [
    {
      prompt: "Langkah 1: Guna pendaraban silang: 5 × 24 = 8 × x. Berapakah 5 × 24?",
      choices: ["120", "110", "130", "100"],
      answer: "120",
      hint: "5 × 24 = 120.",
    },
    {
      prompt: "Langkah 2: 8 × x = 120. Jadi x = 120 ÷ 8 = ?",
      choices: ["15", "12", "16", "10"],
      answer: "15",
      hint: "120 ÷ 8 = 15.",
    },
    {
      prompt: "Langkah 3: Jadi nilai x ialah? (taip nombor sahaja)",
      type: "input",
      answer: "15",
      hint: "120 ÷ 8 = 15.",
    },
  ],
};
