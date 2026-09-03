// Kandungan Nota Interaktif — Form 2, Bab 7, Topik 7.2 (Titik Tengah dalam
// Sistem Koordinat Cartes). DSKP SK 7.2: menerangkan maksud titik tengah,
// menerbitkan rumus titik tengah, menentukan koordinat titik tengah,
// menyelesaikan masalah yang melibatkan titik tengah.
export const notaTitikTengahContent = {
  visualType: "coordinate-plane",

  hook: {
    mentorLine: "Kali ni kita cari titik yang berada TEPAT di tengah-tengah antara dua titik.",
    title: "Tempat Bertemu Paling Adil",
    body:
      "Ali di titik A dan Bob di titik B atas peta grid. Mereka nak bertemu di tempat yang jaraknya SAMA " +
      "daripada kedua-dua rumah — iaitu TITIK TENGAH antara A dan B. Macam mana nak cari koordinat titik " +
      "tu?",
  },

  exploration: {
    mentorLine: "Jom kita dedah nilai-x tengah dahulu, kemudian titik tengah penuh.",
    prompt:
      "Titik A(2, 2) dan B(8, 6) ditanda atas grid. Klik butang untuk dedah nilai-x titik tengah, kemudian " +
      "titik tengah penuh M.",
    mode: "midpoint",
    pointA: { x: 2, y: 2, label: "A" },
    pointB: { x: 8, y: 6, label: "B" },
  },

  insight: {
    mentorLine: "Perasan yang titik tengah tu sebenarnya PURATA (min) bagi setiap paksi?",
    title: "Titik Tengah = Purata Setiap Paksi",
    bullets: [
      "Nilai-x bagi titik tengah ialah PURATA nilai-x A dan B: (2 + 8) / 2 = 5.",
      "Nilai-y bagi titik tengah ialah PURATA nilai-y A dan B: (2 + 6) / 2 = 4.",
      "Jadi titik tengah M = (5, 4) — tepat di tengah-tengah garisan AB.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi titik tengah — simpan dalam kepala kamu.",
    title: "Rumus Titik Tengah",
    expression: "M = ( (x₁ + x₂)/2 , (y₁ + y₂)/2 )",
    bullets: [
      "Bagi dua titik A(x₁, y₁) dan B(x₂, y₂), titik tengah M bagi garisan AB ialah ( (x₁ + x₂)/2 , (y₁ + y₂)/2 ).",
      "Iaitu purata nilai-x sebagai koordinat-x M, dan purata nilai-y sebagai koordinat-y M.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari titik tengah antara dua titik lain, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari titik tengah antara P(1, 3) dan Q(9, 11).",
    steps: [
      "Nilai-x tengah = (1 + 9) / 2 = 10 / 2 = 5",
      "Nilai-y tengah = (3 + 11) / 2 = 14 / 2 = 7",
      "Titik tengah PQ = (5, 7)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah nilai-x bagi titik tengah antara (0, 0) dan (6, 8)?",
    choices: ["3", "6", "7", "4"],
    answer: "3",
    feedbackCorrect: "Tepat! Nilai-x tengah = (0 + 6) / 2 = 3.",
    feedbackIncorrect: "Belum tepat. Nilai-x tengah = (0 + 6) / 2.",
  },
};
