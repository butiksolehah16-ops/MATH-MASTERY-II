// Kandungan Nota Interaktif — Bab 5, Topik 5.1 (Pemboleh Ubah dan Ungkapan Algebra).
// Fokus: pemboleh ubah sebagai huruf yang mewakili nilai BOLEH BERUBAH, dan
// mengenal pasti pekali/pemboleh ubah/pemalar dalam ungkapan algebra.
export const notaPembolehUbahContent = {
  visualType: "variable-box",

  hook: {
    mentorLine: "Bab baharu — kita masuk dunia ALGEBRA! Jom mula dengan situasi sebenar.",
    title: "Beg Guli Aiman",
    body:
      "Aiman ada beberapa biji guli dalam sebuah beg (kita TAK TAHU berapa banyak — boleh berubah-ubah), " +
      "dan 3 biji guli lagi di luar beg. Macam mana kita nak tulis JUMLAH guli Aiman dalam bentuk " +
      "matematik, walaupun kita tak tahu bilangan dalam beg tu?",
  },

  exploration: {
    mentorLine: "Jom kita panggil bilangan guli dalam beg tu \"x\" — dan cuba beberapa nilai berbeza untuk x.",
    prompt: "Klik butang untuk cuba nilai x yang berbeza-beza — lihat macam mana ungkapan x + 3 berubah.",
    variableLabel: "x",
    constant: 3,
    steps: 4,
    startValue: 1,
  },

  insight: {
    mentorLine: "Perasan corak yang kekal sama?",
    title: "x Ialah Pemboleh Ubah!",
    bullets: [
      "Walaupun nilai x berubah (1, 2, 3, 4...), CORAK ungkapan x + 3 tetap sama — kita tambah 3 dengan cara yang SAMA setiap kali.",
      "x ialah PEMBOLEH UBAH (variable) — huruf yang mewakili nombor yang BOLEH BERUBAH nilainya.",
      "3 pula PEMALAR (constant) — nilai yang TETAP, tak berubah. x + 3 dipanggil UNGKAPAN ALGEBRA (algebraic expression).",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "5x + 2 → 5 = pekali, x = pemboleh ubah, 2 = pemalar",
    bullets: [
      "Dalam ungkapan algebra macam 5x + 2: 5 dipanggil PEKALI (coefficient) — nombor yang mendarab pemboleh ubah.",
      "x ialah PEMBOLEH UBAH. 2 ialah PEMALAR (constant).",
      "Setiap bahagian yang dipisahkan oleh tanda + atau − dipanggil SEBUTAN (term).",
    ],
  },

  example: {
    mentorLine: "Jom kita kenal pasti setiap bahagian dalam satu ungkapan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kenal pasti pekali, pemboleh ubah, dan pemalar dalam ungkapan 4y + 7",
    steps: [
      "4y ialah SATU sebutan (term) — 4 ialah pekali, y ialah pemboleh ubah",
      "7 ialah pemalar (nilai tetap, tiada pemboleh ubah)",
      "Jadi: pekali = 4, pemboleh ubah = y, pemalar = 7",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dalam ungkapan 6n − 2, apakah pekali bagi n?",
    choices: ["6", "-2", "n", "2"],
    answer: "6",
    feedbackCorrect: "Tepat! 6 ialah nombor yang mendarab n, jadi 6 ialah pekali.",
    feedbackIncorrect: "Belum tepat. Pekali ialah nombor yang mendarab pemboleh ubah (n).",
  },
};
