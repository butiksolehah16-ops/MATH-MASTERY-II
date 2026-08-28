// Kandungan Latihan Berpandu (Pad) — Bab 2, Topik 2.2 (Gandaan dan GSTK).
export const padGandaanContent = {
  problem: "Cari GSTK bagi 6 dan 8",
  steps: [
    {
      prompt: "Langkah 1: Senaraikan beberapa gandaan bagi 6.",
      choices: ["6, 12, 18, 24", "6, 8, 10, 12", "3, 6, 9, 12", "6, 16, 26, 36"],
      answer: "6, 12, 18, 24",
      hint: "Gandaan 6 ialah 6×1, 6×2, 6×3, 6×4 = 6, 12, 18, 24.",
    },
    {
      prompt: "Langkah 2: Senaraikan beberapa gandaan bagi 8.",
      choices: ["8, 16, 24, 32", "8, 12, 16, 20", "4, 8, 12, 16", "8, 18, 28, 38"],
      answer: "8, 16, 24, 32",
      hint: "Gandaan 8 ialah 8×1, 8×2, 8×3, 8×4 = 8, 16, 24, 32.",
    },
    {
      prompt: "Langkah 3: Gandaan sepunya PALING KECIL bagi 6 dan 8 ialah? Taip jawapan kamu.",
      type: "input",
      answer: "24",
      hint: "Bandingkan kedua-dua senarai — 24 muncul dalam kedua-duanya, dan tiada nombor lebih kecil yang sepunya.",
    },
  ],
};
