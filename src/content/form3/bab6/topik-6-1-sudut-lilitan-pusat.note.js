// Kandungan Nota Interaktif — Form 3, Bab 6, Topik 6.1 (Sudut pada Lilitan
// dan Sudut Pusat yang Dicangkum oleh Suatu Lengkok). DSKP SK 6.1: membuat
// dan menentusahkan konjektur tentang hubungan sudut-sudut pada lilitan, dan
// sudut pada lilitan dengan sudut pusat, dicangkum oleh lengkok yang sama
// (termasuk sudut dalam semibulatan); menyelesaikan masalah.
export const notaSudutLilitanPusatContent = {
  visualType: "angle-sum",

  hook: {
    mentorLine: "Bab baharu — Sudut dalam BULATAN! Jom mula dengan situasi menarik.",
    title: "Kolam Bulat dan Dua Tiang",
    bullets: [
      "Beberapa orang pelajar berdiri di TITIK BERBEZA di tepi sebuah kolam berbentuk bulatan, semuanya di SATU sisi. Mereka semua melihat ke arah DUA tiang lampu di seberang kolam (dua titik tetap pada tepi kolam).",
      "Menariknya — walaupun mereka berdiri di tempat berlainan, SUDUT PANDANGAN (sudut di antara garis penglihatan ke kedua-dua tiang) adalah SAMA untuk semua! Kenapa ni boleh berlaku?",
    ],
  },

  exploration: {
    mentorLine: "Jom kita bina sudut PUSAT bagi satu lengkok, dan bandingkan dengan sudut LILITAN yang dicangkum lengkok sama.",
    prompt:
      "Sudut pada LILITAN yang dicangkum oleh satu lengkok ialah 35°. Klik \"Tambah 35°\" (dua kali) untuk " +
      "bina sudut PUSAT yang dicangkum oleh LENGKOK YANG SAMA, dan lihat berapa besar ia menjadi.",
    totalDegrees: 70,
    stepDegrees: 35,
  },

  insight: {
    mentorLine: "Perasan sudut pusat tu tepat DUA KALI ganda sudut lilitan?",
    title: "Sudut Pusat = 2 × Sudut Lilitan",
    bullets: [
      "Kau baru bina sudut pusat 70° — TEPAT dua kali ganda sudut lilitan 35° yang dicangkum LENGKOK YANG SAMA. Ini SENTIASA berlaku: SUDUT PUSAT yang dicangkum oleh sesuatu lengkok SENTIASA dua kali ganda SUDUT LILITAN yang dicangkum lengkok yang SAMA.",
      "Inilah jawapan kepada teka-teki kolam tadi juga — SEMUA sudut lilitan yang dicangkum oleh LENGKOK YANG SAMA (antara dua tiang tu) adalah SAMA besar, sebab semuanya berkait dengan SATU sudut pusat yang tetap.",
    ],
  },

  formula: {
    mentorLine: "Ini TIGA fakta rasmi sudut bulatan yang saling berkait — simpan dalam kepala kamu.",
    title: "Sudut Lilitan dan Sudut Pusat",
    expression: "Sudut Pusat = 2 × Sudut Lilitan (lengkok sama)",
    bullets: [
      "FAKTA 1: Sudut PUSAT yang dicangkum oleh sesuatu lengkok = 2 × sudut LILITAN yang dicangkum lengkok yang SAMA.",
      "FAKTA 2 (Sudut dalam Segmen Sama): Sudut-sudut LILITAN yang dicangkum oleh LENGKOK (atau perentas) yang SAMA adalah SAMA besar antara satu sama lain — tak kira di mana titik itu berada pada lilitan (asalkan pada segmen yang sama).",
      "FAKTA 3 (Sudut dalam Semibulatan): Sudut LILITAN yang dicangkum oleh DIAMETER (iaitu separuh bulatan/semibulatan) SENTIASA 90°. Ini kes KHAS Fakta 1 — sebab sudut pusat bagi diameter ialah 180° (garis lurus), maka sudut lilitan = 180° ÷ 2 = 90°.",
    ],
  },

  example: {
    mentorLine: "Jom kita gunakan ketiga-tiga fakta ni, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "(a) Sudut pusat yang dicangkum oleh lengkok AB ialah 100°. Cari sudut lilitan yang dicangkum lengkok " +
      "yang sama. (b) P, Q, R terletak pada lilitan bulatan, dengan PR sebagai DIAMETER. Cari sudut PQR.",
    steps: [
      "(a) Sudut lilitan = Sudut pusat ÷ 2 = 100° ÷ 2 = 50°",
      "(b) PR ialah diameter, jadi sudut PQR ialah sudut dalam semibulatan (Fakta 3)",
      "Sudut PQR = 90°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sudut lilitan yang dicangkum oleh lengkok CD ialah 42°. Apakah sudut pusat yang dicangkum lengkok yang sama?",
    choices: ["84°", "21°", "48°", "138°"],
    answer: "84°",
    feedbackCorrect: "Tepat! Sudut pusat = 2 × sudut lilitan = 2 × 42° = 84°.",
    feedbackIncorrect: "Belum tepat. Sudut pusat = 2 × sudut lilitan (lengkok sama): 2 × 42°.",
  },
};
