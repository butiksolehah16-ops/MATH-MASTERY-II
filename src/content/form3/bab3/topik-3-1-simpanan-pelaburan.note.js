// Kandungan Nota Interaktif — Form 3, Bab 3, Topik 3.1 (Simpanan dan
// Pelaburan). DSKP SK 3.1: mengenal jenis simpanan/pelaburan; mengira faedah
// mudah dan faedah kompaun; mengira nilai pulangan pelaburan; membanding
// risiko/pulangan/kecairan; mengira purata kos sesyer; menyelesaikan masalah.
export const notaSimpananPelaburanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Bab baharu — Matematik Pengguna! Jom mula dengan situasi kewangan yang setiap orang akan hadapi.",
    title: "RM5000 Dalam Akaun Simpanan",
    body:
      "Ali menyimpan RM5000 dalam akaun simpanan tetap yang memberi faedah MUDAH 4% setahun. Selepas 3 tahun, " +
      "berapakah JUMLAH faedah yang Ali perolehi, dan berapakah jumlah keseluruhan dalam akaunnya?",
  },

  exploration: {
    mentorLine: "Jom kita lihat bagaimana simpanan RM1000 berkembang setiap tahun dengan faedah mudah 5% setahun.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah jumlah simpanan (prinsipal + faedah terkumpul) bagi " +
      "Tahun 1 hingga Tahun 4. Perhatikan: jumlah BERTAMBAH SAMA (RM50) setiap tahun — ini ciri faedah MUDAH.",
    categories: ["Tahun 1", "Tahun 2", "Tahun 3", "Tahun 4"],
    values: [1050, 1100, 1150, 1200],
  },

  insight: {
    mentorLine: "Perasan tambahan tu SAMA (RM50) setiap tahun? Itu ciri faedah MUDAH.",
    title: "Faedah Mudah vs Faedah Kompaun",
    body:
      "FAEDAH MUDAH (simple interest) dikira HANYA berdasarkan PRINSIPAL asal — jumlah faedah setiap tahun " +
      "SAMA (macam simpanan RM1000 di atas, bertambah tepat RM50 setiap tahun). FAEDAH KOMPAUN (compound " +
      "interest) pula dikira berdasarkan prinsipal + faedah TERKUMPUL sebelumnya — jadi faedah setiap tahun " +
      "SEMAKIN BESAR (\"faedah atas faedah\"), menghasilkan pertumbuhan yang lebih pantas dalam jangka masa " +
      "panjang.\n\n" +
      "JENIS SIMPANAN: akaun simpanan (savings account), akaun simpanan tetap/fixed deposit (faedah lebih " +
      "tinggi tapi wang terikat tempoh tertentu), akaun semasa (current account, biasanya tiada/faedah " +
      "rendah tapi paling mudah dikeluarkan). JENIS PELABURAN: saham (shares), amanah saham (unit trust), " +
      "hartanah (property) — biasanya pulangan lebih tinggi tapi RISIKO juga lebih tinggi berbanding " +
      "simpanan.",
  },

  formula: {
    mentorLine: "Ini rumus rasmi faedah mudah dan faedah kompaun — simpan dalam kepala kamu.",
    title: "Rumus Faedah Mudah dan Kompaun",
    expression: "I = Prt      MV = P(1 + r/n)ⁿᵗ",
    body:
      "FAEDAH MUDAH: I = Prt, dengan I = faedah, P = prinsipal, r = kadar faedah setahun (dalam PERPULUHAN, " +
      "cth. 4% = 0.04), t = tempoh (dalam TAHUN). Jumlah akhir = P + I.\n\n" +
      "NILAI MATANG (faedah kompaun): MV = P(1 + r/n)ⁿᵗ, dengan MV = nilai matang (prinsipal + faedah), n = " +
      "bilangan kali faedah dikompaun SETAHUN (cth. n=1 tahunan, n=12 bulanan), t = tempoh (tahun). Faedah " +
      "kompaun = MV − P.\n\n" +
      "PERBANDINGAN RISIKO, PULANGAN DAN KECAIRAN: umumnya, SEMAKIN TINGGI potensi pulangan sesuatu pelaburan " +
      "(cth. saham), SEMAKIN TINGGI jugak risikonya, dan selalunya KURANG cair (susah tunaikan cepat " +
      "berbanding akaun simpanan biasa). Simpanan (savings account) risiko RENDAH, pulangan RENDAH, tapi " +
      "SANGAT cair (senang keluarkan bila-bila masa).\n\n" +
      "PURATA KOS SESYER (strategi pemurataan kos ringgit): jika kamu labur jumlah RINGGIT TETAP setiap kali " +
      "(bukan bilangan syer tetap) pada harga berbeza-beza, purata kos SESYER = (Jumlah wang dilaburkan) ÷ " +
      "(Jumlah syer diperoleh). Strategi ni mengurangkan risiko beli pada harga PUNCAK sahaja.",
  },

  example: {
    mentorLine: "Jom kita kira faedah mudah dan nilai matang faedah kompaun, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "(a) Ali menyimpan RM5000 pada faedah mudah 4% setahun selama 3 tahun. Cari jumlah faedah. (b) Siti " +
      "melabur RM2000 pada faedah kompaun 5% setahun (dikompaun tahunan) selama 2 tahun. Cari nilai matang.",
    steps: [
      "(a) I = Prt = 5000 × 0.04 × 3 = 600, jadi jumlah faedah Ali = RM600",
      "(b) MV = P(1 + r/n)ⁿᵗ, dengan P=2000, r=0.05, n=1, t=2: MV = 2000(1 + 0.05/1)¹ˣ²",
      "= 2000(1.05)² = 2000 × 1.1025 = RM2205",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Kirakan faedah mudah bagi prinsipal RM3000 pada kadar 6% setahun selama 2 tahun.",
    choices: ["RM360", "RM180", "RM3360", "RM600"],
    answer: "RM360",
    feedbackCorrect: "Tepat! I = Prt = 3000 × 0.06 × 2 = RM360.",
    feedbackIncorrect: "Belum tepat. Guna I = Prt: 3000 × 0.06 × 2.",
  },
};
