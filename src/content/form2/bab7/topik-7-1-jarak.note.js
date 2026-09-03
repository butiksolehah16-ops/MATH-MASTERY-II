// Kandungan Nota Interaktif — Form 2, Bab 7, Topik 7.1 (Jarak dalam Sistem
// Koordinat Cartes). DSKP SK 7.1: menerangkan maksud jarak antara dua titik,
// menerbitkan rumus jarak, menentukan jarak antara dua titik, menyelesaikan
// masalah yang melibatkan jarak dalam sistem koordinat Cartes.
export const notaJarakContent = {
  visualType: "coordinate-plane",

  hook: {
    mentorLine: "Kita dah belajar Teorem Pythagoras dalam Tingkatan 1 — sekarang kita guna dia untuk cari jarak atas grid koordinat!",
    title: "Berapa Jauh Antara Dua Rumah?",
    body:
      "Dua buah rumah ditandakan sebagai titik A dan B atas peta grid (satah Cartes). Untuk tahu berapa jauh " +
      "jarak SEBENAR antara kedua-dua rumah tu (bukan sekadar bilangan petak), kita perlukan RUMUS JARAK.",
  },

  exploration: {
    mentorLine: "Jom kita dedah jarak mengufuk, jarak mencancang, dan akhirnya jarak sebenar antara A dan B.",
    prompt:
      "Titik A(1, 1) dan B(4, 5) ditanda atas grid. Klik butang untuk dedah dx (mengufuk), dy (mencancang), " +
      "kemudian jarak sebenar AB.",
    mode: "distance",
    pointA: { x: 1, y: 1, label: "A" },
    pointB: { x: 4, y: 5, label: "B" },
  },

  insight: {
    mentorLine: "Perasan segi tiga bersudut tegak yang terbentuk tu?",
    title: "Jarak = Sisi Miring Segi Tiga Bersudut Tegak",
    bullets: [
      "dx = beza nilai-x (4 − 1 = 3) dan dy = beza nilai-y (5 − 1 = 4).",
      "dx dan dy ni ialah DUA SISI TEGAK bagi segi tiga bersudut tegak, dan jarak AB ialah SISI MIRING (hipotenus) segi tiga tu.",
      "Guna Teorem Pythagoras: AB² = dx² + dy² = 3² + 4² = 9 + 16 = 25, jadi AB = √25 = 5.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi jarak antara dua titik — simpan dalam kepala kamu.",
    title: "Rumus Jarak",
    expression: "Jarak AB = √[(x₂ − x₁)² + (y₂ − y₁)²]",
    bullets: [
      "Bagi dua titik A(x₁, y₁) dan B(x₂, y₂) pada satah Cartes, jarak antara A dan B ialah √[(x₂ − x₁)² + (y₂ − y₁)²] — iaitu punca kuasa dua bagi (beza-x)² tambah (beza-y)².",
      "Ini sebenarnya Teorem Pythagoras yang kamu dah tahu, cuma dx dan dy diambil daripada koordinat.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari jarak antara dua titik lain, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari jarak antara titik P(2, 3) dan Q(7, 15).",
    steps: [
      "Cari dx = 7 − 2 = 5, dan dy = 15 − 3 = 12",
      "Guna rumus: PQ = √(dx² + dy²) = √(5² + 12²) = √(25 + 144) = √169",
      "PQ = 13",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Cari jarak antara titik (0, 0) dan (3, 4).",
    choices: ["5", "7", "25", "1"],
    answer: "5",
    feedbackCorrect: "Tepat! dx = 3, dy = 4, jadi jarak = √(3² + 4²) = √25 = 5.",
    feedbackIncorrect: "Belum tepat. Cari dx = 3, dy = 4, jarak = √(3² + 4²) = √25.",
  },
};
