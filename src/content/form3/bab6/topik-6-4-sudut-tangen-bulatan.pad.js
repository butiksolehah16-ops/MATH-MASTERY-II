// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 6, Topik 6.4 (Sudut dan Tangen bagi Bulatan).
export const padSudutTangenBulatanContent = {
  problem: "Tangen TA bertemu perentas AB pada A dengan sudut TAB = 55°. C ialah titik pada tembereng selang-seli, dan ABCD ialah sisi empat kitaran. Cari ∠D (bertentangan ∠B, dengan ∠B = ∠ACB + 10°).",
  steps: [
    {
      prompt: "Langkah 1: Guna teorem sudut tembereng selang-seli untuk cari ∠ACB.",
      choices: ["55°", "35°", "110°", "125°"],
      answer: "55°",
      hint: "Sudut ACB = sudut TAB = 55° (teorem sudut tembereng selang-seli).",
    },
    {
      prompt: "Langkah 2: ∠B = ∠ACB + 10° = 55° + 10°. Apakah ∠B?",
      choices: ["65°", "45°", "55°", "75°"],
      answer: "65°",
      hint: "55° + 10° = 65°.",
    },
    {
      prompt: "Langkah 3: Dalam sisi empat kitaran, ∠D + ∠B = 180°. Cari ∠D. Taip jawapan kamu (nombor sahaja).",
      type: "input",
      answer: "115",
      hint: "∠D = 180° − 65° = 115°.",
    },
  ],
};
