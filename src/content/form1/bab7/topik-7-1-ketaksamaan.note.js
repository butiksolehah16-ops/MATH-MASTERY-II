// Kandungan Nota Interaktif — Bab 7, Topik 7.1 (Ketaksamaan).
// Fokus: bandingkan nilai nombor (termasuk negatif) guna kedudukan pada garis
// nombor, kenal simbol >, <, ≥, ≤, dan sifat-sifat ketaksamaan.
export const notaKetaksamaanContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Bab baharu — kita belajar BANDING nombor, bukan sekadar kira!",
    title: "Suhu Cameron Highlands",
    body:
      "Suhu di Cameron Highlands ialah −3°C pada waktu pagi, dan naik ke 2°C pada tengah hari. Mana satu " +
      "suhu yang lebih TINGGI (lebih besar)?",
  },

  exploration: {
    mentorLine: "Jom kita bergerak dari −3 ke arah kanan sehingga sampai ke 2 — perhatikan ARAH pergerakan.",
    prompt: "Klik \"Langkah\" untuk bergerak dari −3 ke arah kanan sehingga sampai ke 2.",
    start: -3,
    steps: 5,
    stepUnit: 1,
    stepLabel: "Langkah",
    min: -5,
    max: 5,
  },

  insight: {
    mentorLine: "Perasan arah pergerakan tu?",
    title: "Kanan = Lebih Besar!",
    bullets: [
      "Kau baru bergerak dari −3 ke KANAN (arah positif) untuk sampai ke 2.",
      "Dalam garis nombor, nombor di sebelah KANAN sentiasa LEBIH BESAR daripada nombor di sebelah KIRI. Jadi 2 lebih besar daripada −3, ditulis sebagai 2 > −3 (atau −3 < 2).",
      "Suhu tengah hari (2°C) lebih tinggi daripada suhu pagi (−3°C).",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: ">, <, ≥, ≤",
    bullets: [
      "Simbol KETAKSAMAAN: > (lebih besar), < (lebih kecil), ≥ (lebih besar atau sama dengan), ≤ (lebih kecil atau sama dengan).",
      "SIFAT SONGSANGAN: jika a < b, maka b > a. SIFAT TRANSITIF: jika a < b dan b < c, maka a < c.",
      "PENTING: bila kita DARAB atau BAHAGI kedua-dua belah ketaksamaan dengan nombor NEGATIF, simbol ketaksamaan MESTI TERBALIK (cth: jika a < b, maka −a > −b).",
    ],
  },

  example: {
    mentorLine: "Jom kita banding dua nombor negatif, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Bandingkan −7 dan −2, kemudian tulis dalam bentuk ketaksamaan",
    steps: [
      "Lukis kedua-dua nombor pada garis nombor: −7 berada lebih ke kiri berbanding −2",
      "Nombor di sebelah kanan (lebih dekat dengan positif) ialah lebih besar: −2 > −7",
      "Jadi −7 < −2",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Yang manakah BENAR?",
    choices: ["−5 < −1", "−5 > −1", "−1 < −5", "−5 = −1"],
    answer: "−5 < −1",
    feedbackCorrect: "Tepat! −5 berada lebih ke kiri berbanding −1 pada garis nombor, jadi −5 < −1.",
    feedbackIncorrect: "Belum tepat. Bayangkan garis nombor — nombor di sebelah kiri sentiasa lebih kecil.",
  },
};
