// Kandungan Nota Interaktif — Form 2, Bab 13, Topik 13.2 (Kebarangkalian
// Teori yang Melibatkan Kesudahan Sama Boleh Jadi). DSKP SK 13.2: ruang
// sampel & peristiwa; model kebarangkalian teori P(A)=n(A)/n(S); perkaitan
// kebarangkalian teori dgn eksperimen; menentukan kebarangkalian peristiwa.
export const notaKebarangkalianTeoriContent = {
  visualType: "set-builder",

  hook: {
    mentorLine: "Kali ni kita TAK perlu buat eksperimen sebenar — kita boleh KIRA kebarangkalian terus guna logik!",
    title: "Membaling Sebiji Dadu",
    body:
      "Sebiji dadu bersisi 6 dibaling sekali. Setiap nombor (1 hingga 6) mempunyai peluang SAMA untuk muncul " +
      "— ini dipanggil KESUDAHAN SAMA BOLEH JADI. Set semua kesudahan yang mungkin dipanggil RUANG SAMPEL, S.",
  },

  exploration: {
    mentorLine: "Jom bina ruang sampel S bagi dadu ini, unsur demi unsur.",
    prompt: "Klik \"Tambah unsur\" untuk bina set S = semua kesudahan mungkin apabila dadu dibaling.",
    setName: "S",
    elements: ["1", "2", "3", "4", "5", "6"],
  },

  insight: {
    mentorLine: "n(S) = 6 sekarang. Jom kita tentukan satu PERISTIWA daripada ruang sampel ini.",
    title: "Peristiwa A ialah Subset Ruang Sampel",
    bullets: [
      "Katakan PERISTIWA A = 'mendapat nombor genap'. Daripada S = {1,2,3,4,5,6}, unsur yang memenuhi A ialah {2,4,6} — jadi n(A) = 3.",
      "KEBARANGKALIAN TEORI peristiwa A ialah nisbah n(A) berbanding n(S): P(A) = 3 ÷ 6 = 0.5.",
      "Apabila bilangan cubaan sebenar (eksperimen) sangat besar, kebarangkalian eksperimen akan menghampiri nilai kebarangkalian teori ini.",
    ],
  },

  formula: {
    mentorLine: "Ini formula rasmi kebarangkalian teori — sangat penting!",
    title: "Formula Kebarangkalian Teori",
    expression: "P(A) = n(A) ÷ n(S)",
    bullets: [
      "P(A) = n(A) ÷ n(S), dengan n(S) = jumlah bilangan kesudahan SAMA BOLEH JADI dalam ruang sampel, dan n(A) = bilangan kesudahan yang memenuhi peristiwa A.",
      "Untuk eksperimen gabungan (contoh lambung 2 syiling), gambar rajah pokok atau set boleh digunakan untuk senaraikan semua kesudahan ruang sampel (cth: S = {HH, HT, TH, TT}, n(S) = 4).",
    ],
  },

  example: {
    mentorLine: "Jom kita kira P(A) langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kotak berisi kad bernombor 1 hingga 10. Satu kad diambil secara rawak. Cari kebarangkalian kad itu gandaan 3.",
    steps: [
      "Ruang sampel S = {1,2,...,10}, jadi n(S) = 10",
      "Peristiwa A = gandaan 3 dalam julat 1-10 = {3, 6, 9}, jadi n(A) = 3",
      "P(A) = n(A) ÷ n(S) = 3 ÷ 10 = 0.3",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebiji dadu dibaling. Apakah kebarangkalian mendapat nombor kurang daripada 3?",
    choices: ["2/6", "1/6", "3/6", "4/6"],
    answer: "2/6",
    feedbackCorrect: "Tepat! A = {1,2}, jadi n(A)=2, n(S)=6, P(A) = 2/6.",
    feedbackIncorrect: "Belum tepat. Senaraikan dahulu nombor kurang drpd 3 dalam S = {1,...,6}, iaitu {1,2}.",
  },
};
