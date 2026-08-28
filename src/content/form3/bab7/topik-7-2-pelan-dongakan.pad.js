// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 7, Topik 7.2 (Pelan dan Dongakan).
export const padPelanDongakanContent = {
  problem: "Sebuah bangunan berbentuk kuboid tinggi dinding 6 m, dengan bumbung piramid setinggi 2 m di atasnya. Cari tinggi keseluruhan dongakan hadapan.",
  steps: [
    {
      prompt: "Langkah 1: Dongakan hadapan menunjukkan profil menegak KESELURUHAN objek. Apakah bahagian yang perlu digabungkan?",
      choices: ["Tinggi dinding + tinggi bumbung", "Panjang + lebar tapak", "Hanya tinggi dinding", "Hanya tinggi bumbung"],
      answer: "Tinggi dinding + tinggi bumbung",
      hint: "Dongakan hadapan tunjuk keseluruhan tinggi objek gabungan, dari tapak hingga puncak bumbung.",
    },
    {
      prompt: "Langkah 2: Tinggi dinding = 6 m, tinggi bumbung = 2 m. Apakah operasi yang betul?",
      choices: ["6 + 2", "6 × 2", "6 − 2", "6 ÷ 2"],
      answer: "6 + 2",
      hint: "Kedua-dua tinggi ditambah untuk dapat tinggi KESELURUHAN.",
    },
    {
      prompt: "Langkah 3: Kirakan 6 + 2. Taip jawapan kamu (m).",
      type: "input",
      answer: "8",
      hint: "6 + 2 = 8.",
    },
  ],
};
