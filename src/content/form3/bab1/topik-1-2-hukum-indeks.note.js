// Kandungan Nota Interaktif — Form 3, Bab 1, Topik 1.2 (Hukum Indeks). DSKP
// SK 1.2: menghubung kait pendaraban/pembahagian/penguasaan nombor bentuk
// indeks asas sama dengan pendaraban berulang; menentusahkan a⁰=1 dan
// a⁻ⁿ=1/aⁿ; menentu hubungan indeks pecahan dengan punca kuasa dan kuasa;
// melaksanakan operasi dan menyelesaikan masalah melibatkan hukum indeks.
// Nota ini merangkumi SEMUA enam hukum indeks secara lengkap — rujukan
// tunggal pelajar untuk topik ini.
export const notaHukumIndeksContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita belajar cara CEPAT untuk kira bila dua bentuk indeks berasas SAMA didarab, dibahagi, atau digabung.",
    title: "Dua Peringkat Pertumbuhan Bakteria",
    bullets: [
      "Ingat bakteria yang membelah dua tadi? Katakan pada PERINGKAT PERTAMA, bilangan bakteria berkembang sebanyak 2³ kali ganda. Pada PERINGKAT KEDUA (susulan), ia berkembang LAGI sebanyak 2² kali ganda daripada peringkat pertama.",
      "Berapa kali gandakah pertumbuhan KESELURUHAN (kedua-dua peringkat digabung)? Adakah kita perlu kira 2³ = 8 dan 2² = 4 dahulu, kemudian darab 8 × 4? Atau ada cara lebih pantas terus dalam bentuk indeks?",
    ],
  },

  exploration: {
    mentorLine: "Jom kita bandingkan nilai 2³, 2², dan hasil gabungan keduanya.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah nilai 2³, kemudian 2², dan akhirnya hasil gabungan " +
      "\"2³ × 2²\". Perhatikan hubungan antara ketiga-tiga nilai.",
    categories: ["2³", "2²", "2³ × 2²"],
    values: [8, 4, 32],
  },

  insight: {
    mentorLine: "Perasan tak 8 × 4 = 32, dan 32 pun bersamaan 2⁵?",
    title: "Darab Asas Sama → Tambah Indeks",
    bullets: [
      "2³ × 2² = (2×2×2) × (2×2) = 2×2×2×2×2 = 2⁵ — jumlah faktor 2 KESELURUHANNYA ialah 3 + 2 = 5.",
      "Ini menunjukkan bila kita DARAB dua bentuk indeks yang ASASNYA SAMA, kita cukup TAMBAH indeksnya: 2³ × 2² = 2³⁺² = 2⁵ = 32.",
      "Pertumbuhan keseluruhan bakteria tadi ialah 2⁵ = 32 kali ganda.",
    ],
  },

  formula: {
    mentorLine: "Ini KESEMUA enam hukum indeks rasmi — simpan dan rujuk semula bila perlu.",
    title: "Enam Hukum Indeks",
    expression: "aᵐ × aⁿ = aᵐ⁺ⁿ   aᵐ ÷ aⁿ = aᵐ⁻ⁿ   (aᵐ)ⁿ = aᵐⁿ",
    bullets: [
      "HUKUM 1 (Pendaraban): aᵐ × aⁿ = aᵐ⁺ⁿ — asas sama, TAMBAH indeks.",
      "HUKUM 2 (Pembahagian): aᵐ ÷ aⁿ = aᵐ⁻ⁿ — asas sama, TOLAK indeks (m − n).",
      "HUKUM 3 (Kuasa bagi Kuasa): (aᵐ)ⁿ = aᵐˣⁿ — DARAB kedua-dua indeks.",
      "HUKUM 4 (Indeks Sifar): a⁰ = 1, dengan syarat a ≠ 0 — SEBARANG asas (bukan sifar) berkuasa 0 sentiasa bersamaan 1. (Boleh disahkan daripada Hukum 2: aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰, tetapi aⁿ ÷ aⁿ = 1 juga — jadi a⁰ mesti = 1.)",
      "HUKUM 5 (Indeks Negatif): a⁻ⁿ = 1/aⁿ, dengan a ≠ 0 — indeks negatif bermaksud SONGSANGAN (reciprocal). Cth: 2⁻³ = 1/2³ = 1/8. Sebaliknya, 1/a⁻ⁿ = aⁿ.",
      "HUKUM 6 (Indeks Pecahan): a^(1/n) = ⁿ√a (punca ke-n bagi a), dan a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Cth: 8^(1/3) = ³√8 = 2 (punca kubus bagi 8), dan 8^(2/3) = (³√8)² = 2² = 4.",
      "PENTING: Hukum 1, 2 dan 3 HANYA sah apabila ASAS kedua-dua bentuk indeks tu SAMA. Kalau asas berbeza (cth. 2³ × 3²), hukum ni TIDAK boleh digunakan — kena kira nilai sebenar dahulu.",
    ],
  },

  example: {
    mentorLine: "Jom kita gabungkan beberapa hukum sekali gus, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "(a) Permudahkan 5⁶ ÷ 5² × 5³. (b) Nilaikan 8^(2/3).",
    steps: [
      "(a) Semua asas sama (5), jadi gabungkan indeks ikut operasi: 5⁶⁻²⁺³",
      "= 5⁷",
      "(b) 8^(2/3) = (³√8)² — cari punca kubus 8 dahulu: ³√8 = 2, sebab 2³ = 8",
      "Kemudian kuasakan dengan 2: 2² = 4, jadi 8^(2/3) = 4",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Permudahkan 3⁷ ÷ 3³ dalam bentuk indeks.",
    choices: ["3⁴", "3¹⁰", "3²¹", "1³"],
    answer: "3⁴",
    feedbackCorrect: "Tepat! Asas sama, tolak indeks: 3⁷⁻³ = 3⁴.",
    feedbackIncorrect: "Belum tepat. Bagi pembahagian asas sama, TOLAK indeks: 7 − 3.",
  },
};
