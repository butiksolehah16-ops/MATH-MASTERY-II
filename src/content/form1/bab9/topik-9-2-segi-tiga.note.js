// Kandungan Nota Interaktif — Bab 9, Topik 9.2 (Sifat Segi Tiga dan Sudutnya).
// Fokus: jumlah sudut pedalaman segi tiga (180°), jenis segi tiga, sudut peluaran.
export const notaSegiTigaContent = {
  visualType: "polygon-angle-sum",

  hook: {
    mentorLine: "Kita dah faham poligon secara am — sekarang jom fokus pada SEGI TIGA.",
    title: "Bumbung Rumah",
    body:
      "Bumbung sebuah rumah berbentuk segi tiga. Dua sudutnya diketahui: 50° dan 70°. Tanpa mengukur, boleh " +
      "tak kita cari sudut ketiga?",
  },

  exploration: {
    mentorLine: "Jom dedah setiap sudut segi tiga satu demi satu dan jumlahkan.",
    prompt: "Klik \"Dedah sudut seterusnya\" untuk dedah dan jumlahkan ketiga-tiga sudut segi tiga.",
    shape: "triangle",
    angles: [50, 70, 60],
  },

  insight: {
    mentorLine: "Perasan apa jumlah akhir yang kau dapat?",
    title: "Jumlah Sudut Segi Tiga Sentiasa 180°!",
    bullets: [
      "Tak kira bentuk atau saiz segi tiga tu — SAMA SISI, SAMA KAKI, atau SESKALA — jumlah SEMUA sudut pedalamannya SENTIASA 180°.",
      "Jadi kalau kita tahu DUA sudut, kita boleh cari sudut ketiga dengan menolak daripada 180°.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Jumlah sudut pedalaman segi tiga = 180°",
    bullets: [
      "JUMLAH SUDUT PEDALAMAN SEGI TIGA = 180°.",
      "SUDUT PELUARAN (exterior angle) pada satu bucu bersuplemen dengan sudut pedalaman bersebelahannya (jumlah = 180°), dan ia SAMA dengan jumlah DUA sudut pedalaman yang tidak bersebelahan dengannya.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari sudut yang tak diketahui, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Dua sudut segi tiga ialah 55° dan 80°. Cari sudut ketiga",
    steps: [
      "Jumlah dua sudut yang diketahui: 55° + 80° = 135°",
      "Sudut ketiga = 180° − 135°",
      "= 45°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dua sudut segi tiga ialah 90° dan 35°. Cari sudut ketiga.",
    choices: ["55°", "125°", "45°", "65°"],
    answer: "55°",
    feedbackCorrect: "Tepat! 180° − 90° − 35° = 55°.",
    feedbackIncorrect: "Belum tepat. Jumlah segi tiga = 180°: 180° − 90° − 35° = 55°.",
  },
};
