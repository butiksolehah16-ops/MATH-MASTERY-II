// Kandungan Nota Interaktif — Form 2, Bab 6, Topik 6.1 (Sifat Geometri
// Bentuk Tiga Dimensi). DSKP SK 6.1: membanding, membeza dan mengklasifikasi
// bentuk tiga dimensi termasuk prisma, piramid, silinder, kon dan sfera,
// seterusnya menghuraikan sifat geometrinya.
export const notaSifatBentuk3dContent = {
  visualType: "shape-properties",

  hook: {
    mentorLine: "Bab baharu — kita tinggalkan dunia rata (2D) dan masuk dunia PEPEJAL (3D)!",
    title: "Bengkel Pertukangan Kayu",
    body:
      "Seorang tukang kayu membuat pelbagai hiasan: kotak berbentuk kuboid, bumbung rumah miniatur berbentuk " +
      "piramid, tin simpanan berbentuk silinder, corong berbentuk kon, dan bola hiasan berbentuk sfera. Untuk " +
      "kira bahan yang diperlukan bagi setiap bentuk, dia perlu kenal pasti berapa banyak MUKA, TEPI, dan " +
      "BUCU yang dimiliki setiap satu.",
  },

  exploration: {
    mentorLine: "Jom kita bandingkan lima bentuk tiga dimensi ni satu demi satu.",
    prompt: "Klik \"Bentuk seterusnya\" untuk lihat kuboid, piramid, silinder, kon, dan sfera — perhatikan bilangan muka, tepi, dan bucu setiap satu.",
  },

  insight: {
    mentorLine: "Perasan macam mana bentuk melengkung (silinder, kon, sfera) berbeza daripada bentuk bersudut tajam?",
    title: "Muka, Tepi, dan Bucu",
    figure: "shapes-3d",
    bullets: [
      "MUKA (face) ialah permukaan rata ATAU melengkung yang membentuk sempadan luar sesuatu pepejal. TEPI (edge) ialah garis di mana DUA muka bertemu. BUCU (vertex) ialah titik di mana tepi-tepi bertemu.",
      "Bentuk bersudut tajam macam KUBOID dan PIRAMID ada muka rata sahaja, dengan tepi dan bucu yang jelas.",
      "Bentuk melengkung macam SILINDER, KON, dan SFERA ada sekurang-kurangnya SATU muka melengkung — sfera malah tiada tepi atau bucu langsung, sebab keseluruhan permukaannya melengkung sekata.",
    ],
  },

  formula: {
    mentorLine: "Ini fakta menarik yang berfungsi untuk SEMUA pepejal bersudut tajam — simpan dalam kepala kamu.",
    title: "Formula Euler untuk Pepejal Bersudut Tajam",
    expression: "Muka + Bucu − Tepi = 2",
    bullets: [
      "Bagi SEBARANG pepejal bersudut tajam (kuboid, piramid, prisma — bukan bentuk melengkung), terdapat perkaitan istimewa: MUKA + BUCU − TEPI SENTIASA bersamaan 2. Cth. kuboid: 6 muka + 8 bucu − 12 tepi = 2.",
      "Perkaitan ni berguna untuk cari SATU nilai (muka, tepi, atau bucu) apabila DUA nilai yang lain diketahui.",
    ],
  },

  example: {
    mentorLine: "Jom kita sahkan formula Euler, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kuboid mempunyai 6 muka dan 8 bucu. Guna formula Euler, cari bilangan tepinya.",
    steps: [
      "Formula Euler: Muka + Bucu − Tepi = 2",
      "Gantikan: 6 + 8 − Tepi = 2, iaitu 14 − Tepi = 2",
      "Tepi = 14 − 2 = 12",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah piramid tegak segi empat sama mempunyai 5 muka dan 5 bucu. Guna Euler (Muka+Bucu−Tepi=2), berapakah bilangan tepinya?",
    choices: ["8", "10", "6", "12"],
    answer: "8",
    feedbackCorrect: "Tepat! 5 + 5 − Tepi = 2, jadi Tepi = 10 − 2 = 8.",
    feedbackIncorrect: "Belum tepat. Guna Muka + Bucu − Tepi = 2: 5 + 5 − Tepi = 2.",
  },
};
