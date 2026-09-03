// Kandungan Nota Interaktif — Form 2, Bab 6, Topik 6.2 (Bentangan Bentuk
// Tiga Dimensi). DSKP SK 6.2: menganalisis pelbagai bentangan termasuk
// piramid, prisma, silinder dan kon, seterusnya melukis bentangan dan
// membina model.
export const notaBentanganBentuk3dContent = {
  visualType: "cube-net",

  hook: {
    mentorLine: "Sekarang kita 'buka rata' bentuk tiga dimensi supaya boleh dicetak atas kertas!",
    title: "Kilang Kotak Hadiah",
    body:
      "Sebuah kilang percetakan nak cetak corak RATA (bentangan) atas kadbod, yang kemudian akan dipotong dan " +
      "dilipat untuk membentuk kotak hadiah berbentuk kubus. Berapa banyak kepingan segi empat sama " +
      "diperlukan, dan macam mana susunannya supaya boleh dilipat dengan kemas?",
  },

  exploration: {
    mentorLine: "Jom kita dedah setiap muka dalam bentangan kubus ni satu demi satu.",
    prompt: "Klik \"Dedah muka seterusnya\" untuk lihat keenam-enam muka kubus disusun dalam bentuk bentangan (net).",
  },

  insight: {
    mentorLine: "Perasan yang bentangan tu sebenarnya SEMUA muka kubus, cuma disusun rata?",
    title: "Bentangan = Bentuk 3D 'Dibuka Rata'",
    bullets: [
      "BENTANGAN (net) ialah bentuk DUA DIMENSI yang, apabila DILIPAT sepanjang garis-garis tertentu, membentuk semula bentuk TIGA DIMENSI asal. Bentangan kubus yang kau lihat tu terdiri daripada 6 kepingan segi empat sama — SAMA dengan bilangan muka kubus.",
      "Ini corak am: BILANGAN KEPINGAN dalam sesuatu bentangan SENTIASA sama dengan BILANGAN MUKA bentuk 3D asalnya.",
      "Terdapat BEBERAPA susunan bentangan yang sah untuk bentuk yang sama (bukan hanya satu) — asalkan semua muka disertakan dan boleh dilipat kembali dengan betul.",
    ],
  },

  formula: {
    mentorLine: "Ini corak am bentangan untuk pelbagai bentuk — simpan dalam kepala kamu.",
    title: "Bentangan Pelbagai Bentuk",
    expression: "Bilangan kepingan bentangan = Bilangan muka bentuk asal",
    bullets: [
      "PRISMA: bentangannya terdiri daripada DUA muka tapak (kongruen) + beberapa muka sisi segi empat tepat (bilangan bergantung bilangan sisi tapak).",
      "PIRAMID: SATU muka tapak + beberapa muka sisi segi tiga (bilangan sama dengan bilangan sisi tapak).",
      "SILINDER: DUA bulatan (tapak atas & bawah) + SATU segi empat tepat (permukaan melengkung dibuka rata).",
      "KON: SATU bulatan (tapak) + SATU sektor (permukaan melengkung dibuka rata).",
    ],
  },

  example: {
    mentorLine: "Jom kita analisis satu bentangan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Sebuah prisma segi tiga mempunyai 5 muka (2 segi tiga tapak + 3 segi empat tepat sisi). Berapakah " +
      "jumlah kepingan dalam bentangannya?",
    steps: [
      "Bilangan kepingan bentangan = bilangan muka bentuk asal",
      "Prisma segi tiga ini ada 5 muka kesemuanya",
      "Jadi bentangannya ada 5 kepingan",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah kuboid mempunyai 6 muka. Berapakah bilangan segi empat tepat dalam bentangannya?",
    choices: ["6", "4", "8", "12"],
    answer: "6",
    feedbackCorrect: "Tepat! Bilangan kepingan = bilangan muka = 6.",
    feedbackIncorrect: "Belum tepat. Bilangan kepingan dalam bentangan SENTIASA sama dengan bilangan muka bentuk asal.",
  },
};
