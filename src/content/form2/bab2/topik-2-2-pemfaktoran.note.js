// Kandungan Nota Interaktif — Form 2, Bab 2, Topik 2.2 (Pemfaktoran).
// DSKP SK 2.2: menghubungkaitkan pendaraban ungkapan algebra dengan konsep
// faktor dan pemfaktoran; memfaktorkan ungkapan algebra dengan pelbagai
// kaedah; menyelesaikan masalah yang melibatkan pemfaktoran. Pemfaktoran
// ialah SONGSANGAN kepada kembangan (Topik 2.1).
export const notaPemfaktoranContent = {
  visualType: "distribution",

  hook: {
    mentorLine: "Kita dah tahu macam mana nak KEMBANGKAN kurungan — sekarang jom belajar cara BALIKKAN proses tu.",
    title: "Resit Bengkel Seni yang Hilang Butiran",
    body:
      "Ingat resit set warna untuk bengkel seni tadi? Katakan kau cuma nampak jumlah AKHIR: 12x + 16 set " +
      "warna — tanpa nyatakan berapa banyak bengkel, atau berapa set asal setiap bengkel perlukan. Macam " +
      "mana nak 'balikkan' proses kembangan tadi untuk cari balik struktur asal (bilangan bengkel × bekalan " +
      "setiap bengkel)?",
  },

  exploration: {
    mentorLine: "Jom kita dedahkan struktur tersembunyi di sebalik 12x + 16, kumpulan demi kumpulan.",
    prompt:
      "Klik \"Agihkan kumpulan seterusnya\" untuk dedahkan bagaimana 12x + 16 sebenarnya terbina daripada " +
      "beberapa kumpulan (3x + 4) yang SAMA. Kira berapa banyak kumpulan yang terbentuk.",
    multiplier: 4,
    coefficient: 3,
    constant: 4,
  },

  insight: {
    mentorLine: "Perasan macam mana 12x + 16 'terurai' balik kepada bentuk asal?",
    title: "Pemfaktoran = Songsangan Kembangan",
    body:
      "12x + 16 sebenarnya terbina daripada 4 kumpulan (3x + 4) — iaitu 4(3x + 4). Proses \"mengurai\" " +
      "ungkapan yang telah dikembang balik kepada bentuk faktor × kurungan dipanggil PEMFAKTORAN " +
      "(factorization) — SONGSANGAN tepat kepada kembangan. Untuk faktorkan kax + kb, kita cari nombor " +
      "TERBESAR yang boleh membahagi tepat KEDUA-DUA sebutan (ka dan kb) — nombor ini dipanggil FAKTOR " +
      "SEPUNYA TERBESAR (FSTB, atau GCF). Sebaik sahaja FSTB dijumpai, bahagikan setiap sebutan dengan FSTB " +
      "tersebut untuk dapatkan isi kurungan.",
  },

  formula: {
    mentorLine: "Ini kaedah rasmi memfaktorkan — simpan dalam kepala kamu.",
    title: "Kaedah FSTB (Faktor Sepunya Terbesar)",
    expression: "kax + kb = k(ax + b)",
    body:
      "Langkah memfaktorkan kax + kb: (1) Cari FSTB bagi pekali x (iaitu ka) dan sebutan malar (iaitu kb). " +
      "(2) Bahagikan KEDUA-DUA sebutan dengan FSTB tersebut untuk dapatkan isi kurungan. (3) Tulis dalam " +
      "bentuk FSTB(isi kurungan). Contoh: bagi 15x + 20, FSTB(15, 20) = 5, jadi 15x ÷ 5 = 3x dan 20 ÷ 5 = 4, " +
      "hasilnya 5(3x + 4). Untuk SAHKAN jawapan kamu betul, kembangkan semula bentuk faktor tu — patut kembali " +
      "kepada ungkapan asal.",
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Faktorkan 15x + 20 sepenuhnya",
    steps: [
      "Cari FSTB bagi 15 dan 20: FSTB(15, 20) = 5",
      "Bahagikan setiap sebutan dengan 5: 15x ÷ 5 = 3x, dan 20 ÷ 5 = 4",
      "Tulis dalam bentuk faktor: 15x + 20 = 5(3x + 4)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah Faktor Sepunya Terbesar (FSTB) bagi 8x dan 12?",
    choices: ["4", "2", "6", "24"],
    answer: "4",
    feedbackCorrect: "Tepat! 8 = 4 × 2, dan 12 = 4 × 3, jadi FSTB(8, 12) = 4.",
    feedbackIncorrect: "Belum tepat. Cari nombor TERBESAR yang boleh bahagi tepat kedua-dua 8 dan 12 — itu 4.",
  },
};
