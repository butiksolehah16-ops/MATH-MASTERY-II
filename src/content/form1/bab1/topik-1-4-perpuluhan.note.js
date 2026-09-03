// Kandungan Nota Interaktif — Bab 1, Topik 1.4 (Perpuluhan Positif dan Negatif).
// Fokus: tambah perpuluhan bertanda. Insight utama: perpuluhan HANYALAH
// pecahan berpenyebut kuasa 10, jadi peraturan tanda yang dikuasai di Topik
// 1.2 (integer) dan 1.3 (pecahan) terpakai SAMA di sini — guna visual
// fraction-bar yang sama dengan `format: "decimal"`.
export const notaPerpuluhanContent = {
  visualType: "fraction-bar",

  hook: {
    mentorLine: "Kamu dah kuasai peraturan tanda untuk integer dan pecahan — perpuluhan pun sama je.",
    title: "Suhu Yang Terus Jatuh",
    body:
      "Bacaan termometer menunjukkan suhu berkurang 0.6°C pada waktu subuh, kemudian berkurang lagi 0.3°C " +
      "menjelang pagi. Berapakah jumlah PENURUNAN suhu, sebagai perpuluhan? Kamu akan perasan sesuatu yang " +
      "sangat berguna dalam nota ini.",
  },

  exploration: {
    mentorLine: "Setiap langkah mewakili penurunan 0.1°C — perhatikan bar tu.",
    prompt:
      "Mula dari 0. Klik \"Langkah\" sebanyak 9 kali (setiap langkah = 0.1°C) untuk mewakili jumlah penurunan " +
      "(0.6 + 0.3 = 0.9).",
    start: 0,
    steps: -9,
    denominator: 10,
    format: "decimal",
    decimalPlaces: 1,
    unitLabel: "°C",
  },

  insight: {
    mentorLine: "Perhatikan bilangan petak yang terisi — ada makna istimewa.",
    title: "Perpuluhan Ialah Pecahan Juga!",
    bullets: [
      "Kamu baru kira 0 + (−0.9°C) = −0.9°C, gabungan (−0.6) + (−0.3).",
      "Perhatikan bar tu — 9 daripada 10 petak terisi. Itu sebenarnya bermaksud 9/10! Perpuluhan HANYALAH pecahan berpenyebut kuasa 10 (10, 100, 1000...).",
      "Sebab itu peraturan tanda yang kamu dah kuasai di Topik 1.2 (integer) dan Topik 1.3 (pecahan) terpakai SAMA di sini: tanda sama → tambah magnitud, kekalkan tanda.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi — sama seperti integer dan pecahan, cuma nombor dalam bentuk perpuluhan.",
    title: "Formula Rasmi",
    expression: "Tanda sama: tambah magnitud · Tanda beza: tolak magnitud",
    bullets: [
      "Peraturan tanda perpuluhan SAMA seperti integer dan pecahan: tanda sama → tambah magnitud (jajarkan titik perpuluhan dahulu supaya digit sepadan), kekalkan tanda.",
      "Tanda berbeza → tolak magnitud kecil daripada magnitud besar, jawapan ikut tanda nombor bermagnitud besar.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba kes tanda BERBEZA pula, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kirakan (−4.5) + 2.8",
    steps: [
      "Tanda (−4.5) dan 2.8 BERBEZA (satu negatif, satu positif)",
      "Tolak magnitud kecil (2.8) daripada magnitud besar (4.5): 4.5 − 2.8 = 1.7",
      "Jawapan ikut tanda nombor bermagnitud besar, iaitu (−4.5) → negatif",
      "= −1.7",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "(−0.7) + (−0.5) = ?",
    choices: ["−1.2", "1.2", "−0.2", "0.2"],
    answer: "−1.2",
    feedbackCorrect: "Tepat! Tanda sama → tambah magnitud: 0.7 + 0.5 = 1.2, kekalkan tanda negatif.",
    feedbackIncorrect: "Belum tepat. Tanda kedua-dua nombor SAMA (negatif), jadi TAMBAH magnitud dan kekalkan tanda negatif.",
  },
};
