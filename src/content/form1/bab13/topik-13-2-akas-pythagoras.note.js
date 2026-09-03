// Kandungan Nota Interaktif — Bab 13, Topik 13.2 (Akas Teorem Pythagoras).
// Fokus: sahkan sama ada segi tiga bersudut tegak menggunakan a² + b² = c².
export const notaAkasPythagorasContent = {
  visualType: "pythagoras",

  hook: {
    mentorLine: "Kita dah faham Teorem Pythagoras — sekarang jom guna secara SONGSANG untuk SAHKAN sudut.",
    title: "Almari Tukang Kayu",
    body:
      "Tukang kayu nak pastikan sudut almari tepat 90°. Dia ukur tiga sisi rangka: 3m, 4m, dan 5m. Adakah " +
      "sudut itu betul-betul 90° tanpa perlu mengukur terus dengan alat sudut?",
  },

  exploration: {
    mentorLine: "Jom kita dedah luas kuasa dua setiap sisi dan sahkan hubungannya.",
    prompt: "Klik \"Dedah luas seterusnya\" untuk dedah 3², 4², dan 5² dan sahkan a² + b² = c².",
    a: 3,
    b: 4,
    c: 5,
  },

  insight: {
    mentorLine: "Perasan macam mana kita boleh SAHKAN sudut tanpa mengukur terus?",
    title: "Akas Teorem Pythagoras!",
    bullets: [
      "AKAS TEOREM PYTHAGORAS: Jika kuasa dua sisi TERPANJANG SAMA dengan JUMLAH kuasa dua DUA sisi lain (a² + b² = c²), maka segi tiga itu ADALAH segi tiga bersudut tegak.",
      "Untuk rangka almari: 3² + 4² = 9 + 16 = 25 = 5² — jadi sudut itu MEMANG 90°!",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "a² + b² = c² → bersudut tegak",
    bullets: [
      "Jika a² + b² = c² (c ialah sisi terpanjang) → segi tiga BERSUDUT TEGAK.",
      "Jika a² + b² ≠ c² → segi tiga BUKAN bersudut tegak.",
      "Kaedah ni membolehkan kita SAHKAN sudut tegak tanpa mengukur sudut secara terus.",
    ],
  },

  example: {
    mentorLine: "Jom kita sahkan sama ada segi tiga ni bersudut tegak, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Segi tiga dengan sisi 6cm, 8cm, dan 11cm. Adakah ia segi tiga bersudut tegak?",
    steps: [
      "6² + 8² = 36 + 64 = 100",
      "11² = 121",
      "100 ≠ 121, jadi BUKAN segi tiga bersudut tegak",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Segi tiga dengan sisi 9cm, 12cm, dan 15cm. Adakah ia bersudut tegak?",
    choices: ["Ya, bersudut tegak", "Tidak, bukan bersudut tegak", "Tidak dapat ditentukan", "Segi tiga sama sisi"],
    answer: "Ya, bersudut tegak",
    feedbackCorrect: "Tepat! 9² + 12² = 81 + 144 = 225 = 15². Jadi bersudut tegak.",
    feedbackIncorrect: "Belum tepat. 9² + 12² = 81 + 144 = 225 = 15², jadi IA bersudut tegak.",
  },
};
