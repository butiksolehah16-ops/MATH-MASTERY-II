// Kandungan Nota Interaktif — Form 2, Bab 3, Topik 3.1 (Rumus Algebra).
// DSKP SK 3.1: membentuk rumus berdasarkan suatu situasi; menukar perkara
// rumus bagi suatu persamaan algebra; menentukan nilai suatu pemboleh ubah
// apabila nilai pemboleh ubah lain diberi; menyelesaikan masalah yang
// melibatkan rumus.
export const notaRumusAlgebraContent = {
  visualType: "variable-box",

  hook: {
    mentorLine: "Bab baharu — kita belajar cara tulis PERKAITAN antara dua nilai sebagai satu formula ringkas.",
    title: "Beza Umur Ahmad dan Adiknya",
    body:
      "Adik Ahmad SENTIASA 5 tahun lebih muda daripada Ahmad — tak kira umur Ahmad berapa pun sekarang, " +
      "beza umur mereka kekal sama. Kalau umur Ahmad ialah a, macam mana kita tulis umur adiknya (b) dalam " +
      "SATU persamaan ringkas yang berfungsi untuk SEBARANG umur Ahmad?",
  },

  exploration: {
    mentorLine: "Jom cuba beberapa umur Ahmad yang berbeza, dan lihat macam mana umur adiknya berubah.",
    prompt: "Klik butang untuk cuba nilai a (umur Ahmad) yang berbeza-beza — lihat macam mana b berubah.",
    variableLabel: "a",
    resultLabel: "b",
    constant: -5,
    steps: 4,
    startValue: 10,
  },

  insight: {
    mentorLine: "Perasan corak yang kekal sama walaupun umur Ahmad berubah?",
    title: "Rumus = Perkaitan yang Berfungsi untuk SEBARANG Nilai",
    body:
      "Tak kira umur Ahmad (a) berapa, umur adiknya (b) SENTIASA a − 5. Persamaan b = a − 5 dipanggil RUMUS " +
      "(formula) — satu persamaan yang menyatakan PERKAITAN tetap antara dua atau lebih pemboleh ubah, dan " +
      "boleh digunakan untuk cari satu nilai apabila nilai yang lain diketahui. Rumus digunakan dengan meluas " +
      "dalam kehidupan sebenar — cth. rumus luas, rumus kos, rumus penukaran unit — semuanya menyatakan " +
      "perkaitan tetap antara pemboleh ubah yang berkaitan.",
  },

  formula: {
    mentorLine: "Ini tiga kemahiran rasmi yang kau perlukan untuk topik ni — simpan dalam kepala kamu.",
    title: "Tiga Kemahiran Utama Rumus",
    expression: "Bentuk → Gantikan → Ubah Perkara",
    body:
      "(1) MEMBENTUK RUMUS daripada situasi: tukar penerangan perkataan kepada persamaan algebra. Cth. " +
      "\"kuasa dua suatu nombor ialah sembilan\" → x² = 9.\n\n" +
      "(2) MENGGANTIKAN NILAI untuk cari pemboleh ubah lain: jika rumus dan SATU nilai pemboleh ubah " +
      "diketahui, gantikan terus untuk cari nilai yang satu lagi. Cth. bagi K = 3n + 10, jika n = 5, maka " +
      "K = 3(5) + 10 = 25.\n\n" +
      "(3) MENGUBAH PERKARA RUMUS (mencari pemboleh ubah yang \"tersorok\" di sebalik pekali/pemalar): guna " +
      "OPERASI SONGSANGAN pada KEDUA-DUA BELAH persamaan — sama macam kaedah penimbang yang kau dah belajar " +
      "untuk selesaikan persamaan linear. Cth. bagi K = 3n + 10, jika K = 40: tolak 10 dari kedua-dua belah " +
      "(30 = 3n), kemudian bahagi kedua-dua belah dengan 3 (n = 10).",
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kos, K (RM) diberi oleh rumus K = 3n + 10, dengan n ialah bilangan item. Jika K = 40, cari n.",
    steps: [
      "Gantikan K = 40 ke dalam rumus: 40 = 3n + 10",
      "Tolak 10 daripada kedua-dua belah: 40 − 10 = 3n, iaitu 30 = 3n",
      "Bahagikan kedua-dua belah dengan 3: n = 30 ÷ 3 = 10",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Diberi rumus P = 4s (P ialah perimeter segi empat sama, s ialah panjang sisi). Jika s = 7, apakah nilai P?",
    choices: ["28", "11", "3", "49"],
    answer: "28",
    feedbackCorrect: "Tepat! Gantikan s = 7 ke dalam rumus: P = 4 × 7 = 28.",
    feedbackIncorrect: "Belum tepat. Gantikan terus s = 7 ke dalam rumus P = 4s: P = 4 × 7.",
  },
};
