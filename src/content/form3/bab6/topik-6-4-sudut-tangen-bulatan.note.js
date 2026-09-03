// Kandungan Nota Interaktif — Form 3, Bab 6, Topik 6.4 (Sudut dan Tangen bagi
// Bulatan). DSKP SK 6.4: menyelesaikan masalah yang melibatkan SUDUT dan
// TANGEN bagi bulatan — topik SINTESIS yang gabungkan 6.1 (sudut lilitan/
// pusat), 6.2 (sisi empat kitaran) dan 6.3 (tangen), termasuk teorem sudut
// tembereng selang-seli yang belum ditunjukkan contoh penuh di 6.3.
export const notaSudutTangenBulatanContent = {
  visualType: "tangent-circle",

  hook: {
    mentorLine: "Kita sampai ke penghujung bab bulatan — jom gabungkan SEMUA yang dah dipelajari dalam SATU soalan!",
    title: "Soalan Gabungan SPM",
    bullets: [
      "Soalan SPM sebenar selalunya GABUNGKAN pelbagai fakta bulatan dalam SATU rajah — sudut lilitan, sisi empat kitaran, DAN tangen sekali gus.",
      "Ada SATU teorem penting berkaitan tangen yang belum kita tunjuk contoh penuh lagi: TEOREM SUDUT TEMBERENG SELANG-SELI (alternate segment theorem). Jom kita kuasai teorem ni, dan latih gabungkan semuanya.",
    ],
  },

  exploration: {
    mentorLine: "Jom kita ulang kaji sifat asas tangen — jejari berserenjang dengan tangen — sebelum gabungkan dengan sudut lilitan.",
    prompt: "Klik butang untuk lukis semula jejari OP, tangen pada P, dan sudut serenjang di antara keduanya.",
  },

  insight: {
    mentorLine: "Ini teorem yang menghubungkan TANGEN dengan sudut LILITAN — sangat berguna untuk soalan gabungan.",
    title: "Teorem Sudut Tembereng Selang-Seli",
    bullets: [
      "Bila TANGEN bertemu bulatan pada titik A, dan PERENTAS AB dilukis daripada titik sentuhan A tu, sudut ANTARA tangen dan perentas (di A) SAMA dengan sudut LILITAN yang dicangkum oleh perentas AB pada TEMBERENG SELANG-SELI (segmen di sebelah BERTENTANGAN).",
      "\"Selang-seli\" bermaksud kita rujuk sudut di bahagian bulatan yang BERSEBERANGAN daripada sudut tangen-perentas asal.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus teorem tembereng selang-seli, digabung dengan fakta-fakta dari 6.1-6.3 — rujuk semula bila perlu.",
    title: "Strategi Soalan Gabungan",
    expression: "Sudut Tangen-Perentas = Sudut Tembereng Selang-Seli",
    bullets: [
      "Untuk soalan GABUNGAN, kenal pasti fakta yang RELEVAN dan gunakan SATU DEMI SATU:",
      "Jejari ⊥ tangen pada titik sentuhan (6.3)",
      "Sudut pusat = 2 × sudut lilitan, lengkok sama (6.1)",
      "Sudut lilitan dalam segmen sama adalah SAMA (6.1)",
      "Sudut dalam semibulatan = 90° (6.1)",
      "Sudut bertentangan sisi empat kitaran = 180° (6.2)",
      "Sudut tangen-perentas = sudut tembereng selang-seli (6.4, teorem baharu di atas)",
      "Jumlah sudut segi tiga = 180° (asas Tingkatan 1)",
      "Lukis rajah, LABEL semua sudut diketahui, kemudian cari sudut yang berkait RAPAT dengan yang dikehendaki — selalunya perlu 2-3 langkah menggunakan fakta berbeza secara BERURUTAN.",
    ],
  },

  example: {
    mentorLine: "Jom kita selesaikan satu soalan gabungan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "TA ialah tangen kepada bulatan pada titik A. AB ialah perentas, dengan sudut TAB (antara tangen dan " +
      "perentas) = 50°. C ialah titik pada tembereng selang-seli. Cari (a) sudut ACB, dan (b) jika ABCD " +
      "ialah sisi empat kitaran dengan ∠ACB sebagai ∠C, cari ∠A sisi empat itu.",
    steps: [
      "(a) Guna Teorem Sudut Tembereng Selang-Seli: sudut ACB = sudut TAB = 50°",
      "(b) Dalam sisi empat kitaran ABCD, ∠A dan ∠C (=∠ACB=50°) ialah sudut BERTENTANGAN",
      "∠A + ∠C = 180°, jadi ∠A = 180° − 50° = 130°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Tangen TA bertemu perentas AB pada titik A dengan sudut TAB = 62°. Apakah sudut dalam tembereng selang-seli (sudut ACB)?",
    choices: ["62°", "28°", "118°", "31°"],
    answer: "62°",
    feedbackCorrect: "Tepat! Teorem sudut tembereng selang-seli: sudut ACB = sudut TAB = 62°.",
    feedbackIncorrect: "Belum tepat. Sudut tangen-perentas SAMA dengan sudut tembereng selang-seli — tiada pengiraan tambahan.",
  },
};
