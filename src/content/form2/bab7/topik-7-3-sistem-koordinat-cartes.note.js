// Kandungan Nota Interaktif — Form 2, Bab 7, Topik 7.3 (Sistem Koordinat
// Cartes). DSKP SK 7.3: menyelesaikan masalah yang melibatkan sistem
// koordinat Cartes — gabungan rumus jarak (7.1) dan titik tengah (7.2).
export const notaSistemKoordinatCartesContent = {
  visualType: "coordinate-plane",

  hook: {
    mentorLine: "Sekarang kita gabungkan DUA rumus yang dah kamu tahu — jarak dan titik tengah — untuk selesaikan masalah sebenar.",
    title: "Pagar Plot Tanah Segi Tiga",
    body:
      "Sebuah plot tanah berbentuk segi tiga ditanda dengan tiga bucu atas peta grid koordinat. Untuk kira " +
      "berapa panjang pagar diperlukan (PERIMETER), kita perlu cari jarak SETIAP pasang bucu, kemudian " +
      "jumlahkan.",
  },

  exploration: {
    mentorLine: "Jom kita dedah jarak satu sisi plot tanah tu — teknik yang sama macam topik lepas.",
    prompt: "Dua bucu plot tanah, A(1, 1) dan B(5, 4), ditanda atas grid. Klik butang untuk dedah jarak sisi AB.",
    mode: "distance",
    pointA: { x: 1, y: 1, label: "A" },
    pointB: { x: 5, y: 4, label: "B" },
  },

  insight: {
    mentorLine: "Untuk selesaikan masalah PENUH, kita ulang teknik ni untuk SETIAP sisi, atau gabungkan dengan titik tengah.",
    title: "Gabungkan Rumus Jarak dan Titik Tengah",
    body:
      "Masalah sistem koordinat Cartes selalunya perlukan kamu guna rumus jarak DAN rumus titik tengah " +
      "bersama — contohnya kira PERIMETER bentuk (jumlahkan jarak setiap sisi), atau cari SATU bucu yang " +
      "hilang apabila diberi titik tengah dan satu bucu lain. Kunci utama: kenal pasti maklumat yang diberi, " +
      "kemudian pilih rumus yang sesuai.",
  },

  formula: {
    mentorLine: "Ini gabungan kedua-dua rumus — simpan dalam kepala kamu.",
    title: "Rumus Jarak dan Titik Tengah",
    expression: "Jarak = √[(x₂−x₁)² + (y₂−y₁)²],  Titik Tengah = ((x₁+x₂)/2, (y₁+y₂)/2)",
    body:
      "JARAK antara dua titik: √[(x₂−x₁)² + (y₂−y₁)²]. TITIK TENGAH antara dua titik: ((x₁+x₂)/2, (y₁+y₂)/2). " +
      "Jika M(mx, my) ialah titik tengah A(x₁, y₁) dan B, dan A serta M diketahui, kita boleh SUSUN SEMULA " +
      "rumus titik tengah untuk cari B: x₂ = 2mx − x₁, dan y₂ = 2my − y₁.",
  },

  example: {
    mentorLine: "Jom kita selesaikan masalah perimeter plot tanah segi tiga, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Plot tanah segi tiga mempunyai bucu P(0, 0), Q(6, 0), dan R(0, 8). Cari perimeter plot tersebut.",
    steps: [
      "PQ: dx = 6, dy = 0, jadi PQ = √(6² + 0²) = 6",
      "PR: dx = 0, dy = 8, jadi PR = √(0² + 8²) = 8",
      "QR: dx = 6, dy = 8, jadi QR = √(6² + 8²) = √100 = 10",
      "Perimeter = PQ + PR + QR = 6 + 8 + 10 = 24",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Titik M(5, 5) ialah titik tengah bagi A(3, 3) dan B. Apakah nilai-x bagi B?",
    choices: ["7", "4", "8", "2"],
    answer: "7",
    feedbackCorrect: "Tepat! x₂ = 2(5) − 3 = 10 − 3 = 7.",
    feedbackIncorrect: "Belum tepat. Guna x₂ = 2mx − x₁ = 2(5) − 3.",
  },
};
