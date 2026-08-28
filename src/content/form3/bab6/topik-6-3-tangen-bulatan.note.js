// Kandungan Nota Interaktif — Form 3, Bab 6, Topik 6.3 (Tangen kepada
// Bulatan). DSKP SK 6.3: mengenal dan memerihalkan tangen; membuat dan
// menentusahkan konjektur tentang sudut tangen-jejari, sifat dua tangen, dan
// sudut tangen-perentas dengan sudut tembereng selang-seli; menyelesaikan
// masalah (termasuk tangen sepunya).
export const notaTangenBulatanContent = {
  visualType: "tangent-circle",

  hook: {
    mentorLine: "Sekarang kita belajar tentang garis yang MENYENTUH bulatan pada SATU titik sahaja.",
    title: "Roda Basikal Menyentuh Jalan",
    body:
      "Bila sebuah roda basikal (bulatan) berhenti di atas jalan raya yang rata, roda tu MENYENTUH jalan " +
      "PADA SATU TITIK sahaja. Garis jalan tu dipanggil TANGEN kepada bulatan (roda). Ada satu perkaitan " +
      "geometri yang PASTI berlaku antara jejari roda (dari pusat ke titik sentuhan) dengan jalan tu — jom " +
      "kita siasat.",
  },

  exploration: {
    mentorLine: "Jom kita lukis jejari ke titik sentuhan P, kemudian lukis tangen pada P, dan lihat sudut antara keduanya.",
    prompt: "Klik butang untuk lukis jejari OP, kemudian tangen pada P, dan akhirnya tunjuk sudut di antara keduanya.",
  },

  insight: {
    mentorLine: "Perasan sudut antara jejari dan tangen tu SENTIASA 90°?",
    title: "Jejari SENTIASA Berserenjang dengan Tangen",
    body:
      "Kau baru nampak: jejari OP (dari pusat O ke titik sentuhan P) SENTIASA berserenjang (90°) dengan " +
      "TANGEN pada titik P tersebut. Ini SENTIASA benar tak kira di mana titik sentuhan P berada pada " +
      "bulatan. Sifat ni sangat berguna — ia bermakna segi tiga yang dibentuk oleh pusat O, titik sentuhan " +
      "P, dan mana-mana titik LUAR T pada tangen, ialah SEGI TIGA BERSUDUT TEGAK (sudut tegak di P) — jadi " +
      "kita boleh guna TEOREM PYTHAGORAS untuk cari panjang yang tak diketahui!",
  },

  formula: {
    mentorLine: "Ini TIGA sifat rasmi tangen kepada bulatan — simpan dalam kepala kamu.",
    title: "Sifat Tangen kepada Bulatan",
    expression: "OP ⊥ Tangen (pada titik sentuhan P)",
    body:
      "SIFAT 1 (Tangen-Jejari): Jejari ke titik sentuhan SENTIASA berserenjang (90°) dengan tangen pada " +
      "titik itu.\n\n" +
      "SIFAT 2 (Dua Tangen daripada Satu Titik): Jika DUA tangen dilukis daripada SATU titik luar T kepada " +
      "bulatan yang sama (menyentuh pada titik P dan Q), maka TP = TQ (kedua-dua tangen SAMA panjang), dan " +
      "garis OT (pusat ke titik luar) membahagi dua sama sudut PTQ (di antara dua tangen) SERTA sudut POQ " +
      "(di pusat).\n\n" +
      "SIFAT 3 (Sudut Tangen-Perentas): Sudut di antara TANGEN dengan PERENTAS yang dilukis daripada titik " +
      "sentuhan SAMA dengan sudut dalam TEMBERENG SELANG-SELI (alternate segment) — iaitu sudut lilitan " +
      "yang dicangkum oleh perentas itu pada bahagian bulatan yang bertentangan.\n\n" +
      "TANGEN SEPUNYA (common tangent): satu garis tangen kepada DUA bulatan serentak — jenis masalah ni " +
      "biasa gabungkan Sifat 1 dengan teorem Pythagoras.",
  },

  example: {
    mentorLine: "Jom kita guna teorem Pythagoras untuk cari panjang tangen, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Bulatan berpusat O berjejari 6 cm. Titik T di luar bulatan dengan OT = 10 cm. TP ialah tangen kepada bulatan (P titik sentuhan). Cari panjang TP.",
    steps: [
      "Sebab OP ⊥ TP (Sifat 1), segi tiga OPT ialah segi tiga bersudut tegak di P",
      "Guna Teorem Pythagoras: OT² = OP² + TP², jadi TP² = OT² − OP²",
      "TP² = 10² − 6² = 100 − 36 = 64, jadi TP = √64 = 8 cm",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Bulatan berjejari 5 cm, titik luar T dengan OT = 13 cm. Cari panjang tangen TP.",
    choices: ["12 cm", "18 cm", "8 cm", "10 cm"],
    answer: "12 cm",
    feedbackCorrect: "Tepat! TP² = OT² − OP² = 13² − 5² = 169 − 25 = 144, TP = 12 cm.",
    feedbackIncorrect: "Belum tepat. Guna Pythagoras: TP² = OT² − OP² = 13² − 5².",
  },
};
