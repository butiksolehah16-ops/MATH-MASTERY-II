// Kandungan Nota Interaktif — Bab 9, Topik 9.3 (Sifat Sisi Empat dan Sudutnya).
// Fokus: jumlah sudut pedalaman sisi empat (360°), jenis sisi empat.
export const notaSisiEmpatContent = {
  visualType: "polygon-angle-sum",

  hook: {
    mentorLine: "Kita dah faham segi tiga — sekarang jom fokus pada SISI EMPAT.",
    title: "Tingkap Segiempat Tepat",
    body:
      "Sebuah tingkap rumah berbentuk segiempat tepat. Ahmad tahu tiga sudutnya masing-masing 90°. Tanpa " +
      "mengukur, boleh tak kita cari sudut keempat?",
  },

  exploration: {
    mentorLine: "Jom dedah setiap sudut sisi empat satu demi satu dan jumlahkan.",
    prompt: "Klik \"Dedah sudut seterusnya\" untuk dedah dan jumlahkan keempat-empat sudut sisi empat.",
    shape: "quad",
    angles: [90, 90, 90, 90],
  },

  insight: {
    mentorLine: "Perasan apa jumlah akhir yang kau dapat?",
    title: "Jumlah Sudut Sisi Empat Sentiasa 360°!",
    bullets: [
      "Sisi empat boleh dibahagikan kepada 2 SEGI TIGA oleh satu pepenjuru. Setiap segi tiga = 180°, jadi 2 × 180° = 360°.",
      "Ini bermakna jumlah SEMUA sudut pedalaman sebarang sisi empat SENTIASA 360°.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Jumlah sudut pedalaman sisi empat = 360°",
    bullets: [
      "JUMLAH SUDUT PEDALAMAN SISI EMPAT = 360°. Jadi kalau kita tahu TIGA sudut, kita boleh cari sudut keempat dengan menolak daripada 360°.",
      "Ini berlaku untuk SEMUA jenis sisi empat — segiempat sama, segiempat tepat, jajar genjang, rombus, trapezium, dan layang-layang.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari sudut yang tak diketahui, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Tiga sudut sisi empat ialah 85°, 92°, dan 100°. Cari sudut keempat",
    steps: [
      "Jumlah tiga sudut yang diketahui: 85° + 92° + 100° = 277°",
      "Sudut keempat = 360° − 277°",
      "= 83°",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Tiga sudut sisi empat ialah 70°, 110°, dan 95°. Cari sudut keempat.",
    choices: ["85°", "95°", "275°", "75°"],
    answer: "85°",
    feedbackCorrect: "Tepat! 360° − 70° − 110° − 95° = 85°.",
    feedbackIncorrect: "Belum tepat. Jumlah sisi empat = 360°: 360° − 70° − 110° − 95° = 85°.",
  },
};
