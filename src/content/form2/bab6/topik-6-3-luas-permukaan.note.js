// Kandungan Nota Interaktif — Form 2, Bab 6, Topik 6.3 (Luas Permukaan
// Bentuk Tiga Dimensi). DSKP SK 6.3: menerbitkan rumus luas permukaan
// kubus, kuboid, piramid, prisma, silinder dan kon, seterusnya menentukan
// luas permukaan bentuk tersebut; menentukan luas permukaan sfera;
// menyelesaikan masalah.
export const notaLuasPermukaanContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita kira jumlah kawasan SEMUA muka luar sesuatu bentuk 3D — luas permukaan!",
    title: "Mengecat Tangki Air Silinder",
    body:
      "Seorang pekerja perlu mengecat SELURUH permukaan luar sebuah tangki air berbentuk silinder. Untuk " +
      "kira berapa tin cat diperlukan, dia perlu tahu JUMLAH luas permukaan tangki tersebut — bukan hanya " +
      "satu bahagian sahaja, tapi SEMUA muka luar termasuk bahagian atas, bawah, dan sisi melengkung.",
  },

  exploration: {
    mentorLine: "Jom kita dedah luas setiap pasang muka sebuah kuboid, dan jumlahkan.",
    prompt:
      "Sebuah kuboid berukuran panjang 5 cm, lebar 3 cm, tinggi 4 cm. Klik \"Tambah palang seterusnya\" " +
      "untuk dedahkan luas setiap PASANG muka (atas+bawah, hadapan+belakang, kiri+kanan).",
    categories: ["2×(l×w)", "2×(l×h)", "2×(w×h)"],
    values: [30, 40, 24],
  },

  insight: {
    mentorLine: "Perasan yang luas permukaan sebenarnya JUMLAH luas SEMUA muka?",
    title: "Luas Permukaan = Jumlah Luas SEMUA Muka",
    body:
      "Kuboid ada 3 PASANG muka kongruen: atas+bawah (l×w setiap satu), hadapan+belakang (l×h setiap satu), " +
      "dan kiri+kanan (w×h setiap satu). Jumlah keseluruhan: 30 + 40 + 24 = 94 cm². Corak am ini berlaku " +
      "untuk SEMUA bentuk 3D — LUAS PERMUKAAN sentiasa bermaksud JUMLAH luas SETIAP muka (rata atau " +
      "melengkung) yang membentuk permukaan luar bentuk tersebut.",
  },

  formula: {
    mentorLine: "Ini formula rasmi luas permukaan pelbagai bentuk — simpan dalam kepala kamu.",
    title: "Formula Luas Permukaan",
    expression: "Kubus: 6s²,  Kuboid: 2(lw+lh+wh),  Silinder: 2πr(r+h),  Kon: πr(r+l),  Sfera: 4πr²",
    body:
      "KUBUS (sisi s): LP = 6s² (6 muka segi empat sama kongruen). KUBOID (panjang l, lebar w, tinggi h): " +
      "LP = 2(lw + lh + wh). SILINDER (jejari r, tinggi h): LP = 2πr² + 2πrh = 2πr(r + h) (dua bulatan tapak " +
      "+ satu segi empat tepat melengkung). KON (jejari r, pelurus l — jarak dari puncak ke tepi tapak): " +
      "LP = πr² + πrl = πr(r + l). SFERA (jejari r): LP = 4πr². Bagi PRISMA dan PIRAMID lain, kira luas " +
      "SETIAP muka secara berasingan kemudian jumlahkan (tiada satu formula ringkas untuk semua kes).",
  },

  example: {
    mentorLine: "Jom kita kira luas permukaan silinder, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah silinder mempunyai jejari 7 cm dan tinggi 10 cm. Guna π = 22/7, cari luas permukaannya.",
    steps: [
      "Guna formula: LP = 2πr(r + h)",
      "LP = 2 × 22/7 × 7 × (7 + 10) = 2 × 22 × 17",
      "= 748 cm²",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah kubus mempunyai sisi 6 cm. Cari luas permukaannya (LP = 6s²).",
    choices: ["216", "36", "144", "108"],
    answer: "216",
    feedbackCorrect: "Tepat! LP = 6 × 6² = 6 × 36 = 216 cm².",
    feedbackIncorrect: "Belum tepat. Guna LP = 6s²: 6 × 6² = 6 × 36.",
  },
};
