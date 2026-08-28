// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 1, Topik 1.2 (Hukum Indeks).
export const padHukumIndeksContent = {
  problem: "Permudahkan (2³)² ÷ 2⁴, kemudian nilaikan hasilnya.",
  steps: [
    {
      prompt: "Langkah 1: Permudahkan (2³)² dahulu menggunakan Hukum 3 (kuasa bagi kuasa).",
      choices: ["2⁶", "2⁵", "2⁹", "2¹"],
      answer: "2⁶",
      hint: "(aᵐ)ⁿ = aᵐˣⁿ, jadi (2³)² = 2³ˣ² = 2⁶.",
    },
    {
      prompt: "Langkah 2: Sekarang permudahkan 2⁶ ÷ 2⁴ menggunakan Hukum 2 (pembahagian).",
      choices: ["2²", "2¹⁰", "2¹·⁵", "2⁻²"],
      answer: "2²",
      hint: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ, jadi 2⁶ ÷ 2⁴ = 2⁶⁻⁴ = 2².",
    },
    {
      prompt: "Langkah 3: Nilaikan 2². Taip jawapan kamu.",
      type: "input",
      answer: "4",
      hint: "2² = 2 × 2 = 4.",
    },
  ],
};
