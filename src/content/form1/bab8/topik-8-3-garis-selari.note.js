// Kandungan Nota Interaktif — Bab 8, Topik 8.3 (Sudut yang Berkaitan dengan
// Garis Selari dan Garis Rentas Lintang). Fokus: sudut sepadan (sama), sudut
// ikat silang (sama), sudut pedalaman (bersuplemen).
export const notaGarisSelariContent = {
  visualType: "angle-sum",

  hook: {
    mentorLine: "Kita dah faham garis bersilang — sekarang jom lihat garis SELARI pula!",
    title: "Landasan Kereta Api",
    body:
      "Dua garis SELARI (parallel) dipotong oleh satu garis rentas lintang (transversal), membentuk 8 " +
      "sudut kesemuanya. Salah satu sudut ialah 75°. Bagaimana kita boleh cari sudut-sudut yang lain TANPA " +
      "mengukur?",
  },

  exploration: {
    mentorLine: "Jom kita bina salah satu daripada 8 sudut yang terbentuk tu.",
    prompt: "Klik \"Tambah 15°\" untuk bina sudut pertama sehingga 75°.",
    totalDegrees: 75,
    stepDegrees: 15,
  },

  insight: {
    mentorLine: "Perasan berapa banyak sudut lain yang boleh kita cari daripada SATU sudut sahaja?",
    title: "Tiga Jenis Hubungan Sudut!",
    body:
      "Kau baru bina sudut 75°. Bila garis rentas lintang memotong DUA GARIS SELARI, ada TIGA jenis " +
      "hubungan sudut: SUDUT SEPADAN (corresponding, kedudukan sama pada setiap persilangan) — SAMA BESAR; " +
      "SUDUT IKAT SILANG (alternate, bersilang antara dua garis selari) — SAMA BESAR; SUDUT PEDALAMAN " +
      "(co-interior, sama sebelah antara dua garis selari) — BERJUMLAH 180°. Jadi banyak sudut lain " +
      "automatik SAMA dengan 75°, dan sudut pedalamannya ialah 180° − 75° = 105°.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Sepadan = Sama, Ikat Silang = Sama, Pedalaman = 180°",
    body:
      "GARIS SELARI + GARIS RENTAS LINTANG → 3 jenis hubungan: SUDUT SEPADAN (sama), SUDUT IKAT SILANG " +
      "(sama), SUDUT PEDALAMAN (jumlah 180°). Petua mudah: kedudukan SAMA bentuk (F, Z, C) pada gambar " +
      "rajah membantu kenal pasti jenis sudut.",
  },

  example: {
    mentorLine: "Jom kita cari sudut sepadan dan sudut pedalaman, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Garis rentas lintang memotong dua garis selari, membentuk sudut 62° pada satu titik persilangan. " +
      "Cari sudut sepadan dan sudut pedalaman",
    steps: [
      "Sudut sepadan (kedudukan sama pada persilangan lain) ialah SAMA: 62°",
      "Sudut pedalaman (sama sebelah, antara dua garis selari) berjumlah 180°",
      "Sudut pedalaman = 180° − 62° = 118°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sudut sepadan bagi 48° pada garis selari ialah?",
    choices: ["48°", "132°", "42°", "228°"],
    answer: "48°",
    feedbackCorrect: "Tepat! Sudut sepadan sentiasa SAMA besar.",
    feedbackIncorrect: "Belum tepat. Sudut sepadan SAMA besar dengan sudut asal.",
  },
};
