// Kandungan Nota Interaktif — Bab 3, Topik 3.1 (Kuasa Dua dan Punca Kuasa Dua).
// Fokus: kuasa dua sebagai LUAS petak persegi (visual grid), punca kuasa dua
// sebagai operasi sebaliknya (cari panjang sisi daripada jumlah petak).
export const notaKuasaDuaContent = {
  visualType: "square-grid",

  hook: {
    mentorLine: "Bab baharu! Kali ni kita main dengan bentuk PERSEGI — jom kita mula dengan situasi sebenar.",
    title: "Taman Bunga Cikgu Farah",
    body:
      "Cikgu Farah nak bina taman bunga berbentuk PERSEGI (semua sisi sama panjang). Dia susun petak bunga " +
      "dalam 5 baris dan 5 lajur. Berapakah JUMLAH petak bunga kesemuanya?",
  },

  exploration: {
    mentorLine: "Jom kita bina taman tu petak demi petak — klik untuk tambah satu baris DAN satu lajur setiap kali.",
    prompt: "Klik \"Tambah baris + lajur\" sehingga sisi mencapai 5.",
    targetSide: 5,
  },

  insight: {
    mentorLine: "Perasan bentuk yang terbentuk?",
    title: "5 × 5 = KUASA DUA bagi 5!",
    bullets: [
      "Kau baru bina petak 5 baris × 5 lajur = 25 petak kesemuanya.",
      "Sebab bentuknya PERSEGI (sisi sama panjang), operasi \"darab nombor dengan dirinya sendiri\" ni dipanggil KUASA DUA. Ditulis sebagai 5² (baca: \"5 kuasa dua\"), bermaksud 5 × 5 = 25.",
      "Cikgu Farah akan ada 25 petak bunga kesemuanya.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "n² = n × n",
    bullets: [
      "PUNCA KUASA DUA (simbol √) ialah operasi SEBALIKNYA bagi kuasa dua — ia cari BALIK panjang sisi apabila kita tahu jumlah petak (luas). Cth: √25 = 5, sebab 5 × 5 = 25.",
      "Nombor seperti 1, 4, 9, 16, 25, 36, 49, 64, 81, 100... dipanggil NOMBOR KUASA DUA SEMPURNA (perfect squares) sebab punca kuasa duanya ialah nombor bulat yang kemas (bukan pecahan/perpuluhan).",
    ],
  },

  example: {
    mentorLine: "Jom kita cari punca kuasa dua, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari √36",
    steps: [
      "√36 bermaksud: cari nombor yang, bila didarab dengan DIRINYA SENDIRI, hasilkan 36",
      "Cuba 6: 6 × 6 = 36 ✓ (tepat!)",
      "Jadi √36 = 6",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Berapakah √49?",
    choices: ["7", "14", "24.5", "98"],
    answer: "7",
    feedbackCorrect: "Tepat! 7 × 7 = 49, jadi √49 = 7.",
    feedbackIncorrect: "Belum tepat. Cari nombor yang bila didarab dengan dirinya sendiri, hasilkan 49.",
  },
};
