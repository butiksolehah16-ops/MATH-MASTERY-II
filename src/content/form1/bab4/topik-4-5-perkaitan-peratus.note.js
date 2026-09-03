// Kandungan Nota Interaktif — Bab 4, Topik 4.5 (Perkaitan Nisbah, Kadar, Kadaran
// dengan Peratusan, Pecahan dan Perpuluhan).
// Fokus: nisbah sebahagian berbanding jumlah = pecahan, tukar kepada peratus
// (guna bar berpetak yang sama dengan Bab 1 pecahan).
export const notaPerkaitanPeratusContent = {
  visualType: "fraction-bar",

  hook: {
    mentorLine: "Bab ni kita nak sambungkan nisbah dengan sesuatu yang kau dah biasa — pecahan dan peratus!",
    title: "Keputusan Ujian Kelas Aiman",
    body:
      "Dalam kelas Aiman, nisbah pelajar yang lulus ujian kepada jumlah pelajar ialah 18:20. Berapakah " +
      "PERATUS pelajar yang lulus?",
  },

  exploration: {
    mentorLine: "Jom kita isi bar tu sehingga 18 daripada 20 bahagian — ini mewakili pecahan pelajar yang lulus.",
    prompt: "Klik \"Langkah\" untuk isi bar sehingga 18 daripada 20 bahagian.",
    start: 0,
    steps: 18,
    denominator: 20,
  },

  insight: {
    mentorLine: "Perasan berapa banyak bar yang terisi?",
    title: "18/20 = 90% — Tiga Cara, Nilai Sama!",
    bullets: [
      "Kau baru isi 18 daripada 20 bahagian bar (18/20). Untuk tukar PECAHAN kepada PERATUS, kita darab dengan 100%: 18/20 × 100% = 90%.",
      "Ini menunjukkan NISBAH (18:20), PECAHAN (18/20) dan PERATUS (90%) semuanya cara BERBEZA untuk nyatakan PERKADARAN yang SAMA — cuma bentuk penulisan yang lain.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Peratus = Pecahan × 100%",
    bullets: [
      "PECAHAN → PERATUS: darab dengan 100%.",
      "PERATUS → PECAHAN: bahagi dengan 100 (jadikan pecahan/100), kemudian permudahkan.",
      "PECAHAN → PERPULUHAN: bahagi pengangka dengan penyebut.",
      "Nisbah a:b boleh ditulis sebagai pecahan a/(a+b) berbanding jumlah, kemudian ditukar kepada peratus atau perpuluhan ikut keperluan.",
    ],
  },

  example: {
    mentorLine: "Jom kita tukar nisbah kepada peratus, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Tukar nisbah 3:2 kepada peratus bagi bahagian PERTAMA berbanding JUMLAH",
    steps: [
      "Jumlah bahagian = 3 + 2 = 5",
      "Pecahan bahagian pertama = 3/5",
      "3/5 × 100% = 60%",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Tukar 1/4 kepada peratus.",
    choices: ["25%", "40%", "4%", "14%"],
    answer: "25%",
    feedbackCorrect: "Tepat! 1/4 × 100% = 25%.",
    feedbackIncorrect: "Belum tepat. Darab pecahan tu dengan 100%: 1/4 × 100%.",
  },
};
