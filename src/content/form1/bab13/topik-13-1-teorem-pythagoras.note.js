// Kandungan Nota Interaktif — Bab 13, Topik 13.1 (Teorem Pythagoras).
// Fokus: a² + b² = c², cari hipotenus atau sisi pendek.
export const notaTeoremPythagorasContent = {
  visualType: "pythagoras",

  hook: {
    mentorLine: "Bab TERAKHIR — kita terokai TEOREM PYTHAGORAS! Jom mula dengan situasi sebenar.",
    title: "Tangga Bersandar pada Dinding",
    body:
      "Sebuah tangga bersandar pada dinding. Kaki tangga 3m dari dinding, dan tangga itu mencecah dinding " +
      "pada ketinggian 4m. Berapa panjang tangga itu (hipotenus)?",
  },

  exploration: {
    mentorLine: "Jom kita dedah luas kuasa dua setiap sisi segi tiga tu.",
    prompt: "Klik \"Dedah luas seterusnya\" untuk dedah 3², 4², dan 5² dan sahkan hubungan antara ketiganya.",
    a: 3,
    b: 4,
    c: 5,
  },

  insight: {
    mentorLine: "Perasan hubungan antara ketiga-tiga nilai kuasa dua tu?",
    title: "a² + b² = c²!",
    body:
      "TEOREM PYTHAGORAS: dalam SEGI TIGA BERSUDUT TEGAK, kuasa dua HIPOTENUS (sisi terpanjang, bertentangan " +
      "sudut tegak) SAMA dengan JUMLAH kuasa dua dua sisi yang lain. Untuk tangga tadi: 3² + 4² = 9 + 16 = " +
      "25 = 5². Jadi panjang tangga ialah 5m!",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "a² + b² = c²",
    body:
      "a² + b² = c² (c ialah hipotenus, sisi terpanjang). Untuk cari HIPOTENUS: c = √(a² + b²). Untuk cari " +
      "SISI PENDEK: a = √(c² − b²) atau b = √(c² − a²).",
  },

  example: {
    mentorLine: "Jom kita cari hipotenus, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Segi tiga bersudut tegak dengan sisi pendek 6cm dan 8cm. Cari hipotenus",
    steps: [
      "c² = a² + b² = 6² + 8² = 36 + 64 = 100",
      "c = √100",
      "c = 10cm",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Segi tiga bersudut tegak dengan sisi pendek 5cm dan 12cm. Cari hipotenus.",
    choices: ["13cm", "17cm", "144cm", "169cm"],
    answer: "13cm",
    feedbackCorrect: "Tepat! c² = 5² + 12² = 25 + 144 = 169. c = √169 = 13cm.",
    feedbackIncorrect: "Belum tepat. c² = 5² + 12² = 25 + 144 = 169, jadi c = √169 = 13cm.",
  },
};
