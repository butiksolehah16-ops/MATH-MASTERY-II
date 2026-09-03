// Kandungan Nota Interaktif — Form 2, Bab 6, Topik 6.4 (Isi Padu Bentuk
// Tiga Dimensi). DSKP SK 6.4: menerbitkan rumus isi padu prisma dan
// silinder, seterusnya membentuk rumus piramid dan kon; menentukan isi
// padu prisma, silinder, kon, piramid dan sfera; menyelesaikan masalah.
export const notaIsiPaduContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Kali ni kita kira berapa BANYAK ruang di DALAM sesuatu bentuk 3D — isi padu!",
    title: "Isi Air dalam Tangki Silinder",
    body:
      "Seorang jurutera nak tahu berapa banyak air (dalam cm³ atau liter) boleh diisi ke dalam sebuah tangki " +
      "berbentuk silinder. Ini BUKAN soalan luas permukaan — dia perlukan ISI PADU, iaitu jumlah RUANG di " +
      "dalam bentuk tersebut.",
  },

  exploration: {
    mentorLine: "Bayangkan prisma ni dibina daripada beberapa lapisan nipis yang sama luas tapaknya. Jom dedah setiap lapisan.",
    prompt:
      "Sebuah prisma mempunyai luas tapak 20 cm², setinggi 5 cm. Klik \"Tambah palang seterusnya\" untuk " +
      "dedahkan 5 lapisan (setiap lapisan setebal 1 cm, luas sama seperti tapak).",
    categories: ["Lapisan 1", "Lapisan 2", "Lapisan 3", "Lapisan 4", "Lapisan 5"],
    values: [20, 20, 20, 20, 20],
  },

  insight: {
    mentorLine: "Perasan yang setiap lapisan sumbang jumlah yang SAMA?",
    title: "Isi Padu = Luas Tapak × Tinggi",
    bullets: [
      "Prisma tu terdiri daripada 5 lapisan, setiap satu menyumbang 20 cm³ (luas tapak × tebal 1 cm), menjadikan jumlah keseluruhan 100 cm³ (20 × 5). Ini sebab SETIAP \"keratan rentas\" prisma atau silinder mempunyai luas yang SAMA sepanjang tingginya — jadi ISI PADU = LUAS TAPAK × TINGGI.",
      "Bagi PIRAMID atau KON pula, bentuknya MENGECIL ke satu titik (puncak), jadi ia HANYA mengisi SATU PERTIGA ruang prisma/silinder yang sepadan (tapak dan tinggi yang sama) — fakta yang boleh disahkan secara eksperimen dengan tuang air daripada bekas piramid/kon ke dalam bekas prisma/silinder sepadan sebanyak TIGA kali untuk penuhkannya.",
    ],
  },

  formula: {
    mentorLine: "Ini formula rasmi isi padu pelbagai bentuk — simpan dalam kepala kamu.",
    title: "Formula Isi Padu",
    expression: "Prisma/Silinder: Luas Tapak × Tinggi,  Piramid/Kon: ⅓ × Luas Tapak × Tinggi,  Sfera: 4/3 πr³",
    bullets: [
      "PRISMA (sebarang bentuk tapak): Isi Padu = Luas Tapak × Tinggi.",
      "SILINDER (jejari r): Isi Padu = πr² × tinggi = πr²h.",
      "PIRAMID (sebarang bentuk tapak): Isi Padu = ⅓ × Luas Tapak × Tinggi.",
      "KON (jejari r): Isi Padu = ⅓ × πr² × tinggi = ⅓πr²h.",
      "SFERA (jejari r): Isi Padu = 4/3 πr³.",
    ],
  },

  example: {
    mentorLine: "Jom kita kira isi padu kon, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kon mempunyai jejari tapak 7 cm dan tinggi 6 cm. Guna π = 22/7, cari isi padunya.",
    steps: [
      "Cari luas tapak: πr² = 22/7 × 7 × 7 = 154 cm²",
      "Darab dengan tinggi: 154 × 6 = 924",
      "Bahagi dengan 3 (sebab kon = ⅓ prisma/silinder sepadan): 924 ÷ 3 = 308 cm³",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah prisma mempunyai luas tapak 24 cm² dan tinggi 10 cm. Cari isi padunya (Isi Padu = Luas Tapak × Tinggi).",
    choices: ["240", "34", "120", "480"],
    answer: "240",
    feedbackCorrect: "Tepat! Isi Padu = 24 × 10 = 240 cm³.",
    feedbackIncorrect: "Belum tepat. Guna Isi Padu = Luas Tapak × Tinggi: 24 × 10.",
  },
};
