// Kandungan Nota Interaktif — Bab 4, Topik 4.1 (Nisbah).
// Fokus: permudahkan nisbah dengan bahagi kedua-dua belah dengan HCF (visual
// dua kumpulan blok yang mengecil serentak).
export const notaNisbahContent = {
  visualType: "ratio-blocks",

  hook: {
    mentorLine: "Bab baharu! Kali ni kita belajar cara BANDING dua kuantiti — jom mula dengan situasi sebenar.",
    title: "Kelas 1 Bestari",
    body:
      "Kelas 1 Bestari ada 12 pelajar lelaki dan 18 pelajar perempuan. Nyatakan nisbah bilangan pelajar " +
      "lelaki kepada perempuan dalam bentuk PALING RINGKAS (termudah).",
  },

  exploration: {
    mentorLine: "Jom kita permudahkan nisbah 12:18 tu — klik untuk lihat apa berlaku bila kita bahagi kedua-dua belah dengan HCF.",
    prompt: "Klik \"Ubah Nisbah\" untuk permudahkan 12:18 kepada bentuk termudah.",
    fromA: 12,
    fromB: 18,
    toA: 2,
    toB: 3,
    labelA: "L",
    labelB: "P",
  },

  insight: {
    mentorLine: "Perasan berapa kali blok tu mengecil?",
    title: "12:18 = 2:3 — Nisbah Termudah!",
    body:
      "Kau baru bahagikan KEDUA-DUA belah (12 dan 18) dengan HCF mereka, iaitu 6, dan dapat 2:3. Bilangan " +
      "blok berkurang tetapi PERBANDINGAN antara dua kumpulan tu KEKAL SAMA — sebab tu ia dipanggil nisbah " +
      "\"termudah\", bukan nisbah \"berbeza\". Kelas 1 Bestari ada nisbah lelaki kepada perempuan 2:3.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Nisbah a:b termudah apabila HCF(a, b) = 1",
    body:
      "Untuk permudahkan nisbah a:b: cari HCF (Hasil bahagi Sepunya Terbesar) bagi a dan b, kemudian bahagi " +
      "KEDUA-DUA belah dengan HCF tersebut. Nisbah yang dipermudahkan tetap mewakili PERBANDINGAN yang sama " +
      "— cuma ditulis dalam nombor yang lebih kecil dan mudah difahami.",
  },

  example: {
    mentorLine: "Jom kita permudahkan satu nisbah, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari nisbah termudah bagi 15:25",
    steps: [
      "HCF bagi 15 dan 25 ialah 5",
      "15 ÷ 5 : 25 ÷ 5 = 3 : 5",
      "Jadi nisbah termudah = 3:5",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah nisbah termudah bagi 8:12?",
    choices: ["2:3", "4:6", "1:2", "3:4"],
    answer: "2:3",
    feedbackCorrect: "Tepat! HCF(8,12) = 4, jadi 8÷4 : 12÷4 = 2:3.",
    feedbackIncorrect: "Belum tepat. Cari HCF bagi 8 dan 12 dahulu, kemudian bahagi kedua-dua belah.",
  },
};
