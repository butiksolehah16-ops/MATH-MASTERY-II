// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.6 (Simetri
// Putaran). DSKP SK 11.6: menerangkan simetri putaran, menentukan peringkat
// simetri putaran bagi suatu objek.
export const notaSimetriPutaranContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sesetengah bentuk nampak SAMA walaupun kamu putarkannya — itu SIMETRI PUTARAN!",
    title: "Bilah Kipas Berputar",
    body:
      "Sebuah kipas dengan 3 bilah nampak SAMA setiap kali ia berputar 120° — kamu tak dapat bezakan sama " +
      "ada ia dah berputar atau tidak! Bentuk yang nampak sama pada beberapa kedudukan semasa berputar " +
      "penuh (360°) mempunyai SIMETRI PUTARAN.",
  },

  exploration: {
    mentorLine: "Jom kira berapa kali segi tiga sama sisi nampak SAMA semasa berputar 360° penuh.",
    prompt:
      "Segi tiga sama sisi sepadan dengan bentuk asalnya pada setiap 120°. Klik butang untuk dedah setiap " +
      "kedudukan padanan (120°, 240°, 360°).",
    categories: ["120°", "240°", "360°"],
    values: [1, 1, 1],
  },

  insight: {
    mentorLine: "Perasan bentuk tu sepadan dengan dirinya SEBANYAK 3 kali semasa berputar penuh?",
    title: "Peringkat Simetri Putaran = Bilangan Padanan",
    bullets: [
      "Segi tiga sama sisi sepadan dengan bentuk asalnya pada 120°, 240°, dan 360° — SEBANYAK 3 kali.",
      "Bilangan kali ni dipanggil PERINGKAT SIMETRI PUTARAN. Jadi segi tiga sama sisi ada peringkat simetri putaran = 3.",
    ],
  },

  formula: {
    mentorLine: "Ini cara kira peringkat simetri putaran — simpan dalam kepala kamu.",
    title: "Peringkat Simetri Putaran",
    expression: "Peringkat Simetri Putaran = 360° ÷ Sudut Terkecil untuk Padan Semula",
    bullets: [
      "PERINGKAT SIMETRI PUTARAN sesuatu bentuk ialah bilangan kali bentuk tu nampak SAMA (sepadan dengan kedudukan asal) semasa berputar 360° PENUH.",
      "Untuk poligon SEKATA (semua sisi & sudut sama) dengan n sisi, peringkat simetri putarannya SENTIASA = n (cth. segi empat sama = 4, segi lima sekata = 5, heksagon sekata = 6).",
      "Bentuk yang HANYA sepadan pada 360° (tiada padanan lain) ada peringkat simetri putaran = 1 (dianggap TIADA simetri putaran).",
    ],
  },

  example: {
    mentorLine: "Jom kita kira peringkat simetri putaran segi empat sama, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah segi empat sama sepadan dengan dirinya sendiri pada setiap 90°. Cari peringkat simetri putarannya.",
    steps: [
      "Sudut terkecil untuk padan semula = 90°",
      "Peringkat simetri putaran = 360° ÷ 90°",
      "= 4",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah peringkat simetri putaran bagi segi empat sama (persegi)?",
    choices: ["4", "2", "1", "8"],
    answer: "4",
    feedbackCorrect: "Tepat! Segi empat sama sepadan pada setiap 90°, jadi 360 ÷ 90 = 4.",
    feedbackIncorrect: "Belum tepat. Segi empat sama sepadan pada setiap 90°: 360 ÷ 90 = 4.",
  },
};
