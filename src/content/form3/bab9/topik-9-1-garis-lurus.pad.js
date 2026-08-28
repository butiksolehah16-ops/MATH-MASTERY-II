// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 9, Topik 9.1 (Garis Lurus).
export const padGarisLurusContent = {
  problem: "Tukar persamaan 3x + 6y = 18 kepada bentuk y = mx + c, dan cari kecerunannya.",
  steps: [
    {
      prompt: "Langkah 1: Asingkan sebutan y — tolak 3x daripada kedua-dua belah: 6y = 18 − 3x.",
      choices: ["6y = 18 − 3x", "6y = 18 + 3x", "y = 18 − 3x", "6y = 3x − 18"],
      answer: "6y = 18 − 3x",
      hint: "3x + 6y = 18, tolak 3x kedua-dua belah: 6y = 18 − 3x.",
    },
    {
      prompt: "Langkah 2: Bahagikan KEDUA-DUA belah dengan 6. Apakah persamaan y = mx + c yang terhasil?",
      choices: ["y = −0.5x + 3", "y = −3x + 18", "y = 0.5x + 3", "y = −0.5x − 3"],
      answer: "y = −0.5x + 3",
      hint: "18 ÷ 6 = 3, dan 3x ÷ 6 = 0.5x, jadi y = 3 − 0.5x = −0.5x + 3.",
    },
    {
      prompt: "Langkah 3: Apakah nilai kecerunan m? Taip jawapan kamu (boleh negatif).",
      type: "input",
      answer: "-0.5",
      hint: "Daripada y = −0.5x + 3, kecerunan m = −0.5.",
    },
  ],
};
