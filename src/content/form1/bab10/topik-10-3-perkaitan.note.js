// Kandungan Nota Interaktif — Bab 10, Topik 10.3 (Perkaitan antara Perimeter
// dan Luas).
// Fokus: perimeter sama tak semestinya luas sama, dan sebaliknya.
export const notaPerkaitanContent = {
  visualType: "square-grid",

  hook: {
    mentorLine: "Kita dah faham perimeter dan luas berasingan — sekarang jom lihat PERKAITAN antara keduanya.",
    title: "Tali Sepanjang 24m",
    body:
      "Kamu ada seutas tali sepanjang 24m untuk buat pagar kandang ayam berbentuk segiempat tepat. Adakah " +
      "SEMUA bentuk segiempat tepat dengan perimeter 24m mempunyai luas yang SAMA?",
  },

  exploration: {
    mentorLine: "Jom kita bina segiempat SAMA bersisi 6m (perimeter = 4 × 6 = 24m) dan lihat luasnya.",
    prompt: "Klik \"Tambah baris + lajur\" untuk bina segiempat SAMA sehingga bersisi 6m.",
    targetSide: 6,
  },

  insight: {
    mentorLine: "Sekarang bandingkan dengan segiempat TEPAT yang perimeternya sama...",
    title: "Perimeter Sama TAK Semestinya Luas Sama!",
    body:
      "Segiempat SAMA 6m × 6m ini ada perimeter 24m DAN luas 36m². Tapi cuba fikir segiempat TEPAT 8m × 4m — " +
      "perimeternya JUGA 24m (2 × (8 + 4) = 24), tapi luasnya cuma 32m² (8 × 4 = 32)! Bentuk paling 'padat' " +
      "(segiempat SAMA) beri luas MAKSIMUM untuk perimeter tertentu.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Perimeter tetap → segiempat sama beri luas maksimum",
    body:
      "Untuk PERIMETER TETAP, bentuk segiempat SAMA (bukan segiempat tepat yang panjang dan kurus) memberi " +
      "LUAS MAKSIMUM. Untuk LUAS TETAP, bentuk segiempat SAMA memberi PERIMETER MINIMUM (paling sedikit " +
      "bahan pagar diperlukan).",
  },

  example: {
    mentorLine: "Jom kita bandingkan dua bentuk dengan perimeter sama, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Dua segiempat tepat mempunyai perimeter yang sama iaitu 20cm. Segiempat A: panjang 7cm, lebar 3cm. " +
      "Segiempat B: panjang 5cm, lebar 5cm. Bandingkan luas kedua-duanya",
    steps: [
      "Luas A = 7 × 3 = 21cm²",
      "Luas B = 5 × 5 = 25cm²",
      "B (segiempat sama) ada luas LEBIH BESAR walaupun perimeter sama",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt:
      "Segiempat tepat dengan perimeter 16cm: Pilihan P (panjang 6cm, lebar 2cm) atau Pilihan Q (panjang " +
      "4cm, lebar 4cm). Yang manakah mempunyai luas LEBIH BESAR?",
    choices: ["P", "Q", "Sama sahaja", "Tidak dapat ditentukan"],
    answer: "Q",
    feedbackCorrect: "Tepat! Luas P = 12cm², Luas Q = 16cm². Q (segiempat sama) lebih besar.",
    feedbackIncorrect: "Belum tepat. Luas P = 6 × 2 = 12cm², Luas Q = 4 × 4 = 16cm². Q lebih besar.",
  },
};
