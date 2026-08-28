// Kertas Ujian UASA Percubaan #1 — Matematik Tingkatan 1.
// Format ikut struktur sebenar UASA: Bahagian A (Objektif, 20 soalan x 1
// markah), Bahagian B (Struktur pendek, 5 soalan x 4 markah), Bahagian C
// (Struktur lanjutan/KBAT, 6 soalan x 10 markah). Jumlah 100 markah, 31
// soalan, 120 minit. Soalan merentasi SEMUA 13 bab supaya benar-benar
// "ulangkaji bercampur" (spec ms. 34), dan Bahagian C sengaja direka sebagai
// soalan KBAT — konteks dunia sebenar, gabung >1 bab, penaakulan berbilang
// langkah — bukan sekadar ulang formula tunggal.
export const uasaPaper1 = {
  id: "form1-uasa-1",
  formId: "form1",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 1)",
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
        { id: "A1", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−8 + 5 = ?", choices: ["−3", "3", "−13", "13"], answer: "−3" },
        { id: "A2", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "Nilai bagi 3/4 sebagai perpuluhan ialah?", choices: ["0.75", "0.34", "1.33", "0.43"], answer: "0.75" },
        { id: "A3", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "Faktor perdana bagi 30 ialah?", choices: ["2, 3, 5", "2, 3, 6", "1, 3, 5", "2, 5, 6"], answer: "2, 3, 5" },
        { id: "A4", topic: "Bab 2 · Faktor dan Gandaan", marks: 1, prompt: "GSTK bagi 4 dan 6 ialah?", choices: ["12", "24", "2", "10"], answer: "12" },
        { id: "A5", topic: "Bab 3 · Kuasa Dua dan Punca Kuasa Dua", marks: 1, prompt: "Nilai √81 ialah?", choices: ["9", "8", "9.5", "81"], answer: "9" },
        { id: "A6", topic: "Bab 3 · Kuasa Tiga dan Punca Kuasa Tiga", marks: 1, prompt: "3³ = ?", choices: ["27", "9", "6", "30"], answer: "27" },
        { id: "A7", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Nisbah 15:25 dalam bentuk termudah ialah?", choices: ["3:5", "5:3", "15:25", "1:2"], answer: "3:5" },
        { id: "A8", topic: "Bab 4 · Nisbah, Kadar dan Kadaran", marks: 1, prompt: "Sebuah kereta bergerak 120km dalam 2 jam. Kadarnya (km/j) ialah?", choices: ["60", "240", "40", "120"], answer: "60" },
        { id: "A9", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "3x + 5x = ?", choices: ["8x", "15x", "8x²", "2x"], answer: "8x" },
        { id: "A10", topic: "Bab 5 · Ungkapan Algebra", marks: 1, prompt: "Ungkapan bagi \"lima lebih daripada x\" ialah?", choices: ["x + 5", "5x", "x − 5", "5 − x"], answer: "x + 5" },
        { id: "A11", topic: "Bab 6 · Persamaan Linear", marks: 1, prompt: "Selesaikan: x + 7 = 12", choices: ["x = 5", "x = 19", "x = −5", "x = 7"], answer: "x = 5" },
        { id: "A12", topic: "Bab 7 · Ketaksamaan Linear", marks: 1, prompt: "2x > 10 bermaksud?", choices: ["x > 5", "x < 5", "x > 8", "x < 8"], answer: "x > 5" },
        { id: "A13", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Dua sudut berkomplemen ialah 35° dan y°. Cari y.", choices: ["55°", "145°", "65°", "35°"], answer: "55°" },
        { id: "A14", topic: "Bab 8 · Garis dan Sudut", marks: 1, prompt: "Jumlah sudut pada satu garis lurus ialah?", choices: ["180°", "90°", "360°", "270°"], answer: "180°" },
        { id: "A15", topic: "Bab 9 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebarang segi tiga ialah?", choices: ["180°", "360°", "90°", "270°"], answer: "180°" },
        { id: "A16", topic: "Bab 10 · Perimeter dan Luas", marks: 1, prompt: "Luas segiempat tepat dengan panjang 8cm dan lebar 5cm ialah?", choices: ["40cm²", "13cm²", "26cm²", "35cm²"], answer: "40cm²" },
        { id: "A17", topic: "Bab 11 · Pengenalan Set", marks: 1, prompt: "Set P = {2, 4, 6}. Cari n(P).", choices: ["3", "2", "6", "12"], answer: "3" },
        { id: "A18", topic: "Bab 12 · Pengendalian Data", marks: 1, prompt: "Kategori dengan kekerapan TERTINGGI dalam set data dipanggil?", choices: ["Mod", "Purata", "Median", "Julat"], answer: "Mod" },
        { id: "A19", topic: "Bab 13 · Teorem Pythagoras", marks: 1, prompt: "Segi tiga bersudut tegak dengan sisi pendek 6cm dan 8cm. Cari hipotenus.", choices: ["10cm", "14cm", "48cm", "100cm"], answer: "10cm" },
        { id: "A20", topic: "Bab 1 · Nombor Nisbah", marks: 1, prompt: "−3 − (−7) = ?", choices: ["4", "−10", "10", "−4"], answer: "4" },
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
          context: "Diberi dua nombor, 18 dan 24.",
          parts: [
            { label: "(a)", prompt: "Cari FSTB (Faktor Sepunya Terbesar) bagi 18 dan 24.", answer: "6", marks: 2 },
            { label: "(b)", prompt: "Cari GSTK (Gandaan Sepunya Terkecil) bagi 18 dan 24.", answer: "72", marks: 2 },
          ],
          solution: [
            "18 = 2 × 3², 24 = 2³ × 3",
            "FSTB = ambil kuasa TERKECIL bagi setiap faktor sepunya = 2¹ × 3¹ = 6",
            "GSTK = ambil kuasa TERBESAR bagi setiap faktor = 2³ × 3² = 8 × 9 = 72",
          ],
        },
        {
          id: "B2",
          topic: "Bab 4 · Nisbah, Kadar dan Kadaran",
          isKbat: false,
          context: "Sebuah kilang menghasilkan 450 unit barangan dalam 6 jam pada kadar yang malar.",
          parts: [
            { label: "(a)", prompt: "Cari kadar pengeluaran kilang itu (unit sejam).", answer: "75", marks: 2 },
            { label: "(b)", prompt: "Berapa unit dihasilkan dalam 10 jam pada kadar yang sama?", answer: "750", marks: 2 },
          ],
          solution: [
            "Kadar = 450 ÷ 6 = 75 unit sejam",
            "Dalam 10 jam: 75 × 10 = 750 unit",
          ],
        },
        {
          id: "B3",
          topic: "Bab 5 dan 6 · Ungkapan Algebra & Persamaan Linear",
          isKbat: false,
          context: "Diberi ungkapan algebra 4x − 3.",
          parts: [
            { label: "(a)", prompt: "Cari nilai ungkapan itu apabila x = 5.", answer: "17", marks: 2 },
            { label: "(b)", prompt: "Selesaikan persamaan 4x − 3 = 17 untuk cari x.", answer: "5", marks: 2 },
          ],
          solution: [
            "(a) 4(5) − 3 = 20 − 3 = 17",
            "(b) 4x − 3 = 17 → 4x = 20 → x = 5",
          ],
        },
        {
          id: "B4",
          topic: "Bab 8 · Garis dan Sudut",
          isKbat: false,
          context: "Dua garis lurus bersilang membentuk sudut 72° pada satu bahagian.",
          parts: [
            { label: "(a)", prompt: "Cari sudut bertentang bucu dengan 72° itu.", answer: "72", marks: 2 },
            { label: "(b)", prompt: "Cari sudut bersebelahan dengan 72° itu.", answer: "108", marks: 2 },
          ],
          solution: [
            "(a) Sudut bertentang bucu SENTIASA sama besar = 72°",
            "(b) Sudut bersebelahan bersuplemen (jumlah 180°): 180° − 72° = 108°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 10 · Perimeter dan Luas",
          isKbat: false,
          context: "Sebuah taman berbentuk segiempat tepat mempunyai perimeter 36m. Lebarnya ialah 8m.",
          parts: [
            { label: "(a)", prompt: "Cari panjang taman itu.", answer: "10", marks: 2 },
            { label: "(b)", prompt: "Cari luas taman itu (m²).", answer: "80", marks: 2 },
          ],
          solution: [
            "Perimeter = 2(p + l): 36 = 2(p + 8) → 18 = p + 8 → p = 10m",
            "Luas = p × l = 10 × 8 = 80m²",
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
            "Ahmad ada wang poket RM120. Dia membelanjakan 2/5 daripada wangnya untuk membeli buku, dan RM30 lagi untuk membeli pen.",
          parts: [
            { label: "(a)", prompt: "Berapakah baki wang Ahmad selepas kedua-dua perbelanjaan itu?", answer: "42", marks: 5 },
            { label: "(b)", prompt: "Berapa peratuskah baki itu daripada wang asal RM120? (taip nombor sahaja)", answer: "35", marks: 5 },
          ],
          solution: [
            "Wang untuk buku = 2/5 × 120 = RM48",
            "Jumlah dibelanjakan = 48 + 30 = RM78",
            "Baki = 120 − 78 = RM42",
            "Peratus baki = 42 ÷ 120 × 100% = 35%",
          ],
        },
        {
          id: "C2",
          topic: "Bab 4 dan 5 · Nisbah & Ungkapan Algebra (KBAT)",
          isKbat: true,
          context: "Nisbah bilangan buku Ali kepada bilangan buku Bakar ialah 3:5. Jumlah buku mereka berdua ialah 96.",
          parts: [
            { label: "(a)", prompt: "Cari bilangan buku Ali.", answer: "36", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Jika Ali membeli 4 buku lagi, cari nisbah baharu bilangan buku Ali kepada Bakar dalam bentuk termudah. Taip dalam format a:b (cth 2:3).",
              answer: "2:3",
              marks: 6,
            },
          ],
          solution: [
            "Jumlah bahagian = 3 + 5 = 8 bahagian",
            "Satu bahagian = 96 ÷ 8 = 12",
            "Buku Ali = 3 × 12 = 36, Buku Bakar = 5 × 12 = 60",
            "Ali membeli 4 lagi: 36 + 4 = 40",
            "Nisbah baharu = 40:60 = 2:3 (bahagi dengan 20)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 6 dan 7 · Persamaan & Ketaksamaan Linear (KBAT)",
          isKbat: true,
          context: "Sebuah teksi mengenakan caj permulaan RM3 dan RM2 bagi setiap kilometer perjalanan.",
          parts: [
            { label: "(a)", prompt: "Cari tambang bagi perjalanan sejauh 8km.", answer: "19", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika Maria hanya mempunyai RM25, apakah jarak MAKSIMUM (kilometer penuh) yang dia mampu naik teksi itu?",
              answer: "11",
              marks: 6,
            },
          ],
          solution: [
            "(a) Tambang = 3 + 2(8) = 3 + 16 = RM19",
            "(b) 3 + 2k ≤ 25 → 2k ≤ 22 → k ≤ 11",
            "Jarak maksimum yang mampu dibayar Maria ialah 11km",
          ],
        },
        {
          id: "C4",
          topic: "Bab 8 dan 9 · Sudut & Poligon (KBAT)",
          isKbat: true,
          context:
            "Bumbung sebuah rumah berbentuk segi tiga sama kaki. Dua sudut tapaknya sama besar, dan sudut kemuncaknya 30° lebih besar daripada setiap sudut tapak.",
          parts: [
            { label: "(a)", prompt: "Cari saiz setiap sudut tapak.", answer: "50", marks: 6 },
            { label: "(b)", prompt: "Cari saiz sudut kemuncak.", answer: "80", marks: 4 },
          ],
          solution: [
            "Biar sudut tapak = x. Sudut kemuncak = x + 30",
            "Jumlah sudut segi tiga = 180°: x + x + (x + 30) = 180",
            "3x + 30 = 180 → 3x = 150 → x = 50°",
            "Sudut kemuncak = 50 + 30 = 80°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 10 dan 13 · Perimeter, Luas & Pythagoras (KBAT)",
          isKbat: true,
          context: "Sebidang tanah berbentuk segi tiga bersudut tegak dengan dua sisi pendek 9m dan 12m.",
          parts: [
            { label: "(a)", prompt: "Cari panjang sisi ketiga (hipotenus) tanah itu.", answer: "15", marks: 4 },
            { label: "(b)", prompt: "Cari perimeter sebidang tanah itu.", answer: "36", marks: 3 },
            { label: "(c)", prompt: "Cari luas sebidang tanah itu (m²).", answer: "54", marks: 3 },
          ],
          solution: [
            "(a) c² = 9² + 12² = 81 + 144 = 225 → c = √225 = 15m",
            "(b) Perimeter = 9 + 12 + 15 = 36m",
            "(c) Luas = ½ × 9 × 12 = 54m²",
          ],
        },
        {
          id: "C6",
          topic: "Bab 11 dan 12 · Set & Pengendalian Data (KBAT)",
          isKbat: true,
          context:
            "Dalam satu tinjauan terhadap 40 orang murid, set semesta ξ ialah kesemua 40 murid. Set A ialah murid yang suka Matematik, dengan n(A) = 28.",
          parts: [
            { label: "(a)", prompt: "Cari n(A′), iaitu bilangan murid yang TIDAK suka Matematik.", answer: "12", marks: 5 },
            {
              label: "(b)",
              prompt:
                "Jika bilangan murid LELAKI dalam A′ ialah 7 orang, dan baki A′ adalah murid perempuan, berapakah bilangan murid PEREMPUAN dalam A′?",
              answer: "5",
              marks: 5,
            },
          ],
          solution: [
            "n(A′) = n(ξ) − n(A) = 40 − 28 = 12",
            "Murid perempuan dalam A′ = 12 − 7 = 5",
          ],
        },
      ],
    },
  ],
};

