// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.4 (Putaran). DSKP
// SK 11.4: mengenal putaran, memerihalkan putaran menggunakan pelbagai
// perwakilan (perwakilan simbolik dikecualikan), menentukan imej dan objek
// bagi putaran, menyelesaikan masalah yang melibatkan putaran.
export const notaPutaranContent = {
  visualType: "transformation",

  hook: {
    mentorLine: "Putaran macam jarum jam berpusing keliling satu titik tetap.",
    title: "Kincir Angin Berputar",
    body:
      "Bilah kincir angin berpusing mengelilingi SATU titik tetap (paksi tengah). Setiap titik pada bilah " +
      "bergerak melalui SUDUT yang SAMA, mengelilingi PUSAT yang sama. Ini dipanggil PUTARAN.",
  },

  exploration: {
    mentorLine: "Jom perhatikan objek dan imej selepas diputar 90° ikut arah jam pada pusat O(4, 4).",
    prompt:
      "Segi tiga ABC (objek) diputar 90° ikut arah jam pada pusat O(4, 4). Klik butang untuk dedah setiap " +
      "bucu imej.",
    referencePoint: { x: 4, y: 4, label: "O" },
    object: [
      { x: 5, y: 5, label: "A" },
      { x: 7, y: 5, label: "B" },
      { x: 5, y: 7, label: "C" },
    ],
    image: [
      { x: 5, y: 3, label: "A'" },
      { x: 5, y: 1, label: "B'" },
      { x: 7, y: 3, label: "C'" },
    ],
  },

  insight: {
    mentorLine: "Perasan setiap titik jarak SAMA dari pusat O, sebelum dan selepas diputar?",
    title: "Putaran = Jarak dari Pusat Kekal Sama",
    body:
      "A berada pada jarak tertentu dari O, dan A' (imejnya) berada pada jarak yang SAMA dari O — cuma " +
      "kedudukannya berputar 90° ikut arah jam. Ini berlaku untuk SETIAP titik pada bentuk tu. Tiga perkara " +
      "perlu untuk terangkan putaran sepenuhnya: PUSAT putaran, SUDUT putaran, dan ARAH putaran (ikut jam / " +
      "lawan jam).",
  },

  formula: {
    mentorLine: "Ini cara terangkan dan selesaikan masalah putaran — simpan dalam kepala kamu.",
    title: "Elemen Putaran",
    expression: "Putaran = Pusat + Sudut + Arah (ikut jam / lawan jam)",
    body:
      "Untuk memerihalkan putaran, nyatakan: (1) PUSAT putaran (titik tetap), (2) SUDUT putaran (cth. 90°, " +
      "180°, 270°), (3) ARAH (ikut jam atau lawan jam). Untuk putaran 180° (kes paling mudah dikira), imej " +
      "berada di kedudukan bertentangan TERUS dari pusat, pada jarak yang SAMA — kira dengan cara: jarak " +
      "objek ke pusat pada setiap paksi, kemudian tanda jarak SAMA di sebelah bertentangan pusat.",
  },

  example: {
    mentorLine: "Jom kita cari imej putaran 180°, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Titik P(3, 3) diputar 180° pada pusat O(5, 5). Cari koordinat imej P'.",
    steps: [
      "Jarak mengufuk P dari O: 5 − 3 = 2, jadi imej berada 2 unit di sebelah lain: 5 + 2 = 7",
      "Jarak mencancang P dari O: 5 − 3 = 2, jadi imej berada 2 unit di sebelah lain: 5 + 2 = 7",
      "Imej P' = (7, 7)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Titik Q(2, 6) diputar 180° pada pusat O(5, 5). Apakah koordinat imej Q'?",
    choices: ["(8, 4)", "(3, 1)", "(2, 6)", "(7, 9)"],
    answer: "(8, 4)",
    feedbackCorrect: "Tepat! x' = 5 + (5−2) = 8, y' = 5 + (5−6) = 4.",
    feedbackIncorrect: "Belum tepat. x' = 5 + (5−2), y' = 5 + (5−6).",
  },
};
