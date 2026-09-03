// Kandungan Nota Interaktif — Form 3, Bab 6, Topik 6.2 (Sisi Empat Kitaran).
// DSKP SK 6.2: mengenal dan memerihalkan sisi empat kitaran; membuat dan
// menentusahkan konjektur tentang hubungan sudut-sudut pada sisi empat
// kitaran; menyelesaikan masalah.
export const notaSisiEmpatKitaranContent = {
  visualType: "angle-sum",

  hook: {
    mentorLine: "Sekarang kita gabungkan EMPAT titik pada bulatan untuk bentuk satu sisi empat istimewa.",
    title: "Bendera Segi Empat dalam Gelung Bulat",
    bullets: [
      "Sekumpulan pengibar bendera memasang EMPAT tiang kecil, SEMUANYA tepat pada tepi sebuah gelung bulat besar, kemudian sambungkan keempat-empat tiang dengan tali membentuk sisi empat.",
      "Sisi empat yang keempat-empat bucunya terletak PADA lilitan bulatan yang sama ni dipanggil SISI EMPAT KITARAN (cyclic quadrilateral). Ada hubungan istimewa antara sudut-sudut bertentangannya — jom kita siasat.",
    ],
  },

  exploration: {
    mentorLine: "Jom kita bina sudut A, kemudian sudut C (bertentangan A) sehingga jumlah keduanya mencapai 180°.",
    prompt:
      "Klik \"Tambah 90°\" (dua kali) untuk bina jumlah dua sudut BERTENTANGAN sisi empat kitaran, dan lihat " +
      "apa yang berlaku bila keduanya digabungkan.",
    totalDegrees: 180,
    stepDegrees: 90,
  },

  insight: {
    mentorLine: "Perasan jumlah dua sudut bertentangan tu SENTIASA 180°?",
    title: "Sudut Bertentangan Sisi Empat Kitaran = 180°",
    bullets: [
      "SISI EMPAT KITARAN ialah sisi empat yang KEEMPAT-EMPAT bucunya terletak PADA lilitan bulatan yang sama.",
      "Sifat istimewanya: JUMLAH sepasang sudut PEDALAMAN BERTENTANGAN (opposite interior angles) SENTIASA 180° (bersuplemen). Ini berlaku untuk KEDUA-DUA pasangan sudut bertentangan dalam sisi empat tersebut.",
    ],
  },

  formula: {
    mentorLine: "Ini DUA sifat rasmi sisi empat kitaran — simpan dalam kepala kamu.",
    title: "Sifat Sisi Empat Kitaran",
    expression: "∠A + ∠C = 180°,  ∠B + ∠D = 180°",
    bullets: [
      "SIFAT 1 (Sudut Bertentangan): Dalam sisi empat kitaran ABCD, ∠A + ∠C = 180° DAN ∠B + ∠D = 180° (kedua-dua pasangan sudut bertentangan bersuplemen).",
      "SIFAT 2 (Sudut Peluaran): SUDUT PELUARAN (exterior angle) pada mana-mana bucu sisi empat kitaran SAMA dengan SUDUT PEDALAMAN pada bucu BERTENTANGANNYA. (Ini sebenarnya akibat terus daripada Sifat 1 — sebab sudut peluaran + sudut pedalaman bersebelahan = 180° pada garis lurus, DAN sudut pedalaman bertentangan + sudut pedalaman bersebelahan pun = 180°, jadi sudut peluaran mesti sama dengan sudut pedalaman bertentangan.)",
    ],
  },

  example: {
    mentorLine: "Jom kita cari sudut yang tak diketahui, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "ABCD ialah sisi empat kitaran dengan ∠A = 85°. Cari (a) ∠C, dan (b) sudut peluaran pada bucu A.",
    steps: [
      "(a) ∠A + ∠C = 180° (sudut bertentangan), jadi ∠C = 180° − 85° = 95°",
      "(b) Sudut peluaran pada A = sudut pedalaman pada bucu bertentangan (iaitu ∠C)",
      "Sudut peluaran pada A = 95°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "PQRS ialah sisi empat kitaran dengan ∠P = 70° dan ∠R = ?",
    choices: ["110°", "70°", "180°", "20°"],
    answer: "110°",
    feedbackCorrect: "Tepat! ∠P + ∠R = 180° (bertentangan), jadi ∠R = 180° − 70° = 110°.",
    feedbackIncorrect: "Belum tepat. Sudut bertentangan sisi empat kitaran berjumlah 180°: 180° − 70°.",
  },
};
