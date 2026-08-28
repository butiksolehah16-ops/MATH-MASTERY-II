// Kandungan Latihan Berpandu (Pad) — Bab 5, Topik 5.1 (Pemboleh Ubah dan Ungkapan Algebra).
export const padPembolehUbahContent = {
  problem: "Kenal pasti bahagian dalam ungkapan 7m + 4",
  steps: [
    {
      prompt: "Langkah 1: Apakah pekali bagi m?",
      choices: ["7", "4", "m", "11"],
      answer: "7",
      hint: "Pekali ialah nombor yang mendarab pemboleh ubah m, iaitu 7.",
    },
    {
      prompt: "Langkah 2: Apakah pemalar dalam ungkapan ini?",
      choices: ["7", "4", "m", "7m"],
      answer: "4",
      hint: "Pemalar ialah nilai tetap tanpa pemboleh ubah, iaitu 4.",
    },
    {
      prompt: "Langkah 3: Berapakah nilai ungkapan 7m + 4 jika m = 2? (taip nombor sahaja)",
      type: "input",
      answer: "18",
      hint: "7 × 2 + 4 = 14 + 4 = 18.",
    },
  ],
};
