// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 3, Topik 3.2 (Pengurusan Kredit dan Hutang).
export const padKreditHutangContent = {
  problem: "Rina meminjam RM4800 pada faedah sama rata 5% setahun selama 2 tahun. Cari jumlah bayaran balik A dan ansuran bulanannya.",
  steps: [
    {
      prompt: "Langkah 1: Kirakan faedah, Prt = 4800 × 0.05 × 2.",
      choices: ["RM480", "RM240", "RM960", "RM24"],
      answer: "RM480",
      hint: "4800 × 0.05 = 240, kemudian 240 × 2 = 480.",
    },
    {
      prompt: "Langkah 2: Jumlah bayaran balik A = P + Prt = 4800 + 480.",
      choices: ["RM5280", "RM4320", "RM5760", "RM480"],
      answer: "RM5280",
      hint: "4800 + 480 = 5280.",
    },
    {
      prompt: "Langkah 3: Tempoh 2 tahun = 24 bulan. Ansuran bulanan = 5280 ÷ 24. Taip jawapan kamu (nombor sahaja).",
      type: "input",
      answer: "220",
      hint: "5280 ÷ 24 = 220.",
    },
  ],
};
