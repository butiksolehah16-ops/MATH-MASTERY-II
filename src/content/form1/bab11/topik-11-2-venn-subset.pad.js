// Kandungan Latihan Berpandu (Pad) — Bab 11, Topik 11.2 (Gambar Rajah Venn,
// Set Semesta, Pelengkap bagi Suatu Set dan Subset).
export const padVennSubsetContent = {
  problem: "ξ = {1, 2, 3, 4, 5, 6, 7, 8}, D = {1, 3, 5, 7}. Cari D′ dan n(D′)",
  steps: [
    {
      prompt: "Langkah 1: D′ ialah unsur dalam ξ yang bukan ahli D. Senaraikan unsur tersebut.",
      choices: ["{2, 4, 6, 8}", "{1, 3, 5, 7}", "{1, 2, 3, 4, 5, 6, 7, 8}", "{ }"],
      answer: "{2, 4, 6, 8}",
      hint: "Unsur ξ yang bukan 1, 3, 5, 7 ialah 2, 4, 6, 8.",
    },
    {
      prompt: "Langkah 2: Kira bilangan unsur dalam D′: 2, 4, 6, 8 = ?",
      choices: ["3", "4", "5", "8"],
      answer: "4",
      hint: "4 unsur: 2, 4, 6, 8.",
    },
    {
      prompt: "Langkah 3: Jadi n(D′) = ? (taip nombor sahaja)",
      type: "input",
      answer: "4",
      hint: "n(D′) = 4.",
    },
  ],
};
