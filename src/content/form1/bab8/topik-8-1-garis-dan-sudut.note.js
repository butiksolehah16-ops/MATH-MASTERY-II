// Kandungan Nota Interaktif — Bab 8, Topik 8.1 (Garis dan Sudut).
// Fokus: sudut pada garis lurus (180°), sudut pada pusat/pusingan penuh
// (360°), sudut refleks, sudut berkomplemen dan bersuplemen.
export const notaGarisDanSudutContent = {
  visualType: "angle-sum",

  hook: {
    mentorLine: "Bab baharu — kita masuk dunia GEOMETRI! Jom mula dengan situasi sebenar.",
    title: "Farah Berpusing",
    body:
      "Farah sedang berdiri menghadap ke hadapan (0°). Dia berpusing ke kanan sebanyak beberapa darjah " +
      "sehingga dia menghadap TEPAT ke belakang — satu GARIS LURUS. Berapa darjahkah dia berpusing?",
  },

  exploration: {
    mentorLine: "Jom kita bina sudut tu sedikit demi sedikit sehingga jejari tepat bertentangan dengan garis asal.",
    prompt: "Klik \"Tambah 45°\" sehingga sudut mencapai 180° (garis lurus).",
    totalDegrees: 180,
    stepDegrees: 45,
  },

  insight: {
    mentorLine: "Perasan bentuk yang terjadi bila sudut sampai 180°?",
    title: "180° = Garis Lurus!",
    body:
      "Kau baru bina sudut sehingga 180° — bila jejari tu tepat BERTENTANGAN dengan garis asal, ia membentuk " +
      "SATU GARIS LURUS. Ini bermakna JUMLAH sudut pada satu garis lurus SENTIASA 180°. Farah berpusing " +
      "180° untuk menghadap tepat ke belakang.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Garis lurus = 180°, Pusingan penuh = 360°",
    body:
      "SUDUT PADA GARIS LURUS = 180°. SUDUT PADA PUSAT (satu pusingan penuh) = 360°. SUDUT REFLEKS ialah " +
      "sudut yang LEBIH BESAR daripada 180° tetapi KURANG daripada 360°. SUDUT BERKOMPLEMEN: dua sudut yang " +
      "jumlahnya 90°. SUDUT BERSUPLEMEN: dua sudut yang jumlahnya 180°.",
  },

  example: {
    mentorLine: "Jom kita cari sudut yang tak diketahui, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Dua sudut pada satu garis lurus ialah 65° dan x°. Cari nilai x",
    steps: [
      "Sudut pada garis lurus jumlahnya 180°: 65° + x° = 180°",
      "x° = 180° − 65°",
      "x° = 115°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dua sudut berkomplemen ialah 35° dan y°. Cari nilai y.",
    choices: ["55°", "65°", "145°", "35°"],
    answer: "55°",
    feedbackCorrect: "Tepat! Sudut berkomplemen berjumlah 90°: y = 90° − 35° = 55°.",
    feedbackIncorrect: "Belum tepat. Sudut berkomplemen berjumlah 90° (bukan 180°).",
  },
};
