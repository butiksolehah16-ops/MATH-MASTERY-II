// Kandungan Nota Interaktif — Bab 7, Topik 7.2 (Ketaksamaan Linear Dalam Satu
// Pemboleh Ubah). Fokus: selesaikan ketaksamaan guna kaedah SAMA macam
// persamaan (Bab 6), tapi ingat TERBALIKKAN simbol bila darab/bahagi negatif.
export const notaSatuPembolehUbahKetaksamaanContent = {
  visualType: "balance-scale",

  hook: {
    mentorLine: "Kita dah faham ketaksamaan asas — sekarang jom SELESAIKAN ketaksamaan macam kita selesaikan persamaan!",
    title: "Had Berat Beg Sekolah Aiman",
    body:
      "Berat beg sekolah Aiman (x kg) tambah 3kg buku MESTI kurang daripada 15kg (had berat yang " +
      "dibenarkan): x + 3 < 15. Berapakah berat MAKSIMUM beg sekolah Aiman (x) sebelum tambah buku?",
  },

  exploration: {
    mentorLine: "Kaedah sama macam Bab 6 — asingkan x, tapi kali ni kita kekalkan simbol <, bukan =.",
    prompt: "Klik \"Buang 3 dari kedua-dua belah\" — sama macam selesaikan persamaan, tapi kekalkan simbol <!",
    variableLabel: "x",
    coefficient: 1,
    leftConstant: 3,
    rightValue: 15,
    operation: "subtract",
    operand: 3,
  },

  insight: {
    mentorLine: "Perasan kaedah ni serupa dengan Bab 6?",
    title: "Sama Kaedah, Kekalkan Simbol Ketaksamaan!",
    bullets: [
      "Kau baru buang 3 dari KEDUA-DUA belah — SAMA macam selesaikan persamaan (Bab 6)!",
      "Bezanya, simbol yang kita kekalkan ialah < (bukan =). Jadi x < 12.",
      "Ini bermakna beg sekolah Aiman MESTI kurang daripada 12kg (boleh jadi 11kg, 10kg, 5kg... — BANYAK nilai yang mungkin, bukan satu jawapan sahaja!)",
    ],
  },

  formula: {
    mentorLine: "Ini konsep PALING PENTING dalam topik ni — jangan lupa!",
    title: "Formula Rasmi",
    expression: "Darab/Bahagi negatif → TERBALIKKAN simbol!",
    bullets: [
      "Untuk selesaikan ketaksamaan linear: guna kaedah SAMA macam selesaikan persamaan (operasi songsang pada kedua-dua belah).",
      "TAPI — bila kita DARAB atau BAHAGI kedua-dua belah dengan nombor NEGATIF, simbol ketaksamaan MESTI TERBALIK!",
      "Cth: −2x > 8 → bahagi dengan −2 → x < −4 (simbol > bertukar jadi <).",
    ],
  },

  example: {
    mentorLine: "Jom kita selesaikan ketaksamaan yang perlukan penerbalikan simbol, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Selesaikan ketaksamaan −3x + 2 ≤ 11",
    steps: [
      "Tolak 2 daripada kedua-dua belah: −3x ≤ 9",
      "Bahagi kedua-dua belah dengan −3 — TERBALIKKAN simbol: x ≥ −3",
      "Jadi penyelesaian ialah x ≥ −3",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Selesaikan x − 4 > 6",
    choices: ["x > 10", "x > 2", "x < 10", "x < 2"],
    answer: "x > 10",
    feedbackCorrect: "Tepat! Tambah 4 pada kedua-dua belah: x > 6 + 4 = 10.",
    feedbackIncorrect: "Belum tepat. Tambah 4 pada kedua-dua belah persamaan (positif, simbol kekal sama).",
  },
};
