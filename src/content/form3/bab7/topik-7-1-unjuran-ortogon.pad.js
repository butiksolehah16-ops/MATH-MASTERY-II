// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 7, Topik 7.1 (Unjuran Ortogon).
export const padUnjuranOrtogonContent = {
  problem: "Sebuah kuboid berukuran panjang 10 cm, lebar 6 cm, tinggi 4 cm. Cari luas unjuran ortogon dari ATAS (nampak panjang × lebar).",
  steps: [
    {
      prompt: "Langkah 1: Pandangan dari ATAS nampak dimensi yang mana?",
      choices: ["Panjang dan lebar", "Panjang dan tinggi", "Lebar dan tinggi", "Ketiga-tiga dimensi"],
      answer: "Panjang dan lebar",
      hint: "Dari atas, kita pandang ke bawah — dimensi tinggi 'hilang' ke arah pandangan.",
    },
    {
      prompt: "Langkah 2: Jadi unjuran dari atas ialah segi empat tepat dengan dimensi apa?",
      choices: ["10 cm × 6 cm", "10 cm × 4 cm", "6 cm × 4 cm", "10 cm × 6 cm × 4 cm"],
      answer: "10 cm × 6 cm",
      hint: "Panjang = 10 cm, lebar = 6 cm.",
    },
    {
      prompt: "Langkah 3: Kirakan luas unjuran = 10 × 6. Taip jawapan kamu (cm²).",
      type: "input",
      answer: "60",
      hint: "10 × 6 = 60.",
    },
  ],
};
