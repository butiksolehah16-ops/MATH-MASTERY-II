// Kandungan Nota Interaktif — Bab 4, Topik 4.2 (Kadar).
// Fokus: kadar sebagai perbandingan dua kuantiti dengan unit berbeza, dicari
// melalui skip-count (garis nombor yang sama digunakan untuk faktor di Bab 2).
export const notaKadarContent = {
  visualType: "number-line",

  hook: {
    mentorLine: "Sambung dari nisbah — kali ni kita banding dua kuantiti dengan UNIT BERBEZA.",
    title: "Perjalanan Kereta Pak Cik Samad",
    body:
      "Sebuah kereta bergerak 180 km dalam masa 3 jam pada kelajuan malar (tetap). Berapakah jarak yang " +
      "kereta itu akan tempuh dalam SATU jam?",
  },

  exploration: {
    mentorLine: "Jom kita \"lompat\" dengan saiz kelajuan kereta setiap jam — kalau kita boleh sampai TEPAT ke 180 dalam 3 lompatan, kita akan tahu kadarnya.",
    prompt: "Klik \"Langkah\" untuk lompat dengan saiz 60 (jarak setiap jam), sehingga cuba sampai ke 180.",
    start: 0,
    steps: 180,
    stepUnit: 60,
    stepLabel: "Jam",
    min: 0,
    max: 200,
  },

  insight: {
    mentorLine: "Perasan berapa lompatan yang diperlukan?",
    title: "60 km/j Ialah Kadar Kereta Tu!",
    bullets: [
      "Kau baru lompat 3 kali dengan saiz 60 untuk sampai ke 180 (0→60→120→180). Ini bermakna kereta bergerak 60 km SETIAP 1 jam — kadarnya ialah 60 km/j (dibaca \"60 kilometer sejam\").",
      "KADAR ialah perbandingan dua kuantiti dengan UNIT BERBEZA (cth: km dengan jam, atau ringgit dengan kilogram) — berbeza daripada nisbah yang membandingkan kuantiti dengan unit SAMA.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Kadar = Kuantiti Pertama ÷ Kuantiti Kedua",
    bullets: [
      "Cth: Kadar (km/j) = Jarak (km) ÷ Masa (jam).",
      "KADAR UNIT ialah kadar bagi SATU unit kuantiti kedua (cth: harga bagi 1 kg, jarak bagi 1 jam).",
      "Kadar unit memudahkan kita banding dan selesaikan pelbagai masalah harian — macam harga runcit atau kelajuan.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari kadar unit, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kedai jual 5 kg epal pada harga RM20. Cari kadar (harga sekilogram)",
    steps: [
      "Kadar = Harga ÷ Berat = RM20 ÷ 5 kg",
      "20 ÷ 5 = 4",
      "Jadi kadarnya ialah RM4 sekilogram (RM4/kg)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah basikal bergerak 40 km dalam 2 jam. Berapakah kadar (km/j)?",
    choices: ["20", "80", "42", "38"],
    answer: "20",
    feedbackCorrect: "Tepat! 40 ÷ 2 = 20 km/j.",
    feedbackIncorrect: "Belum tepat. Kadar (km/j) = Jarak ÷ Masa = 40 ÷ 2.",
  },
};
