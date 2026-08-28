// Kandungan Latihan Berpandu (Pad) — Bab 3, Topik 3.2 (Kuasa Tiga dan Punca Kuasa Tiga).
export const padKuasaTigaContent = {
  problem: "Cari ∛125",
  steps: [
    {
      prompt: "Langkah 1: Cuba nombor 5. Berapakah 5 × 5?",
      choices: ["25", "20", "15", "10"],
      answer: "25",
      hint: "5 × 5 = 25.",
    },
    {
      prompt: "Langkah 2: Sambung — 25 × 5 (iaitu 5 × 5 × 5) = ?",
      choices: ["125", "100", "130", "150"],
      answer: "125",
      hint: "25 × 5 = 125.",
    },
    {
      prompt: "Langkah 3: Sebab 5 × 5 × 5 = 125, jadi ∛125 = ? Taip jawapan kamu.",
      type: "input",
      answer: "5",
      hint: "5 × 5 × 5 = 125, maka ∛125 = 5.",
    },
  ],
};
