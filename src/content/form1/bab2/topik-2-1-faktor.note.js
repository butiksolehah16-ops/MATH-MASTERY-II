// Kandungan Nota Interaktif — Bab 2, Topik 2.1 (Faktor, Faktor Perdana dan FSTB).
// Fokus: faktor sebagai "lompat skip-count tepat" (guna garis nombor yang
// sama, prop stepUnit), dan cari Faktor Sepunya Terbesar (FSTB).
export const notaFaktorContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Bab baharu! Kali ni kita main dengan faktor — jom kita mula dengan situasi sebenar.",
    title: "Agihan Gula-gula Cikgu Aina",
    body:
      "Cikgu Aina ada 12 biji gula-gula. Dia nak agih SAMA RATA kepada 4 orang murid, tiada baki tertinggal. " +
      "Bolehkah dia buat macam tu? Kalau boleh, berapa biji setiap orang murid akan dapat?",
  },

  exploration: {
    mentorLine: "Jom kita \"lompat\" dengan saiz 4 dari 0 — kalau kita boleh sampai TEPAT ke 12, bermakna 4 boleh bahagi 12 sama rata!",
    prompt: "Klik \"Langkah\" untuk lompat dengan saiz 4, sehingga cuba sampai ke 12.",
    start: 0,
    steps: 12,
    stepUnit: 4,
    stepLabel: "Lompat",
    min: 0,
    max: 16,
  },

  insight: {
    mentorLine: "Perasan apa yang berlaku bila kita sampai TEPAT?",
    title: "4 Ialah Faktor bagi 12!",
    bullets: [
      "Kau baru sahaja lompat dengan saiz 4, sebanyak 3 kali (0→4→8→12), dan sampai TEPAT ke 12 — tiada berlebih atau kurang!",
      "Ini bermakna 4 ialah FAKTOR bagi 12: nombor yang boleh membahagi nombor lain secara SAMA RATA (tiada baki).",
      "Cikgu Aina BOLEH agih 12 gula-gula kepada 4 orang murid — setiap orang dapat 3 biji (12 ÷ 4 = 3).",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang bab ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "n ialah faktor m JIKA m ÷ n tiada baki",
    bullets: [
      "Faktor Sepunya Terbesar (FSTB) dua nombor ialah faktor PALING BESAR yang dikongsi oleh KEDUA-DUA nombor tersebut.",
      "Untuk cari FSTB: senaraikan semua faktor setiap nombor, kenal pasti faktor yang sama (sepunya), pilih yang PALING BESAR.",
      "(Nota tambahan: nombor PERDANA cuma ada DUA faktor — 1 dan dirinya sendiri, cth. 2, 3, 5, 7, 11. Faktor perdana bagi sesuatu nombor ialah faktor-faktornya yang juga nombor perdana.)",
    ],
  },

  example: {
    mentorLine: "Jom kita cari FSTB dua nombor, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari FSTB bagi 12 dan 18",
    steps: [
      "Faktor 12: 1, 2, 3, 4, 6, 12",
      "Faktor 18: 1, 2, 3, 6, 9, 18",
      "Faktor sepunya (sama pada kedua-dua senarai): 1, 2, 3, 6",
      "FSTB = 6 (faktor sepunya yang paling besar)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Betul atau salah: 5 ialah faktor bagi 15.",
    choices: ["Betul", "Salah"],
    answer: "Betul",
    feedbackCorrect: "Tepat! 15 ÷ 5 = 3, tiada baki — jadi 5 memang faktor bagi 15.",
    feedbackIncorrect: "Belum tepat. Cuba bahagi 15 ÷ 5 — ada baki tak?",
  },
};
