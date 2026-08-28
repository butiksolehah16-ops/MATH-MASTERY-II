// Kandungan Latihan Berpandu (Pad) — Bab 3, Topik 3.1 (Kuasa Dua dan Punca Kuasa Dua).
export const padKuasaDuaContent = {
  problem: "Cari √64",
  steps: [
    {
      prompt:
        "Langkah 1: 64 ialah hasil darab sesuatu nombor dengan dirinya sendiri. Kita tahu 7 × 7 = 49 " +
        "(kurang drpd 64). Jadi nombor yang kita cari mesti...",
      choices: [
        "Lebih besar drpd 7",
        "Lebih kecil drpd 7",
        "Sama dengan 7",
        "Tak dapat ditentukan",
      ],
      answer: "Lebih besar drpd 7",
      hint: "49 masih kurang drpd 64, jadi kita perlukan nombor yang lebih besar drpd 7 untuk sampai 64.",
    },
    {
      prompt: "Langkah 2: Cuba 8. Berapakah 8 × 8?",
      choices: ["64", "56", "72", "16"],
      answer: "64",
      hint: "8 × 8 = 64. Tepat sekali!",
    },
    {
      prompt: "Langkah 3: Jadi √64 = ? Taip jawapan kamu.",
      type: "input",
      answer: "8",
      hint: "Sebab 8 × 8 = 64, maka √64 = 8.",
    },
  ],
};
