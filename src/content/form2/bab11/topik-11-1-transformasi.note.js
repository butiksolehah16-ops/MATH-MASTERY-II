// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.1 (Transformasi).
// DSKP SK 11.1: memerihalkan perubahan bentuk, saiz, kedudukan dan
// orientasi objek melalui transformasi, menerangkan padanan satu-dengan-satu,
// menerangkan idea kekongruenan dalam transformasi.
export const notaTransformasiContent = {
  visualType: "transformation",

  hook: {
    mentorLine: "Bab baharu — TRANSFORMASI ISOMETRI! Jom mula dengan idea asas: objek dan imej.",
    title: "Cop Getah dan Cetakannya",
    body:
      "Bila kamu tekan cop getah berbentuk bintang atas kertas, cetakan yang terhasil ADALAH bentuk bintang " +
      "yang SAMA — cuma kedudukannya berbeza. Bentuk asal (cop) dipanggil OBJEK, dan bentuk terhasil " +
      "(cetakan) dipanggil IMEJ. Proses menukar objek kepada imej dipanggil TRANSFORMASI.",
  },

  exploration: {
    mentorLine: "Jom perhatikan objek (segi tiga biru) dan imejnya (segi tiga hijau) selepas satu transformasi.",
    prompt: "Segi tiga ABC ialah OBJEK. Klik butang untuk dedah setiap bucu IMEJ (A', B', C') satu demi satu.",
    object: [
      { x: 1, y: 1, label: "A" },
      { x: 4, y: 1, label: "B" },
      { x: 1, y: 4, label: "C" },
    ],
    image: [
      { x: 6, y: 3, label: "A'" },
      { x: 9, y: 3, label: "B'" },
      { x: 6, y: 6, label: "C'" },
    ],
  },

  insight: {
    mentorLine: "Perasan setiap bucu objek ada TEPAT SATU bucu imej sepadan?",
    title: "Padanan Satu-dengan-Satu",
    bullets: [
      "A sepadan dengan A', B sepadan dengan B', C sepadan dengan C' — setiap TITIK pada objek memetakan kepada TEPAT SATU titik pada imej.",
      "Perasan juga bentuk dan saiz segi tiga ABC dan A'B'C' adalah SAMA, cuma kedudukannya berbeza.",
      "Bila bentuk dan saiz kekal sama, objek dan imej dikatakan KONGRUEN.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep dan istilah penting bab ni — simpan dalam kepala kamu.",
    title: "Objek, Imej, dan Kekongruenan",
    expression: "Objek → Transformasi → Imej (kongruen jika bentuk & saiz kekal sama)",
    bullets: [
      "OBJEK ialah bentuk asal, IMEJ ialah bentuk terhasil selepas transformasi. Transformasi boleh ubah SAIZ, BENTUK, KEDUDUKAN, dan ORIENTASI (arah menghadap) sesuatu objek.",
      "Apabila imej KONGRUEN dengan objek (bentuk dan saiz kekal SAMA, hanya kedudukan/orientasi berubah), transformasi itu dipanggil ISOMETRI — inilah fokus bab ni: TRANSLASI, PANTULAN, dan PUTARAN.",
      "(KESERUPAAN pula bila bentuk sama tapi SAIZ berbeza, seperti pembesaran — ini BUKAN isometri.)",
    ],
  },

  example: {
    mentorLine: "Jom kita sahkan kekongruenan dengan kira panjang sisi objek dan imej.",
    title: "Contoh Diselesaikan",
    problem: "Segi tiga ABC (objek) ada A(1,1), B(4,1). Imejnya A'(6,3), B'(9,3). Sahkan AB dan A'B' sama panjang.",
    steps: [
      "Jarak AB: dx = 4−1 = 3, dy = 1−1 = 0, jadi AB = √(3² + 0²) = 3",
      "Jarak A'B': dx = 9−6 = 3, dy = 3−3 = 0, jadi A'B' = √(3² + 0²) = 3",
      "AB = A'B' = 3 — sisi ini KEKAL SAMA panjang, mengesahkan kongruen",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Imej yang kongruen dengan objeknya mempunyai...?",
    choices: ["Bentuk dan saiz yang sama", "Bentuk sama tapi saiz berbeza", "Saiz sama tapi bentuk berbeza", "Bentuk dan saiz berbeza"],
    answer: "Bentuk dan saiz yang sama",
    feedbackCorrect: "Tepat! Kongruen bermaksud bentuk DAN saiz kekal sama.",
    feedbackIncorrect: "Belum tepat. Kongruen bermaksud bentuk DAN saiz kekal SAMA (kedudukan sahaja berubah).",
  },
};
