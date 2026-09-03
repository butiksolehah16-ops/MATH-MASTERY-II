// Kandungan Nota Interaktif — Form 2, Bab 9, Topik 9.2 (Pecutan). DSKP SK
// 9.2: menerangkan maksud pecutan dan nyahpecutan, melaksanakan pengiraan
// pecutan termasuk penukaran unit, menyelesaikan masalah yang melibatkan
// pecutan.
export const notaPecutanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Laju je tak cukup — kadang kita nak tahu betapa CEPAT laju tu BERTAMBAH. Itulah PECUTAN.",
    title: "Kereta Yang Semakin Laju",
    body:
      "Bila kereta mula bergerak dari diam, lajunya BERTAMBAH saat demi saat. Kadar PERTAMBAHAN laju ni " +
      "dipanggil PECUTAN. Kalau laju BERKURANGAN pula, itu dipanggil NYAHPECUTAN.",
  },

  exploration: {
    mentorLine: "Jom dedah laju kereta pada hujung setiap saat.",
    prompt:
      "Sebuah kereta memecut dari diam secara SERAGAM. Klik \"Tambah palang seterusnya\" untuk dedah " +
      "PERTAMBAHAN laju (m/s) bagi Saat 1, Saat 2, dan Saat 3.",
    categories: ["Saat 1", "Saat 2", "Saat 3"],
    values: [5, 5, 5],
  },

  insight: {
    mentorLine: "Perasan yang laju bertambah dengan jumlah yang SAMA setiap saat?",
    title: "Pecutan = Kadar Pertambahan Laju",
    bullets: [
      "Laju kereta tu bertambah 5 m/s SETIAP saat — sama banyak setiap kali (0 → 5 → 10 → 15). Jumlah keseluruhan pertambahan laju selepas 3 saat ialah 15 m/s.",
      "Sebab pertambahan tu SAMA setiap saat, PECUTAN kereta ialah 5 m/s SETIAP SAAT, ditulis sebagai 5 m/s².",
      "Pecutan ialah KADAR PERUBAHAN LAJU berbanding masa — sama konsep macam laju (kadar perubahan JARAK), tapi ni kadar perubahan LAJU pula.",
    ],
  },

  formula: {
    mentorLine: "Ini formula rasmi pecutan — simpan dalam kepala kamu.",
    title: "Formula Pecutan",
    expression: "Pecutan = (Laju Akhir − Laju Awal) ÷ Masa   |   Laju Akhir = Laju Awal + (Pecutan × Masa)",
    bullets: [
      "PECUTAN = (v − u) ÷ t, dengan v = laju akhir, u = laju awal, t = masa (unit: m/s²).",
      "Jika laju BERKURANGAN (v < u), nilai tu ialah NYAHPECUTAN — kita laporkan sebagai MAGNITUD (nilai positif) kadar perlambatan.",
      "Daripada rumus ni, kita boleh susun semula: LAJU AKHIR (v) = Laju Awal (u) + (Pecutan × Masa) — berguna untuk cari laju akhir apabila pecutan diketahui.",
    ],
  },

  example: {
    mentorLine: "Jom kita kira pecutan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kereta bergerak dari laju 10 m/s ke 30 m/s dalam masa 5 saat. Cari pecutannya.",
    steps: [
      "Cari beza laju: v − u = 30 − 10 = 20 m/s",
      "Bahagikan dengan masa: 20 ÷ 5",
      "Pecutan = 4 m/s²",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah basikal bergerak dari laju 5 m/s ke 25 m/s dalam masa 4 saat. Apakah pecutannya (m/s²)?",
    choices: ["5", "20", "6.25", "9"],
    answer: "5",
    feedbackCorrect: "Tepat! Pecutan = (25 − 5) ÷ 4 = 20 ÷ 4 = 5 m/s².",
    feedbackIncorrect: "Belum tepat. Guna Pecutan = (v − u) ÷ t = (25 − 5) ÷ 4.",
  },
};
