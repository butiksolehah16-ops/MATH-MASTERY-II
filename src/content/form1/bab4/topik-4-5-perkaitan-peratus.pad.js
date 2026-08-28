// Kandungan Latihan Berpandu (Pad) — Bab 4, Topik 4.5 (Perkaitan dengan Peratusan, Pecahan dan Perpuluhan).
export const padPerkaitanPeratusContent = {
  problem: "Tukar nisbah 7:3 kepada peratus bagi bahagian PERTAMA berbanding jumlah",
  steps: [
    {
      prompt: "Langkah 1: Jumlah bahagian = 7 + 3 = ?",
      choices: ["10", "4", "21", "7"],
      answer: "10",
      hint: "7 + 3 = 10.",
    },
    {
      prompt: "Langkah 2: Pecahan bahagian pertama = 7/10. Tukar kepada peratus: 7/10 × 100% = ?",
      choices: ["70%", "7%", "17%", "710%"],
      answer: "70%",
      hint: "7/10 × 100% = 70%.",
    },
    {
      prompt: "Langkah 3: Jadi bahagian pertama ialah berapa peratus daripada jumlah? (taip nombor sahaja, cth: 50)",
      type: "input",
      answer: "70",
      hint: "7/10 × 100% = 70%.",
    },
  ],
};
