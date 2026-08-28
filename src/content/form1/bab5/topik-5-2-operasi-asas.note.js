// Kandungan Nota Interaktif — Bab 5, Topik 5.2 (Operasi Asas Ungkapan Algebra).
// Fokus: gabung sebutan serupa (tambah/tolak pekali, kekalkan pemboleh ubah),
// dan darab/bahagi sebutan tunggal dengan nombor.
export const notaOperasiAsasContent = {
  visualType: "like-terms",

  hook: {
    mentorLine: "Kita dah faham pemboleh ubah — sekarang jom belajar macam mana nak GABUNG ungkapan algebra.",
    title: "Strawberi Farah",
    body:
      "Farah ada 3x biji strawberi dalam bekas A dan 2x biji strawberi dalam bekas B (x mewakili bilangan " +
      "strawberi dalam SETIAP kumpulan kecil, sama untuk kedua-dua bekas). Berapakah JUMLAH strawberi " +
      "Farah, dalam bentuk ungkapan termudah?",
  },

  exploration: {
    mentorLine: "Jom kita gabungkan dua kumpulan strawberi tu — klik untuk lihat apa berlaku.",
    prompt: "Klik \"Gabungkan Sebutan Serupa\" untuk cantumkan 3x dan 2x.",
    termLabel: "x",
    countA: 3,
    countB: 2,
  },

  insight: {
    mentorLine: "Perasan macam mana dua kumpulan tu bergabung?",
    title: "3x + 2x = 5x — Sebutan Serupa!",
    body:
      "Kau baru gabungkan 3x + 2x = 5x. Sebab KEDUA-DUA sebutan ada pemboleh ubah yang SAMA (x), kita " +
      "boleh TAMBAH pekali mereka (3 + 2 = 5) dan kekalkan pemboleh ubah. Ini dipanggil SEBUTAN SERUPA " +
      "(like terms) — sebutan dengan pemboleh ubah yang SAMA boleh digabung macam ni. Farah ada 5x biji " +
      "strawberi kesemuanya.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "ax + bx = (a + b)x",
    body:
      "Untuk tambah/tolak sebutan serupa: tambah/tolak PEKALI sahaja, kekalkan pemboleh ubah. PENTING: " +
      "sebutan TAK SERUPA (unlike terms, cth. 3x dan 2y) TIDAK BOLEH digabung — kekal berasingan. Untuk " +
      "darab/bahagi sebutan tunggal dengan nombor: darab/bahagi PEKALI sahaja. Cth: 4x × 3 = 12x, dan " +
      "12x ÷ 4 = 3x.",
  },

  example: {
    mentorLine: "Jom kita permudahkan satu ungkapan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Permudahkan ungkapan 8y − 3y",
    steps: [
      "8y dan 3y ialah sebutan SERUPA (kedua-dua ada pemboleh ubah y)",
      "Tolak pekali: 8 − 3 = 5",
      "Jadi 8y − 3y = 5y",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Permudahkan 6m + 4m",
    choices: ["10m", "10", "2m", "24m"],
    answer: "10m",
    feedbackCorrect: "Tepat! 6 + 4 = 10, jadi 6m + 4m = 10m.",
    feedbackIncorrect: "Belum tepat. Tambah pekali sahaja (6 + 4), kekalkan pemboleh ubah m.",
  },
};
