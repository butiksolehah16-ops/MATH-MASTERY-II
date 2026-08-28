// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.2 (Translasi). DSKP
// SK 11.2: mengenal translasi, memerihalkan translasi menggunakan pelbagai
// perwakilan termasuk vektor translasi, menentukan imej dan objek bagi
// translasi, menyelesaikan masalah yang melibatkan translasi.
export const notaTranslasiContent = {
  visualType: "transformation",

  hook: {
    mentorLine: "Translasi ialah transformasi PALING mudah — objek cuma GELONGSOR ke satu arah.",
    title: "Buah Catur Meluncur",
    body:
      "Bila kamu gelongsorkan buah catur dari satu petak ke petak lain (tanpa putar atau terbalik), itu " +
      "TRANSLASI. Setiap titik pada buah catur bergerak dengan jarak dan arah yang SAMA — 3 petak ke kanan " +
      "dan 2 petak ke atas, contohnya.",
  },

  exploration: {
    mentorLine: "Jom perhatikan objek dan imej selepas translasi oleh vektor (4, 3).",
    prompt:
      "Segi tiga ABC (objek) ditranslasikan oleh vektor (4, 3). Klik butang untuk dedah setiap bucu imej " +
      "A', B', C'.",
    object: [
      { x: 1, y: 1, label: "A" },
      { x: 3, y: 1, label: "B" },
      { x: 1, y: 3, label: "C" },
    ],
    image: [
      { x: 5, y: 4, label: "A'" },
      { x: 7, y: 4, label: "B'" },
      { x: 5, y: 6, label: "C'" },
    ],
  },

  insight: {
    mentorLine: "Perasan setiap bucu bergerak dengan jarak dan arah yang SAMA?",
    title: "Translasi = Gerakan Sama Rata untuk SEMUA Titik",
    body:
      "A(1,1) → A'(5,4): bergerak 4 ke kanan, 3 ke atas. B(3,1) → B'(7,4): bergerak 4 ke kanan, 3 ke atas " +
      "juga. C(1,3) → C'(5,6): sama juga! SETIAP titik pada objek bergerak dengan jarak DAN arah yang SAMA " +
      "— itulah TRANSLASI. Bentuk, saiz, dan orientasi imej kekal SAMA seperti objek.",
  },

  formula: {
    mentorLine: "Ini cara rasmi tulis translasi — simpan dalam kepala kamu.",
    title: "Vektor Translasi",
    expression: "Vektor translasi (a, b): imej-x = objek-x + a,  imej-y = objek-y + b",
    body:
      "Translasi diperihalkan menggunakan VEKTOR TRANSLASI (a, b) — a ialah pergerakan MENGUFUK (positif = " +
      "kanan, negatif = kiri), b ialah pergerakan MENCANCANG (positif = atas, negatif = bawah). Jika objek " +
      "berada di (x, y), imej selepas translasi (a, b) berada di (x + a, y + b). Untuk cari VEKTOR translasi " +
      "diberi objek dan imej, kira: a = imej-x − objek-x, dan b = imej-y − objek-y.",
  },

  example: {
    mentorLine: "Jom kita cari koordinat imej selepas translasi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Titik P(3, 5) ditranslasikan oleh vektor (6, 2). Cari koordinat imej P'.",
    steps: [
      "Nilai-x imej = 3 + 6 = 9",
      "Nilai-y imej = 5 + 2 = 7",
      "Imej P' = (9, 7)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Titik Q(2, 4) ditranslasikan oleh vektor (5, 1). Apakah koordinat imej Q'?",
    choices: ["(7, 5)", "(3, 5)", "(7, 3)", "(10, 4)"],
    answer: "(7, 5)",
    feedbackCorrect: "Tepat! (2+5, 4+1) = (7, 5).",
    feedbackIncorrect: "Belum tepat. Guna (x+a, y+b) = (2+5, 4+1).",
  },
};
