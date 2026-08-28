// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 1, Topik 1.1 (Tatatanda Indeks).
export const padTatatandaIndeksContent = {
  problem: "Tulis 9 × 9 × 9 × 9 × 9 dalam bentuk indeks, kemudian nilaikan 2⁵.",
  steps: [
    {
      prompt: "Langkah 1: Dalam 9 × 9 × 9 × 9 × 9, berapa kalikah 9 (asas) didarab dengan dirinya sendiri?",
      choices: ["5 kali", "9 kali", "4 kali", "45 kali"],
      answer: "5 kali",
      hint: "Kira berapa banyak nombor 9 yang ditulis dalam pendaraban itu.",
    },
    {
      prompt: "Langkah 2: Jadi apakah bentuk indeks bagi 9 × 9 × 9 × 9 × 9?",
      choices: ["9⁵", "5⁹", "9 × 5", "5⁵"],
      answer: "9⁵",
      hint: "Asas (nombor yang berulang) ialah 9, dan indeks (bilangan kali) ialah 5.",
    },
    {
      prompt: "Langkah 3: Nilaikan 2⁵ (2 × 2 × 2 × 2 × 2). Taip jawapan kamu.",
      type: "input",
      answer: "32",
      hint: "2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = 32.",
    },
  ],
};
