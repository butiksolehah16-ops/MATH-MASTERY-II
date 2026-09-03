// Kandungan Nota Interaktif — Form 2, Bab 12, Topik 12.1 (Sukatan
// Kecenderungan Memusat). DSKP SK 12.1: menentukan mod, min, median bagi
// data tak terkumpul; kesan perubahan data; jadual kekerapan & data
// terkumpul; kelas mod & min data terkumpul; memilih sukatan yang sesuai
// (termasuk data dgn nilai ekstrem); menentukan mod/min/median drpd
// perwakilan data; aplikasi utk ramalan & perbandingan.
export const notaSukatanKecenderunganMemusatContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Cikgu nak gambarkan wang saku 'biasa' murid dalam kelas — tapi guna SATU nombor je. Macam mana?",
    title: "Wang Saku Sekumpulan Murid",
    body:
      "5 orang murid ditanya jumlah wang saku (RM) sehari mereka. Kita nak cari SATU nombor yang boleh " +
      "wakili keseluruhan kumpulan ini — inilah tujuan SUKATAN KECENDERUNGAN MEMUSAT (mod, min, median).",
  },

  exploration: {
    mentorLine: "Jom dedah wang saku setiap murid satu demi satu.",
    prompt: "Klik \"Tambah palang seterusnya\" untuk dedah wang saku (RM) bagi Murid 1 hingga Murid 5.",
    categories: ["Murid 1", "Murid 2", "Murid 3", "Murid 4", "Murid 5"],
    values: [5, 5, 6, 8, 16],
  },

  insight: {
    mentorLine: "Susun data ni menaik: 5, 5, 6, 8, 16 — sekarang senang nak cari tiga sukatan tu.",
    title: "Mod, Median, Min — Tiga Cara Lihat 'Purata'",
    bullets: [
      "MOD = nilai paling KERAP muncul = 5 (muncul 2 kali).",
      "MEDIAN = nilai TENGAH bila disusun menaik = 6 (tengah-tengah 5 data).",
      "MIN = jumlah semua nilai ÷ bilangan data = 40 ÷ 5 = 8.",
      "Perasan MIN (8) lebih tinggi drpd MOD dan MEDIAN sebab RM16 itu NILAI EKSTREM yang 'tarik' min ke atas — tapi mod dan median tak terjejas banyak. Sebab tu bila ada nilai ekstrem, MEDIAN selalunya sukatan yang lebih adil.",
    ],
  },

  formula: {
    mentorLine: "Simpan formula ni — untuk data tak terkumpul DAN data terkumpul (jadual kekerapan).",
    title: "Formula Sukatan Kecenderungan Memusat",
    expression: "Min = Σx ÷ n   |   Data Terkumpul: Anggaran Min = Σ(f × x) ÷ Σf",
    body:
      "DATA TAK TERKUMPUL: MOD = nilai dgn kekerapan tertinggi. MEDIAN = nilai tengah selepas disusun menaik " +
      "(bilangan data GANJIL: ambil nilai tengah terus; bilangan data GENAP: purata DUA nilai tengah). " +
      "MIN = Σx ÷ n (jumlah semua nilai ÷ bilangan data).\n\n" +
      "DATA TERKUMPUL (jadual kekerapan/kelas): KELAS MOD " +
      "= kelas dgn kekerapan (f) tertinggi. TITIK TENGAH kelas (x) = (had bawah + had atas) ÷ 2. ANGGARAN MIN " +
      "= Σ(f × x) ÷ Σf.\n\n" +
      "MEMILIH SUKATAN SESUAI: guna MIN bila data seimbang tanpa nilai ekstrem; guna MEDIAN " +
      "bila data ada nilai ekstrem (median tak mudah terjejas); guna MOD bila nak tahu nilai/kategori paling " +
      "popular.",
  },

  example: {
    mentorLine: "Sekarang jom cuba dengan JADUAL KEKERAPAN (data terkumpul) pula.",
    title: "Contoh Diselesaikan — Data Terkumpul",
    problem:
      "Jadual menunjukkan markah ujian 20 murid: Kelas 1-10 (kekerapan 2), 11-20 (kekerapan 5), 21-30 " +
      "(kekerapan 8), 31-40 (kekerapan 5). Cari kelas mod dan anggaran min.",
    steps: [
      "Kelas dgn kekerapan tertinggi (8) ialah kelas 21-30 → itulah KELAS MOD.",
      "Titik tengah setiap kelas: (1-10)→5.5, (11-20)→15.5, (21-30)→25.5, (31-40)→35.5.",
      "Kira f × x setiap kelas: 2×5.5=11, 5×15.5=77.5, 8×25.5=204, 5×35.5=177.5.",
      "Σ(f×x) = 11 + 77.5 + 204 + 177.5 = 470. Σf = 20.",
      "Anggaran Min = 470 ÷ 20 = 23.5.",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dalam set data 3, 3, 3, 7, 9, apakah MOD?",
    choices: ["3", "7", "9", "5.5"],
    answer: "3",
    feedbackCorrect: "Tepat! 3 muncul paling kerap (3 kali).",
    feedbackIncorrect: "Belum tepat. MOD ialah nilai yang muncul PALING KERAP — cari nilai yang berulang.",
  },
};
