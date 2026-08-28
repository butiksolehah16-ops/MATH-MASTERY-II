// Kandungan Nota Interaktif — Bab 1, Topik 1.5 (Menukar Pecahan dan Perpuluhan).
// Topik penutup Bab 1: menyatukan konsep integer, pecahan dan perpuluhan
// sebagai SATU sistem nombor (nombor nisbah) yang boleh ditukar antara satu
// sama lain. Guna visual fraction-bar yang sama, format="fraction".
export const notaNomborNisbahContent = {
  visualType: "fraction-bar",

  hook: {
    mentorLine: "Ini topik penutup Bab 1 — kita satukan semua yang kamu dah belajar.",
    title: "Cawan Penyukat Yang Mengelirukan",
    body:
      "Resepi kek makcik Timah perlukan 3/4 cawan tepung. Tapi cawan penyukat di rumahnya cuma bertanda " +
      "perpuluhan: 0.25, 0.50, 0.75, 1.00 — tiada tanda pecahan! Berapakah 3/4 dalam bentuk perpuluhan, " +
      "supaya makcik Timah boleh terus guna cawan tu?",
  },

  exploration: {
    mentorLine: "Isi bar tu ikut jumlah tepung yang diperlukan.",
    prompt: "Mula dari 0. Klik \"Langkah\" 3 kali untuk isi 3 bahagian daripada 4 (3/4 cawan tepung).",
    start: 0,
    steps: 3,
    denominator: 4,
    format: "fraction",
  },

  insight: {
    mentorLine: "Bayangkan bar yang sama, tapi dibahagi kepada 100 bahagian kecil.",
    title: "Pecahan dan Perpuluhan — Sistem Yang Sama",
    body:
      "Kamu baru isi 3/4 daripada bar. Sekarang bayangkan bar yang SAMA saiz dibahagi kepada 100 bahagian " +
      "kecil (peratus) — 3/4 sebenarnya sama dengan 75 daripada 100 bahagian, iaitu 0.75! Ini kerana " +
      "3/4 = (3×25)/(4×25) = 75/100. Integer, pecahan, dan perpuluhan bukan tiga benda berasingan — mereka " +
      "SATU sistem nombor yang sama (nombor nisbah), cuma ditulis dalam bentuk berbeza.",
  },

  formula: {
    mentorLine: "Ini cara rasmi tukar antara pecahan dan perpuluhan — simpan dalam kepala kamu.",
    title: "Formula Rasmi",
    expression: "Pecahan → Perpuluhan: pengangka ÷ penyebut",
    body:
      "Untuk tukar PECAHAN kepada PERPULUHAN: bahagikan pengangka dengan penyebut (pengangka ÷ penyebut). " +
      "Untuk tukar PERPULUHAN kepada PECAHAN: tulis digit selepas titik perpuluhan sebagai pengangka, dan " +
      "kuasa 10 yang sepadan (10, 100, 1000...) sebagai penyebut, kemudian permudahkan jika boleh.",
  },

  example: {
    mentorLine: "Jom kita cuba arah sebaliknya — tukar perpuluhan kepada pecahan.",
    title: "Contoh Diselesaikan",
    problem: "Tukarkan 0.6 kepada pecahan dalam bentuk termudah",
    steps: [
      "0.6 bermaksud 6 per sepuluh, iaitu 6/10",
      "Cari FSTB (faktor sepunya terbesar) bagi 6 dan 10 → FSTB = 2",
      "Bahagikan pengangka dan penyebut dengan 2: (6÷2)/(10÷2) = 3/5",
      "= 3/5",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Berapakah 1/2 dalam bentuk perpuluhan?",
    choices: ["0.5", "0.2", "0.12", "5.0"],
    answer: "0.5",
    feedbackCorrect: "Tepat! 1 ÷ 2 = 0.5.",
    feedbackIncorrect: "Belum tepat. Bahagikan pengangka dengan penyebut: 1 ÷ 2 = 0.5.",
  },
};
