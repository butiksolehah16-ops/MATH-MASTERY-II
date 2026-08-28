// Kertas Ujian UPSA (Ujian Pertengahan Sesi Akademik) Percubaan #2 — Matematik
// Tingkatan 1. Format sama seperti Set 1 (Bab 1–7 sahaja, 100 markah, 31
// soalan, 90 minit, Bahagian C KBAT) dengan soalan BAHARU sepenuhnya.
export const upsaPaper2 = {
  id: "form1-upsa-2",
  formId: "form1",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 2)",
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
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−9 + (−4) = ?", choices: ["−13", "13", "−5", "5"], answer: "−13" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 3/5 sebagai perpuluhan ialah?", choices: ["0.6", "0.35", "1.67", "0.53"], answer: "0.6" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 50 ialah?", choices: ["2, 5", "2, 5, 10", "1, 5", "2, 25"], answer: "2, 5" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 4 dan 10 ialah?", choices: ["20", "40", "14", "2"], answer: "20" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √196 ialah?", choices: ["14", "13", "15", "196"], answer: "14" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "6³ = ?", choices: ["216", "18", "36", "63"], answer: "216" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 21:35 dalam bentuk termudah ialah?", choices: ["3:5", "5:3", "21:35", "7:5"], answer: "3:5" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Sebuah kereta bergerak 150km dalam 3 jam. Kadarnya (km/j) ialah?", choices: ["50", "450", "53", "147"], answer: "50" },
        { id: "A9", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Harga 4 biji oren ialah RM8. Berapakah harga 10 biji oren pada kadar yang sama?", choices: ["RM20", "RM32", "RM12", "RM8"], answer: "RM20" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "8m + 5m = ?", choices: ["13m", "13m²", "40m", "3m"], answer: "13m" },
        { id: "A11", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "12q − 7q = ?", choices: ["5q", "5q²", "19q", "84q"], answer: "5q" },
        { id: "A12", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"hasil tambah y dengan 9\" ialah?", choices: ["y + 9", "9 − y", "9y", "y − 9"], answer: "y + 9" },
        { id: "A13", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x + 6 = 20", choices: ["x = 14", "x = 26", "x = −14", "x = 6"], answer: "x = 14" },
        { id: "A14", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 5x = 45", choices: ["x = 9", "x = 225", "x = 40", "x = 50"], answer: "x = 9" },
        { id: "A15", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x/6 = 3", choices: ["x = 18", "x = 2", "x = 9", "x = 36"], answer: "x = 18" },
        { id: "A16", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "7x < 21 bermaksud?", choices: ["x < 3", "x > 3", "x < 147", "x > 147"], answer: "x < 3" },
        { id: "A17", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "x + 4 ≥ 10 bermaksud?", choices: ["x ≥ 6", "x ≤ 6", "x ≥ 14", "x ≤ 14"], answer: "x ≥ 6" },
        { id: "A18", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 6 dan 8 ialah?", choices: ["24", "2", "48", "14"], answer: "24" },
        { id: "A19", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 4x + 3 = 19", choices: ["x = 4", "x = 16", "x = 5.5", "x = 88"], answer: "x = 4" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "(−6) × (−2) = ?", choices: ["12", "−12", "−8", "8"], answer: "12" },
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
          context: "Diberi dua nombor, 15 dan 25.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 15 dan 25.", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 15 dan 25.", answer: "75", marks: 2 },
          ],
          solution: [
            "15 = 3 × 5, 25 = 5²",
            "FSTB = ambil kuasa TERKECIL bagi faktor sepunya = 5",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 3 × 5² = 75",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Seorang peniaga menjual 6 biji kelapa dengan harga RM18.",
          parts: [
            { label: "(a)", prompt: "Cari harga seunit (harga sebiji kelapa).", answer: "3", marks: 2 },
            { label: "(b)", prompt: "Berapakah harga bagi 10 biji kelapa pada kadar yang sama?", answer: "30", marks: 2 },
          ],
          solution: [
            "Harga seunit = 18 ÷ 6 = RM3",
            "Harga 10 biji = 10 × 3 = RM30",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 2x + 9.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 7.", answer: "23", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 2x + 9 = 23 untuk cari x.", answer: "7", marks: 2 },
          ],
          solution: [
            "(a) 2(7) + 9 = 14 + 9 = 23",
            "(b) 2x + 9 = 23 → 2x = 14 → x = 7",
          ],
        },
        {
          id: "B4",
          topic: "Bab 3 · Kuasa Dua/Tiga dan Punca",
          isKbat: false,
          context: "Diberi nombor 6.",
          parts: [
            { label: "(a)", prompt: "Cari kuasa dua bagi 6 (6²).", answer: "36", marks: 2 },
            { label: "(b)", prompt: "Cari kuasa tiga bagi 6 (6³).", answer: "216", marks: 2 },
          ],
          solution: ["6² = 6 × 6 = 36", "6³ = 6 × 6 × 6 = 216"],
        },
        {
          id: "B5",
          topic: "Bab 7 · Ketaksamaan Linear",
          isKbat: false,
          context: "Selesaikan ketaksamaan berikut.",
          parts: [
            { label: "(a)", prompt: "Cari nilai integer positif TERKECIL yang memuaskan ketaksamaan 3x + 4 > 19.", answer: "6", marks: 2 },
            { label: "(b)", prompt: "Cari nilai integer positif TERBESAR yang memuaskan ketaksamaan x − 8 < 2.", answer: "9", marks: 2 },
          ],
          solution: [
            "(a) 3x + 4 > 19 → 3x > 15 → x > 5; integer positif terkecil yang memenuhi ialah 6",
            "(b) x − 8 < 2 → x < 10; integer positif terbesar yang memenuhi ialah 9",
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
            "Farah ada wang simpanan RM240. Dia membelanjakan 1/4 daripada wangnya untuk beg tangan, dan RM60 lagi untuk kasut.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Farah selepas kedua-dua perbelanjaan itu?", answer: "120", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM240? (taip nombor sahaja)", answer: "50", marks: 5 },
          ],
          solution: [
            "Wang beg = 1/4 × 240 = RM60",
            "Jumlah dibelanjakan = 60 + 60 = RM120",
            "Baki = 240 − 120 = RM120",
            "Peratus baki = 120 ÷ 240 × 100% = 50%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan setem Aina kepada bilangan setem Bala ialah 7:5. Jumlah setem mereka berdua ialah 72.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan setem Aina.", answer: "42", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Aina memberi 6 setem kepada Bala, cari nisbah baharu bilangan setem Aina kepada Bala dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "1:1",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 7 + 5 = 12 bahagian",
            "Satu bahagian = 72 ÷ 12 = 6",
            "Setem Aina = 7 × 6 = 42, Setem Bala = 5 × 6 = 30",
            "Selepas Aina beri 6 setem: Aina = 36, Bala = 36",
            "Nisbah baharu = 36:36 = 1:1",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah taman tema mengenakan yuran masuk RM10 dan RM4 bagi setiap tunggangan (ride).",
          parts: [
            { label: "(a)", prompt: "Cari kos bagi 6 tunggangan.", answer: "34", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Danish hanya ada RM38, berapa tunggangan MAKSIMUM (bilangan penuh) yang dia mampu naik?",
              answer: "7",
              marks: 6,
            },
          ],
          solution: [
            "(a) Kos = 10 + 4(6) = 10 + 24 = RM34",
            "(b) 10 + 4k ≤ 38 → 4k ≤ 28 → k ≤ 7",
            "Bilangan tunggangan maksimum yang mampu dinaiki Danish ialah 7",
          ],
        },
        {
          id: "C4",
          topic: "Bab 2 dan 3 · Faktor & Kuasa Dua (KBAT)",
          isKbat: true,
          context:
            "Seorang guru ingin membahagikan 36 pensel dan 54 pemadam sama banyak kepada beberapa orang murid tanpa berbaki.",
          parts: [
            { label: "(a)", prompt: "Berapakah bilangan murid MAKSIMUM yang boleh menerima bahagian sama banyak?", answer: "18", marks: 5 },
            { label: "(b)", prompt: "Jika kuasa dua bagi bilangan murid maksimum itu dikira, berapakah nilainya?", answer: "324", marks: 5 },
          ],
          solution: [
            "36 = 2² × 3², 54 = 2 × 3³",
            "FSTB(36, 54) = 2 × 3² = 18 → bilangan murid maksimum ialah 18",
            "18² = 324",
          ],
        },
        {
          id: "C5",
          topic: "Bab 4 dan 6 · Kadar & Persamaan Linear (KBAT)",
          isKbat: true,
          context:
            "Sebuah bot mengenakan tambang berkadar terus dengan jarak perjalanan; tambang RM15 untuk 5km pertama.",
          parts: [
            { label: "(a)", prompt: "Cari kadar tambang bot itu (RM sekilometer).", answer: "3", marks: 4 },
            { label: "(b)", prompt: "Jika tambang sebenar seorang penumpang ialah RM39, cari jarak perjalanannya (km).", answer: "13", marks: 6 },
          ],
          solution: [
            "Kadar = 15 ÷ 5 = RM3 sekilometer",
            "Jarak = 39 ÷ 3 = 13km",
          ],
        },
        {
          id: "C6",
          topic: "Bab 5 dan 7 · Ungkapan Algebra & Ketaksamaan (KBAT)",
          isKbat: true,
          context: "Sebuah ungkapan algebra ialah 5x − 8.",
          parts: [
            { label: "(a)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 27.", answer: "7", marks: 5 },
            { label: "(b)", prompt: "Cari nilai integer positif TERKECIL bagi x supaya ungkapan 5x − 8 lebih besar daripada 27.", answer: "8", marks: 5 },
          ],
          solution: [
            "(a) 5x − 8 = 27 → 5x = 35 → x = 7",
            "(b) 5x − 8 > 27 → 5x > 35 → x > 7; integer positif terkecil ialah 8",
          ],
        },
      ],
    },
  ],
};
