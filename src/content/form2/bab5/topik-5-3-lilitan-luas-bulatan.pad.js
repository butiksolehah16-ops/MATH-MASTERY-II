// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 5, Topik 5.3 (Lilitan dan
// Luas Bulatan).
export const padLilitanLuasBulatanContent = {
  problem: "Sebuah bulatan berjejari 21 cm. Guna π = 22/7, cari lilitan dan luasnya.",
  steps: [
    {
      prompt: "Langkah 1: Cari lilitan menggunakan Lilitan = 2πr. Apakah nilai lilitan (nombor sahaja, dalam cm)?",
      type: "input",
      answer: "132",
      hint: "2 × 22/7 × 21 = 132.",
    },
    {
      prompt: "Langkah 2: Cari luas menggunakan Luas = πr². Apakah nilai luas (nombor sahaja, dalam cm²)?",
      type: "input",
      answer: "1386",
      hint: "22/7 × 21 × 21 = 1386.",
    },
    {
      prompt:
        "Langkah 3: Jika jejari bulatan kedua ialah satu pertiga jejari bulatan pertama (21 ÷ 3 = 7 cm), " +
        "apakah lilitan bulatan kedua (guna π = 22/7)?",
      type: "input",
      answer: "44",
      hint: "2 × 22/7 × 7 = 44.",
    },
  ],
};
