// Kertas Ujian UPSA (Ujian Pertengahan Sesi Akademik) Percubaan #1 — Matematik
// Tingkatan 1. UPSA ialah ujian PERTENGAHAN TAHUN sekolah, jadi liputan
// topiknya hanya Bab 1 hingga Bab 7 (separuh pertama silibus Tingkatan 1) —
// berbeza daripada UASA (akhir sesi) yang merentasi kesemua 13 bab. Struktur
// markah (Bahagian A/B/C, 100 markah, 31 soalan) dikekalkan sama seperti UASA
// supaya skema gred konsisten sepanjang tahun, tetapi masa diperpendekkan
// (90 minit) memandangkan skop lebih sempit. Bahagian C tetap KBAT.
export const upsaPaper1 = {
  id: "form1-upsa-1",
  formId: "form1",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 1)",
  subtitle: "Matematik · Tingkatan 1 (Pertengahan Tahun · Bab 1–7)",
  totalMarks: 100,
  durationMinutes: 90,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−12 + 7 = ?", choices: ["−5", "5", "−19", "19"], answer: "−5" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 5/8 sebagai perpuluhan ialah?", choices: ["0.625", "0.58", "1.6", "0.85"], answer: "0.625" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 36 ialah?", choices: ["2, 3", "2, 3, 6", "3, 6", "2, 4"], answer: "2, 3" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 6 dan 9 ialah?", choices: ["18", "3", "54", "15"], answer: "18" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √169 ialah?", choices: ["13", "12", "14", "169"], answer: "13" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "5³ = ?", choices: ["125", "15", "25", "53"], answer: "125" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 18:27 dalam bentuk termudah ialah?", choices: ["2:3", "3:2", "18:27", "6:9"], answer: "2:3" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Sebatang basikal bergerak 24km dalam 2 jam. Kadarnya (km/j) ialah?", choices: ["12", "48", "26", "22"], answer: "12" },
        { id: "A9", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Harga 5 biji epal ialah RM15. Berapakah harga 8 biji epal pada kadar yang sama?", choices: ["RM24", "RM40", "RM18", "RM8"], answer: "RM24" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "6a + 3a = ?", choices: ["9a", "9a²", "18a", "3a"], answer: "9a" },
        { id: "A11", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "10p − 4p = ?", choices: ["6p", "6p²", "14p", "40p"], answer: "6p" },
        { id: "A12", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"dua kali n tolak 5\" ialah?", choices: ["2n − 5", "2n + 5", "5 − 2n", "2n × 5"], answer: "2n − 5" },
        { id: "A13", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x + 9 = 15", choices: ["x = 6", "x = 24", "x = −6", "x = 9"], answer: "x = 6" },
        { id: "A14", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 2x = 16", choices: ["x = 8", "x = 32", "x = 14", "x = 18"], answer: "x = 8" },
        { id: "A15", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x/4 = 5", choices: ["x = 20", "x = 1.25", "x = 9", "x = 45"], answer: "x = 20" },
        { id: "A16", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "5x > 25 bermaksud?", choices: ["x > 5", "x < 5", "x > 125", "x < 125"], answer: "x > 5" },
        { id: "A17", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "x − 3 ≤ 7 bermaksud?", choices: ["x ≤ 10", "x ≥ 10", "x ≤ 4", "x ≥ 4"], answer: "x ≤ 10" },
        { id: "A18", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Gandaan sepunya terkecil bagi 3 dan 4 ialah?", choices: ["12", "7", "1", "24"], answer: "12" },
        { id: "A19", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 3x − 2 = 13", choices: ["x = 5", "x = 15", "x = 3.67", "x = 45"], answer: "x = 5" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "(−4) × 3 = ?", choices: ["−12", "12", "−1", "7"], answer: "−12" },
      ],
    },
    {
      key: "B",
      label: "Bahagian B",
      instruction: "Jawab SEMUA soalan. Tunjukkan kerja mengira kamu sebelum taip jawapan akhir setiap bahagian.",
      type: "structured",
      questions: [
        {
          id: "B1",
          topic: "Bab 2 · Faktor dan Gandaan",
          isKbat: false,
          context: "Diberi dua nombor, 12 dan 18.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 12 dan 18.", answer: "6", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 12 dan 18.", answer: "36", marks: 2 },
          ],
          solution: [
            "12 = 2² × 3, 18 = 2 × 3²",
            "FSTB = ambil kuasa TERKECIL bagi setiap faktor sepunya = 2¹ × 3¹ = 6",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 2² × 3² = 36",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Seorang peniaga menjual 8 biji mangga dengan harga RM20.",
          parts: [
            { label: "(a)", prompt: "Cari harga seunit (harga sebiji mangga).", answer: "2.5", marks: 2 },
            { label: "(b)", prompt: "Berapakah harga bagi 12 biji mangga pada kadar yang sama?", answer: "30", marks: 2 },
          ],
          solution: [
            "Harga seunit = 20 ÷ 8 = RM2.50",
            "Harga 12 biji = 12 × 2.50 = RM30",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 3x + 7.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 6.", answer: "25", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 3x + 7 = 25 untuk cari x.", answer: "6", marks: 2 },
          ],
          solution: [
            "(a) 3(6) + 7 = 18 + 7 = 25",
            "(b) 3x + 7 = 25 → 3x = 18 → x = 6",
          ],
        },
        {
          id: "B4",
          topic: "Bab 3 · Kuasa Dua/Tiga dan Punca",
          isKbat: false,
          context: "Diberi nombor 7.",
          parts: [
            { label: "(a)", prompt: "Cari kuasa dua bagi 7 (7²).", answer: "49", marks: 2 },
            { label: "(b)", prompt: "Cari kuasa tiga bagi 7 (7³).", answer: "343", marks: 2 },
          ],
          solution: ["7² = 7 × 7 = 49", "7³ = 7 × 7 × 7 = 343"],
        },
        {
          id: "B5",
          topic: "Bab 7 · Ketaksamaan Linear",
          isKbat: false,
          context: "Selesaikan ketaksamaan berikut.",
          parts: [
            { label: "(a)", prompt: "Cari nilai integer positif TERKECIL yang memuaskan ketaksamaan 2x + 5 > 17.", answer: "7", marks: 2 },
            { label: "(b)", prompt: "Cari nilai integer positif TERBESAR yang memuaskan ketaksamaan x − 6 < 4.", answer: "9", marks: 2 },
          ],
          solution: [
            "(a) 2x + 5 > 17 → 2x > 12 → x > 6; integer positif terkecil yang memenuhi ialah 7",
            "(b) x − 6 < 4 → x < 10; integer positif terbesar yang memenuhi ialah 9",
          ],
        },
      ],
    },
    {
      key: "C",
      label: "Bahagian C",
      instruction:
        "Jawab SEMUA soalan. Bahagian ini soalan KBAT (Kemahiran Berfikir Aras Tinggi) — perlukan penaakulan berbilang langkah, bukan sekadar satu formula.",
      type: "structured",
      questions: [
        {
          id: "C1",
          topic: "Bab 1 · Nombor Nisbah (KBAT)",
          isKbat: true,
          context:
            "Danial ada wang simpanan RM180. Dia membelanjakan 1/3 daripada wangnya untuk hadiah hari lahir kawan, dan RM30 lagi untuk tiket wayang.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Danial selepas kedua-dua perbelanjaan itu?", answer: "90", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM180? (taip nombor sahaja)", answer: "50", marks: 5 },
          ],
          solution: [
            "Wang hadiah = 1/3 × 180 = RM60",
            "Jumlah dibelanjakan = 60 + 30 = RM90",
            "Baki = 180 − 90 = RM90",
            "Peratus baki = 90 ÷ 180 × 100% = 50%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan kad Iman kepada bilangan kad Danish ialah 5:3. Jumlah kad mereka berdua ialah 64.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan kad Iman.", answer: "40", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Iman memberi 4 kad kepada Danish, cari nisbah baharu bilangan kad Iman kepada Danish dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "9:7",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 5 + 3 = 8 bahagian",
            "Satu bahagian = 64 ÷ 8 = 8",
            "Kad Iman = 5 × 8 = 40, Kad Danish = 3 × 8 = 24",
            "Selepas Iman beri 4 kad: Iman = 36, Danish = 28",
            "Nisbah baharu = 36:28 = 9:7 (bahagi dengan 4)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah tempat letak kereta mengenakan caj permulaan RM3 dan RM2 bagi setiap jam.",
          parts: [
            { label: "(a)", prompt: "Cari caj bagi meletak kereta selama 5 jam.", answer: "13", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Haziq hanya mempunyai RM17, berapa jam MAKSIMUM (bilangan jam penuh) dia boleh meletak kereta itu?",
              answer: "7",
              marks: 6,
            },
          ],
          solution: [
            "(a) Caj = 3 + 2(5) = 3 + 10 = RM13",
            "(b) 3 + 2k ≤ 17 → 2k ≤ 14 → k ≤ 7",
            "Bilangan jam maksimum yang mampu dibayar Haziq ialah 7 jam",
          ],
        },
        {
          id: "C4",
          topic: "Bab 2 dan 3 · Faktor & Kuasa Dua (KBAT)",
          isKbat: true,
          context:
            "Seorang bapa ingin membahagikan 48 biji gula-gula dan 60 biji coklat sama banyak kepada beberapa orang anak tanpa berbaki.",
          parts: [
            { label: "(a)", prompt: "Berapakah bilangan anak MAKSIMUM yang boleh menerima bahagian sama banyak?", answer: "12", marks: 5 },
            { label: "(b)", prompt: "Jika kuasa dua bagi bilangan anak maksimum itu dikira, berapakah nilainya?", answer: "144", marks: 5 },
          ],
          solution: [
            "48 = 2⁴ × 3, 60 = 2² × 3 × 5",
            "FSTB(48, 60) = 2² × 3 = 12 → bilangan anak maksimum ialah 12",
            "12² = 144",
          ],
        },
        {
          id: "C5",
          topic: "Bab 4 dan 6 · Kadar & Persamaan Linear (KBAT)",
          isKbat: true,
          context:
            "Sebuah teksi air mengenakan tambang RM8 untuk 4km pertama, dan kadar yang sama diteruskan untuk jarak seterusnya (berkadar terus dengan jarak).",
          parts: [
            { label: "(a)", prompt: "Cari kadar tambang teksi itu (RM sekilometer).", answer: "2", marks: 4 },
            { label: "(b)", prompt: "Jika tambang sebenar seorang penumpang ialah RM26, cari jarak perjalanannya (km).", answer: "13", marks: 6 },
          ],
          solution: [
            "Kadar = 8 ÷ 4 = RM2 sekilometer",
            "Jarak = 26 ÷ 2 = 13km",
          ],
        },
        {
          id: "C6",
          topic: "Bab 5 dan 7 · Ungkapan Algebra & Ketaksamaan (KBAT)",
          isKbat: true,
          context: "Sebuah ungkapan algebra ialah 4x − 6.",
          parts: [
            { label: "(a)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 18.", answer: "6", marks: 5 },
            { label: "(b)", prompt: "Cari nilai integer positif TERKECIL bagi x supaya ungkapan 4x − 6 lebih besar daripada 18.", answer: "7", marks: 5 },
          ],
          solution: [
            "(a) 4x − 6 = 18 → 4x = 24 → x = 6",
            "(b) 4x − 6 > 18 → 4x > 24 → x > 6; integer positif terkecil ialah 7",
          ],
        },
      ],
    },
  ],
};
