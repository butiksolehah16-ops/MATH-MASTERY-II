// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 13, Topik 13.3
// (Kebarangkalian Peristiwa Pelengkap).
export const padPeristiwaPelengkapContent = {
  problem: "Kebarangkalian sebuah kereta rosak ialah 0.15.",
  steps: [
    {
      prompt: "Langkah 1: Apakah nilai P(A) + P(A′) untuk mana-mana peristiwa A?",
      type: "input",
      answer: "1",
      hint: "Hukum peristiwa pelengkap: P(A) + P(A′) = 1.",
    },
    {
      prompt: "Langkah 2: Kira P(A′) = 1 − 0.15.",
      type: "input",
      answer: "0.85",
      hint: "1 − 0.15 = 0.85.",
    },
    {
      prompt: "Langkah 3: Untuk peristiwa lain B, P(B) = 0.6. Apakah P(B′)?",
      type: "input",
      answer: "0.4",
      hint: "1 − 0.6 = 0.4.",
    },
  ],
};
