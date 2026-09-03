// Kandungan Nota Interaktif — Bab 12, Topik 12.1 (Proses Pengumpulan,
// Pengorganisasian dan Perwakilan Data, serta Pentafsiran Perwakilan Data).
// Fokus: carta palang, kekerapan, mod, data kategori vs numerik.
export const notaPengendalianDataContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Bab terakhir — kita terokai cara MENGUMPUL dan MEWAKILI DATA! Jom mula dengan situasi sebenar.",
    title: "Tinjauan Warna Kegemaran",
    body:
      "Cikgu jalankan tinjauan warna kegemaran murid dalam kelas. Keputusan: Merah = 5, Biru = 8, Hijau = 3, " +
      "Kuning = 4. Berapa ramai murid semuanya yang ditinjau?",
  },

  exploration: {
    mentorLine: "Jom kita bina carta palang tu, satu palang demi satu.",
    prompt: "Klik \"Tambah palang seterusnya\" untuk bina keempat-empat palang dan jumlahkan.",
    categories: ["Merah", "Biru", "Hijau", "Kuning"],
    values: [5, 8, 3, 4],
  },

  insight: {
    mentorLine: "Perasan apa yang setiap palang tu wakili?",
    title: "Carta Palang = Perwakilan Data!",
    bullets: [
      "Carta macam ni dipanggil CARTA PALANG (bar chart) — satu cara PERWAKILAN DATA.",
      "Setiap palang mewakili KEKERAPAN (frequency) — bilangan kali sesuatu kategori muncul.",
      "JUMLAH KESELURUHAN bilangan data = jumlah SEMUA kekerapan.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Mod = kategori dengan kekerapan tertinggi",
    bullets: [
      "DATA KATEGORI (categorical) — data yang diklasifikasikan mengikut kategori/label, cth warna, jenis sukan.",
      "DATA NUMERIK (numerical) — data berbentuk nombor yang boleh diukur, cth tinggi, berat.",
      "MOD (mode) ialah kategori dengan KEKERAPAN TERTINGGI dalam set data.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari mod dan jumlah keseluruhan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Jadual kekerapan sukan kegemaran: Bola Sepak = 12, Badminton = 7, Renang = 5, Ping Pong = 6. Cari " +
      "mod dan jumlah keseluruhan responden",
    steps: [
      "Kekerapan tertinggi ialah Bola Sepak (12) — jadi MOD = Bola Sepak",
      "Jumlah = 12 + 7 + 5 + 6",
      "= 30 responden",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Kekerapan buah kegemaran: Epal = 9, Pisang = 6, Oren = 5. Berapa jumlah responden?",
    choices: ["20", "15", "14", "9"],
    answer: "20",
    feedbackCorrect: "Tepat! 9 + 6 + 5 = 20 responden.",
    feedbackIncorrect: "Belum tepat. Jumlahkan semua kekerapan: 9 + 6 + 5 = 20.",
  },
};
