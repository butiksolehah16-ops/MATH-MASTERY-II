// Kandungan Nota Interaktif — Form 2, Bab 5, Topik 5.2 (Sifat Simetri
// Perentas). DSKP SK 5.2: menentusahkan dan menerangkan sifat simetri
// perentas bulatan; menyelesaikan masalah yang melibatkan sifat tersebut.
export const notaSimetriPerentasContent = {
  visualType: "chord-bisector",

  hook: {
    mentorLine: "Sekarang kita terokai sifat istimewa PERENTAS dalam bulatan.",
    title: "Jambatan Gantung Berbentuk Lengkuk Bulatan",
    body:
      "Seorang jurutera nak pasang tiang penyokong tepat di TENGAH-TENGAH kabel (perentas) yang melintasi " +
      "lengkuk bulatan sebuah jambatan, supaya beban seimbang di kedua-dua belah. Tapi kabel tu sangat " +
      "panjang dan sukar diukur terus. Adakah ada cara lain untuk cari titik tengah kabel dengan tepat?",
  },

  exploration: {
    mentorLine: "Jom lukis perentas, kemudian serenjang dari pusat bulatan ke perentas tersebut.",
    prompt: "Klik butang untuk lukis perentas AB, kemudian serenjang dari pusat O, dan lihat apa yang berlaku.",
  },

  insight: {
    mentorLine: "Perasan apa yang berlaku pada titik M?",
    title: "Serenjang dari Pusat SENTIASA Membahagi Dua Sama Perentas",
    body:
      "Kau baru nampak: garis serenjang dari pusat O ke perentas AB bertemu AB tepat di titik tengahnya, M " +
      "— jadi AM = MB. Ini bermakna jurutera boleh cari titik tengah kabel dengan lukis garis SERENJANG dari " +
      "pusat lengkuk ke kabel tersebut, TANPA perlu ukur sepanjang kabel itu sendiri!",
  },

  formula: {
    mentorLine: "Ini kelima-lima sifat rasmi simetri perentas — simpan dalam kepala kamu.",
    title: "Sifat Simetri Perentas",
    expression: "Serenjang dari pusat ke perentas → membahagi dua sama perentas itu",
    body:
      "(i) DIAMETER ialah paksi simetri bulatan. (ii) JEJARI yang BERSERENJANG dengan perentas MEMBAHAGI DUA " +
      "SAMA perentas itu, dan sebaliknya (garis dari pusat yang membahagi dua sama perentas MESTI berserenjang " +
      "dengannya). (iii) PEMBAHAGI DUA SAMA SERENJANG bagi DUA perentas berbeza akan BERTEMU di PUSAT bulatan. " +
      "(iv) Perentas yang SAMA PANJANG menghasilkan LENGKOK yang sama panjang (sudut lengkok yang sama). " +
      "(v) Perentas yang SAMA PANJANG adalah SAMA JARAK daripada pusat bulatan, dan sebaliknya.",
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Perentas AB dalam bulatan berpusat O mempunyai panjang 16 cm. Garis OM berserenjang dengan AB di " +
      "titik M. Berapakah panjang AM?",
    steps: [
      "Sebab OM berserenjang dengan AB, OM membahagi AB kepada dua bahagian SAMA panjang: AM = MB",
      "AM = AB ÷ 2",
      "= 16 ÷ 2 = 8 cm",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Perentas PQ panjangnya 20 cm. Garis dari pusat O berserenjang dengan PQ di titik M. Apakah panjang PM?",
    choices: ["10", "20", "5", "15"],
    answer: "10",
    feedbackCorrect: "Tepat! PM = PQ ÷ 2 = 20 ÷ 2 = 10 cm.",
    feedbackIncorrect: "Belum tepat. Serenjang dari pusat membahagi dua sama perentas: PM = 20 ÷ 2.",
  },
};
