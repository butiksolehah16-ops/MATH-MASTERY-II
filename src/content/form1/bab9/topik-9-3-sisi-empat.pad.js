// Kandungan Latihan Berpandu (Pad) — Bab 9, Topik 9.3 (Sifat Sisi Empat dan Sudutnya).
export const padSisiEmpatContent = {
  problem: "Tiga sudut sisi empat ialah 80°, 95°, dan 105°. Cari sudut keempat",
  steps: [
    {
      prompt: "Langkah 1: Jumlah sudut pedalaman sisi empat ialah?",
      choices: ["180°", "270°", "360°", "450°"],
      answer: "360°",
      hint: "Sisi empat = 2 segi tiga = 2 × 180° = 360°.",
    },
    {
      prompt: "Langkah 2: Jumlah tiga sudut yang diketahui: 80° + 95° + 105° = ?",
      choices: ["280", "270", "290", "260"],
      answer: "280",
      hint: "80 + 95 + 105 = 280.",
    },
    {
      prompt: "Langkah 3: Sudut keempat = 360° − 280° = ? (taip nombor sahaja)",
      type: "input",
      answer: "80",
      hint: "360° − 280° = 80°.",
    },
  ],
};
