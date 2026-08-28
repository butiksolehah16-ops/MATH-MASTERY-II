// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 3, Topik 3.1 (Rumus Algebra).
export const padRumusAlgebraContent = {
  problem: "Rumus kos penghantaran ialah K = 5b + 20, dengan b ialah bilangan bungkusan. Jika K = 60, cari nilai b.",
  steps: [
    {
      prompt: "Langkah 1: Gantikan K = 60 ke dalam rumus. Persamaan yang terhasil ialah?",
      choices: ["60 = 5b + 20", "5b = 60 + 20", "60 = 5 + 20b", "b = 5(60) + 20"],
      answer: "60 = 5b + 20",
      hint: "Gantikan terus nilai K = 60 ke tempat K dalam rumus K = 5b + 20.",
    },
    {
      prompt: "Langkah 2: Asingkan sebutan 5b dengan menolak 20 dari kedua-dua belah. Apakah persamaan yang terhasil?",
      choices: ["5b = 40", "5b = 80", "5b = 60", "b = 40"],
      answer: "5b = 40",
      hint: "60 − 20 = 40, jadi 5b = 40.",
    },
    {
      prompt: "Langkah 3: Bahagikan kedua-dua belah dengan 5 untuk cari b. Apakah nilai b?",
      type: "input",
      answer: "8",
      hint: "40 ÷ 5 = 8.",
    },
  ],
};
