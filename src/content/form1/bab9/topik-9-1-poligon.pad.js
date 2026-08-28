// Kandungan Latihan Berpandu (Pad) — Bab 9, Topik 9.1 (Poligon).
export const padPoligonContent = {
  problem: "Poligon mempunyai 8 sisi (oktagon). Cari bilangan pepenjuru dari SATU bucu",
  steps: [
    {
      prompt: "Langkah 1: Formula bilangan pepenjuru dari satu bucu ialah?",
      choices: ["n", "n + 3", "n − 3", "2n"],
      answer: "n − 3",
      hint: "Tolak diri sendiri dan 2 bucu jiran: n − 3.",
    },
    {
      prompt: "Langkah 2: n = 8. Maka 8 − 3 = ?",
      choices: ["5", "11", "3", "8"],
      answer: "5",
      hint: "8 − 3 = 5.",
    },
    {
      prompt: "Langkah 3: Jadi bilangan pepenjuru dari satu bucu ialah? (taip nombor sahaja)",
      type: "input",
      answer: "5",
      hint: "8 − 3 = 5.",
    },
  ],
};
