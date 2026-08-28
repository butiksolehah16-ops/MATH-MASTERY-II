// Kandungan Nota Interaktif — Bab 1, Topik 1.2 (Operasi Asas Integer).
// Fokus: TAMBAH dua integer — peraturan tanda SAMA (tambah magnitud, kekalkan
// tanda) dan tanda BERBEZA (tolak magnitud, ikut tanda magnitud besar).
// Sambungan semula jadi dari Topik 1.1 (tolak nombor negatif), guna visual
// garis nombor yang sama untuk uji corak gold template bertahan pada topik
// kedua tanpa perlu ubah engine.
export const notaIntegerAdditionContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Ini situasi biasa jadi — jom kita fikir sama-sama.",
    title: "Hutang Bertambah",
    body:
      "Baki akaun bank Aiman ialah −RM8 (dia berhutang RM8). Minggu ni, dia terpaksa berhutang LAGI RM5 " +
      "untuk beli buku sekolah. Berapakah baki akaun Aiman sekarang? Ramai pelajar tersilap sangka bila " +
      "\"tambah\" nombor negatif dengan nombor negatif lagi, jawapannya jadi \"kurang negatif\" — sebenarnya " +
      "sebaliknya. Jom kita selesaikan sendiri.",
  },

  exploration: {
    mentorLine: "Setiap kali \"berhutang lagi\", penanda gerak ke KIRI di atas garis nombor.",
    prompt:
      "Mula dari baki sekarang (−8). Klik \"Langkah\" untuk gerak ke KIRI sebanyak 5 langkah (mewakili " +
      "hutang tambahan RM5).",
    start: -8,
    steps: -5,
    unitLabel: "",
  },

  insight: {
    mentorLine: "Perasan apa yang berlaku pada magnitud dan tanda?",
    title: "Dua Tanda Sama — Magnitud Bertambah",
    body:
      "Kamu baru sahaja mengira (−8) + (−5) = −13. Perasan coraknya? Bila DUA nombor mempunyai TANDA YANG " +
      "SAMA (di sini, kedua-duanya negatif), kita TAMBAH magnitudnya (8 + 5 = 13) dan KEKALKAN tanda tu " +
      "(negatif). Ini berbeza sama sekali dengan bila tanda kedua-dua nombor BERBEZA — kita akan lihat kes " +
      "itu dalam contoh seterusnya.",
  },

  formula: {
    mentorLine: "Ini rumus rasmi untuk tambah SEBARANG dua integer — simpan dalam kepala kamu.",
    title: "Formula Rasmi",
    expression: "Tanda sama: tambah magnitud · Tanda beza: tolak magnitud",
    body:
      "Untuk sebarang dua nombor a dan b: JIKA tanda a dan b SAMA, jawapan = tambah kedua-dua magnitud, " +
      "kekalkan tanda tu. JIKA tanda a dan b BERBEZA, jawapan = tolak magnitud yang kecil daripada magnitud " +
      "yang besar, dan jawapan ikut tanda nombor yang magnitudnya lebih besar.",
  },

  example: {
    mentorLine: "Sekarang jom kita cuba kes tanda BERBEZA pula, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kirakan (−7) + 4",
    steps: [
      "Tanda (−7) dan 4 BERBEZA (satu negatif, satu positif)",
      "Tolak magnitud kecil (4) daripada magnitud besar (7): 7 − 4 = 3",
      "Jawapan ikut tanda nombor bermagnitud besar, iaitu (−7) → negatif",
      "= −3",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "(−6) + (−9) = ?",
    choices: ["−15", "15", "−3", "3"],
    answer: "−15",
    feedbackCorrect: "Tepat! Tanda sama (kedua-dua negatif) → tambah magnitud: 6 + 9 = 15, kekalkan tanda negatif.",
    feedbackIncorrect:
      "Belum tepat. Tanda kedua-dua nombor SAMA (negatif), jadi TAMBAH magnitud (6 + 9) dan kekalkan tanda negatif.",
  },
};
