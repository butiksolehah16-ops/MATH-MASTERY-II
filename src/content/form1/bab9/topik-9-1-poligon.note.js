// Kandungan Nota Interaktif — Bab 9, Topik 9.1 (Poligon).
// Fokus: definisi poligon, nama poligon ikut bilangan sisi, formula pepenjuru.
export const notaPoligonContent = {
  visualType: "polygon-diagonal",

  hook: {
    mentorLine: "Bab baharu — kita terokai bentuk POLIGON! Jom mula dengan situasi sebenar.",
    title: "Papan Tanda Oktagon",
    body:
      "Papan tanda 'BERHENTI' berbentuk OKTAGON — bentuk tertutup dengan 8 sisi lurus. Dari SATU bucu sahaja, " +
      "berapa banyak garis pepenjuru (diagonal) boleh dilukis ke bucu-bucu lain?",
  },

  exploration: {
    mentorLine: "Jom kita lukis pepenjuru dari satu bucu heksagon (6 sisi), langkah demi langkah.",
    prompt: "Klik \"Lukis pepenjuru\" untuk sambung bucu rujukan ke bucu-bucu lain (bukan jiran sebelah).",
    sides: 6,
  },

  insight: {
    mentorLine: "Perasan kenapa kita TAK boleh sambung ke SEMUA bucu lain?",
    title: "Bukan Semua Bucu Boleh Disambung!",
    body:
      "Daripada SATU bucu, kita TIDAK boleh lukis pepenjuru ke DIRI SENDIRI, dan TIDAK boleh ke DUA bucu " +
      "JIRAN (sebab itu sudah jadi SISI poligon, bukan pepenjuru). Untuk poligon n sisi, bilangan bucu yang " +
      "boleh disambung ialah n − 3 (tolak diri sendiri dan 2 jiran).",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Pepenjuru dari 1 bucu = n − 3, Jumlah pepenjuru = n(n − 3) ÷ 2",
    body:
      "BILANGAN PEPENJURU DARI SATU BUCU = n − 3 (n ialah bilangan sisi). JUMLAH KESELURUHAN PEPENJURU dalam " +
      "poligon = n(n − 3) ÷ 2, sebab setiap pepenjuru dikira dua kali (dari kedua-dua hujungnya) jika kita " +
      "kira dari semua bucu.",
  },

  example: {
    mentorLine: "Jom kita cari bilangan pepenjuru, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah poligon mempunyai 7 sisi (heptagon). Cari bilangan pepenjuru dari SATU bucu dan jumlah keseluruhan pepenjuru",
    steps: [
      "Pepenjuru dari satu bucu = n − 3 = 7 − 3 = 4",
      "Jumlah keseluruhan pepenjuru = n(n − 3) ÷ 2 = 7 × 4 ÷ 2",
      "= 28 ÷ 2 = 14 pepenjuru",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah poligon mempunyai 5 sisi (pentagon). Berapakah bilangan pepenjuru dari SATU bucu?",
    choices: ["1", "2", "3", "5"],
    answer: "2",
    feedbackCorrect: "Tepat! n − 3 = 5 − 3 = 2.",
    feedbackIncorrect: "Belum tepat. Guna formula n − 3: 5 − 3 = 2.",
  },
};
