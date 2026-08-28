// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 12, Topik 12.1 (Sukatan
// Kecenderungan Memusat).
export const padSukatanKecenderunganMemusatContent = {
  problem: "Set data: 5, 7, 7, 9, 12.",
  steps: [
    {
      prompt: "Langkah 1: Data sudah tersusun menaik. Bilangan data ganjil (5), jadi apakah nilai TENGAH (median)?",
      type: "input",
      answer: "7",
      hint: "5, 7, [7], 9, 12 — nilai ke-3 dari 5 data ialah 7.",
    },
    {
      prompt: "Langkah 2: Apakah MOD (nilai paling kerap) bagi set data ini?",
      type: "input",
      answer: "7",
      hint: "7 muncul 2 kali — lebih kerap daripada yang lain.",
    },
    {
      prompt: "Langkah 3: Jumlah semua nilai = 5+7+7+9+12 = 40. Kira MIN = 40 ÷ 5.",
      type: "input",
      answer: "8",
      hint: "40 ÷ 5 = 8.",
    },
  ],
};
