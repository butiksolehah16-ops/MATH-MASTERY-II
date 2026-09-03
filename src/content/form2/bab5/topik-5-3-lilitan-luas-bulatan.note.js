// Kandungan Nota Interaktif — Form 2, Bab 5, Topik 5.3 (Lilitan dan Luas
// Bulatan). DSKP SK 5.3: menentukan hubungan antara lilitan dan diameter,
// menerbitkan rumus lilitan dan luas bulatan; menentukan lilitan, luas,
// panjang lengkok, luas sektor; menyelesaikan masalah.
export const notaLilitanLuasBulatanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita cari PANJANG sekeliling bulatan (lilitan) dan LUAS kawasan di dalamnya.",
    title: "Landasan Trek Bulatan Stadium",
    body:
      "Pengurus sebuah stadium nak tahu DUA perkara: berapa PANJANG landasan lumba yang berbentuk bulatan " +
      "(supaya boleh cetak jarak lumbaan dengan tepat), dan berapa LUAS padang bulatan di tengah (untuk " +
      "kira jumlah rumput sintetik diperlukan). Macam mana nak kira kedua-duanya hanya dengan tahu jejari " +
      "bulatan tersebut?",
  },

  exploration: {
    mentorLine: "Jom kita dedah lilitan beberapa bulatan dengan diameter berbeza, dan cari corak yang tersembunyi.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedahkan lilitan bulatan dengan diameter 2 cm, 4 cm, 6 cm, " +
      "dan 8 cm. Cuba bahagikan setiap lilitan dengan diameternya — apa yang kamu perasan?",
    categories: ["d=2cm", "d=4cm", "d=6cm", "d=8cm"],
    values: [6.28, 12.56, 18.84, 25.12],
  },

  insight: {
    mentorLine: "Cuba bahagikan setiap lilitan dengan diameternya — apa jawapannya setiap kali?",
    title: "Lilitan ÷ Diameter SENTIASA ≈ 3.14 (iaitu π)",
    bullets: [
      "6.28 ÷ 2 = 3.14, 12.56 ÷ 4 = 3.14, 18.84 ÷ 6 = 3.14, 25.12 ÷ 8 = 3.14 — SETIAP kali, nisbah lilitan kepada diameter memberi jawapan yang SAMA, iaitu lebih kurang 3.14!",
      "Nombor istimewa ni dipanggil π (\"pi\"), dan ia SENTIASA sama tak kira besar mana bulatan tersebut.",
      "Sebab Lilitan ÷ Diameter = π, kita boleh tulis semula sebagai Lilitan = π × Diameter.",
    ],
  },

  formula: {
    mentorLine: "Ini dua formula rasmi bulatan — simpan dalam kepala kamu, ia amat penting.",
    title: "Formula Lilitan dan Luas",
    expression: "Lilitan (C) = πd = 2πr,   Luas (A) = πr²",
    bullets: [
      "LILITAN bulatan = πd, atau (sebab d = 2r) boleh ditulis 2πr. LUAS bulatan = πr².",
      "Guna π ≈ 3.14 atau π ≈ 22/7 (pilih yang buat pengiraan lebih mudah — 22/7 sesuai bila jejari boleh dibahagi tepat dengan 7).",
      "Untuk SEBAHAGIAN bulatan (bukan bulatan penuh): PANJANG LENGKOK = (θ ÷ 360°) × 2πr, dan LUAS SEKTOR = (θ ÷ 360°) × πr², dengan θ ialah sudut sektor/lengkok tersebut di pusat.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari lilitan dan luas, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah bulatan mempunyai jejari 7 cm. Guna π = 22/7, cari lilitan dan luas bulatan.",
    steps: [
      "Lilitan = 2πr = 2 × 22/7 × 7 = 44 cm",
      "Luas = πr² = 22/7 × 7 × 7",
      "= 22 × 7 = 154 cm²",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah bulatan berjejari 14 cm. Guna π = 22/7, cari lilitannya.",
    choices: ["88", "44", "154", "308"],
    answer: "88",
    feedbackCorrect: "Tepat! Lilitan = 2 × 22/7 × 14 = 88 cm.",
    feedbackIncorrect: "Belum tepat. Guna Lilitan = 2πr = 2 × 22/7 × 14.",
  },
};
