// Kertas Ujian UASA Percubaan #3 — Matematik Tingkatan 1.
// Format sama seperti Set 1 & Set 2 (Bahagian A/B/C, 100 markah, 31 soalan,
// 120 minit, merentasi semua 13 bab, Bahagian C KBAT) dengan soalan BAHARU.
export const uasaPaper3 = {
  id: "form1-uasa-3",
  formId: "form1",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 3)",
  subtitle: "Matematik · Tingkatan 1",
  totalMarks: 100,
  durationMinutes: 120,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "10 + (−15) = ?", choices: ["−5", "5", "−25", "25"], answer: "−5" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 7/8 sebagai perpuluhan ialah?", choices: ["0.875", "0.78", "1.14", "0.87"], answer: "0.875" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 60 ialah?", choices: ["2, 3, 5", "2, 3, 6", "2, 5, 6", "3, 4, 5"], answer: "2, 3, 5" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 5 dan 8 ialah?", choices: ["40", "13", "20", "5"], answer: "40" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √144 ialah?", choices: ["12", "14", "72", "144"], answer: "12" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "4³ = ?", choices: ["64", "12", "16", "43"], answer: "64" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 40:16 dalam bentuk termudah ialah?", choices: ["5:2", "2:5", "40:16", "8:2"], answer: "5:2" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Seorang pekerja mengecat 45m² dinding dalam 3 jam. Kadarnya (m²/j) ialah?", choices: ["15", "135", "48", "3"], answer: "15" },
        { id: "A9", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "9m − 4m = ?", choices: ["5m", "5m²", "13m", "36m"], answer: "5m" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"hasil darab n dengan 6\" ialah?", choices: ["6n", "n + 6", "n − 6", "n/6"], answer: "6n" },
        { id: "A11", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x/3 = 9", choices: ["x = 27", "x = 3", "x = 12", "x = 6"], answer: "x = 27" },
        { id: "A12", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "4x < 20 bermaksud?", choices: ["x < 5", "x > 5", "x < 80", "x > 80"], answer: "x < 5" },
        { id: "A13", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Dua sudut berkomplemen ialah 27° dan y°. Cari y.", choices: ["63°", "153°", "27°", "117°"], answer: "63°" },
        { id: "A14", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Jumlah dua sudut bersuplemen ialah?", choices: ["180°", "90°", "360°", "270°"], answer: "180°" },
        { id: "A15", topic: "Bab 9 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah pentagon (segi lima) ialah?", choices: ["540°", "360°", "180°", "720°"], answer: "540°" },
        { id: "A16", topic: "Bab 10 · Perimeter dan Luas", marks: 1, prompt: "Luas segi tiga dengan tapak 14cm dan tinggi 5cm ialah?", choices: ["35cm²", "70cm²", "19cm²", "9cm²"], answer: "35cm²" },
        { id: "A17", topic: "Bab 11 · Pengenalan Set", marks: 1, prompt: "Set R = {x, y, z, w}. Cari n(R).", choices: ["4", "3", "5", "24"], answer: "4" },
        { id: "A18", topic: "Bab 12 · Pengendalian Data", marks: 1, prompt: "Beza antara nilai tertinggi dan terendah dalam set data dipanggil?", choices: ["Julat", "Mod", "Median", "Purata"], answer: "Julat" },
        { id: "A19", topic: "Bab 13 · Teorem Pythagoras", marks: 1, prompt: "Segi tiga bersudut tegak dengan hipotenus 25cm dan satu sisi pendek 7cm. Cari sisi pendek satu lagi.", choices: ["24cm", "18cm", "20cm", "32cm"], answer: "24cm" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "8 − (−3) + (−5) = ?", choices: ["6", "−6", "16", "0"], answer: "6" },
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
          context: "Diberi dua nombor, 16 dan 40.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 16 dan 40.", answer: "8", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 16 dan 40.", answer: "80", marks: 2 },
          ],
          solution: [
            "16 = 2⁴, 40 = 2³ × 5",
            "FSTB = ambil kuasa TERKECIL bagi setiap faktor sepunya = 2³ = 8",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 2⁴ × 5 = 80",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Sebuah kilang air memproses 600 liter air dalam 5 jam pada kadar yang malar.",
          parts: [
            { label: "(a)", prompt: "Cari kadar pemprosesan kilang itu (liter sejam).", answer: "120", marks: 2 },
            { label: "(b)", prompt: "Berapa liter diproses dalam 8 jam pada kadar yang sama?", answer: "960", marks: 2 },
          ],
          solution: [
            "Kadar = 600 ÷ 5 = 120 liter sejam",
            "Dalam 8 jam: 120 × 8 = 960 liter",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 6x − 5.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 3.", answer: "13", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 6x − 5 = 13 untuk cari x.", answer: "3", marks: 2 },
          ],
          solution: [
            "(a) 6(3) − 5 = 18 − 5 = 13",
            "(b) 6x − 5 = 13 → 6x = 18 → x = 3",
          ],
        },
        {
          id: "B4",
          topic: "Bab 8 · Garis dan Sudut",
          isKbat: false,
          context: "Dua garis lurus bersilang membentuk sudut 55° pada satu bahagian.",
          parts: [
            { label: "(a)", prompt: "Cari sudut bertentang bucu dengan 55° itu.", answer: "55", marks: 2 },
            { label: "(b)", prompt: "Cari sudut bersebelahan dengan 55° itu.", answer: "125", marks: 2 },
          ],
          solution: [
            "(a) Sudut bertentang bucu SENTIASA sama besar = 55°",
            "(b) Sudut bersebelahan bersuplemen (jumlah 180°): 180° − 55° = 125°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 10 · Perimeter dan Luas",
          isKbat: false,
          context: "Sebuah padang berbentuk segiempat tepat mempunyai perimeter 50m. Lebarnya ialah 10m.",
          parts: [
            { label: "(a)", prompt: "Cari panjang padang itu.", answer: "15", marks: 2 },
            { label: "(b)", prompt: "Cari luas padang itu (m²).", answer: "150", marks: 2 },
          ],
          solution: [
            "Perimeter = 2(p + l): 50 = 2(p + 10) → 25 = p + 10 → p = 15m",
            "Luas = p × l = 15 × 10 = 150m²",
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
            "Amir memperoleh RM300 daripada kerja sambilan. Dia menyimpan 1/4 daripada wangnya di bank, dan membelanjakan RM45 lagi untuk membeli buku.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Amir selepas menyimpan dan membeli buku?", answer: "180", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM300? (taip nombor sahaja)", answer: "60", marks: 5 },
          ],
          solution: [
            "Simpanan = 1/4 × 300 = RM75",
            "Jumlah ditolak = 75 + 45 = RM120",
            "Baki = 300 − 120 = RM180",
            "Peratus baki = 180 ÷ 300 × 100% = 60%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan setika Farid kepada bilangan setika Hakim ialah 4:9. Jumlah setika mereka berdua ialah 130.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan setika Farid.", answer: "40", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Hakim memberi 10 setika kepada Farid, cari nisbah baharu bilangan setika Farid kepada Hakim dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "5:8",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 4 + 9 = 13 bahagian",
            "Satu bahagian = 130 ÷ 13 = 10",
            "Setika Farid = 4 × 10 = 40, Setika Hakim = 9 × 10 = 90",
            "Selepas Hakim beri 10 setika: Farid = 50, Hakim = 80",
            "Nisbah baharu = 50:80 = 5:8 (bahagi dengan 10)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah syarikat sewa basikal mengenakan caj permulaan RM5 dan RM3 bagi setiap jam.",
          parts: [
            { label: "(a)", prompt: "Cari kos sewa basikal selama 4 jam.", answer: "17", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Aina hanya ada RM26, berapa jam MAKSIMUM (bilangan jam penuh) dia boleh sewa basikal itu?",
              answer: "7",
              marks: 6,
            },
          ],
          solution: [
            "(a) Kos = 5 + 3(4) = 5 + 12 = RM17",
            "(b) 5 + 3k ≤ 26 → 3k ≤ 21 → k ≤ 7",
            "Bilangan jam maksimum yang mampu disewa Aina ialah 7 jam",
          ],
        },
        {
          id: "C4",
          topic: "Bab 8 dan 9 · Sudut & Poligon (KBAT)",
          isKbat: true,
          context:
            "Sebuah cermin berbentuk segi tiga sama kaki digantung di dinding. Sudut kemuncaknya ialah 20° lebih kecil daripada dua kali sudut tapak.",
          parts: [
            { label: "(a)", prompt: "Cari saiz setiap sudut tapak.", answer: "50", marks: 6 },
            { label: "(b)", prompt: "Cari saiz sudut kemuncak.", answer: "80", marks: 4 },
          ],
          solution: [
            "Biar sudut tapak = x. Sudut kemuncak = 2x − 20",
            "Jumlah sudut segi tiga = 180°: x + x + (2x − 20) = 180",
            "4x − 20 = 180 → 4x = 200 → x = 50°",
            "Sudut kemuncak = 2(50) − 20 = 80°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 10 dan 13 · Perimeter, Luas & Pythagoras (KBAT)",
          isKbat: true,
          context: "Sebuah taman permainan berbentuk segi tiga bersudut tegak dengan hipotenus 13m dan satu sisi pendek 5m.",
          parts: [
            { label: "(a)", prompt: "Cari panjang sisi pendek satu lagi.", answer: "12", marks: 4 },
            { label: "(b)", prompt: "Cari perimeter taman itu.", answer: "30", marks: 3 },
            { label: "(c)", prompt: "Cari luas taman itu (m²).", answer: "30", marks: 3 },
          ],
          solution: [
            "(a) 13² − 5² = 169 − 25 = 144 → sisi = √144 = 12m",
            "(b) Perimeter = 5 + 12 + 13 = 30m",
            "(c) Luas = ½ × 5 × 12 = 30m²",
          ],
        },
        {
          id: "C6",
          topic: "Bab 11 dan 12 · Set & Pengendalian Data (KBAT)",
          isKbat: true,
          context:
            "Dalam satu tinjauan terhadap 45 orang pelajar, set semesta ξ ialah kesemua 45 pelajar. Set C ialah pelajar yang menghantar kerja rumah tepat masa, dengan n(C) = 33.",
          parts: [
            { label: "(a)", prompt: "Cari n(C′), iaitu bilangan pelajar yang TIDAK menghantar tepat masa.", answer: "12", marks: 5 },
            {
              label: "(b)",
              prompt:
                "Jika bilangan pelajar LELAKI dalam C′ ialah 4 orang, dan baki C′ adalah pelajar perempuan, berapakah bilangan pelajar PEREMPUAN dalam C′?",
              answer: "8",
              marks: 5,
            },
          ],
          solution: [
            "n(C′) = n(ξ) − n(C) = 45 − 33 = 12",
            "Pelajar perempuan dalam C′ = 12 − 4 = 8",
          ],
        },
      ],
    },
  ],
};
