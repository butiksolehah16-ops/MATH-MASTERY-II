// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 3, Topik 3.1 (Simpanan dan Pelaburan).
export const padSimpananPelaburanContent = {
  problem: "Halim menyimpan RM4000 pada faedah mudah 3% setahun selama 5 tahun. Cari jumlah faedah, dan jumlah akhir dalam akaunnya.",
  steps: [
    {
      prompt: "Langkah 1: Guna I = Prt. Tukar kadar 3% kepada perpuluhan.",
      choices: ["0.03", "3", "0.3", "30"],
      answer: "0.03",
      hint: "3% = 3/100 = 0.03.",
    },
    {
      prompt: "Langkah 2: Kirakan faedah, I = 4000 × 0.03 × 5.",
      choices: ["RM600", "RM120", "RM4600", "RM60"],
      answer: "RM600",
      hint: "4000 × 0.03 = 120, kemudian 120 × 5 = 600.",
    },
    {
      prompt: "Langkah 3: Jumlah akhir = Prinsipal + Faedah = 4000 + 600. Taip jawapan kamu (nombor sahaja).",
      type: "input",
      answer: "4600",
      hint: "4000 + 600 = 4600.",
    },
  ],
};
