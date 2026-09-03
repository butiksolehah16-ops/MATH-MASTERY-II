// Kandungan Nota Interaktif — Form 2, Bab 1, Topik 1.2 (Jujukan).
// DSKP SK 1.2: menerangkan maksud jujukan; mengenal pasti dan memerihalkan
// pola suatu jujukan, seterusnya melengkapkan dan melanjutkan jujukan itu.
export const notaJujukanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita bagi nama rasmi untuk susunan nombor macam ni — dan belajar melanjutkannya.",
    title: "Simpanan Mingguan Aisyah",
    body:
      "Aisyah bermula menabung RM5 pada minggu pertama. Setiap minggu seterusnya, dia menabung RM2 lebih " +
      "berbanding minggu sebelumnya. Kalau kita senaraikan jumlah simpanan setiap minggu secara tersusun " +
      "(minggu 1, minggu 2, minggu 3, ...), kita akan dapat satu senarai nombor yang ada susunan yang jelas. " +
      "Senarai tersusun macam ni ada nama khas dalam Matematik — jom kita kenali!",
  },

  exploration: {
    mentorLine: "Jom dedahkan jumlah simpanan Aisyah minggu demi minggu.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedahkan simpanan Aisyah bagi Minggu 1 hingga Minggu 5. " +
      "Perhatikan susunan nombor yang terbentuk.",
    categories: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5"],
    values: [5, 7, 9, 11, 13],
  },

  insight: {
    mentorLine: "Sekarang kita namakan apa yang kita nampak tu.",
    title: "Jujukan = Senarai Nombor Tersusun",
    bullets: [
      "Senarai simpanan Aisyah — 5, 7, 9, 11, 13, ... — dipanggil JUJUKAN (sequence): satu set nombor yang disusun mengikut susunan TERTENTU, iaitu setiap nombor mempunyai kedudukan yang tetap (pertama, kedua, ketiga, dan seterusnya).",
      "Setiap nombor dalam jujukan dipanggil SEBUTAN (term). Sebutan pertama ditulis T1, sebutan kedua T2, sebutan ketiga T3, dan seterusnya — secara am, sebutan ke-n ditulis Tn. Bagi jujukan Aisyah: T1 = 5, T2 = 7, T3 = 9, T4 = 11, T5 = 13.",
      "Jujukan boleh TERHINGGA (finite) — ada bilangan sebutan yang tetap dan berakhir, atau TAK TERHINGGA (infinite) — diteruskan tanpa had, biasanya ditunjukkan dengan tiga titik \"...\" pada penghujung senarai.",
      "Untuk MELENGKAPKAN atau MELANJUTKAN sesuatu jujukan, kita perlu kenal pasti dahulu pola atau peraturan yang menghubungkan sebutan-sebutan berturutan, kemudian gunakan peraturan itu berulang kali.",
    ],
  },

  formula: {
    mentorLine: "Ini cara rasmi untuk lanjutkan sebarang jujukan — simpan dalam kepala kamu.",
    title: "Cara Melanjutkan Jujukan",
    expression: "Tn+1 = Tn (kenakan peraturan tetap)",
    bullets: [
      "Untuk melanjutkan jujukan: (1) Bandingkan sebutan berturutan (T2 berbanding T1, T3 berbanding T2, dan seterusnya) untuk cari peraturan tetap (beza tetap bagi jenis tambah/tolak, atau nisbah tetap bagi jenis darab/bahagi).",
      "(2) Sahkan peraturan itu konsisten pada SEMUA pasangan sebutan yang diketahui.",
      "(3) Kenakan peraturan yang sama pada sebutan terakhir untuk dapatkan sebutan seterusnya, dan ulang proses ini untuk melanjutkan jujukan sejauh mana yang diperlukan.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Lengkapkan jujukan 7, 11, 15, 19, ... dengan mencari T5 dan T6.",
    steps: [
      "Cari beza tetap: 11 − 7 = 4, 15 − 11 = 4, 19 − 15 = 4 → beza tetap +4",
      "T5 = T4 + 4 = 19 + 4 = 23",
      "T6 = T5 + 4 = 23 + 4 = 27",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Lengkapkan jujukan: 40, 34, 28, 22, __, __",
    choices: ["16, 10", "18, 14", "16, 12", "20, 16"],
    answer: "16, 10",
    feedbackCorrect: "Tepat! Beza tetap ialah −6, jadi 22 − 6 = 16, dan 16 − 6 = 10.",
    feedbackIncorrect: "Belum tepat. Cari dulu beza tetap: 34−40=−6, 28−34=−6, 22−28=−6 → −6 setiap kali.",
  },
};
