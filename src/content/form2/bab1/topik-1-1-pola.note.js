// Kandungan Nota Interaktif — Form 2, Bab 1, Topik 1.1 (Pola).
// DSKP SK 1.1: mengenal dan memerihalkan pola pelbagai set nombor dan objek,
// seterusnya membuat rumusan tentang pola. Nota ditulis lengkap & berdikari
// supaya pelajar faham penuh tanpa perlu rujuk sumber lain.
export const notaPolaContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Jom kita mula Tingkatan 2 dengan satu situasi yang korang mesti pernah nampak — majlis kenduri!",
    title: "Susunan Kerusi Majlis",
    bullets: [
      "Sebuah keluarga menyusun kerusi untuk majlis kenduri dalam beberapa baris menghala pentas. Baris pertama (paling dekat dengan pentas) ada 4 kerusi. Setiap baris seterusnya ditambah kerusi mengikut kadar yang SAMA berbanding baris sebelumnya, supaya susunan nampak kemas dan seimbang.",
      "Kalau kita tahu corak penambahan ni, kita boleh teka terus berapa kerusi pada baris ke-10 tanpa perlu susun semuanya satu-satu!",
    ],
  },

  exploration: {
    mentorLine: "Jom kita dedahkan bilangan kerusi bagi setiap baris, satu demi satu, dan cari coraknya.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedahkan bilangan kerusi bagi Baris 1 hingga Baris 5. Perhatikan " +
      "betul-betul: berapa bilangan kerusi bertambah setiap kali beralih ke baris seterusnya?",
    categories: ["Baris 1", "Baris 2", "Baris 3", "Baris 4", "Baris 5"],
    values: [4, 7, 10, 13, 16],
  },

  insight: {
    mentorLine: "Perasan tak corak penambahannya?",
    title: "Pola = Susunan yang Ada Peraturan Tetap",
    bullets: [
      "Bilangan kerusi tadi ialah 4, 7, 10, 13, 16 — setiap baris bertambah TEPAT 3 kerusi berbanding baris sebelumnya. Susunan nombor atau objek yang dibentuk mengikut peraturan tetap macam ni dipanggil POLA (pattern).",
      "Bagi POLA NOMBOR, peraturan tetap tu biasanya salah satu daripada: tambah nombor tetap, tolak nombor tetap, darab nombor tetap, atau bahagi nombor tetap.",
      "Bagi POLA OBJEK (rajah, bentuk), kita perhatikan macam mana susunan objek berubah dari satu peringkat ke peringkat seterusnya (cth. bilangan petak, bucu, atau sisi yang bertambah).",
      "Nombor genap: 2, 4, 6, 8, 10, ... (setiap sebutan tambah 2, semuanya boleh dibahagi tepat dengan 2)",
      "Nombor ganjil: 1, 3, 5, 7, 9, ... (setiap sebutan tambah 2, tiada satu pun boleh dibahagi tepat dengan 2)",
      "Nombor Fibonacci: 1, 1, 2, 3, 5, 8, 13, ... (setiap sebutan = jumlah DUA sebutan sebelumnya — 1+1=2, 1+2=3, 2+3=5, 3+5=8, dan seterusnya; peraturan ni BUKAN tambah/tolak/darab/bahagi nombor tetap, tapi tetap satu pola sebab ada peraturan yang konsisten)",
      "Segitiga Pascal: susunan nombor berbentuk segitiga di mana setiap nombor (kecuali nombor 1 di setiap hujung baris) ialah jumlah DUA nombor tepat di atasnya pada baris sebelum — Baris 1: 1, Baris 2: 1 1, Baris 3: 1 2 1, Baris 4: 1 3 3 1, dan seterusnya.",
    ],
  },

  formula: {
    mentorLine: "Ini cara am untuk kenal pasti sebarang pola — simpan dalam kepala kamu.",
    title: "Cara Kenal Pasti Pola",
    expression: "Sebutan seterusnya = Sebutan sekarang ± / × / ÷ nombor tetap",
    bullets: [
      "Untuk kenal pasti pola nombor: (1) Kira beza atau nisbah antara SETIAP pasangan sebutan berturutan.",
      "(2) Sahkan sama ada beza/nisbah itu SAMA (tetap) sepanjang jujukan — kalau ya, itu peraturan pola tersebut.",
      "(3) Guna peraturan tetap tu untuk teruskan pola ke sebutan seterusnya.",
      "Untuk pola objek pula, bandingkan bilangan bahagian (petak, garis, bucu) antara peringkat berturutan untuk cari corak pertambahannya.",
      "Ingat: sebahagian pola (seperti Fibonacci) tidak dibentuk oleh SATU operasi tetap sahaja — sentiasa semak beberapa pasang sebutan dahulu sebelum membuat kesimpulan.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah, supaya betul-betul mantap.",
    title: "Contoh Diselesaikan",
    problem: "Kenal pasti pola bagi jujukan 5, 9, 13, 17, ... dan cari dua sebutan seterusnya.",
    steps: [
      "Cari beza antara sebutan berturutan: 9 − 5 = 4, 13 − 9 = 4, 17 − 13 = 4 → beza tetap +4",
      "Sahkan pola: setiap sebutan dibentuk dengan menambah 4 pada sebutan sebelumnya",
      "Sebutan seterusnya: 17 + 4 = 21, kemudian 21 + 4 = 25",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah dua sebutan seterusnya bagi pola 6, 10, 14, 18, ...?",
    choices: ["22, 26", "20, 22", "22, 24", "24, 30"],
    answer: "22, 26",
    feedbackCorrect: "Tepat! Beza tetap ialah +4, jadi 18 + 4 = 22, dan 22 + 4 = 26.",
    feedbackIncorrect: "Belum tepat. Cari dulu beza tetap: 10−6=4, 14−10=4, 18−14=4 → +4 setiap kali.",
  },
};
