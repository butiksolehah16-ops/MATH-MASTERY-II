// Kandungan Nota Interaktif — Bab 10, Topik 10.1 (Perimeter).
// Fokus: definisi perimeter, formula segiempat tepat/sama, jumlah semua sisi.
export const notaPerimeterContent = {
  visualType: "perimeter-walk",

  hook: {
    mentorLine: "Bab baharu — kita ukur SEKELILING bentuk! Jom mula dengan situasi sebenar.",
    title: "Pagar Taman",
    body:
      "Sebuah taman berbentuk segiempat tepat dengan panjang 8m dan lebar 5m. Berapa panjang pagar yang " +
      "diperlukan untuk mengelilingi taman itu sepenuhnya?",
  },

  exploration: {
    mentorLine: "Jom kita 'berjalan' keliling taman tu, dedah setiap sisi satu demi satu.",
    prompt: "Klik \"Dedah sisi seterusnya\" untuk dedah dan jumlahkan keempat-empat sisi taman.",
    sideLengths: [8, 5, 8, 5],
    unit: "m",
  },

  insight: {
    mentorLine: "Perasan apa yang kau baru buat untuk cari jumlah keseluruhan?",
    title: "Perimeter = Jumlah SEMUA Sisi!",
    body:
      "PERIMETER ialah jumlah ukuran panjang SEMUA sisi sesuatu bentuk. Untuk segiempat tepat, ada 2 pasang " +
      "sisi yang sama panjang, jadi kita boleh guna jalan pintas: Perimeter = 2 × (panjang + lebar), bukannya " +
      "jumlahkan satu-satu.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Perimeter Segiempat Tepat = 2 × (panjang + lebar)",
    body:
      "PERIMETER SEGIEMPAT TEPAT = 2 × (panjang + lebar). PERIMETER SEGIEMPAT SAMA = 4 × sisi. Untuk bentuk " +
      "LAIN (segi tiga, poligon tak sekata, dan lain-lain), hanya JUMLAHKAN SEMUA sisi terus.",
  },

  example: {
    mentorLine: "Jom kita cari perimeter, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah padang berbentuk segiempat tepat dengan panjang 12m dan lebar 7m. Cari perimeternya",
    steps: [
      "Perimeter = 2 × (panjang + lebar)",
      "= 2 × (12 + 7)",
      "= 2 × 19 = 38m",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Segiempat sama dengan sisi 9cm. Cari perimeternya.",
    choices: ["36cm", "18cm", "81cm", "13cm"],
    answer: "36cm",
    feedbackCorrect: "Tepat! Perimeter segiempat sama = 4 × sisi = 4 × 9 = 36cm.",
    feedbackIncorrect: "Belum tepat. Perimeter segiempat sama = 4 × sisi: 4 × 9 = 36cm.",
  },
};
