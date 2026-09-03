// Kandungan Nota Interaktif — Bab 11, Topik 11.1 (Set).
// Fokus: definisi set, unsur, notasi { }, kaedah penyenaraian/huraian, n(A).
export const notaSetContent = {
  visualType: "set-builder",

  hook: {
    mentorLine: "Bab baharu — kita terokai dunia SET! Jom mula dengan situasi sebenar.",
    title: "Kelas Matematik",
    body:
      "Cikgu nak kumpulkan nama pelajar yang suka Matematik dalam satu senarai khas dipanggil SET: " +
      "P = {Ali, Bakar, Chong}. Berapa ramai pelajar dalam set P?",
  },

  exploration: {
    mentorLine: "Jom kita bina set P, tambah unsur satu demi satu.",
    prompt: "Klik \"Tambah unsur\" untuk bina set P sehingga semua nama masuk.",
    setName: "P",
    elements: ["Ali", "Bakar", "Chong"],
  },

  insight: {
    mentorLine: "Perasan macam mana set tu terbina?",
    title: "Set = Koleksi Unsur yang Jelas!",
    bullets: [
      "SET ialah koleksi objek atau unsur (element) yang JELAS dan TERSUSUN.",
      "Setiap objek dalam set dipanggil UNSUR.",
      "Bilangan unsur dalam sesuatu set A ditulis n(A). Untuk set P = {Ali, Bakar, Chong}, n(P) = 3.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "n(A) = bilangan unsur dalam set A",
    bullets: [
      "SET boleh ditulis dengan DUA cara: (1) KAEDAH PENYENARAIAN — senaraikan semua unsur dalam kurungan dakwarsa { }, cth P = {2, 4, 6, 8}.",
      "(2) KAEDAH HURAIAN — huraikan ciri unsur, cth P = {nombor genap kurang daripada 10}.",
      "n(A) ialah bilangan unsur dalam set A.",
    ],
  },

  example: {
    mentorLine: "Jom kita kira bilangan unsur, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Set Q = {a, e, i, o, u} (huruf vokal). Cari n(Q)",
    steps: [
      "Senaraikan unsur set Q: a, e, i, o, u",
      "Kira bilangan unsur: 5 unsur",
      "n(Q) = 5",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Set R = {2, 3, 5, 7, 11}. Cari n(R).",
    choices: ["4", "5", "6", "11"],
    answer: "5",
    feedbackCorrect: "Tepat! Set R ada 5 unsur, jadi n(R) = 5.",
    feedbackIncorrect: "Belum tepat. Kira semua unsur dalam { }: 2, 3, 5, 7, 11 — jumlahnya 5.",
  },
};
