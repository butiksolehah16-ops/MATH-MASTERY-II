// Kandungan Latihan Berpandu (Pad) — Bab 4, Topik 4.2 (Kadar).
export const padKadarContent = {
  problem: "Sebuah kereta bergerak 240 km dalam 4 jam pada kelajuan malar. Cari kadar (km/j)",
  steps: [
    {
      prompt: "Langkah 1: Kadar (km/j) = Jarak ÷ Masa. Jadi kita kira?",
      choices: ["240 ÷ 4", "240 × 4", "4 ÷ 240", "240 + 4"],
      answer: "240 ÷ 4",
      hint: "Kadar = Jarak ÷ Masa, jadi 240 ÷ 4.",
    },
    {
      prompt: "Langkah 2: 240 ÷ 4 = ?",
      choices: ["60", "50", "64", "40"],
      answer: "60",
      hint: "240 ÷ 4 = 60.",
    },
    {
      prompt: "Langkah 3: Jadi kadar kereta itu ialah berapa km/j? (taip nombor sahaja)",
      type: "input",
      answer: "60",
      hint: "240 ÷ 4 = 60 km/j.",
    },
  ],
};
