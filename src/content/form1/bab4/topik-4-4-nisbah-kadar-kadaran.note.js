// Kandungan Nota Interaktif — Bab 4, Topik 4.4 (Nisbah, Kadar dan Kadaran).
// Fokus: gabungkan ketiga-tiga konsep untuk kongsi jumlah ikut nisbah — cari
// nilai satu bahagian (kadar) lalu skalakan (kadaran) kepada bahagian yang dikehendaki.
export const notaNisbahKadarKadaranContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Sekarang kita gabungkan SEMUA yang kau dah belajar dalam bab ni — nisbah, kadar, dan kadaran, sekali gus!",
    title: "Kongsi Hadiah Faridah dan Aiman",
    body:
      "Faridah dan Aiman berkongsi hadiah wang tunai RM240 mengikut nisbah 3:5. Berapakah wang yang Aiman " +
      "akan terima?",
  },

  exploration: {
    mentorLine: "Jumlah bahagian ialah 3 + 5 = 8. Jom kita cari nilai SATU bahagian — lompat sehingga sampai 240.",
    prompt: "Klik \"Langkah\" untuk lompat dengan saiz 30 (nilai SETIAP bahagian), sehingga cuba sampai ke 240 (8 bahagian).",
    start: 0,
    steps: 240,
    stepUnit: 30,
    stepLabel: "Bahagian",
    min: 0,
    max: 260,
  },

  insight: {
    mentorLine: "Perasan macam mana ketiga-tiga konsep tu digunakan sekali gus?",
    title: "RM30 Sebahagian — Gabungan Nisbah, Kadar & Kadaran!",
    bullets: [
      "Kau baru lompat 8 kali dengan saiz 30 untuk sampai ke 240 (3 bahagian + 5 bahagian = 8 bahagian kesemuanya). Ini bermakna SETIAP bahagian bernilai RM30 (ini KADAR).",
      "Aiman dapat 5 bahagian = 5 × RM30 = RM150 (ini KADARAN — skalakan nilai sebahagian kepada bilangan bahagian). Faridah pula dapat 3 bahagian = RM90.",
      "Perasan macam mana NISBAH (3:5) tentukan berapa bahagian setiap orang dapat?",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Nilai sebahagian = Jumlah ÷ (a + b)",
    bullets: [
      "Untuk KONGSI jumlah ikut nisbah a:b: (1) Jumlahkan bahagian (a + b).",
      "(2) Cari nilai SATU bahagian — Jumlah ÷ (a + b) — ini KADAR.",
      "(3) Darab nilai sebahagian dengan bilangan bahagian yang dikehendaki — ini KADARAN. Kaedah ni gabungkan ketiga-tiga konsep bab ni dalam SATU penyelesaian.",
    ],
  },

  example: {
    mentorLine: "Jom kita kongsi satu jumlah ikut nisbah, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kongsikan RM360 mengikut nisbah 2:7. Cari bahagian yang lebih kecil",
    steps: [
      "Jumlah bahagian = 2 + 7 = 9",
      "Nilai satu bahagian = RM360 ÷ 9 = RM40",
      "Bahagian lebih kecil = 2 × RM40 = RM80",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Kongsikan RM100 mengikut nisbah 1:4. Berapakah bahagian yang LEBIH BESAR?",
    choices: ["80", "20", "50", "75"],
    answer: "80",
    feedbackCorrect: "Tepat! Jumlah bahagian = 5, satu bahagian = RM20, bahagian lebih besar = 4 × RM20 = RM80.",
    feedbackIncorrect: "Belum tepat. Jumlahkan bahagian dahulu (1+4=5), cari nilai sebahagian (100÷5), kemudian darab dengan 4.",
  },
};
