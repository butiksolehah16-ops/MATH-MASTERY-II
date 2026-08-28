// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 2, Topik 2.2 (Pemfaktoran).
export const padPemfaktoranContent = {
  problem: "Faktorkan 18x + 24 sepenuhnya",
  steps: [
    {
      prompt: "Langkah 1: Cari Faktor Sepunya Terbesar (FSTB) bagi 18 dan 24.",
      choices: ["6", "3", "9", "12"],
      answer: "6",
      hint: "18 = 6 × 3, dan 24 = 6 × 4. Tiada nombor lebih besar daripada 6 yang boleh bahagi tepat kedua-duanya.",
    },
    {
      prompt: "Langkah 2: Bahagikan 18x dengan FSTB (6). Apakah pekali x hasilnya (nombor sahaja)?",
      type: "input",
      answer: "3",
      hint: "18 ÷ 6 = 3, jadi sebutan itu menjadi 3x.",
    },
    {
      prompt: "Langkah 3: Bahagikan 24 dengan FSTB (6). Apakah hasilnya?",
      type: "input",
      answer: "4",
      hint: "24 ÷ 6 = 4.",
    },
    {
      prompt: "Langkah 4: Tulis bentuk faktor penuh bagi 18x + 24.",
      choices: ["6(3x + 4)", "3(6x + 8)", "4(3x + 6)", "6(3x + 8)"],
      answer: "6(3x + 4)",
      hint: "FSTB(6) darab isi kurungan yang kamu dapat daripada Langkah 2 dan 3: 6(3x + 4).",
    },
  ],
};
