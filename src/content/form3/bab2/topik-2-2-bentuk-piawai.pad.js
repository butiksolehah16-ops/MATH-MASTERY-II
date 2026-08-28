// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 2, Topik 2.2 (Bentuk Piawai).
export const padBentukPiawaiContent = {
  problem: "Kirakan (6 × 10⁵) ÷ (3 × 10²), nyatakan jawapan dalam bentuk piawai.",
  steps: [
    {
      prompt: "Langkah 1: Bahagikan bahagian A dahulu: 6 ÷ 3.",
      choices: ["2", "3", "18", "0.5"],
      answer: "2",
      hint: "6 ÷ 3 = 2.",
    },
    {
      prompt: "Langkah 2: Guna hukum indeks untuk bahagi kuasa 10: 10⁵ ÷ 10².",
      choices: ["10³", "10⁷", "10²·⁵", "10⁻³"],
      answer: "10³",
      hint: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ, jadi 10⁵ ÷ 10² = 10⁵⁻² = 10³.",
    },
    {
      prompt: "Langkah 3: Jawapan akhir ialah 2 × 10ⁿ. Apakah nilai n? Taip nombor sahaja.",
      type: "input",
      answer: "3",
      hint: "Daripada Langkah 2, 10⁵ ÷ 10² = 10³, jadi n = 3.",
    },
  ],
};
