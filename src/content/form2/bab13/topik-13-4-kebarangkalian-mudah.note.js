// Kandungan Nota Interaktif — Form 2, Bab 13, Topik 13.4 (Kebarangkalian
// Mudah). DSKP SK 13.4: menyelesaikan masalah yang melibatkan kebarangkalian
// suatu peristiwa — gabungan konsep ruang sampel, kebarangkalian teori dan
// peristiwa pelengkap dalam konteks sebenar.
export const notaKebarangkalianMudahContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang jom gabungkan semua yang dah belajar — ruang sampel, kebarangkalian, pelengkap — untuk selesaikan masalah SEBENAR!",
    title: "Memilih Murid Secara Rawak",
    body:
      "Sebuah kelas ada 30 murid dengan sukan kegemaran berbeza. Jika SEORANG murid dipilih secara rawak, " +
      "apakah kebarangkalian dia suka sukan tertentu? Kita perlu kenal pasti n(S) dan n(A) daripada DATA " +
      "SEBENAR (jadual/carta) dahulu.",
  },

  exploration: {
    mentorLine: "Jom dedah bilangan murid bagi setiap sukan kegemaran.",
    prompt: "Klik \"Tambah palang seterusnya\" untuk dedah bilangan murid bagi setiap sukan.",
    categories: ["Bola Sepak", "Badminton", "Renang"],
    values: [12, 10, 8],
  },

  insight: {
    mentorLine: "Jumlah keseluruhan (30) itulah n(S) — jumlah SEMUA murid dalam kelas.",
    title: "Kenal Pasti n(S) dan n(A) Daripada Konteks",
    body:
      "n(S) = 30 (jumlah murid). Jika A = 'murid suka Badminton', maka n(A) = 10. Kebarangkalian murid yang " +
      "dipilih secara rawak suka Badminton = P(A) = 10 ÷ 30 = 0.33 (2 tempat perpuluhan). Untuk masalah lebih " +
      "kompleks, kita mungkin perlu cari n(A) dengan TOLAK daripada jumlah (macam peristiwa pelengkap) apabila " +
      "data yang diberi bukan terus nilai yang kita mahu.",
  },

  formula: {
    mentorLine: "Ini langkah strategi untuk selesaikan sebarang masalah kebarangkalian.",
    title: "Strategi Menyelesaikan Masalah Kebarangkalian",
    expression: "P(peristiwa) = Bilangan kesudahan memenuhi peristiwa ÷ Jumlah keseluruhan kesudahan, n(S)",
    body:
      "LANGKAH 1: Kenal pasti n(S) — jumlah KESELURUHAN kesudahan/item daripada konteks soalan (jadual, carta, " +
      "atau perenggan). LANGKAH 2: Kenal pasti n(A) — bilangan kesudahan yang MEMENUHI peristiwa yang " +
      "ditanya (kadang perlu TOLAK daripada jumlah jika diberi bilangan yang TIDAK memenuhi). LANGKAH 3: Kira " +
      "P(A) = n(A) ÷ n(S). LANGKAH 4 (jika perlu): guna P(A′) = 1 − P(A) untuk peristiwa lawan.",
  },

  example: {
    mentorLine: "Jom selesaikan masalah ini langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Dalam sebuah kelas 40 murid, 24 adalah murid perempuan. Seorang murid dipilih secara rawak. Cari kebarangkalian murid itu lelaki.",
    steps: [
      "n(S) = jumlah murid = 40",
      "Bilangan murid lelaki = 40 − 24 = 16, jadi n(A) = 16",
      "P(lelaki) = n(A) ÷ n(S) = 16 ÷ 40 = 0.4",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dalam kumpulan 25 orang, 15 suka teh dan selebihnya suka kopi. Apakah kebarangkalian seorang yang dipilih secara rawak suka kopi?",
    choices: ["0.4", "0.6", "0.15", "1.5"],
    answer: "0.4",
    feedbackCorrect: "Tepat! Bilangan suka kopi = 25 − 15 = 10, jadi P = 10 ÷ 25 = 0.4.",
    feedbackIncorrect: "Belum tepat. Cari dahulu bilangan suka kopi (25 − 15), kemudian bahagi dengan 25.",
  },
};
