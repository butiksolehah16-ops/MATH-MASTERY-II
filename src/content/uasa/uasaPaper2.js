// Kertas Ujian UASA Percubaan #2 — Matematik Tingkatan 1.
// Format sama seperti Set 1 (Bahagian A/B/C, 100 markah, 31 soalan, 120 minit,
// merentasi semua 13 bab, Bahagian C KBAT) tetapi soalan BAHARU sepenuhnya
// supaya pelajar dapat latih tubi bercampur yang sebenar, bukan ulang soalan sama.
export const uasaPaper2 = {
  id: "form1-uasa-2",
  formId: "form1",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 2)",
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
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−6 + (−9) = ?", choices: ["−15", "15", "−3", "3"], answer: "−15" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 2/5 sebagai perpuluhan ialah?", choices: ["0.4", "0.25", "2.5", "0.52"], answer: "0.4" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 42 ialah?", choices: ["2, 3, 7", "2, 3, 6", "1, 3, 7", "2, 7, 6"], answer: "2, 3, 7" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "FSTB bagi 8 dan 12 ialah?", choices: ["4", "24", "2", "8"], answer: "4" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √121 ialah?", choices: ["11", "10", "12", "121"], answer: "11" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "Nilai ∛64 ialah?", choices: ["4", "8", "6", "16"], answer: "4" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 24:36 dalam bentuk termudah ialah?", choices: ["2:3", "3:2", "24:36", "4:6"], answer: "2:3" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Sebuah kereta bergerak 180km dalam 3 jam. Kadarnya (km/j) ialah?", choices: ["60", "3", "540", "183"], answer: "60" },
        { id: "A9", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "7y − 2y = ?", choices: ["5y", "5y²", "9y", "14y"], answer: "5y" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"tiga kurang daripada p\" ialah?", choices: ["p − 3", "3 − p", "3p", "p + 3"], answer: "p − 3" },
        { id: "A11", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x − 4 = 9", choices: ["x = 13", "x = 5", "x = −13", "x = 36"], answer: "x = 13" },
        { id: "A12", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "3x ≤ 18 bermaksud?", choices: ["x ≤ 6", "x ≥ 6", "x ≤ 15", "x ≥ 15"], answer: "x ≤ 6" },
        { id: "A13", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Dua sudut bersuplemen ialah 65° dan y°. Cari y.", choices: ["115°", "25°", "65°", "180°"], answer: "115°" },
        { id: "A14", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Jumlah sudut pada satu titik (sudut penuh) ialah?", choices: ["360°", "180°", "90°", "270°"], answer: "360°" },
        { id: "A15", topic: "Bab 9 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah sisiempat ialah?", choices: ["360°", "180°", "270°", "540°"], answer: "360°" },
        { id: "A16", topic: "Bab 10 · Perimeter dan Luas", marks: 1, prompt: "Luas segi tiga dengan tapak 10cm dan tinggi 6cm ialah?", choices: ["30cm²", "60cm²", "16cm²", "20cm²"], answer: "30cm²" },
        { id: "A17", topic: "Bab 11 · Pengenalan Set", marks: 1, prompt: "Set Q = {a, b, c, d, e}. Cari n(Q).", choices: ["5", "4", "6", "25"], answer: "5" },
        { id: "A18", topic: "Bab 12 · Pengendalian Data", marks: 1, prompt: "Nilai tengah dalam set data yang telah disusun dipanggil?", choices: ["Median", "Mod", "Purata", "Julat"], answer: "Median" },
        { id: "A19", topic: "Bab 13 · Teorem Pythagoras", marks: 1, prompt: "Segi tiga bersudut tegak dengan sisi pendek 5cm dan 12cm. Cari hipotenus.", choices: ["13cm", "17cm", "60cm", "25cm"], answer: "13cm" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "6 − (−2) = ?", choices: ["8", "4", "−8", "−4"], answer: "8" },
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
          context: "Diberi dua nombor, 20 dan 30.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 20 dan 30.", answer: "10", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 20 dan 30.", answer: "60", marks: 2 },
          ],
          solution: [
            "20 = 2² × 5, 30 = 2 × 3 × 5",
            "FSTB = ambil kuasa TERKECIL bagi setiap faktor sepunya = 2¹ × 5¹ = 10",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 2² × 3¹ × 5¹ = 60",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Sebuah mesin mencetak 360 helai kertas dalam 4 minit pada kadar yang malar.",
          parts: [
            { label: "(a)", prompt: "Cari kadar percetakan mesin itu (helai seminit).", answer: "90", marks: 2 },
            { label: "(b)", prompt: "Berapa helai dicetak dalam 7 minit pada kadar yang sama?", answer: "630", marks: 2 },
          ],
          solution: [
            "Kadar = 360 ÷ 4 = 90 helai seminit",
            "Dalam 7 minit: 90 × 7 = 630 helai",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 5x + 2.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 4.", answer: "22", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 5x + 2 = 22 untuk cari x.", answer: "4", marks: 2 },
          ],
          solution: [
            "(a) 5(4) + 2 = 20 + 2 = 22",
            "(b) 5x + 2 = 22 → 5x = 20 → x = 4",
          ],
        },
        {
          id: "B4",
          topic: "Bab 8 · Garis dan Sudut",
          isKbat: false,
          context: "Dua garis lurus bersilang membentuk sudut 48° pada satu bahagian.",
          parts: [
            { label: "(a)", prompt: "Cari sudut bertentang bucu dengan 48° itu.", answer: "48", marks: 2 },
            { label: "(b)", prompt: "Cari sudut bersebelahan dengan 48° itu.", answer: "132", marks: 2 },
          ],
          solution: [
            "(a) Sudut bertentang bucu SENTIASA sama besar = 48°",
            "(b) Sudut bersebelahan bersuplemen (jumlah 180°): 180° − 48° = 132°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 10 · Perimeter dan Luas",
          isKbat: false,
          context: "Sebuah bilik berbentuk segiempat tepat mempunyai perimeter 30m. Panjangnya ialah 9m.",
          parts: [
            { label: "(a)", prompt: "Cari lebar bilik itu.", answer: "6", marks: 2 },
            { label: "(b)", prompt: "Cari luas bilik itu (m²).", answer: "54", marks: 2 },
          ],
          solution: [
            "Perimeter = 2(p + l): 30 = 2(9 + l) → 15 = 9 + l → l = 6m",
            "Luas = p × l = 9 × 6 = 54m²",
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
            "Siti ada wang simpanan RM250. Dia membelanjakan 3/10 daripada wangnya untuk baju baharu, dan RM40 lagi untuk membeli kasut.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Siti selepas kedua-dua perbelanjaan itu?", answer: "135", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM250? (taip nombor sahaja)", answer: "54", marks: 5 },
          ],
          solution: [
            "Wang baju = 3/10 × 250 = RM75",
            "Jumlah dibelanjakan = 75 + 40 = RM115",
            "Baki = 250 − 115 = RM135",
            "Peratus baki = 135 ÷ 250 × 100% = 54%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan pen Zul kepada bilangan pen Wei ialah 2:7. Jumlah pen mereka berdua ialah 108.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan pen Zul.", answer: "24", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Wei memberi 6 pen kepada Zul, cari nisbah baharu bilangan pen Zul kepada Wei dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "5:13",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 2 + 7 = 9 bahagian",
            "Satu bahagian = 108 ÷ 9 = 12",
            "Pen Zul = 2 × 12 = 24, Pen Wei = 7 × 12 = 84",
            "Selepas Wei beri 6 pen: Zul = 30, Wei = 78",
            "Nisbah baharu = 30:78 = 5:13 (bahagi dengan 6)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah kedai fotokopi mengenakan caj permulaan RM2 dan RM0.50 bagi setiap helai disalin.",
          parts: [
            { label: "(a)", prompt: "Cari kos bagi menyalin 20 helai.", answer: "12", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Farah hanya mempunyai RM10, apakah bilangan helai MAKSIMUM (bilangan penuh) yang dia mampu salin?",
              answer: "16",
              marks: 6,
            },
          ],
          solution: [
            "(a) Kos = 2 + 0.5(20) = 2 + 10 = RM12",
            "(b) 2 + 0.5k ≤ 10 → 0.5k ≤ 8 → k ≤ 16",
            "Bilangan helai maksimum yang mampu disalin Farah ialah 16 helai",
          ],
        },
        {
          id: "C4",
          topic: "Bab 8 dan 9 · Sudut & Poligon (KBAT)",
          isKbat: true,
          context:
            "Sebuah pintu gerbang berbentuk segi tiga sama kaki. Sudut kemuncaknya ialah 40°, dan dua sudut tapaknya sama besar.",
          parts: [
            { label: "(a)", prompt: "Cari saiz setiap sudut tapak.", answer: "70", marks: 6 },
            { label: "(b)", prompt: "Jika sudut tapak itu dibahagikan sama rata oleh satu garis pembahagi sudut, cari saiz setiap separuh sudut tapak.", answer: "35", marks: 4 },
          ],
          solution: [
            "Biar sudut tapak = x. Jumlah sudut segi tiga = 180°: x + x + 40 = 180",
            "2x + 40 = 180 → 2x = 140 → x = 70°",
            "Separuh sudut tapak = 70 ÷ 2 = 35°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 10 dan 13 · Perimeter, Luas & Pythagoras (KBAT)",
          isKbat: true,
          context: "Sebuah tapak perkhemahan berbentuk segi tiga bersudut tegak dengan dua sisi pendek 8m dan 15m.",
          parts: [
            { label: "(a)", prompt: "Cari panjang sisi ketiga (hipotenus) tapak itu.", answer: "17", marks: 4 },
            { label: "(b)", prompt: "Cari perimeter tapak itu.", answer: "40", marks: 3 },
            { label: "(c)", prompt: "Cari luas tapak itu (m²).", answer: "60", marks: 3 },
          ],
          solution: [
            "(a) c² = 8² + 15² = 64 + 225 = 289 → c = √289 = 17m",
            "(b) Perimeter = 8 + 15 + 17 = 40m",
            "(c) Luas = ½ × 8 × 15 = 60m²",
          ],
        },
        {
          id: "C6",
          topic: "Bab 11 dan 12 · Set & Pengendalian Data (KBAT)",
          isKbat: true,
          context:
            "Dalam satu tinjauan terhadap 50 orang pekerja, set semesta ξ ialah kesemua 50 pekerja. Set B ialah pekerja yang memandu ke tempat kerja, dengan n(B) = 35.",
          parts: [
            { label: "(a)", prompt: "Cari n(B′), iaitu bilangan pekerja yang TIDAK memandu ke tempat kerja.", answer: "15", marks: 5 },
            {
              label: "(b)",
              prompt:
                "Jika bilangan pekerja yang menaiki bas dalam B′ ialah 9 orang, dan baki B′ berjalan kaki, berapakah bilangan pekerja yang BERJALAN KAKI dalam B′?",
              answer: "6",
              marks: 5,
            },
          ],
          solution: [
            "n(B′) = n(ξ) − n(B) = 50 − 35 = 15",
            "Pekerja berjalan kaki dalam B′ = 15 − 9 = 6",
          ],
        },
      ],
    },
  ],
};
