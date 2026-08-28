// Kandungan Nota Interaktif — Bab 6, Topik 6.1 (Persamaan Linear Dalam Satu
// Pemboleh Ubah). Fokus: selesaikan persamaan guna kaedah penimbang seimbang
// (buat operasi songsang yang SAMA pada kedua-dua belah).
export const notaSatuPembolehUbahContent = {
  visualType: "balance-scale",

  hook: {
    mentorLine: "Bab baharu — kita nak SELESAIKAN persamaan, bukan sekadar permudahkan ungkapan!",
    title: "Penimbang Kucing Aisyah",
    body:
      "Aisyah timbang kucingnya guna penimbang dua pinggan. Berat kucing (x) tambah 3kg pemberat berada " +
      "SEIMBANG dengan 8kg pemberat di sebelah lagi (x + 3 = 8). Berapakah berat sebenar kucing tu?",
  },

  exploration: {
    mentorLine: "Untuk cari x, kita perlu asingkan x seorang diri — tapi penimbang MESTI kekal seimbang!",
    prompt: "Klik \"Buang 3 dari kedua-dua belah\" untuk kekalkan penimbang seimbang sambil asingkan x.",
    variableLabel: "x",
    coefficient: 1,
    leftConstant: 3,
    rightValue: 8,
    operation: "subtract",
    operand: 3,
  },

  insight: {
    mentorLine: "Perasan penimbang tu kekal seimbang?",
    title: "Buat Operasi SAMA Pada Kedua-Dua Belah!",
    body:
      "Kau baru buang 3 unit dari KEDUA-DUA belah penimbang — dan ia KEKAL SEIMBANG! Ini prinsip PENTING " +
      "dalam selesaikan persamaan: apa jua yang kita buat pada SATU belah, kita MESTI buat pada belah yang " +
      "SATU LAGI supaya persamaan kekal BENAR. Berat kucing Aisyah ialah x = 5kg.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Tambah ↔ Tolak, Darab ↔ Bahagi (operasi songsang)",
    body:
      "Untuk selesaikan persamaan linear satu pemboleh ubah: guna OPERASI SONGSANG (inverse operation) " +
      "pada KEDUA-DUA belah persamaan sehingga pemboleh ubah bersendirian di satu belah. Tambah dan Tolak " +
      "ialah pasangan operasi songsang; Darab dan Bahagi ialah pasangan operasi songsang.",
  },

  example: {
    mentorLine: "Jom kita selesaikan satu persamaan dua langkah, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Selesaikan persamaan 2x + 3 = 11",
    steps: [
      "Tolak 3 daripada kedua-dua belah: 2x + 3 − 3 = 11 − 3, jadi 2x = 8",
      "Bahagi kedua-dua belah dengan 2: 2x ÷ 2 = 8 ÷ 2",
      "Jadi x = 4",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Selesaikan x + 5 = 9",
    choices: ["4", "14", "5", "9"],
    answer: "4",
    feedbackCorrect: "Tepat! Tolak 5 daripada kedua-dua belah: x = 9 − 5 = 4.",
    feedbackIncorrect: "Belum tepat. Tolak 5 daripada kedua-dua belah persamaan.",
  },
};
