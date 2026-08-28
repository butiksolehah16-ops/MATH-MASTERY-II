// Kandungan Latihan Berpandu (Pad) — Bab 10, Topik 10.3 (Perkaitan antara
// Perimeter dan Luas).
export const padPerkaitanContent = {
  problem:
    "Dua segiempat tepat ada perimeter 18cm. R: panjang 6cm lebar 3cm. S: panjang 5cm lebar 4cm. Cari luas " +
    "R dan luas S, kemudian bandingkan",
  steps: [
    {
      prompt: "Langkah 1: Luas R = 6 × 3 = ?",
      choices: ["18", "9", "24", "20"],
      answer: "18",
      hint: "6 × 3 = 18.",
    },
    {
      prompt: "Langkah 2: Luas S = 5 × 4 = ?",
      choices: ["9", "18", "20", "24"],
      answer: "20",
      hint: "5 × 4 = 20.",
    },
    {
      prompt: "Langkah 3: Luas manakah lebih besar? Taip nombor luas yang lebih besar sahaja.",
      type: "input",
      answer: "20",
      hint: "Luas R = 18cm², Luas S = 20cm². S lebih besar.",
    },
  ],
};
