// Kandungan Nota Interaktif — Form 2, Bab 4, Topik 4.2 (Sudut Pedalaman dan
// Sudut Peluaran Poligon). DSKP SK 4.2: menerbitkan rumus hasil tambah sudut
// pedalaman poligon; membuat konjektur tentang hasil tambah sudut peluaran;
// menentukan nilai sudut dan bilangan sisi; menyelesaikan masalah.
export const notaSudutPoligonContent = {
  visualType: "polygon-diagonal",

  hook: {
    mentorLine: "Sekarang kita cari jumlah SEMUA sudut pedalaman poligon — tanpa ukur satu-satu!",
    title: "Kolam Renang Berbentuk Heksagon",
    body:
      "Seorang kontraktor nak bina kolam renang berbentuk heksagon (6 sisi). Untuk potong jubin bucu dengan " +
      "tepat, dia perlu tahu JUMLAH SEMUA sudut pedalaman heksagon tersebut. Boleh ke kita cari jumlah ni " +
      "tanpa mengukur setiap sudut satu-satu?",
  },

  exploration: {
    mentorLine: "Jom lukis pepenjuru dari SATU bucu heksagon — setiap pepenjuru membentuk SATU segi tiga baru.",
    prompt:
      "Klik \"Lukis pepenjuru\" untuk lukis pepenjuru dari satu bucu heksagon, dan perhatikan berapa banyak " +
      "SEGI TIGA yang terbentuk.",
    sides: 6,
  },

  insight: {
    mentorLine: "Perasan berapa banyak segi tiga yang terbentuk?",
    title: "Setiap Poligon Boleh 'Dipecah' Kepada Segi Tiga",
    body:
      "Kau baru lukis 3 pepenjuru daripada 1 bucu heksagon (6 sisi). Pepenjuru-pepenjuru ni membahagikan " +
      "heksagon kepada 4 SEGI TIGA (3 pepenjuru + 1 = 4 segi tiga). Sebab setiap segi tiga ada jumlah sudut " +
      "180° (kau dah belajar ni dalam Tingkatan 1), JUMLAH SEMUA sudut pedalaman heksagon = 4 × 180° = 720°. " +
      "Secara am, poligon n sisi boleh dibahagikan kepada (n − 2) segi tiga daripada satu bucu.",
  },

  formula: {
    mentorLine: "Ini dua formula rasmi sudut poligon — simpan dalam kepala kamu.",
    title: "Formula Sudut Poligon",
    expression: "Jumlah Sudut Pedalaman = (n − 2) × 180°",
    body:
      "JUMLAH SUDUT PEDALAMAN poligon n sisi = (n − 2) × 180° (n ialah bilangan sisi). Bagi POLIGON SEKATA, " +
      "setiap sudut pedalaman = jumlah ini ÷ n.\n\n" +
      "JUMLAH SUDUT PELUARAN (exterior angle) bagi MANA-MANA poligon cembung (convex) — TAK KIRA bilangan " +
      "sisinya — SENTIASA 360°. Ini sebab bila kamu berjalan mengelilingi sempadan poligon sekali penuh, " +
      "jumlah kesemua \"pusingan kecil\" pada setiap bucu (sudut peluaran) menyamai SATU PUSINGAN PENUH = " +
      "360°. Bagi poligon sekata, setiap sudut peluaran = 360° ÷ n.",
  },

  example: {
    mentorLine: "Jom kita cari jumlah sudut pedalaman, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah poligon mempunyai 9 sisi (nonagon). Cari jumlah sudut pedalamannya",
    steps: [
      "Kenal pasti n = 9",
      "Gantikan ke dalam formula: Jumlah = (n − 2) × 180° = (9 − 2) × 180°",
      "= 7 × 180° = 1260°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Cari jumlah sudut pedalaman bagi poligon 10 sisi (dekagon).",
    choices: ["1440°", "1800°", "1260°", "1620°"],
    answer: "1440°",
    feedbackCorrect: "Tepat! (10 − 2) × 180° = 8 × 180° = 1440°.",
    feedbackIncorrect: "Belum tepat. Guna formula (n − 2) × 180°: (10 − 2) × 180° = 8 × 180°.",
  },
};
