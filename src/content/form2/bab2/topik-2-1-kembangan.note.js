// Kandungan Nota Interaktif — Form 2, Bab 2, Topik 2.1 (Kembangan).
// DSKP SK 2.1: menerangkan maksud kembangan; melaksanakan kembangan dua
// ungkapan algebra; mempermudahkan ungkapan gabungan operasi termasuk
// kembangan; menyelesaikan masalah yang melibatkan kembangan (dihadkan
// kepada ungkapan algebra linear).
export const notaKembanganContent = {
  visualType: "distribution",

  hook: {
    mentorLine: "Masuk topik algebra baharu — kali ni kita belajar 'buka' kurungan dengan cara yang betul.",
    title: "Bengkel Seni Sekolah",
    bullets: [
      "Sekolah menganjurkan 4 bengkel seni. SETIAP bengkel memerlukan bekalan yang sama: (3x + 4) set warna, di mana x mewakili bilangan pelajar berdaftar bagi bengkel tersebut (sama untuk keempat-empat bengkel, sebab pendaftaran ditutup pada bilangan yang sama).",
      "Jumlah keseluruhan set warna untuk kesemua 4 bengkel boleh ditulis sebagai 4(3x + 4). Tapi macam mana nak 'buka' kurungan tu untuk dapat bentuk yang lebih mudah dikira?",
    ],
  },

  exploration: {
    mentorLine: "Jom kita agihkan bekalan bengkel demi bengkel, dan lihat apa jadi bila semua digabungkan.",
    prompt:
      "Klik \"Agihkan kumpulan seterusnya\" untuk dedahkan keempat-empat bengkel (3x + 4 set warna setiap " +
      "satu). Perhatikan macam mana jumlah akhir terbentuk.",
    multiplier: 4,
    coefficient: 3,
    constant: 4,
  },

  insight: {
    mentorLine: "Perasan apa yang berlaku pada setiap bahagian dalam kurungan?",
    title: "Kembangan = Agih Darab kepada SETIAP Sebutan",
    bullets: [
      "Kau baru nampak 4(3x + 4) = 12x + 16. Nombor 4 di luar kurungan DIDARABKAN dengan SETIAP sebutan di dalam kurungan secara berasingan: 4 × 3x = 12x, dan 4 × 4 = 16, kemudian kedua-dua hasil itu digabungkan.",
      "Proses ini dipanggil KEMBANGAN (expansion), dan ia berdasarkan SIFAT KALIS SAGIHAN (distributive property) dalam Matematik — sifat yang sama yang kau guna bila kira 3 × (4 + 2) dengan cara 3×4 + 3×2 = 12 + 6 = 18, sama je jawapannya dengan 3 × 6 = 18.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi kembangan — simpan dalam kepala kamu.",
    title: "Formula Rasmi",
    expression: "k(ax + b) = kax + kb",
    bullets: [
      "Untuk kembangkan k(ax + b): darabkan k dengan SETIAP sebutan di dalam kurungan secara berasingan (darab dengan ax dahulu, kemudian darab dengan b), kemudian gabungkan kedua-dua hasil dengan tanda yang betul.",
      "Formula ni tetap sah walaupun b negatif — cth. k(ax − b) = kax − kb, sebab k(ax − b) sama dengan k(ax + (−b)) = kax + k(−b) = kax − kb. Sentiasa jaga TANDA setiap sebutan (positif/negatif) semasa mendarab.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah, termasuk kes ada tanda negatif.",
    title: "Contoh Diselesaikan",
    problem: "Kembangkan 5(2x − 3)",
    steps: [
      "Darab 5 dengan sebutan pertama: 5 × 2x = 10x",
      "Darab 5 dengan sebutan kedua (termasuk tandanya): 5 × (−3) = −15",
      "Gabungkan: 5(2x − 3) = 10x − 15",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Kembangkan 3(4x + 2)",
    choices: ["12x + 6", "12x + 2", "7x + 6", "12x + 5"],
    answer: "12x + 6",
    feedbackCorrect: "Tepat! 3 × 4x = 12x, dan 3 × 2 = 6, jadi 3(4x + 2) = 12x + 6.",
    feedbackIncorrect: "Belum tepat. Darab 3 dengan KEDUA-DUA sebutan berasingan: 3 × 4x = 12x, 3 × 2 = 6.",
  },
};
