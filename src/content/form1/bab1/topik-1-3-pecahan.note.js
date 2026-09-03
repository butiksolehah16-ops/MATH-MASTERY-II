// Kandungan Nota Interaktif — Bab 1, Topik 1.3 (Pecahan Positif dan Negatif).
// Fokus: tambah pecahan bertanda — peraturan tanda SAMA/BERBEZA yang sama
// seperti integer (Topik 1.2) terpakai untuk pecahan, PLUS kemahiran baharu
// menukar kepada penyebut sepunya (LCD) bila penyebut berbeza.
export const notaPecahanContent = {
  visualType: "fraction-bar",

  hook: {
    mentorLine: "Ini sambungan terus dari apa yang kamu dah kuasai untuk integer — cuma sekarang dengan pecahan.",
    title: "Tangki Air Yang Bocor",
    body:
      "Paras air dalam tangki Pak Karim berkurang 3/8 bahagian pada waktu pagi (ada kebocoran). Pada sebelah " +
      "petang, ia berkurang lagi 2/8 bahagian. Berapakah JUMLAH kekurangan paras air, sebagai pecahan? " +
      "Kamu dah tahu peraturan tanda untuk integer — jom kita tengok sama ada peraturan yang sama terpakai " +
      "untuk pecahan.",
  },

  exploration: {
    mentorLine: "Setiap langkah mewakili pengurangan 1/8 bahagian — perhatikan bar tu.",
    prompt:
      "Mula dari 0. Klik \"Langkah\" sebanyak 5 kali untuk mewakili jumlah pengurangan (3/8 + 2/8 = 5 bahagian " +
      "daripada lapan).",
    start: 0,
    steps: -5,
    denominator: 8,
    format: "fraction",
  },

  insight: {
    mentorLine: "Perasan corak yang sama dari Topik 1.2?",
    title: "Peraturan Tanda Sama Terpakai untuk Pecahan!",
    bullets: [
      "Kamu baru kira 0 + (−5/8) = −5/8, gabungan (−3/8) + (−2/8).",
      "Perasan? Ini SAMA PERSIS dengan peraturan tanda integer yang kamu belajar di Topik 1.2: bila TANDA SAMA (kedua-dua negatif), kita TAMBAH magnitud pecahan (3/8 + 2/8 = 5/8) dan KEKALKAN tanda tu.",
      "Peraturan tanda yang kamu dah kuasai untuk integer terpakai SAMA untuk pecahan — kamu cuma perlu tambah SATU kemahiran baharu: apa buat bila penyebut (denominator) berbeza.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi — gabungan peraturan tanda dengan kemahiran penyebut sepunya.",
    title: "Formula Rasmi",
    expression: "Penyebut beza → tukar ke LCD dahulu, kemudian ikut peraturan tanda",
    bullets: [
      "Peraturan tanda pecahan SAMA seperti integer: tanda sama → tambah magnitud, kekalkan tanda; tanda berbeza → tolak magnitud kecil daripada magnitud besar, ikut tanda magnitud besar.",
      "TETAPI, jika penyebut kedua-dua pecahan BERBEZA, kamu WAJIB tukar kedua-duanya kepada penyebut sepunya (LCD — gandaan sepunya terkecil) dahulu, sebelum boleh tambah/tolak magnitud.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba kes penyebut BERBEZA, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Kirakan (−3/4) + (−1/6)",
    steps: [
      "Cari LCD bagi 4 dan 6 → LCD = 12",
      "Tukar kedua-dua pecahan: (−3/4) = (−9/12), (−1/6) = (−2/12)",
      "Tanda sama (kedua-dua negatif) → tambah magnitud: 9/12 + 2/12 = 11/12",
      "= −11/12",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas (penyebut sama) sebelum kita masuk latihan.",
    prompt: "(−2/5) + (−1/5) = ?",
    choices: ["−3/5", "3/5", "−1/5", "1/5"],
    answer: "−3/5",
    feedbackCorrect: "Tepat! Tanda sama → tambah magnitud: 2/5 + 1/5 = 3/5, kekalkan tanda negatif.",
    feedbackIncorrect: "Belum tepat. Tanda kedua-dua pecahan SAMA (negatif), jadi TAMBAH magnitud dan kekalkan tanda negatif.",
  },
};
