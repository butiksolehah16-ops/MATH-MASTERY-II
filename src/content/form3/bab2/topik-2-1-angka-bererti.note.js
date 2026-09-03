// Kandungan Nota Interaktif — Form 3, Bab 2, Topik 2.1 (Angka Bererti). DSKP
// SK 2.1: menerangkan maksud angka bererti dan menentukan bilangan angka
// bererti suatu nombor; membundarkan nombor kepada bilangan angka bererti
// tertentu.
export const notaAngkaBerertiContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Bab baharu — kita belajar cara nyatakan KETEPATAN sesuatu ukuran.",
    title: "Dua Termometer, Dua Ketepatan",
    body:
      "Doktor mengukur suhu badan pesakit dengan termometer digital canggih: 37.50°C. Jururawat lain guna " +
      "termometer ringkas dan catat: 37.5°C. Nampak macam nombor yang \"sama\" — tapi sebenarnya TIDAK sama " +
      "tepatnya!\n\n" +
      "37.50°C menunjukkan alat tu boleh ukur sehingga dua tempat perpuluhan (lebih TEPAT), " +
      "manakala 37.5°C cuma sehingga satu tempat perpuluhan. Cara kita nyatakan ketepatan ni dipanggil " +
      "ANGKA BERERTI (significant figures).",
  },

  exploration: {
    mentorLine: "Jom kita bandingkan bilangan angka bererti bagi beberapa nombor.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah bilangan angka bererti bagi nombor 2.5, 0.0056, 3.070, " +
      "dan 1200 satu demi satu.",
    categories: ["2.5", "0.0056", "3.070", "1200"],
    values: [2, 2, 4, 2],
  },

  insight: {
    mentorLine: "Perasan tak bilangan sifar dalam nombor tu tak semestinya \"bererti\"?",
    title: "Bukan Semua Digit Adalah \"Bererti\"",
    bullets: [
      "ANGKA BERERTI (significant figures) ialah digit dalam sesuatu nombor yang membawa maklumat tentang KETEPATAN ukuran tersebut.",
      "2.5 ada 2 angka bererti (kedua-dua digit bukan sifar).",
      "0.0056 ada 2 angka bererti SAHAJA (5 dan 6) — sifar-sifar SEBELUM digit bukan sifar cuma menunjukkan kedudukan nilai tempat, BUKAN ketepatan.",
      "3.070 ada 4 angka bererti (3, 0, 7, 0) — sifar SELEPAS titik perpuluhan yang ditulis dengan sengaja MENUNJUKKAN ketepatan, jadi ia bererti.",
      "1200 (tanpa titik perpuluhan) biasanya dianggap 2 angka bererti (1 dan 2) — dua sifar di belakang tu kabur (ambiguous), boleh jadi sekadar nilai tempat sahaja melainkan dinyatakan lain.",
    ],
  },

  formula: {
    mentorLine: "Ini LIMA peraturan rasmi untuk kenal pasti angka bererti — simpan dalam kepala kamu.",
    title: "Peraturan Angka Bererti",
    expression: "Bukan sifar = bererti. Sifar tengah = bererti. Sifar depan = TIDAK bererti.",
    body:
      "PERATURAN 1: SEMUA digit BUKAN SIFAR sentiasa bererti. Cth: 246 ada 3 angka bererti.\n" +
      "PERATURAN 2: Sifar DI ANTARA dua digit bukan sifar (sifar \"terperangkap\") sentiasa bererti. Cth: " +
      "205 ada 3 angka bererti (2, 0, 5).\n" +
      "PERATURAN 3: Sifar DI HADAPAN (sebelum digit bukan sifar pertama) TIDAK bererti — ia cuma penanda " +
      "nilai tempat. Cth: 0.0056 ada 2 angka bererti sahaja (5, 6).\n" +
      "PERATURAN 4: Sifar DI BELAKANG (selepas titik perpuluhan) SENTIASA bererti. Cth: 3.070 ada 4 angka " +
      "bererti; 5.00 ada 3 angka bererti.\n" +
      "PERATURAN 5: Sifar DI BELAKANG bagi nombor BULAT (TANPA titik perpuluhan) biasanya TIDAK dikira " +
      "bererti (kabur/ambiguous), kecuali dinyatakan sebaliknya. Cth: 1200 dianggap 2 angka bererti.\n\n" +
      "MEMBUNDARKAN kepada bilangan angka bererti tertentu: kenal pasti digit angka bererti terakhir yang " +
      "dikehendaki, lihat digit SETERUSNYA (di sebelah kanan) — jika 5 atau lebih, BULATKAN NAIK; jika " +
      "kurang daripada 5, KEKALKAN. Gantikan digit selepasnya dengan sifar (bagi nombor bulat) atau buang " +
      "(bagi perpuluhan).",
  },

  example: {
    mentorLine: "Jom kita cuba dua jenis soalan — kira angka bererti, dan bundarkan.",
    title: "Contoh Diselesaikan",
    problem: "(a) Berapakah bilangan angka bererti dalam 0.00420? (b) Bundarkan 4576 kepada 2 angka bererti.",
    steps: [
      "(a) Sifar depan (0.00) TIDAK bererti. Digit 4, 2 bererti (Peraturan 1). Sifar SELEPAS 2 (di belakang, " +
      "lepas titik perpuluhan) BERERTI (Peraturan 4). Jumlah = 3 angka bererti (4, 2, 0)",
      "(b) 2 angka bererti pertama bagi 4576 ialah 4 dan 5. Digit seterusnya (7) ≥ 5, jadi bulatkan NAIK",
      "4576 → 46_ _ (bulatkan 45 naik jadi 46), gantikan baki dengan sifar → 4600",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Berapakah bilangan angka bererti dalam 0.0708?",
    choices: ["3", "2", "4", "1"],
    answer: "3",
    feedbackCorrect: "Tepat! Sifar depan (0.0) tidak bererti, tapi sifar TENGAH (antara 7 dan 8) bererti. Jadi 7, 0, 8 = 3 angka bererti.",
    feedbackIncorrect: "Belum tepat. Sifar SEBELUM digit bukan sifar pertama tidak bererti, tapi sifar DI ANTARA dua digit bukan sifar bererti.",
  },
};
