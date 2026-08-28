// Kandungan Nota Interaktif — Bab 6, Topik 6.2 (Persamaan Linear Dalam Dua
// Pemboleh Ubah). Fokus: persamaan dengan DUA huruf tak diketahui ada BANYAK
// pasangan penyelesaian (x,y) yang mungkin.
export const notaDuaPembolehUbahContent = {
  visualType: "variable-box",

  hook: {
    mentorLine: "Sambung dari persamaan satu pemboleh ubah — kali ni kita ada DUA huruf tak diketahui sekali gus!",
    title: "Belanja RM10 Aiman",
    body:
      "Aiman ada RM10 untuk beli epal (x biji, RM1 sebiji) dan oren (y biji, RM1 sebiji), dan dia habiskan " +
      "SEMUA RM10 tu. Kalau x + y = 10, apakah beberapa kombinasi bilangan epal dan oren yang mungkin?",
  },

  exploration: {
    mentorLine: "Jom kita cuba beberapa nilai x — lihat macam mana y berubah supaya x + y kekal = 10.",
    prompt: "Klik untuk cuba nilai x berbeza — lihat macam mana y berubah.",
    variableLabel: "x",
    resultLabel: "y",
    mode: "subtractFromTotal",
    total: 10,
    startValue: 1,
    steps: 4,
  },

  insight: {
    mentorLine: "Perasan berapa banyak kombinasi yang berfungsi?",
    title: "Banyak Pasangan (x, y) Memenuhi Persamaan!",
    body:
      "Setiap kali x berubah, y turut berubah SUPAYA x + y tetap = 10. Persamaan x + y = 10 ada BANYAK " +
      "penyelesaian yang mungkin (x=1,y=9 / x=2,y=8 / x=3,y=7...) — ini dipanggil PERSAMAAN LINEAR DALAM " +
      "DUA PEMBOLEH UBAH, sebab ada DUA huruf yang tak diketahui (x dan y).",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "ax + by = c",
    body:
      "Persamaan linear dua pemboleh ubah ditulis dalam bentuk ax + by = c, dengan a, b, c ialah pemalar, " +
      "dan x, y ialah pemboleh ubah. Setiap PASANGAN nilai (x, y) yang memenuhi persamaan dipanggil " +
      "PENYELESAIAN (solution) bagi persamaan itu.",
  },

  example: {
    mentorLine: "Jom kita cari nilai satu pemboleh ubah apabila yang satu lagi diketahui, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Diberi persamaan 2x + y = 12. Cari nilai y apabila x = 3",
    steps: [
      "Gantikan x = 3 ke dalam persamaan: 2(3) + y = 12",
      "6 + y = 12",
      "y = 12 − 6 = 6",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Diberi x + y = 15. Jika x = 4, berapakah nilai y?",
    choices: ["11", "19", "4", "15"],
    answer: "11",
    feedbackCorrect: "Tepat! y = 15 − 4 = 11.",
    feedbackIncorrect: "Belum tepat. Gantikan x = 4 ke dalam persamaan: 4 + y = 15.",
  },
};
