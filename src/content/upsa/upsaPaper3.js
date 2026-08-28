// Kertas Ujian UPSA (Ujian Pertengahan Sesi Akademik) Percubaan #3 — Matematik
// Tingkatan 1. Format sama seperti Set 1 & Set 2 (Bab 1–7 sahaja, 100 markah,
// 31 soalan, 90 minit, Bahagian C KBAT) dengan soalan BAHARU sepenuhnya.
export const upsaPaper3 = {
  id: "form1-upsa-3",
  formId: "form1",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 3)",
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
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−7 + (−8) = ?", choices: ["−15", "15", "−1", "1"], answer: "−15" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 9/20 sebagai perpuluhan ialah?", choices: ["0.45", "0.29", "2.22", "0.54"], answer: "0.45" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 45 ialah?", choices: ["3, 5", "3, 5, 9", "1, 3, 5", "3, 15"], answer: "3, 5" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 8 dan 12 ialah?", choices: ["24", "4", "96", "20"], answer: "24" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √225 ialah?", choices: ["15", "14", "16", "225"], answer: "15" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "2³ = ?", choices: ["8", "6", "4", "23"], answer: "8" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 32:24 dalam bentuk termudah ialah?", choices: ["4:3", "3:4", "32:24", "8:6"], answer: "4:3" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Seorang pekerja menaip 300 patah perkataan dalam 5 minit. Kadarnya (patah perkataan seminit) ialah?", choices: ["60", "1500", "65", "55"], answer: "60" },
        { id: "A9", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Harga 3 biji tembikai ialah RM27. Berapakah harga 5 biji tembikai pada kadar yang sama?", choices: ["RM45", "RM54", "RM24", "RM9"], answer: "RM45" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "11k − 5k = ?", choices: ["6k", "6k²", "16k", "55k"], answer: "6k" },
        { id: "A11", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "4h + 9h = ?", choices: ["13h", "13h²", "36h", "5h"], answer: "13h" },
        { id: "A12", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"beza antara m dengan 8\", dengan m lebih besar, ialah?", choices: ["m − 8", "8 − m", "m + 8", "8/m"], answer: "m − 8" },
        { id: "A13", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x + 11 = 19", choices: ["x = 8", "x = 30", "x = −8", "x = 11"], answer: "x = 8" },
        { id: "A14", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 7x = 63", choices: ["x = 9", "x = 441", "x = 56", "x = 70"], answer: "x = 9" },
        { id: "A15", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x/5 = 6", choices: ["x = 30", "x = 1.2", "x = 11", "x = 25"], answer: "x = 30" },
        { id: "A16", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "6x > 42 bermaksud?", choices: ["x > 7", "x < 7", "x > 252", "x < 252"], answer: "x > 7" },
        { id: "A17", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "x − 5 ≤ 3 bermaksud?", choices: ["x ≤ 8", "x ≥ 8", "x ≤ 2", "x ≥ 2"], answer: "x ≤ 8" },
        { id: "A18", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "FSTB bagi 14 dan 21 ialah?", choices: ["7", "3", "294", "2"], answer: "7" },
        { id: "A19", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: 2x − 5 = 11", choices: ["x = 8", "x = 16", "x = 3", "x = 32"], answer: "x = 8" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "(−15) ÷ 3 = ?", choices: ["−5", "5", "−45", "45"], answer: "−5" },
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
          context: "Diberi dua nombor, 21 dan 28.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 21 dan 28.", answer: "7", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 21 dan 28.", answer: "84", marks: 2 },
          ],
          solution: [
            "21 = 3 × 7, 28 = 2² × 7",
            "FSTB = ambil kuasa TERKECIL bagi faktor sepunya = 7",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 2² × 3 × 7 = 84",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Seorang peniaga menjual 5 batang pen dengan harga RM15.",
          parts: [
            { label: "(a)", prompt: "Cari harga seunit (harga sebatang pen).", answer: "3", marks: 2 },
            { label: "(b)", prompt: "Berapakah harga bagi 9 batang pen pada kadar yang sama?", answer: "27", marks: 2 },
          ],
          solution: [
            "Harga seunit = 15 ÷ 5 = RM3",
            "Harga 9 batang = 9 × 3 = RM27",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 7x − 4.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 3.", answer: "17", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 7x − 4 = 17 untuk cari x.", answer: "3", marks: 2 },
          ],
          solution: [
            "(a) 7(3) − 4 = 21 − 4 = 17",
            "(b) 7x − 4 = 17 → 7x = 21 → x = 3",
          ],
        },
        {
          id: "B4",
          topic: "Bab 3 · Kuasa Dua/Tiga dan Punca",
          isKbat: false,
          context: "Diberi nombor 9.",
          parts: [
            { label: "(a)", prompt: "Cari kuasa dua bagi 9 (9²).", answer: "81", marks: 2 },
            { label: "(b)", prompt: "Cari kuasa tiga bagi 9 (9³).", answer: "729", marks: 2 },
          ],
          solution: ["9² = 9 × 9 = 81", "9³ = 9 × 9 × 9 = 729"],
        },
        {
          id: "B5",
          topic: "Bab 7 · Ketaksamaan Linear",
          isKbat: false,
          context: "Selesaikan ketaksamaan berikut.",
          parts: [
            { label: "(a)", prompt: "Cari nilai integer positif TERKECIL yang memuaskan ketaksamaan 4x − 3 > 21.", answer: "7", marks: 2 },
            { label: "(b)", prompt: "Cari nilai integer positif TERBESAR yang memuaskan ketaksamaan x + 5 < 14.", answer: "8", marks: 2 },
          ],
          solution: [
            "(a) 4x − 3 > 21 → 4x > 24 → x > 6; integer positif terkecil yang memenuhi ialah 7",
            "(b) x + 5 < 14 → x < 9; integer positif terbesar yang memenuhi ialah 8",
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
            "Rina ada wang simpanan RM200. Dia membelanjakan 2/5 daripada wangnya untuk telefon bimbit baharu, dan RM40 lagi untuk aksesori.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Rina selepas kedua-dua perbelanjaan itu?", answer: "80", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM200? (taip nombor sahaja)", answer: "40", marks: 5 },
          ],
          solution: [
            "Wang telefon = 2/5 × 200 = RM80",
            "Jumlah dibelanjakan = 80 + 40 = RM120",
            "Baki = 200 − 120 = RM80",
            "Peratus baki = 80 ÷ 200 × 100% = 40%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan biji manik Mei kepada bilangan biji manik Nurul ialah 3:4. Jumlah manik mereka berdua ialah 98.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan biji manik Mei.", answer: "42", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Nurul memberi 8 biji manik kepada Mei, cari nisbah baharu bilangan manik Mei kepada Nurul dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "25:24",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 3 + 4 = 7 bahagian",
            "Satu bahagian = 98 ÷ 7 = 14",
            "Manik Mei = 3 × 14 = 42, Manik Nurul = 4 × 14 = 56",
            "Selepas Nurul beri 8 manik: Mei = 50, Nurul = 48",
            "Nisbah baharu = 50:48 = 25:24 (bahagi dengan 2)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah kolam renang awam mengenakan yuran masuk RM4 dan RM3 bagi setiap jam berenang.",
          parts: [
            { label: "(a)", prompt: "Cari kos bagi berenang selama 3 jam.", answer: "13", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Zaid hanya ada RM22, berapa jam MAKSIMUM (bilangan jam penuh) dia boleh berenang?",
              answer: "6",
              marks: 6,
            },
          ],
          solution: [
            "(a) Kos = 4 + 3(3) = 4 + 9 = RM13",
            "(b) 4 + 3k ≤ 22 → 3k ≤ 18 → k ≤ 6",
            "Bilangan jam maksimum yang mampu berenang Zaid ialah 6 jam",
          ],
        },
        {
          id: "C4",
          topic: "Bab 2 dan 3 · Faktor & Kuasa Dua (KBAT)",
          isKbat: true,
          context:
            "Seorang penganjur ingin membahagikan 42 hadiah dan 63 tiket sama banyak kepada beberapa kumpulan tanpa berbaki.",
          parts: [
            { label: "(a)", prompt: "Berapakah bilangan kumpulan MAKSIMUM yang boleh menerima bahagian sama banyak?", answer: "21", marks: 5 },
            { label: "(b)", prompt: "Jika kuasa dua bagi bilangan kumpulan maksimum itu dikira, berapakah nilainya?", answer: "441", marks: 5 },
          ],
          solution: [
            "42 = 2 × 3 × 7, 63 = 3² × 7",
            "FSTB(42, 63) = 3 × 7 = 21 → bilangan kumpulan maksimum ialah 21",
            "21² = 441",
          ],
        },
        {
          id: "C5",
          topic: "Bab 4 dan 6 · Kadar & Persamaan Linear (KBAT)",
          isKbat: true,
          context:
            "Sebuah kereta sewa mengenakan bayaran berkadar terus dengan jarak perjalanan; bayaran RM24 untuk 6km pertama.",
          parts: [
            { label: "(a)", prompt: "Cari kadar bayaran kereta sewa itu (RM sekilometer).", answer: "4", marks: 4 },
            { label: "(b)", prompt: "Jika bayaran sebenar seorang pelanggan ialah RM52, cari jarak perjalanannya (km).", answer: "13", marks: 6 },
          ],
          solution: [
            "Kadar = 24 ÷ 6 = RM4 sekilometer",
            "Jarak = 52 ÷ 4 = 13km",
          ],
        },
        {
          id: "C6",
          topic: "Bab 5 dan 7 · Ungkapan Algebra & Ketaksamaan (KBAT)",
          isKbat: true,
          context: "Sebuah ungkapan algebra ialah 3x + 5.",
          parts: [
            { label: "(a)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 26.", answer: "7", marks: 5 },
            { label: "(b)", prompt: "Cari nilai integer positif TERKECIL bagi x supaya ungkapan 3x + 5 lebih besar daripada 26.", answer: "8", marks: 5 },
          ],
          solution: [
            "(a) 3x + 5 = 26 → 3x = 21 → x = 7",
            "(b) 3x + 5 > 26 → 3x > 21 → x > 7; integer positif terkecil ialah 8",
          ],
        },
      ],
    },
  ],
};
