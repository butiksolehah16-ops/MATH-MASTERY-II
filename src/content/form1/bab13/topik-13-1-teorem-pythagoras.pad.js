// Kandungan Latihan Berpandu (Pad) — Bab 13, Topik 13.1 (Teorem Pythagoras).
export const padTeoremPythagorasContent = {
  problem: "Segi tiga bersudut tegak dengan sisi pendek 9cm dan 12cm. Cari hipotenus",
  steps: [
    {
      prompt: "Langkah 1: c² = 9² + 12² = ?",
      choices: ["225", "81", "144", "21"],
      answer: "225",
      hint: "9² + 12² = 81 + 144 = 225.",
    },
    {
      prompt: "Langkah 2: c = √225 = ?",
      choices: ["15", "25", "12", "20"],
      answer: "15",
      hint: "√225 = 15.",
    },
    {
      prompt: "Langkah 3: Jadi hipotenus ialah? (taip nombor sahaja)",
      type: "input",
      answer: "15",
      hint: "Hipotenus = 15cm.",
    },
  ],
};
