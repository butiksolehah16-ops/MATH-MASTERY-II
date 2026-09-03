// Kandungan Nota Interaktif — Bab 3, Topik 3.2 (Kuasa Tiga dan Punca Kuasa Tiga).
// Fokus: kuasa tiga sebagai ISIPADU kiub (satu lapisan petak persegi, bertindan
// beberapa lapisan) — sambungan terus daripada kuasa dua di Topik 3.1.
export const notaKuasaTigaContent = {
  visualType: "square-grid",

  hook: {
    mentorLine: "Sambung dari kuasa dua — kali ni kita naik SATU dimensi lagi.",
    title: "Kotak Ais Kiub Abang Zul",
    body:
      "Abang Zul nak isi kotak penuh dengan kiub ais kecil bersaiz 1cm. Kotak tu berbentuk KIUB (macam dadu " +
      "— semua sisi sama panjang), dengan setiap sisi 3cm. Berapakah JUMLAH kiub ais kecil yang diperlukan " +
      "untuk isi kotak tu sepenuhnya?",
  },

  exploration: {
    mentorLine: "Kita dah pandai bina petak persegi dari Topik 3.1 — jom bina SATU lapisan dasar kotak tu dulu.",
    prompt: "Klik \"Tambah baris + lajur\" sehingga sisi mencapai 3 — ini SATU lapisan kiub ais.",
    targetSide: 3,
  },

  insight: {
    mentorLine: "Kau dah dapat satu lapisan. Tapi kotak Abang Zul ada TINGGI juga...",
    title: "3 Lapisan Bertindan = KUASA TIGA bagi 3!",
    bullets: [
      "Kau baru bina SATU lapisan: 3 × 3 = 9 kiub kecil. Tapi kotak KIUB tu ada TINGGI juga — dan sebab semua sisi kiub SAMA PANJANG (3cm), kita perlukan 3 lapisan macam ni, bertindan antara satu sama lain. Jumlah kiub kecil = 9 × 3 = 27.",
      "Operasi \"darab nombor dengan dirinya sendiri, TIGA kali\" ni dipanggil KUASA TIGA. Ditulis sebagai 3³ (baca: \"3 kuasa tiga\"), bermaksud 3 × 3 × 3 = 27. Abang Zul perlukan 27 kiub ais kecil.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "n³ = n × n × n",
    bullets: [
      "PUNCA KUASA TIGA (simbol ∛) ialah operasi SEBALIKNYA bagi kuasa tiga — ia cari BALIK panjang sisi kiub apabila kita tahu jumlah isipadu (bilangan kiub kecil). Cth: ∛27 = 3, sebab 3 × 3 × 3 = 27.",
      "Nombor seperti 1, 8, 27, 64, 125, 216... dipanggil NOMBOR KUASA TIGA SEMPURNA (perfect cubes) sebab punca kuasa tiganya ialah nombor bulat yang kemas.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari punca kuasa tiga, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari ∛64",
    steps: [
      "∛64 bermaksud: cari nombor yang, bila didarab dengan DIRINYA SENDIRI sebanyak TIGA kali, hasilkan 64",
      "Cuba 4: 4 × 4 × 4 = 16 × 4 = 64 ✓ (tepat!)",
      "Jadi ∛64 = 4",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Berapakah 2³ (2 kuasa tiga)?",
    choices: ["8", "6", "4", "16"],
    answer: "8",
    feedbackCorrect: "Tepat! 2 × 2 × 2 = 8, jadi 2³ = 8.",
    feedbackIncorrect: "Belum tepat. 2³ bermaksud 2 × 2 × 2, bukan 2 × 3.",
  },
};
