// Kandungan Latihan Berpandu (Pad) — Bab 2, Topik 2.1 (Faktor, Faktor Perdana dan FSTB).
export const padFaktorContent = {
  problem: "Cari FSTB bagi 8 dan 12",
  steps: [
    {
      prompt: "Langkah 1: Senaraikan semua faktor bagi 8.",
      choices: ["1, 2, 4, 8", "1, 2, 3, 8", "2, 4, 6, 8", "1, 4, 8, 16"],
      answer: "1, 2, 4, 8",
      hint: "Cari semua nombor yang boleh bahagi 8 tanpa baki: 1, 2, 4, 8.",
    },
    {
      prompt: "Langkah 2: Senaraikan semua faktor bagi 12.",
      choices: ["1, 2, 3, 4, 6, 12", "1, 2, 4, 6, 8, 12", "1, 3, 4, 6, 12", "2, 3, 4, 6, 12"],
      answer: "1, 2, 3, 4, 6, 12",
      hint: "Cari semua nombor yang boleh bahagi 12 tanpa baki: 1, 2, 3, 4, 6, 12.",
    },
    {
      prompt: "Langkah 3: Faktor sepunya PALING BESAR bagi 8 dan 12 ialah? Taip jawapan kamu.",
      type: "input",
      answer: "4",
      hint: "Faktor sepunya bagi 8 dan 12: 1, 2, 4. Yang paling besar ialah 4.",
    },
  ],
};
