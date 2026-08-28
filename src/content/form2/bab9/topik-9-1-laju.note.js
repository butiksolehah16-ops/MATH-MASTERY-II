// Kandungan Nota Interaktif — Form 2, Bab 9, Topik 9.1 (Laju). DSKP SK
// 9.1: menerangkan maksud laju, memerihal laju seragam dan tak seragam,
// melaksanakan pengiraan laju dan laju purata termasuk penukaran unit,
// menyelesaikan masalah yang melibatkan laju.
export const notaLajuContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Bila kita cakap 'kereta tu bergerak 90 km/j', sebenarnya kita cakap pasal LAJU — kadar jarak berbanding masa.",
    title: "Perjalanan Jauh Bersama Keluarga",
    body:
      "Sebuah keluarga memandu dari satu bandar ke bandar lain. Untuk anggarkan berapa lama perjalanan akan " +
      "ambil masa, mereka perlu tahu LAJU kereta — iaitu berapa jauh kereta bergerak untuk setiap SEJAM.",
  },

  exploration: {
    mentorLine: "Jom dedah jarak yang dilalui kereta pada hujung setiap jam.",
    prompt:
      "Sebuah kereta bergerak dengan laju SERAGAM (tetap). Klik \"Tambah palang seterusnya\" untuk dedah " +
      "jarak dilalui pada hujung Jam 1, Jam 2, dan Jam 3.",
    categories: ["Jam 1", "Jam 2", "Jam 3"],
    values: [60, 60, 60],
  },

  insight: {
    mentorLine: "Perasan jarak yang ditambah SETIAP jam adalah SAMA?",
    title: "Laju Seragam = Jarak Sama Setiap Unit Masa",
    body:
      "Kereta tu bergerak 60 km SETIAP jam — tiada perubahan. Ini dipanggil LAJU SERAGAM. Jika jarak yang " +
      "dilalui berbeza-beza setiap jam (kadang laju, kadang perlahan), itu LAJU TAK SERAGAM — dan kita guna " +
      "LAJU PURATA (jumlah jarak ÷ jumlah masa) untuk gambarkan pergerakan keseluruhan.",
  },

  formula: {
    mentorLine: "Ini formula rasmi laju — simpan dalam kepala kamu.",
    title: "Formula Laju",
    expression: "Laju = Jarak ÷ Masa   |   Laju Purata = Jumlah Jarak ÷ Jumlah Masa",
    body:
      "LAJU = JARAK ÷ MASA (unit biasa: km/j atau m/s). Daripada rumus ni, kita juga boleh susun semula: " +
      "JARAK = Laju × Masa, dan MASA = Jarak ÷ Laju. LAJU PURATA (untuk perjalanan tak seragam) = Jumlah " +
      "Jarak ÷ Jumlah Masa. PENUKARAN UNIT: km/j → m/s (bahagi dengan 3.6), m/s → km/j (darab dengan 3.6).",
  },

  example: {
    mentorLine: "Jom kita kira laju, kemudian tukar unit, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kereta menempuh 180 km dalam masa 5 jam. Cari lajunya dalam km/j, kemudian tukar kepada m/s.",
    steps: [
      "Laju = Jarak ÷ Masa = 180 ÷ 5 = 36 km/j",
      "Tukar kepada m/s: bahagi dengan 3.6",
      "36 ÷ 3.6 = 10 m/s",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah basikal menempuh 20 km dalam masa 4 jam. Apakah laju basikal itu (km/j)?",
    choices: ["5", "80", "24", "16"],
    answer: "5",
    feedbackCorrect: "Tepat! Laju = 20 ÷ 4 = 5 km/j.",
    feedbackIncorrect: "Belum tepat. Guna Laju = Jarak ÷ Masa: 20 ÷ 4.",
  },
};
