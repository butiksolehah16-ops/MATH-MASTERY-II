// Kandungan Nota Interaktif — Form 2, Bab 13, Topik 13.1 (Kebarangkalian
// Eksperimen). DSKP SK 13.1: melaksanakan eksperimen kebarangkalian mudah
// dan menentukan kebarangkalian eksperimen; membuat kesimpulan tentang
// kebarangkalian eksperimen apabila bilangan cubaan cukup besar.
export const notaKebarangkalianEksperimenContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Kalau kita lambung syiling banyak kali, macam mana nak anggar peluang dapat 'Kepala'? Kita CUBA je!",
    title: "Eksperimen Lambung Syiling",
    body:
      "Seorang murid melambung syiling 20 kali dan mencatat keputusan. Daripada CUBAAN SEBENAR ini, kita boleh " +
      "anggarkan KEBARANGKALIAN EKSPERIMEN — iaitu peluang berdasarkan data yang benar-benar berlaku.",
  },

  exploration: {
    mentorLine: "Jom dedah bilangan Kepala dan Ekor yang direkodkan.",
    prompt: "Klik \"Tambah palang seterusnya\" untuk dedah bilangan Kepala dan Ekor daripada 20 lambungan.",
    categories: ["Kepala", "Ekor"],
    values: [12, 8],
  },

  insight: {
    mentorLine: "Jumlah keseluruhan (20) itu ialah JUMLAH BILANGAN CUBAAN.",
    title: "Kebarangkalian Eksperimen = Nisbah Kekerapan",
    body:
      "Kepala muncul 12 kali daripada 20 cubaan. KEBARANGKALIAN EKSPERIMEN(Kepala) = 12 ÷ 20 = 0.6. Ini BUKAN " +
      "jawapan 'tetap' — kalau kita ulang eksperimen, nombor boleh berubah sikit. Tapi jika bilangan cubaan " +
      "SANGAT BESAR (contoh 1000 kali), kebarangkalian eksperimen akan menuju/hampir kepada satu nilai tertentu " +
      "(iaitu kebarangkalian teori, 0.5 untuk syiling saksama).",
  },

  formula: {
    mentorLine: "Ini formula rasmi kebarangkalian eksperimen.",
    title: "Formula Kebarangkalian Eksperimen",
    expression: "Kebarangkalian Eksperimen(A) = Bilangan kali A berlaku ÷ Jumlah bilangan cubaan",
    body:
      "KEBARANGKALIAN EKSPERIMEN(A) = (Bilangan kali peristiwa A berlaku) ÷ (Jumlah bilangan cubaan). " +
      "Nilainya sentiasa antara 0 dan 1. KESIMPULAN PENTING: apabila bilangan cubaan bertambah besar dan " +
      "besar, kebarangkalian eksperimen akan menuju/menghampiri satu nilai tetap — ini kerana corak sebenar " +
      "eksperimen semakin jelas apabila banyak data dikumpul.",
  },

  example: {
    mentorLine: "Jom kira kebarangkalian eksperimen langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebiji dadu dibaling 50 kali. Nombor '6' muncul 9 kali. Cari kebarangkalian eksperimen mendapat nombor 6.",
    steps: [
      "Bilangan kali '6' muncul = 9",
      "Jumlah bilangan cubaan = 50",
      "Kebarangkalian Eksperimen = 9 ÷ 50 = 0.18",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Syiling dilambung 40 kali, Kepala muncul 25 kali. Apakah kebarangkalian eksperimen mendapat Kepala?",
    choices: ["0.625", "0.4", "0.25", "0.75"],
    answer: "0.625",
    feedbackCorrect: "Tepat! 25 ÷ 40 = 0.625.",
    feedbackIncorrect: "Belum tepat. Bahagikan bilangan Kepala dengan jumlah cubaan: 25 ÷ 40.",
  },
};
