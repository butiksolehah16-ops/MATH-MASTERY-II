// Kandungan Nota Interaktif — Bab 2, Topik 2.2 (Gandaan dan GSTK).
// Fokus: gandaan sebagai skip-count (guna garis nombor, stepUnit), dan cari
// Gandaan Sepunya Terkecil (GSTK). Sambungan semula jadi dari Topik 2.1.
export const notaGandaanContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Kita dah kuasai faktor — sekarang jom kita explore konsep lawannya: gandaan.",
    title: "Dua Bas di Stesen",
    body:
      "Bas A datang ke stesen setiap 4 minit. Bas B datang setiap 6 minit. Kalau kedua-dua bas bertolak " +
      "SAMA-SAMA sekarang (minit ke-0), bilakah kali PERTAMA kedua-dua bas akan bertolak sama-sama lagi?",
  },

  exploration: {
    mentorLine: "Jom kita senaraikan gandaan 4 dulu — lompat dengan saiz 4 dari 0.",
    prompt: "Klik \"Langkah\" untuk lompat dengan saiz 4 (ini gandaan 4!). Cuba sampai ke 16.",
    start: 0,
    steps: 16,
    stepUnit: 4,
    stepLabel: "Lompat",
    min: 0,
    max: 24,
  },

  insight: {
    mentorLine: "Sekarang bayangkan Bas B pula — gandaan 6.",
    title: "Gandaan Sepunya — Bila Kedua-duanya Bertemu?",
    bullets: [
      "Kau baru senaraikan gandaan 4: 4, 8, 12, 16. Sekarang bayangkan senarai gandaan 6: 6, 12, 18, 24.",
      "Perasan nombor 12 muncul dalam KEDUA-DUA senarai? Itulah GANDAAN SEPUNYA — nombor yang jadi gandaan kepada kedua-dua 4 dan 6.",
      "Bas A dan Bas B akan bertolak sama-sama lagi pada minit ke-12!",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi — lawan kepada FSTB yang kau belajar dalam Topik 2.1.",
    title: "Formula Rasmi",
    expression: "Gandaan n = n × 1, n × 2, n × 3, ...",
    bullets: [
      "Gandaan Sepunya Terkecil (GSTK) dua nombor ialah gandaan PALING KECIL yang dikongsi oleh KEDUA-DUA nombor.",
      "Untuk cari GSTK: senaraikan gandaan setiap nombor, kenal pasti gandaan sepunya, pilih yang PALING KECIL.",
      "(Perbezaan dengan FSTB: FSTB cari faktor PALING BESAR yang sepunya; GSTK cari gandaan PALING KECIL yang sepunya — arah terbalik!)",
    ],
  },

  example: {
    mentorLine: "Jom kita cari GSTK dua nombor, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari GSTK bagi 4 dan 6",
    steps: [
      "Gandaan 4: 4, 8, 12, 16, 20...",
      "Gandaan 6: 6, 12, 18, 24...",
      "Gandaan sepunya (muncul pada kedua-dua senarai): 12, 24...",
      "GSTK = 12 (gandaan sepunya yang paling kecil)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Berapakah GSTK bagi 3 dan 5?",
    choices: ["15", "8", "3", "5"],
    answer: "15",
    feedbackCorrect: "Tepat! Gandaan 3: 3,6,9,12,15. Gandaan 5: 5,10,15. Sepunya paling kecil = 15.",
    feedbackIncorrect: "Belum tepat. Senaraikan gandaan 3 dan gandaan 5 — nombor mana muncul dalam kedua-duanya dulu?",
  },
};
