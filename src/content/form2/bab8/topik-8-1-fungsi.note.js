// Kandungan Nota Interaktif — Form 2, Bab 8, Topik 8.1 (Fungsi). DSKP SK
// 8.1: menerangkan maksud fungsi, mengenal pasti fungsi dan memberi
// justifikasi berdasarkan perwakilan fungsi dalam bentuk pasangan tertib,
// jadual, graf dan persamaan.
export const notaFungsiContent = {
  visualType: "variable-box",

  hook: {
    mentorLine: "Bayangkan sebuah mesin ajaib — setiap kali kamu masukkan nombor, mesin bagi SATU jawapan sahaja.",
    title: "Mesin Fungsi",
    body:
      "Sebuah mesin layan diri terima kod produk dan keluarkan SATU snek sahaja untuk setiap kod. Kalau kod " +
      "yang SAMA kadang-kadang keluarkan snek berbeza-beza, mesin tu RUSAK! Dalam matematik, hubungan macam " +
      "mesin yang boleh dipercayai ni (setiap input → SATU output sahaja) dipanggil FUNGSI.",
  },

  exploration: {
    mentorLine: "Jom cuba mesin fungsi f(x) = x + 3. Setiap kali tukar x, tengok f(x) yang terhasil.",
    prompt: "Klik butang untuk cuba nilai x yang berbeza dan lihat f(x) yang terhasil.",
    variableLabel: "x",
    resultLabel: "f(x)",
    constant: 3,
    mode: "add",
    steps: 4,
    startValue: 1,
  },

  insight: {
    mentorLine: "Perasan yang setiap nilai x hanya bagi SATU nilai f(x)?",
    title: "Fungsi = Setiap Input Ada TEPAT SATU Output",
    body:
      "Walaupun x berubah (1, 2, 3, 4), setiap satu nilai x tu HANYA memberi SATU nilai f(x) — tiada x yang " +
      "bagi dua jawapan berbeza. Itulah syarat sesuatu perkaitan dipanggil FUNGSI: setiap input mesti ada " +
      "TEPAT SATU output (boleh jadi banyak input bagi SATU output yang sama — itu masih fungsi — tapi SATU " +
      "input TAK BOLEH bagi lebih daripada satu output).",
  },

  formula: {
    mentorLine: "Ini notasi rasmi fungsi — simpan dalam kepala kamu.",
    title: "Notasi Fungsi f(x)",
    expression: "f(x) bermaksud \"nilai fungsi f pada x\"",
    body:
      "Fungsi ditulis sebagai f(x), dibaca \"f bagi x\" atau \"f pada x\". Contohnya f(x) = 2x + 1 bermaksud " +
      "\"gandakan x, kemudian tambah 1\". Untuk cari f(4), gantikan x dengan 4: f(4) = 2(4) + 1 = 9. Sesuatu " +
      "perkaitan ADALAH fungsi jika setiap input (x) ada TEPAT SATU output (satu-kepada-satu ATAU " +
      "banyak-kepada-satu). Ia BUKAN fungsi jika ada satu input dengan LEBIH daripada satu output " +
      "(satu-kepada-banyak).",
  },

  example: {
    mentorLine: "Jom kita nilaikan sebuah fungsi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Diberi f(x) = 3x − 2. Cari f(5).",
    steps: [
      "Gantikan x dengan 5: f(5) = 3(5) − 2",
      "Darab dahulu: 3 × 5 = 15",
      "f(5) = 15 − 2 = 13",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Diberi f(x) = x + 3. Cari f(5).",
    choices: ["8", "2", "15", "53"],
    answer: "8",
    feedbackCorrect: "Tepat! f(5) = 5 + 3 = 8.",
    feedbackIncorrect: "Belum tepat. Gantikan x dengan 5: f(5) = 5 + 3.",
  },
};
