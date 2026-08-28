// Kandungan Nota Interaktif — Bab 10, Topik 10.2 (Luas Segi Tiga, Segiempat
// Selari, Layang-Layang dan Trapezium).
// Fokus: luas sebagai bilangan petak unit persegi, formula ikut bentuk.
export const notaLuasContent = {
  visualType: "square-grid",

  hook: {
    mentorLine: "Kita dah faham perimeter — sekarang jom fokus pada LUAS.",
    title: "Kolam Renang",
    body:
      "Sebuah kolam renang berbentuk segiempat tepat 6m panjang dan 4m lebar. Berapa banyak jubin 1m × 1m " +
      "diperlukan untuk menutup dasar kolam itu sepenuhnya?",
  },

  exploration: {
    mentorLine: "Jom kita bina segiempat tepat 6 × 4 tu, baris demi baris.",
    prompt: "Klik \"Tambah baris\" sehingga bentuk membentuk segiempat tepat 6 lajur × 4 baris.",
    targetSide: 4,
    targetCols: 6,
  },

  insight: {
    mentorLine: "Perasan apa yang jumlah petak tu wakili?",
    title: "Luas = Bilangan Petak Unit Persegi!",
    body:
      "LUAS ialah bilangan petak unit persegi (cth 1m × 1m) yang menutupi bentuk itu sepenuhnya. Untuk " +
      "segiempat tepat: Luas = panjang × lebar. Bentuk LAIN seperti segi tiga, segiempat selari, " +
      "layang-layang, dan trapezium — formula luasnya SEMUA berasaskan luas segiempat tepat ini.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Segi Tiga = ½bh, Segiempat Selari = bh, Layang-Layang = ½d₁d₂, Trapezium = ½(a+b)h",
    body:
      "LUAS SEGIEMPAT TEPAT = panjang × lebar. LUAS SEGI TIGA = ½ × tapak × tinggi (separuh daripada " +
      "segiempat tepat sepadan). LUAS SEGIEMPAT SELARI = tapak × tinggi. LUAS LAYANG-LAYANG = ½ × pepenjuru1 " +
      "× pepenjuru2. LUAS TRAPEZIUM = ½ × (jumlah dua sisi selari) × tinggi.",
  },

  example: {
    mentorLine: "Jom kita cari luas segi tiga, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Segi tiga dengan tapak 10cm dan tinggi 6cm. Cari luasnya",
    steps: [
      "Luas = ½ × tapak × tinggi",
      "= ½ × 10 × 6",
      "= 30 cm²",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Segiempat selari dengan tapak 8cm dan tinggi 5cm. Cari luasnya.",
    choices: ["40cm²", "13cm²", "20cm²", "80cm²"],
    answer: "40cm²",
    feedbackCorrect: "Tepat! Luas segiempat selari = tapak × tinggi = 8 × 5 = 40cm².",
    feedbackIncorrect: "Belum tepat. Luas segiempat selari = tapak × tinggi: 8 × 5 = 40cm².",
  },
};
