// Kandungan Nota Interaktif — Bab 8, Topik 8.2 (Sudut yang Berkaitan dengan
// Garis Bersilang). Fokus: sudut bertentang bucu (sama besar), sudut
// bersebelahan (bersuplemen, jumlah 180°).
export const notaGarisBersilangContent = {
  visualType: "angle-sum",

  hook: {
    mentorLine: "Kita dah faham sudut asas — sekarang jom lihat apa jadi bila DUA GARIS bersilang!",
    title: "Persimpangan Jalan",
    body:
      "Dua jalan bersilang membentuk 4 sudut di persimpangan. Salah satu sudut ialah 70°. Sudut manakah " +
      "yang SAMA (sudut bertentang bucu) dan sudut manakah yang BERBEZA?",
  },

  exploration: {
    mentorLine: "Jom kita bina salah satu daripada 4 sudut di persimpangan tu.",
    prompt: "Klik \"Tambah 10°\" untuk bina sudut pertama sehingga 70°.",
    totalDegrees: 70,
    stepDegrees: 10,
  },

  insight: {
    mentorLine: "Perasan bila dua garis bersilang, berapa banyak sudut yang terbentuk?",
    title: "Sudut Bertentang Bucu Sentiasa Sama!",
    body:
      "Kau baru bina sudut 70°. Bila DUA GARIS BERSILANG, ia membentuk 4 sudut. Sudut yang BERTENTANGAN " +
      "(di seberang persimpangan) — dipanggil SUDUT BERTENTANG BUCU (vertically opposite angles) — SENTIASA " +
      "SAMA BESAR. Jadi sudut bertentangan dengan 70° tu juga 70°. Manakala dua sudut BERSEBELAHAN " +
      "(adjacent) pada garis yang sama akan berjumlah 180° (sebab mereka membentuk garis lurus): " +
      "180° − 70° = 110°.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Bertentang bucu = SAMA, Bersebelahan = 180°",
    body:
      "Bila dua garis lurus bersilang: SUDUT BERTENTANG BUCU adalah SAMA. SUDUT BERSEBELAHAN pada garis " +
      "yang sama adalah BERSUPLEMEN (jumlah = 180°). Ini bermakna daripada SATU sudut sahaja, kita boleh " +
      "cari SEMUA 4 sudut di persimpangan tu!",
  },

  example: {
    mentorLine: "Jom kita cari kesemua 4 sudut daripada satu sudut sahaja, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Dua garis bersilang membentuk sudut 55° pada satu bahagian. Cari ketiga-tiga sudut yang lain",
    steps: [
      "Sudut bertentang bucu dengan 55° ialah SAMA: 55°",
      "Sudut bersebelahan (bersuplemen): 180° − 55° = 125°",
      "Sudut bertentang bucu dengan 125° juga 125°. Jadi 4 sudut: 55°, 125°, 55°, 125°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dua garis bersilang membentuk sudut 40°. Apakah sudut bertentang bucunya?",
    choices: ["40°", "140°", "50°", "320°"],
    answer: "40°",
    feedbackCorrect: "Tepat! Sudut bertentang bucu sentiasa SAMA besar.",
    feedbackIncorrect: "Belum tepat. Sudut bertentang bucu SAMA besar dengan sudut asal.",
  },
};
