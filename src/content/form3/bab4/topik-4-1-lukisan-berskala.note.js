// Kandungan Nota Interaktif — Form 3, Bab 4, Topik 4.1 (Lukisan Berskala).
// DSKP SK 4.1: menerangkan maksud lukisan berskala; mentafsir skala; menentu
// skala/ukuran sebenar/ukuran lukisan; melukis lukisan berskala; selesaikan
// masalah.
export const notaLukisanBerskalaContent = {
  visualType: "ratio-blocks",

  hook: {
    mentorLine: "Bab baharu — kita belajar cara lukis objek BESAR (atau kecil) di atas kertas dengan TEPAT.",
    title: "Pelan Rumah Arkitek",
    body:
      "Seorang arkitek nak lukis pelan sebuah rumah yang sebenarnya panjang 500 cm (5 meter) di atas kertas " +
      "A4 yang kecil. Dia tak boleh lukis 500 cm terus atas kertas — jadi dia lukis versi KECIL yang " +
      "sepadan, dengan setiap 1 cm atas kertas mewakili 100 cm SEBENAR. Bagaimana kita nyatakan perkaitan " +
      "ni secara matematik?",
  },

  exploration: {
    mentorLine: "Jom kita permudahkan satu nisbah lukisan:sebenar yang lebih kecil dahulu, untuk faham konsepnya.",
    prompt:
      "Sebuah model tin mainan dilukis 2 cm, mewakili tin sebenar 8 cm. Klik \"Ubah Nisbah\" untuk " +
      "permudahkan 2:8 kepada bentuk skala termudah.",
    fromA: 2,
    fromB: 8,
    toA: 1,
    toB: 4,
    labelA: "Lukisan",
    labelB: "Sebenar",
  },

  insight: {
    mentorLine: "Perasan nisbah tu dipermudahkan macam nisbah biasa?",
    title: "Skala = Nisbah Lukisan : Sebenar",
    body:
      "LUKISAN BERSKALA (scale drawing) ialah lukisan objek yang saiznya diperkecil atau diperbesar secara " +
      "SEKATA (semua bahagian dikecilkan/dibesarkan dengan NISBAH YANG SAMA), supaya bentuknya kekal tepat " +
      "— cuma saiz berubah.\n\n" +
      "SKALA (scale) ialah nisbah antara ukuran PADA LUKISAN dengan ukuran SEBENAR, " +
      "dipermudahkan SAMA macam nisbah biasa (2:8 → 1:4 di atas), dan biasa ditulis dalam bentuk 1:n (cth. " +
      "1:100 bermaksud setiap 1 unit pada lukisan mewakili 100 unit sebenar).\n\n" +
      "Rumah arkitek tadi guna skala " +
      "1:100 — lukisan 5 cm mewakili sebenar 500 cm (5:500 dipermudahkan = 1:100).",
  },

  formula: {
    mentorLine: "Ini tiga rumus skala yang saling berkaitan — simpan dalam kepala kamu.",
    title: "Rumus Lukisan Berskala",
    expression: "Skala = Ukuran Lukisan : Ukuran Sebenar",
    body:
      "Jika skala ialah 1:n — UKURAN SEBENAR = Ukuran Lukisan × n. UKURAN LUKISAN = Ukuran Sebenar ÷ n. " +
      "SKALA n = Ukuran Sebenar ÷ Ukuran Lukisan (pastikan KEDUA-DUA ukuran dalam UNIT YANG SAMA sebelum " +
      "kira nisbah).\n\n" +
      "Skala 1:n dengan n > 1 bermaksud lukisan LEBIH KECIL daripada sebenar (pengecilan). " +
      "Skala dengan n < 1 (cth. 2:1) bermaksud lukisan LEBIH BESAR daripada sebenar (pembesaran, biasa " +
      "untuk lukis objek kecil seperti komponen jam).",
  },

  example: {
    mentorLine: "Jom kita selesaikan dua arah — cari ukuran sebenar, dan cari skala.",
    title: "Contoh Diselesaikan",
    problem: "(a) Sebuah peta guna skala 1:50000. Jarak pada peta ialah 4 cm. Cari jarak sebenar (dalam km). (b) Sekeping model kereta panjang 15 cm mewakili kereta sebenar 450 cm. Cari skala model itu.",
    steps: [
      "(a) Jarak sebenar = Jarak lukisan × n = 4 × 50000 = 200000 cm",
      "Tukar kepada km: 200000 cm ÷ 100 000 (1 km = 100000 cm) = 2 km",
      "(b) Skala = Lukisan : Sebenar = 15 : 450. Permudahkan (bahagi kedua-dua dengan 15) = 1 : 30",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah lukisan berskala guna skala 1:20. Jika ukuran lukisan ialah 8 cm, berapakah ukuran sebenar?",
    choices: ["160 cm", "2.5 cm", "28 cm", "12 cm"],
    answer: "160 cm",
    feedbackCorrect: "Tepat! Ukuran sebenar = Ukuran lukisan × n = 8 × 20 = 160 cm.",
    feedbackIncorrect: "Belum tepat. Guna Ukuran Sebenar = Ukuran Lukisan × n: 8 × 20.",
  },
};
