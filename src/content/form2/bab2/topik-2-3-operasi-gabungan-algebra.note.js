// Kandungan Nota Interaktif — Form 2, Bab 2, Topik 2.3 (Ungkapan Algebra dan
// Hukum Operasi Asas Aritmetik). DSKP SK 2.3: melaksanakan penambahan,
// penolakan, pendaraban dan pembahagian ungkapan algebra yang melibatkan
// kembangan dan pemfaktoran; melaksanakan gabungan operasi. Topik ni
// gabungkan kemahiran Topik 2.1 (kembangan) + Topik 2.2 (pemfaktoran) +
// kemahiran sebutan serupa dari Tingkatan 1.
export const notaOperasiGabunganContent = {
  visualType: "like-terms",

  hook: {
    mentorLine: "Sekarang kita gabungkan kembangan dengan kemahiran sebutan serupa yang kau dah tahu.",
    title: "Belanja di Dua Kedai",
    body:
      "Aiman beli barang keperluan projek sekolah di dua kedai berbeza. Kedai A kenakan (2x + 8) ringgit, " +
      "dan Kedai B kenakan (3x − 3) ringgit, di mana x mewakili bilangan set yang sama dibeli di kedua-dua " +
      "kedai. Berapakah JUMLAH KESELURUHAN perbelanjaan Aiman, dalam bentuk ungkapan yang paling ringkas?",
  },

  exploration: {
    mentorLine: "Selepas kembangkan kedua-dua bahagian, ada 2x daripada Kedai A dan 3x daripada Kedai B — jom gabungkan.",
    prompt:
      "Kedai A memberi 2x (selepas kembang), dan Kedai B memberi 3x (selepas kembang). Klik \"Gabungkan " +
      "Sebutan Serupa\" untuk cantumkan kedua-duanya.",
    termLabel: "x",
    countA: 2,
    countB: 3,
  },

  insight: {
    mentorLine: "Perasan kenapa kita boleh terus gabungkan macam tu?",
    title: "Kembang Dahulu, Baru Gabungkan Sebutan Serupa",
    bullets: [
      "2(x + 4) + 3(x − 1): pertama, kembangkan KEDUA-DUA bahagian secara berasingan — 2(x + 4) = 2x + 8, dan 3(x − 1) = 3x − 3.",
      "Selepas dikembang, kita ada EMPAT sebutan: 2x, 8, 3x, dan −3.",
      "Sekarang kumpulkan SEBUTAN SERUPA — sebutan x dengan sebutan x (2x + 3x = 5x), dan sebutan malar dengan sebutan malar (8 + (−3) = 5). Jumlah keseluruhan perbelanjaan Aiman ialah 5x + 5 ringgit.",
    ],
  },

  formula: {
    mentorLine: "Ini prosedur rasmi untuk operasi gabungan ungkapan algebra — simpan dalam kepala kamu.",
    title: "Prosedur Operasi Gabungan",
    expression: "kembang → kumpul sebutan serupa → jumlah/tolak",
    bullets: [
      "Untuk permudahkan ungkapan yang melibatkan beberapa kurungan: (1) KEMBANGKAN setiap kurungan dahulu (guna kaedah Topik 2.1). (2) KUMPULKAN sebutan serupa — semua sebutan-x bersama, semua sebutan malar bersama. (3) TAMBAH atau TOLAK ikut tanda masing-masing.",
      "PERHATIAN KHAS bila ada TANDA TOLAK di depan kurungan (cth. a − k(bx + c)): tanda tolak itu perlu diagihkan sekali kepada SETIAP sebutan dalam kurungan tersebut, sama macam kembangan biasa tapi guna pendarab NEGATIF.",
      "Contoh: −2(x − 4) = (−2)(x) + (−2)(−4) = −2x + 8 — dua tanda negatif (−2 didarab dengan −4) bertukar jadi positif +8. Ini kesilapan paling biasa dalam topik ni — sentiasa semak semula tanda selepas mendarab.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Permudahkan 4(x + 2) + 3(x − 5)",
    steps: [
      "Kembangkan bahagian pertama: 4(x + 2) = 4x + 8",
      "Kembangkan bahagian kedua: 3(x − 5) = 3x − 15",
      "Kumpul sebutan serupa: (4x + 3x) + (8 − 15) = 7x + (−7) = 7x − 7",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Permudahkan 2(x + 3) + 5(x − 1)",
    choices: ["7x + 1", "7x + 11", "7x − 1", "2x + 11"],
    answer: "7x + 1",
    feedbackCorrect: "Tepat! 2(x+3)=2x+6 dan 5(x−1)=5x−5. Gabung: (2x+5x)+(6−5) = 7x + 1.",
    feedbackIncorrect: "Belum tepat. Kembangkan dahulu kedua-dua bahagian (2x+6 dan 5x−5), baru gabungkan sebutan serupa.",
  },
};
