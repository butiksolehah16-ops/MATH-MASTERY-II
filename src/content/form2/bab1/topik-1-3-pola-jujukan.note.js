// Kandungan Nota Interaktif — Form 2, Bab 1, Topik 1.3 (Pola dan Jujukan).
// DSKP SK 1.3: membuat generalisasi tentang pola suatu jujukan menggunakan
// nombor, perkataan dan ungkapan algebra; menentukan sebutan tertentu bagi
// suatu jujukan; menyelesaikan masalah yang melibatkan jujukan.
export const notaPolaJujukanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Ingat susunan kerusi majlis dalam Topik 1.1? Sekarang kita nak jawab soalan yang lebih mencabar.",
    title: "Berapa Kerusi pada Baris ke-50?",
    bullets: [
      "Kilang perabot menghasilkan susunan kerusi mengikut jujukan 4, 7, 10, 13, ... — setiap baris tambah 3 kerusi berbanding baris sebelumnya (macam yang kita jumpa dalam Topik 1.1).",
      "Sekarang bayangkan pelanggan tanya: \"Berapa kerusi pada baris ke-50?\" Nak kira satu-satu sampai baris ke-50 mengambil masa yang sangat lama!",
      "Kita perlukan satu CARA PINTAS — satu peraturan am yang boleh terus beri jawapan untuk MANA-MANA kedudukan, tanpa perlu senaraikan semua sebutan sebelumnya.",
    ],
  },

  exploration: {
    mentorLine: "Jom kita lihat semula sebutan-sebutan awal dan cuba jumpa corak sebenar kedudukannya.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedahkan T1 hingga T5. Untuk setiap sebutan, cuba bandingkan " +
      "dengan kedudukannya (n): berapa kali beza tetap (3) telah ditambah pada sebutan pertama (4)?",
    categories: ["T1", "T2", "T3", "T4", "T5"],
    values: [4, 7, 10, 13, 16],
  },

  insight: {
    mentorLine: "Perasan hubungan antara kedudukan sebutan (n) dan nilainya?",
    title: "Generalisasi: Peraturan Am untuk Sebarang Kedudukan",
    bullets: [
      "Mari kita semak: T1 = 4 (0 kali tambah 3), T2 = 4 + 1×3 = 7, T3 = 4 + 2×3 = 10, T4 = 4 + 3×3 = 13, T5 = 4 + 4×3 = 16.",
      "Perasan corak tu? Bilangan kali beza tetap (3) ditambah SENTIASA SATU KURANG daripada kedudukan sebutan (n). Sebagai contoh, untuk T5 (n = 5), beza tetap ditambah sebanyak 4 kali (iaitu 5 − 1 = 4 kali).",
      "Membuat kesimpulan tentang corak sesuatu jujukan macam ni dipanggil GENERALISASI — kita nyatakan peraturan itu dalam bentuk yang berfungsi untuk SEBARANG kedudukan n, bukan hanya untuk beberapa sebutan pertama sahaja.",
      "Generalisasi boleh dinyatakan dalam PERKATAAN (\"sebutan pertama tambah beza tetap didarab dengan satu kurang daripada kedudukannya\"), atau dalam UNGKAPAN ALGEBRA yang lebih ringkas menggunakan simbol.",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi sebutan am — simpan dalam kepala kamu, ia amat berguna.",
    title: "Formula Sebutan Am (Jenis Tambah/Tolak Tetap)",
    expression: "Tn = a + (n − 1)d",
    bullets: [
      "Untuk jujukan yang dibentuk dengan MENAMBAH atau MENOLAK nombor tetap setiap kali: Tn ialah nilai sebutan pada kedudukan ke-n, a ialah SEBUTAN PERTAMA (T1), d ialah BEZA SEPUNYA (nilai tetap yang ditambah/ditolak setiap kali — boleh positif atau negatif), dan n ialah KEDUDUKAN sebutan yang kita nak cari.",
      "Untuk jujukan 4, 7, 10, 13, ...: a = 4, d = 3. Maka T50 = 4 + (50 − 1)(3) = 4 + 147 = 151 — tanpa perlu senaraikan 50 sebutan!",
      "Nota tambahan (pengayaan): bagi jujukan yang dibentuk dengan MENDARAB atau MEMBAHAGI nombor tetap setiap kali (cth. 2, 4, 8, 16, ... di mana setiap sebutan ×2), formula sebutan amnya berbeza sedikit: Tn = a × r^(n−1), di mana r ialah NISBAH SEPUNYA (nombor tetap yang didarab/dibahagi setiap kali).",
      "Formula Tn = a + (n−1)d HANYA sah untuk jujukan jenis tambah/tolak tetap — sentiasa kenal pasti dahulu jenis peraturan jujukan tersebut sebelum memilih formula yang sesuai.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah, supaya betul-betul mantap.",
    title: "Contoh Diselesaikan",
    problem: "Diberi jujukan 5, 9, 13, 17, ..., cari sebutan ke-12 (T12).",
    steps: [
      "Kenal pasti a (sebutan pertama) = 5, dan d (beza sepunya) = 9 − 5 = 4",
      "Gantikan ke dalam formula: T12 = 5 + (12 − 1)(4)",
      "T12 = 5 + 11 × 4 = 5 + 44 = 49",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Diberi jujukan 2, 6, 10, 14, ..., apakah nilai T10?",
    choices: ["38", "36", "40", "34"],
    answer: "38",
    feedbackCorrect: "Tepat! a = 2, d = 4, jadi T10 = 2 + (10−1)(4) = 2 + 36 = 38.",
    feedbackIncorrect: "Belum tepat. Guna Tn = a + (n−1)d dengan a = 2, d = 4, n = 10: T10 = 2 + 9×4 = 38.",
  },
};
