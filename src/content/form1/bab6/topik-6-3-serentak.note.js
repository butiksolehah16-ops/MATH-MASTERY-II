// Kandungan Nota Interaktif — Bab 6, Topik 6.3 (Persamaan Linear Serentak
// Dalam Dua Pemboleh Ubah). Fokus: kaedah penghapusan (elimination) — tambah
// dua persamaan untuk hapuskan satu pemboleh ubah.
export const notaSerentakContent = {
  visualType: "balance-scale",

  hook: {
    mentorLine: "Kita dah faham persamaan dua pemboleh ubah — sekarang jom guna DUA persamaan SEKALI GUS!",
    title: "Dua Kotak, A dan B",
    body:
      "Jumlah berat kotak A dan B ialah 10kg (x + y = 10). Beza berat antara kotak A dan B ialah 4kg " +
      "(x − y = 4). Berapakah berat SETIAP kotak?",
  },

  exploration: {
    mentorLine: "Bila kita TAMBAH kedua-dua persamaan (x+y=10) + (x-y=4), y akan TERMANSUH dan kita dapat 2x = 14.",
    prompt: "Klik \"Bahagi kedua-dua belah dengan 2\" untuk selesaikan x daripada 2x = 14.",
    variableLabel: "x",
    coefficient: 2,
    leftConstant: 0,
    rightValue: 14,
    operation: "divide",
    operand: 2,
  },

  insight: {
    mentorLine: "Perasan macam mana 2x = 14 muncul daripada DUA persamaan berasingan?",
    title: "Pemboleh Ubah y Termansuh!",
    bullets: [
      "Kau baru selesaikan 2x = 14 dan dapat x = 7. Macam mana 2x=14 muncul? Bila kita TAMBAH dua persamaan (x+y=10) dan (x−y=4) SECARA TERUS: (x+x) + (y−y) = 10+4 → 2x + 0 = 14 → 2x = 14.",
      "Pemboleh ubah y TERMANSUH (dihapuskan) sebab +y dan −y batalkan satu sama lain!",
      "Selepas dapat x=7, ganti balik ke x+y=10: 7+y=10, jadi y=3. Kotak A = 7kg, kotak B = 3kg.",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "Kaedah Penghapusan (Elimination)",
    bullets: [
      "PERSAMAAN LINEAR SERENTAK (simultaneous equations) ialah DUA persamaan dengan DUA pemboleh ubah yang SAMA, diselesaikan BERSAMA untuk cari SATU pasangan (x,y) yang memenuhi KEDUA-DUA persamaan.",
      "KAEDAH PENGHAPUSAN: tambah/tolak dua persamaan untuk hapuskan SATU pemboleh ubah, selesaikan yang tinggal, kemudian ganti balik untuk cari pemboleh ubah kedua.",
    ],
  },

  example: {
    mentorLine: "Jom kita selesaikan sepasang persamaan serentak, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Selesaikan persamaan serentak: x + y = 12 dan x − y = 2",
    steps: [
      "Tambah kedua-dua persamaan: (x+y) + (x−y) = 12 + 2, jadi 2x = 14",
      "Bahagi dengan 2: x = 7",
      "Ganti x=7 ke x+y=12: 7+y=12, jadi y=5",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Diberi x + y = 16 dan x − y = 4. Bila kedua-dua persamaan ditambah, apakah hasilnya?",
    choices: ["2x = 20", "2y = 20", "x = 20", "y = 4"],
    answer: "2x = 20",
    feedbackCorrect: "Tepat! (x+y)+(x−y) = 16+4 → 2x = 20 (y termansuh).",
    feedbackIncorrect: "Belum tepat. Tambahkan sebelah kiri kedua-dua persamaan — y akan termansuh.",
  },
};
