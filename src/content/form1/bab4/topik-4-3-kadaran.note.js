// Kandungan Nota Interaktif — Bab 4, Topik 4.3 (Kadaran).
// Fokus: kadaran (proportion) sebagai dua nisbah yang sama nilai, diselesaikan
// dengan kaedah unit (skip-count guna garis nombor) atau pendaraban silang.
export const notaKadaranContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Sambung dari kadar — kali ni kita guna kadar untuk cari nilai yang TAK DIKETAHUI.",
    title: "Resipi Kek Aisyah",
    body:
      "Sebuah resipi kek untuk 4 orang perlukan 200g tepung. Kalau Aisyah nak masak untuk 6 orang, berapa " +
      "gram tepung yang diperlukan (nisbah tepung:orang kekal sama)?",
  },

  exploration: {
    mentorLine: "Jom kita cari dulu berapa gram tepung diperlukan bagi SATU orang — lompat dengan saiz tu sehingga sampai 200 (4 orang).",
    prompt: "Klik \"Langkah\" untuk lompat dengan saiz 50 (tepung setiap orang), sehingga cuba sampai ke 200.",
    start: 0,
    steps: 200,
    stepUnit: 50,
    stepLabel: "Orang",
    min: 0,
    max: 220,
  },

  insight: {
    mentorLine: "Perasan berapa lompatan yang diperlukan untuk sampai ke 200?",
    title: "50g Seorang — Ini Kadaran!",
    body:
      "Kau baru lompat 4 kali dengan saiz 50 untuk sampai ke 200 (guna 4 orang). Ini bermakna SETIAP orang " +
      "perlukan 50g tepung. Sebab nisbah tepung:orang mesti KEKAL SAMA (berkadar terus), untuk 6 orang kita " +
      "perlukan 50 × 6 = 300g tepung. Ini dipanggil KADARAN (proportion) — dua nisbah yang bernilai SAMA.",
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "a:b = c:d bermaksud a × d = b × c",
    body:
      "Dua nisbah a:b dan c:d dikatakan BERKADARAN jika nilainya SAMA apabila dipermudahkan. KAEDAH UNIT: " +
      "cari nilai SATU unit dahulu (bahagi), kemudian darab dengan bilangan unit yang dikehendaki. KAEDAH " +
      "PENDARABAN SILANG: jika a:b = c:d, maka a × d = b × c — berguna bila kita perlu cari nilai yang tak " +
      "diketahui terus tanpa cari nilai unit dahulu.",
  },

  example: {
    mentorLine: "Jom kita selesaikan kadaran guna pendaraban silang, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kadaran a:12 = 3:4. Cari nilai a",
    steps: [
      "a:12 = 3:4 bermaksud a × 4 = 12 × 3 (pendaraban silang)",
      "12 × 3 = 36",
      "a × 4 = 36, jadi a = 36 ÷ 4 = 9",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Jika 3:5 = 12:x, apakah nilai x?",
    choices: ["20", "15", "25", "10"],
    answer: "20",
    feedbackCorrect: "Tepat! 3 × x = 5 × 12, jadi 3x = 60, x = 20.",
    feedbackIncorrect: "Belum tepat. Guna pendaraban silang: 3 × x = 5 × 12.",
  },
};
