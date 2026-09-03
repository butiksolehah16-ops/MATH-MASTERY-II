// Kandungan Nota Interaktif — Form 3, Bab 3, Topik 3.2 (Pengurusan Kredit dan
// Hutang). DSKP SK 3.2: menjelaskan maksud kredit dan hutang; mengkaji
// kelebihan/kekurangan kad kredit; kesan bayaran minimum/lewat; mengira
// bayaran balik pinjaman (faedah sama rata); menyelesaikan masalah.
export const notaKreditHutangContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita lihat SEBALIKNYA — bila kita PINJAM wang, bukan simpan.",
    title: "Pinjaman Kereta RM6000",
    body:
      "Halim ambil pinjaman RM6000 untuk beli kereta terpakai, pada kadar faedah SAMA RATA (flat rate) 6% " +
      "setahun selama 4 tahun. Berapakah JUMLAH sebenar yang perlu dia bayar balik — dan berapakah bayaran " +
      "ansuran BULANAN dia?",
  },

  exploration: {
    mentorLine: "Jom kita lihat bagaimana jumlah bayaran balik pinjaman RM2000 (faedah sama rata 5%) bertambah setiap tahun.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah jumlah bayaran balik terkumpul (prinsipal + faedah) bagi " +
      "Tahun 1, 2, dan 3 sebuah pinjaman RM2000 pada faedah sama rata 5% setahun.",
    categories: ["Tahun 1", "Tahun 2", "Tahun 3"],
    values: [2100, 2200, 2300],
  },

  insight: {
    mentorLine: "Perasan jumlah bertambah SAMA (RM100) setiap tahun? Itu ciri faedah sama rata (flat rate).",
    title: "Kredit, Hutang, dan Pengurusan Bijak",
    bullets: [
      "KREDIT (credit) ialah kemudahan meminjam wang atau membeli barang SEKARANG dan bayar KEMUDIAN (termasuk kad kredit dan pinjaman). HUTANG (debt) ialah jumlah wang yang masih perlu dibayar balik.",
      "KAD KREDIT — kelebihan: sistem ganjaran (rewards, cashback, mata ganjaran), kemudahan beli sekarang bayar kemudian, rekod perbelanjaan automatik. Kekurangan/risiko: faedah TINGGI jika baki tak dibayar penuh, mudah tergoda berbelanja lebih (overspend), risiko keselamatan (fraud).",
      "KESAN BAYARAN MINIMUM & BAYARAN LEWAT: jika kamu bayar HANYA jumlah minimum setiap bulan, BAKI yang tinggal akan DIKENAKAN FAEDAH ATAS BAKI, dan ia akan TERUS berkumpul bulan ke bulan, menjadikan kos SEBENAR jauh lebih tinggi berbanding harga asal.",
      "Pengurusan bijak: bayar PENUH setiap bulan (elak faedah atas baki), dan bayar TEPAT masa (elak caj lewat).",
    ],
  },

  formula: {
    mentorLine: "Ini rumus rasmi bagi pinjaman dengan faedah sama rata — simpan dalam kepala kamu.",
    title: "Rumus Bayaran Balik Pinjaman (Faedah Sama Rata)",
    expression: "A = P + Prt",
    bullets: [
      "A = jumlah bayaran balik keseluruhan, P = prinsipal (jumlah dipinjam), r = kadar faedah setahun (perpuluhan), t = tempoh pinjaman (tahun).",
      "Ini SAMA bentuknya dengan I = Prt (faedah mudah) — cuma kita TAMBAH balik prinsipal P untuk dapat JUMLAH keseluruhan A.",
      "BAYARAN ANSURAN BULANAN = A ÷ (t × 12) — jumlah keseluruhan A dibahagi dengan bilangan bulan dalam tempoh pinjaman.",
    ],
  },

  example: {
    mentorLine: "Jom kita selesaikan masalah pinjaman kereta Halim, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Halim meminjam RM6000 pada faedah sama rata 6% setahun selama 4 tahun. Cari (a) jumlah bayaran balik A, dan (b) bayaran ansuran bulanan.",
    steps: [
      "(a) A = P + Prt = 6000 + (6000 × 0.06 × 4) = 6000 + 1440 = RM7440",
      "(b) Bilangan bulan = t × 12 = 4 × 12 = 48 bulan",
      "Ansuran bulanan = A ÷ 48 = 7440 ÷ 48 = RM155",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah pinjaman RM4000 pada faedah sama rata 5% setahun selama 3 tahun. Apakah jumlah bayaran balik A?",
    choices: ["RM4600", "RM600", "RM4200", "RM5000"],
    answer: "RM4600",
    feedbackCorrect: "Tepat! A = P + Prt = 4000 + (4000 × 0.05 × 3) = 4000 + 600 = RM4600.",
    feedbackIncorrect: "Belum tepat. Guna A = P + Prt: kira faedah dahulu (Prt), kemudian tambah dengan P.",
  },
};
