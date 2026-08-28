// Kandungan Nota Interaktif — Form 3, Bab 9, Topik 9.1 (Garis Lurus). DSKP
// SK 9.1: perkaitan y=mx+c dengan kecerunan/pintasan-y; mentafsir bentuk lain
// (ax+by=c, x/a+y/b=1); perkaitan titik dengan persamaan garis; kecerunan
// garis selari; menentukan persamaan garis; titik persilangan dua garis;
// menyelesaikan masalah. Topik PENUTUP Tingkatan 3 — gabungan algebra penuh.
export const notaGarisLurusContent = {
  visualType: "function-graph",

  hook: {
    mentorLine: "Bab TERAKHIR Tingkatan 3 — Garis Lurus! Ini gabungan SEMUA kemahiran algebra yang kamu dah kuasai.",
    title: "Pelan Data Telefon Bimbit",
    body:
      "Sebuah syarikat telefon caj RM3 yuran tetap SETIAP bulan, PLUS RM2 untuk setiap GB data yang " +
      "digunakan. Kalau x ialah bilangan GB digunakan dan y ialah jumlah bayaran (RM), perkaitan ni boleh " +
      "ditulis sebagai PERSAMAAN: y = 2x + 3. Setiap bahagian persamaan ni ada MAKNA penting — jom kita " +
      "siasat.",
  },

  exploration: {
    mentorLine: "Jom kita plot titik demi titik bagi persamaan y = 2x + 3, dan sambungkan.",
    prompt: "Jadual nilai bagi y = 2x + 3: x = 0, 1, 2, 3. Klik butang untuk tambah titik satu demi satu.",
    curveType: "line",
    xMax: 4,
    yMax: 10,
    points: [
      { x: 0, y: 3 },
      { x: 1, y: 5 },
      { x: 2, y: 7 },
      { x: 3, y: 9 },
    ],
  },

  insight: {
    mentorLine: "Perasan setiap kali x naik 1, y naik TEPAT 2? Dan bila x=0, y=3?",
    title: "y = mx + c — Setiap Huruf Ada Makna",
    body:
      "Dalam y = mx + c: m ialah KECERUNAN (gradient) — kadar perubahan y bagi SETIAP 1 unit pertambahan x " +
      "(dalam contoh tadi, m=2 bermaksud setiap +1 GB, bayaran naik RM2). c ialah PINTASAN-Y (y-intercept) " +
      "— nilai y BILA x=0 (dalam contoh tadi, c=3 ialah yuran tetap bulanan, walaupun x=0 GB digunakan). " +
      "SETIAP titik (x, y) yang terletak PADA garis tu mesti MEMENUHI persamaan y = 2x + 3 — kalau titik tak " +
      "memenuhi persamaan, ia TIDAK terletak pada garis tersebut.",
  },

  formula: {
    mentorLine: "Ini SEMUA rumus penting garis lurus — rujuk semula bila perlu, banyak yang perlu diingati!",
    title: "Rumus Garis Lurus",
    expression: "y = mx + c   (m = kecerunan, c = pintasan-y)",
    body:
      "BENTUK LAIN persamaan garis lurus: ax + by = c (bentuk am) — TUKAR kepada y=mx+c dengan " +
      "menyusun-semula: y = (−a/b)x + (c/b), jadi m = −a/b. BENTUK PINTASAN: x/p + y/q = 1 (p = pintasan-x, " +
      "q = pintasan-y) — kecerunan m = −q/p.\n\n" +
      "PERKAITAN TITIK DENGAN PERSAMAAN: satu titik (x₁, y₁) terletak PADA garis y=mx+c JIKA DAN HANYA JIKA " +
      "GANTIKAN x₁ dan y₁ ke dalam persamaan menghasilkan PERNYATAAN BENAR (kiri = kanan).\n\n" +
      "KECERUNAN GARIS SELARI: DUA garis adalah SELARI JIKA DAN HANYA JIKA kecerunan (m) kedua-duanya SAMA.\n\n" +
      "MENENTUKAN PERSAMAAN GARIS: (a) Jika diberi KECERUNAN m dan SATU titik (x₁,y₁): guna y − y₁ = " +
      "m(x − x₁), kemudian susun semula kepada y=mx+c. (b) Jika diberi DUA titik: cari kecerunan dahulu " +
      "guna m = (y₂−y₁)/(x₂−x₁), kemudian guna kaedah (a).\n\n" +
      "TITIK PERSILANGAN DUA GARIS: selesaikan KEDUA-DUA persamaan garis SERENTAK (guna penggantian, " +
      "penghapusan, atau kaedah graf) — jawapannya ialah SATU titik (x,y) yang memenuhi KEDUA-DUA " +
      "persamaan serentak.",
  },

  example: {
    mentorLine: "Jom kita cuba tiga jenis soalan garis lurus, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "(a) Tukar 2x + 4y = 12 kepada bentuk y=mx+c, dan nyatakan kecerunannya. (b) Cari persamaan garis " +
      "yang melalui (2, 5) dengan kecerunan 3. (c) Cari titik persilangan y = x + 1 dan y = −x + 5.",
    steps: [
      "(a) 4y = 12 − 2x, jadi y = (12−2x)/4 = 3 − 0.5x, iaitu y = −0.5x + 3. Kecerunan m = −0.5",
      "(b) y − y₁ = m(x−x₁): y − 5 = 3(x−2), jadi y = 3x − 6 + 5 = 3x − 1",
      "(c) Samakan kedua-dua: x + 1 = −x + 5, jadi 2x = 4, x = 2. Gantikan balik: y = 2+1 = 3. Titik " +
      "persilangan = (2, 3)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Garis y = 4x − 1 dan garis y = 4x + 7 — adakah kedua-dua garis ini SELARI?",
    choices: ["Ya, kecerunan kedua-duanya 4", "Tidak, kecerunan berbeza", "Ya, sebab pintasan-y sama", "Tidak boleh ditentukan"],
    answer: "Ya, kecerunan kedua-duanya 4",
    feedbackCorrect: "Tepat! Dua garis selari jika kecerunan SAMA — kedua-dua garis ini ada m=4.",
    feedbackIncorrect: "Belum tepat. Garis selari mempunyai KECERUNAN yang sama — bandingkan nilai m (bukan c).",
  },
};
