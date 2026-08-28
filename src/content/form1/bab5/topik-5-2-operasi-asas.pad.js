// Kandungan Latihan Berpandu (Pad) — Bab 5, Topik 5.2 (Operasi Asas Ungkapan Algebra).
export const padOperasiAsasContent = {
  problem: "Permudahkan 9n − 4n",
  steps: [
    {
      prompt: "Langkah 1: 9n dan 4n ada pemboleh ubah yang sama iaitu?",
      choices: ["n", "9", "4", "9n"],
      answer: "n",
      hint: "Kedua-dua sebutan ada pemboleh ubah n.",
    },
    {
      prompt: "Langkah 2: Tolak pekali: 9 − 4 = ?",
      choices: ["5", "13", "4", "9"],
      answer: "5",
      hint: "9 − 4 = 5.",
    },
    {
      prompt: "Langkah 3: Jadi 9n − 4n = ? Taip dalam bentuk 'an' (cth: 5n)",
      type: "input",
      answer: "5n",
      hint: "9 − 4 = 5, jadi 9n − 4n = 5n.",
    },
  ],
};
