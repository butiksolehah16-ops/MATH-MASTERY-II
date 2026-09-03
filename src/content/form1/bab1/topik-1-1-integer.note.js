// Kandungan Nota Interaktif — Bab 1, Topik 1.1 (Integer), GOLD TEMPLATE.
// Fokus spec (ms. 85): operasi TOLAK NOMBOR NEGATIF — bahagian yang paling
// kerap mengelirukan pelajar (dua tanda negatif bertukar positif), bukan
// sekadar tolak biasa yang beri jawapan negatif. Nota ditulis lengkap &
// berdikari (self-contained) supaya pelajar faham penuh tanpa perlu rujuk
// sumber lain — matlamat app sebagai tempat ulangkaji utama, bukan buku teks
// tambahan.
export const notaIntegerContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Ini jenis soalan yang selalu buat orang terkejut — jom kita siasat sama-sama.",
    title: "Suhu yang Melonjak",
    body:
      "Semalam, satu kawasan pergunungan mencatatkan suhu malam yang sangat sejuk: −7°C. Tapi bila matahari " +
      "terbit pagi ni, suhu melonjak naik kepada 3°C. Ramai yang tertanya-tanya: berapa BESAR sebenarnya " +
      "perubahan suhu ni? Nampak senang kan — tapi bila salah satu suhu tu negatif, ramai jadi keliru macam " +
      "mana nak kira bezanya. Jom kita selesaikan sendiri, langkah demi langkah.",
  },

  exploration: {
    mentorLine: "Untuk cari BEZA antara dua suhu, kita ukur jarak antara keduanya di atas garis nombor.",
    prompt:
      "Mula dari suhu paling sejuk (−7°C). Klik \"Langkah\" untuk gerak ke KANAN sehingga sampai ke suhu " +
      "pagi (3°C). Kira berapa langkah yang kamu ambil — itulah beza suhunya.",
    start: -7,
    steps: 10,
    unitLabel: "°C",
  },

  insight: {
    mentorLine: "Perasan apa yang baru berlaku?",
    title: "10 Langkah — Kenapa Bukan Nombor Kecil?",
    bullets: [
      "Kamu baru sahaja mengira 3 − (−7), dan jawapannya 10 — bukan nombor kecil macam yang disangka kebanyakan orang! Ini kerana bila kita TOLAK nombor NEGATIF, kesannya SAMA seperti kita TAMBAH nombor positif tu.",
      "Fikirkan macam ni: kalau seseorang \"membatalkan\" hutang RM7 kamu, duit kamu BERTAMBAH RM7, bukan berkurang.",
      "\"Tolak (−7)\" ialah macam \"membatalkan\" −7 — kesannya sama seperti \"tambah 7\". Dua tanda negatif yang bertembung (tanda tolak, diikuti nombor negatif) bertukar menjadi tanda positif.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi yang merangkumi semua kes tolak integer — simpan dalam kepala kamu.",
    title: "Formula Rasmi",
    expression: "a − b = a + (−b)",
    bullets: [
      "Untuk sebarang dua nombor a dan b: menolak b sama dengan menambah songsangannya, iaitu (−b).",
      "Bila b sendiri sudah negatif (contohnya b = −7), songsangannya (−b) menjadi POSITIF (+7). Itulah sebabnya a − (−7) = a + 7 — dua tanda negatif bertukar jadi satu tanda positif.",
      "Kalau b positif macam biasa (cth. b = 7), formula ni tetap berfungsi: a − 7 = a + (−7), iaitu gerak ke KIRI seperti biasa.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah, supaya betul-betul mantap.",
    title: "Contoh Diselesaikan",
    problem: "Kirakan 5 − (−9)",
    steps: [
      "5 − (−9) = 5 + 9     — tolak nombor negatif (−9) bertukar jadi tambah nombor positif 9",
      "Kedua-dua nombor kini positif → terus tambah macam biasa",
      "= 5 + 9 = 14",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "(−4) − (−10) = ?",
    choices: ["6", "−6", "14", "−14"],
    answer: "6",
    feedbackCorrect: "Tepat! (−4) − (−10) = (−4) + 10 = 6.",
    feedbackIncorrect:
      "Belum tepat. Cuba ingat: tolak nombor negatif (−10) bertukar jadi tambah 10, jadi (−4) + 10.",
  },
};
