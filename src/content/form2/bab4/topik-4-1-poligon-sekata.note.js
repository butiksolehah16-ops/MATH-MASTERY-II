// Kandungan Nota Interaktif — Form 2, Bab 4, Topik 4.1 (Poligon Sekata).
// DSKP SK 4.1: menghuraikan sifat geometri poligon sekata menggunakan
// pelbagai perwakilan; membina poligon sekata menggunakan pelbagai kaedah.
export const notaPoligonSekataContent = {
  visualType: "polygon-diagonal",

  hook: {
    mentorLine: "Bab baharu — kita terokai POLIGON SEKATA! Jom mula dengan situasi sebenar.",
    title: "Petak Ubin Lantai Heksagon",
    body:
      "Encik Razak nak pasang ubin lantai berbentuk heksagon (6 sisi) supaya setiap keping ubin bertepatan " +
      "kemas antara satu sama lain tanpa lompang. Untuk pastikan semua ubin muat sekata, SETIAP keping mesti " +
      "ada sisi dan sudut yang SAMA. Apakah nama khas untuk bentuk yang semua sisi dan sudutnya sama?",
  },

  exploration: {
    mentorLine: "Jom perhatikan bentuk heksagon ni betul-betul sebelum kita terokai struktur dalamannya.",
    prompt:
      "Perhatikan: semua sisi heksagon ni nampak sama panjang, semua sudut nampak sama besar. Klik \"Lukis " +
      "pepenjuru\" untuk terokai struktur dalamannya.",
    sides: 6,
  },

  insight: {
    mentorLine: "Perasan yang bentuk ni nampak SAMA tak kira dari bucu mana kau tengok?",
    title: "Poligon Sekata = Semua Sisi DAN Semua Sudut Sama",
    body:
      "Heksagon yang kau lihat tu ialah POLIGON SEKATA (regular polygon) — SEMUA sisinya sama panjang, DAN " +
      "SEMUA sudut pedalamannya sama besar. KEDUA-DUA syarat ni perlu dipenuhi serentak — kalau hanya SATU " +
      "syarat sahaja dipenuhi (cth. segi empat tepat ada semua sudut sama 90° tetapi sisi TAK semua sama " +
      "panjang), bentuk itu masih POLIGON TAK SEKATA (irregular polygon). Poligon sekata juga mempunyai " +
      "PAKSI SIMETRI sebanyak bilangan sisinya — sebab bentuknya simetri sempurna di sekeliling.",
  },

  formula: {
    mentorLine: "Ini fakta rasmi poligon sekata — simpan dalam kepala kamu.",
    title: "Sifat Poligon Sekata",
    expression: "Bilangan sisi = Bilangan sudut = Bilangan paksi simetri = n",
    body:
      "Bagi poligon sekata bersisi n: bilangan SISI = bilangan SUDUT (sebab setiap bucu ada satu sudut) = " +
      "bilangan PAKSI SIMETRI (garis yang membahagi bentuk kepada dua bahagian cermin sama). Untuk sahkan " +
      "sesuatu poligon itu sekata, SEMAK DUA PERKARA: (1) ukur semua sisi — mesti sama panjang, dan (2) ukur " +
      "semua sudut pedalaman — mesti sama besar. Kedua-dua syarat WAJIB dipenuhi.",
  },

  example: {
    mentorLine: "Jom kita analisis satu poligon, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Sebuah poligon mempunyai 5 sisi yang sama panjang dan 5 sudut yang sama besar. (a) Apakah nama khas " +
      "untuk poligon ini? (b) Berapakah bilangan paksi simetrinya?",
    steps: [
      "(a) Sebab SEMUA sisi sama panjang DAN semua sudut sama besar, ini ialah PENTAGON SEKATA (regular pentagon)",
      "(b) Bilangan paksi simetri = bilangan sisi",
      "= 5 paksi simetri",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah oktagon sekata (8 sisi sama panjang, 8 sudut sama besar). Berapakah bilangan paksi simetrinya?",
    choices: ["8", "4", "6", "10"],
    answer: "8",
    feedbackCorrect: "Tepat! Bagi poligon sekata, bilangan paksi simetri = bilangan sisi = 8.",
    feedbackIncorrect: "Belum tepat. Bilangan paksi simetri poligon sekata SENTIASA sama dengan bilangan sisinya.",
  },
};
