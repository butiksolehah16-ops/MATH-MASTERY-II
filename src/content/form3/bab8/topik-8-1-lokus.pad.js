// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 8, Topik 8.1 (Lokus).
export const padLokusContent = {
  problem: "Seekor kuda diikat pada pancang dengan tali sepanjang 7 meter. Kenal pasti bentuk lokus dan luas kawasan yang boleh diragut kuda itu.",
  steps: [
    {
      prompt: "Langkah 1: Apakah SYARAT yang mengawal kedudukan kuda (bila tali tegang)?",
      choices: ["Jarak tetap daripada pancang", "Sudut tetap daripada pancang", "Sama jarak daripada dua pancang", "Tiada syarat"],
      answer: "Jarak tetap daripada pancang",
      hint: "Tali tegang bermaksud jarak kuda daripada pancang sentiasa 7 m — jarak TETAP daripada SATU titik.",
    },
    {
      prompt: "Langkah 2: Syarat 'jarak tetap daripada satu titik' membentuk lokus berbentuk apa?",
      choices: ["Bulatan", "Garis lurus", "Segi tiga", "Segi empat"],
      answer: "Bulatan",
      hint: "Jarak tetap daripada SATU titik SENTIASA membentuk bulatan.",
    },
    {
      prompt: "Langkah 3: Luas kawasan (πr², guna π ≈ 3.14, r = 7 m) = 3.14 × 7 × 7. Taip jawapan kamu (bundarkan kepada nombor bulat, m²).",
      type: "input",
      answer: "154",
      hint: "3.14 × 49 = 153.86, dibundarkan kepada 154 m².",
    },
  ],
};
