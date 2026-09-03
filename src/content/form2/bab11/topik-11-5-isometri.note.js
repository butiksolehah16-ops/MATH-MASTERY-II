// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.5 (Translasi,
// Pantulan dan Putaran sebagai Isometri). DSKP SK 11.5: menyiasat hubungan
// antara translasi/pantulan/putaran dengan jarak antara dua titik pada
// objek dan imej, menerangkan isometri, hubungan isometri dan kekongruenan,
// menyelesaikan masalah yang melibatkan isometri.
export const notaIsometriContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Kita dah belajar translasi, pantulan, putaran — sekarang kita nampak PERSAMAAN besar antara ketiga-tiganya.",
    title: "Fotostat Sama Saiz vs Fotostat Diperbesar",
    body:
      "Bila kamu fotostat dokumen pada 100% (saiz sama), jarak antara mana-mana dua titik pada dokumen KEKAL " +
      "SAMA. Tapi bila kamu fotostat pada 150% (diperbesar), jarak tu BERUBAH (jadi lebih jauh). Fotostat " +
      "saiz sama ialah contoh ISOMETRI; fotostat diperbesar BUKAN isometri.",
  },

  exploration: {
    mentorLine: "Jom bandingkan jarak AB pada objek dengan jarak A'B' pada imej selepas translasi.",
    prompt:
      "Objek A(1,1), B(4,5) ditranslasikan oleh vektor (3,2) menjadi A'(4,3), B'(7,7). Klik butang untuk " +
      "dedah jarak AB, kemudian jarak A'B'.",
    categories: ["Jarak AB (objek)", "Jarak A'B' (imej)"],
    values: [5, 5],
  },

  insight: {
    mentorLine: "Perasan jarak AB dan A'B' adalah SAMA?",
    title: "Isometri = Jarak Dikekalkan",
    bullets: [
      "Jarak AB = 5 unit, dan selepas translasi, jarak A'B' JUGA 5 unit — jarak antara dua titik TIDAK berubah.",
      "Ini berlaku untuk TRANSLASI, PANTULAN, dan PUTARAN — ketiga-tiganya mengekalkan jarak antara sebarang dua titik.",
      "Transformasi yang mengekalkan jarak macam ni dipanggil ISOMETRI.",
    ],
  },

  formula: {
    mentorLine: "Ini definisi rasmi isometri dan kaitannya dengan kekongruenan — simpan dalam kepala kamu.",
    title: "Isometri dan Kekongruenan",
    expression: "Isometri = Transformasi yang mengekalkan jarak antara sebarang dua titik",
    body:
      "ISOMETRI ialah transformasi yang MENGEKALKAN jarak antara sebarang dua titik pada objek dan imej. " +
      "TRANSLASI, PANTULAN, dan PUTARAN semuanya ISOMETRI.\n\n" +
      "Sebab jarak (dan dengan itu, semua panjang sisi " +
      "dan sudut) dikekalkan, objek dan imej bagi isometri SENTIASA KONGRUEN. PEMBESARAN/PENGECILAN pula " +
      "BUKAN isometri — ia UBAH jarak (dan saiz keseluruhan), jadi objek dan imejnya TIDAK kongruen (cuma " +
      "serupa).",
  },

  example: {
    mentorLine: "Jom kita sahkan isometri dengan bandingkan jarak sebelum dan selepas pantulan.",
    title: "Contoh Diselesaikan",
    problem: "Objek P(2, 8), Q(6, 8) dipantulkan pada garis y = 5 menjadi P'(2, 2), Q'(6, 2). Sahkan isometri.",
    steps: [
      "Jarak PQ: dx = 4, dy = 0, jadi PQ = √(4² + 0²) = 4",
      "Jarak P'Q': dx = 4, dy = 0, jadi P'Q' = √(4² + 0²) = 4",
      "PQ = P'Q' = 4 — jarak dikekalkan, sahkan pantulan ADALAH isometri",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Manakah antara berikut BUKAN isometri?",
    choices: ["Pembesaran (enlargement)", "Translasi", "Pantulan", "Putaran"],
    answer: "Pembesaran (enlargement)",
    feedbackCorrect: "Tepat! Pembesaran UBAH jarak (dan saiz), jadi BUKAN isometri.",
    feedbackIncorrect: "Belum tepat. Translasi, pantulan, dan putaran SEMUA isometri (kekalkan jarak); pembesaran TIDAK.",
  },
};
