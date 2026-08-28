// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 6, Topik 6.2 (Sisi Empat Kitaran).
export const padSisiEmpatKitaranContent = {
  problem: "ABCD ialah sisi empat kitaran dengan ∠B = 108° dan ∠A = 79°. Cari ∠D, dan sudut peluaran pada bucu D.",
  steps: [
    {
      prompt: "Langkah 1: ∠D bertentangan dengan sudut yang mana?",
      choices: ["∠B", "∠A", "∠C", "Tiada satu pun"],
      answer: "∠B",
      hint: "Dalam sisi empat ABCD, bucu bertentangan D ialah B (susunan A-B-C-D mengelilingi bulatan).",
    },
    {
      prompt: "Langkah 2: Cari ∠D menggunakan ∠D + ∠B = 180°.",
      choices: ["72°", "108°", "252°", "36°"],
      answer: "72°",
      hint: "∠D = 180° − 108° = 72°.",
    },
    {
      prompt: "Langkah 3: Sudut peluaran pada bucu D = sudut pedalaman bucu bertentangan (B) = 108°. Sahkan: apakah sudut peluaran pada D? Taip nombor sahaja.",
      type: "input",
      answer: "108",
      hint: "Sudut peluaran pada D sama dengan sudut pedalaman B = 108°.",
    },
  ],
};
