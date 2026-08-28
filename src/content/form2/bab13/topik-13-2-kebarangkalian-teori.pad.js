// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 13, Topik 13.2
// (Kebarangkalian Teori yang Melibatkan Kesudahan Sama Boleh Jadi).
export const padKebarangkalianTeoriContent = {
  problem: "Sekeping dadu bersisi 6 dibaling sekali. Cari kebarangkalian mendapat nombor lebih besar daripada 4.",
  steps: [
    {
      prompt: "Langkah 1: Berapakah n(S)?",
      type: "input",
      answer: "6",
      hint: "Ruang sampel dadu = {1,2,3,4,5,6}, jadi n(S) = 6.",
    },
    {
      prompt: "Langkah 2: Peristiwa A = nombor lebih besar drpd 4 = {5,6}. Berapakah n(A)?",
      type: "input",
      answer: "2",
      hint: "{5, 6} ada 2 unsur.",
    },
    {
      prompt: "Langkah 3: Kira P(A) = n(A) ÷ n(S) = 2 ÷ 6 (bundarkan kepada 2 tempat perpuluhan).",
      type: "input",
      answer: "0.33",
      hint: "2 ÷ 6 = 0.333... ≈ 0.33.",
    },
  ],
};
