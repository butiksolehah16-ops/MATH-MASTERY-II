// Kertas Ujian UASA Percubaan #2 — Matematik Tingkatan 2.
// Format sama seperti Set 1 (Bahagian A/B/C, 100 markah, 31 soalan, 120 minit,
// merentasi semua 13 bab, Bahagian C KBAT) tetapi soalan BAHARU sepenuhnya
// supaya pelajar dapat latih tubi bercampur yang sebenar, bukan ulang soalan sama.
export const form2UasaPaper2 = {
  id: "form2-uasa-2",
  formId: "form2",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 2)",
  subtitle: "Matematik · Tingkatan 2",
  totalMarks: 100,
  durationMinutes: 120,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 5, 9, 13, 17, ... Cari sebutan seterusnya.", choices: ["21", "20", "18", "22"], answer: "21" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-12 bagi jujukan 4, 7, 10, 13, ...", choices: ["37", "40", "34", "39"], answer: "37" },
        { id: "A3", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 4(3x + 2).", choices: ["12x + 8", "12x + 2", "7x + 8", "12x + 6"], answer: "12x + 8" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 10x + 15 ialah?", choices: ["5(2x + 3)", "2(5x + 15)", "5(2x + 15)", "10(x + 15)"], answer: "5(2x + 3)" },
        { id: "A5", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi s = ut + ½at². Jika u = 0, a = 4, t = 3, cari s.", choices: ["18", "12", "24", "6"], answer: "18" },
        { id: "A6", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah heptagon (7 sisi) ialah?", choices: ["900°", "720°", "1080°", "540°"], answer: "900°" },
        { id: "A7", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 10cm ialah?", choices: ["20cm", "10cm", "5cm", "40cm"], answer: "20cm" },
        { id: "A8", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Luas bulatan berjejari 7cm (guna π = 22/7) ialah?", choices: ["154cm²", "44cm²", "308cm²", "77cm²"], answer: "154cm²" },
        { id: "A9", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kuboid dengan panjang 5cm, lebar 3cm, tinggi 2cm ialah?", choices: ["30cm³", "10cm³", "15cm³", "20cm³"], answer: "30cm³" },
        { id: "A10", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan bucu bagi sebuah kubus ialah?", choices: ["8", "6", "12", "4"], answer: "8" },
        { id: "A11", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (1, 1) dan (4, 5) ialah?", choices: ["5", "4", "7", "3"], answer: "5" },
        { id: "A12", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (0, 0) dan (8, 6) ialah?", choices: ["(4, 3)", "(4, 6)", "(8, 3)", "(2, 3)"], answer: "(4, 3)" },
        { id: "A13", topic: "Bab 8 · Graf Fungsi", marks: 1, prompt: "Diberi f(x) = 3x − 2, cari f(4).", choices: ["10", "12", "9", "14"], answer: "10" },
        { id: "A14", topic: "Bab 9 · Laju dan Pecutan", marks: 1, prompt: "Sebuah basikal menempuh 30km dalam 2 jam. Lajunya (km/j) ialah?", choices: ["15", "60", "32", "28"], answer: "15" },
        { id: "A15", topic: "Bab 10 · Kecerunan Garis Lurus", marks: 1, prompt: "Kecerunan garis lurus yang melalui (1, 1) dan (4, 7) ialah?", choices: ["2", "3", "6", "1"], answer: "2" },
        { id: "A16", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Translasi (−2, 3) memetakan titik (5, 1) kepada?", choices: ["(3, 4)", "(7, −2)", "(3, −2)", "(5, 1)"], answer: "(3, 4)" },
        { id: "A17", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Peringkat simetri putaran bagi sebuah segi tiga sama sisi ialah?", choices: ["3", "1", "6", "2"], answer: "3" },
        { id: "A18", topic: "Bab 12 · Sukatan Kecenderungan Memusat", marks: 1, prompt: "Median bagi set data 4, 6, 8, 10, 12 ialah?", choices: ["8", "6", "10", "9"], answer: "8" },
        { id: "A19", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Sebiji dadu dibaling. Apakah kebarangkalian mendapat nombor kurang daripada 4?", choices: ["0.5", "0.33", "0.67", "0.17"], answer: "0.5" },
        { id: "A20", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Sebuah beg berisi 5 biji bola bernombor 1 hingga 5. Apakah kebarangkalian bola dipilih bernombor ganjil?", choices: ["0.6", "0.4", "0.2", "0.8"], answer: "0.6" },
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
          topic: "Bab 1 dan 2 · Pola, Jujukan & Pemfaktoran",
          isKbat: false,
          context: "Jujukan nombor ialah 6, 11, 16, 21, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-9 bagi jujukan itu.", answer: "46", marks: 2 },
          ],
          solution: [
            "d = 11 − 6 = 5",
            "T9 = 6 + (9 − 1)(5) = 6 + 40 = 46",
          ],
        },
        {
          id: "B2",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus luas trapezium A = ½(a + b)h, dengan a = 8cm, b = 12cm, h = 5cm.",
          parts: [
            { label: "(a)", prompt: "Cari luas trapezium itu (cm²).", answer: "50", marks: 2 },
            { label: "(b)", prompt: "Jika luas itu berubah menjadi 60cm² dengan a = 8 dan h = 5 kekal, cari nilai b baharu.", answer: "16", marks: 2 },
          ],
          solution: [
            "A = ½(8 + 12)(5) = ½ × 20 × 5 = 50cm²",
            "60 = ½(8 + b)(5) → 60 = 2.5(8 + b) → 24 = 8 + b → b = 16",
          ],
        },
        {
          id: "B3",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 10 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "1440", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "144", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (10 − 2) × 180° = 1440°",
            "Setiap sudut = 1440° ÷ 10 = 144°",
          ],
        },
        {
          id: "B4",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 21cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "132", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "1386", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 21 = 132cm",
            "Luas = 22/7 × 21 × 21 = 1386cm²",
          ],
        },
        {
          id: "B5",
          topic: "Bab 6 · Bentuk Geometri Tiga Dimensi",
          isKbat: false,
          context: "Sebuah kotak berbentuk kuboid dengan panjang 6cm, lebar 5cm, dan tinggi 4cm.",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kuboid itu (cm³).", answer: "120", marks: 2 },
            { label: "(b)", prompt: "Cari luas permukaan kuboid itu (cm²).", answer: "148", marks: 2 },
          ],
          solution: [
            "Isi padu = 6 × 5 × 4 = 120cm³",
            "Luas permukaan = 2(6×5 + 6×4 + 5×4) = 2(30 + 24 + 20) = 2 × 74 = 148cm²",
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
          topic: "Bab 7 · Koordinat (KBAT)",
          isKbat: true,
          context: "Titik A(3, 2) dan B(9, 10) menandakan dua hujung sebatang jambatan.",
          parts: [
            { label: "(a)", prompt: "Cari jarak lurus AB (unit).", answer: "10", marks: 4 },
            { label: "(b)", prompt: "Cari nilai-x bagi titik tengah AB.", answer: "6", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi titik tengah AB.", answer: "6", marks: 3 },
          ],
          solution: [
            "AB = √((9−3)² + (10−2)²) = √(36 + 64) = √100 = 10",
            "Titik tengah = ((3+9)/2, (2+10)/2) = (6, 6)",
            "Jadi nilai-x = 6, nilai-y = 6",
          ],
        },
        {
          id: "C2",
          topic: "Bab 8 dan 9 · Graf Fungsi & Laju (KBAT)",
          isKbat: true,
          context: "Fungsi jarak sebuah bas diberi oleh f(t) = 45t, dengan f ialah jarak (km) dan t ialah masa (jam).",
          parts: [
            { label: "(a)", prompt: "Cari jarak yang dilalui selepas 4 jam.", answer: "180", marks: 3 },
            { label: "(b)", prompt: "Berapakah laju bas itu (km/j)?", answer: "45", marks: 3 },
            { label: "(c)", prompt: "Berapa lama masa (jam) diambil untuk menempuh 270km pada laju yang sama?", answer: "6", marks: 4 },
          ],
          solution: [
            "f(4) = 45 × 4 = 180km",
            "Pekali t dalam f(t) = 45t ialah laju = 45km/j",
            "Masa = 270 ÷ 45 = 6 jam",
          ],
        },
        {
          id: "C3",
          topic: "Bab 10 · Kecerunan Garis Lurus (KBAT)",
          isKbat: true,
          context: "Garis lurus AB melalui titik A(2, 3) dan B(6, 15).",
          parts: [
            { label: "(a)", prompt: "Cari kecerunan garis AB.", answer: "3", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Garis itu diteruskan dan melalui titik C(8, y). Jika kecerunan antara B dan C sama dengan kecerunan AB, cari nilai y.",
              answer: "21",
              marks: 6,
            },
          ],
          solution: [
            "Kecerunan AB = (15 − 3) ÷ (6 − 2) = 12 ÷ 4 = 3",
            "(y − 15) ÷ (8 − 6) = 3 → y − 15 = 6 → y = 21",
          ],
        },
        {
          id: "C4",
          topic: "Bab 11 · Transformasi Isometri (KBAT)",
          isKbat: true,
          context:
            "Titik Q(4, 6) dipantulkan pada paksi-y untuk mendapat imej Q′, kemudian Q′ ditranslasikan oleh vektor (3, −2) untuk mendapat Q″.",
          parts: [
            { label: "(a)", prompt: "Cari nilai-x bagi Q′ (imej pantulan pada paksi-y).", answer: "-4", marks: 3 },
            { label: "(b)", prompt: "Cari nilai-x bagi Q″ (selepas translasi).", answer: "-1", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi Q″ (selepas translasi).", answer: "4", marks: 4 },
          ],
          solution: [
            "Pantulan pada paksi-y: (4, 6) → (−4, 6), jadi Q′ = (−4, 6)",
            "Translasi (3, −2) pada Q′: nilai-x = −4 + 3 = −1",
            "Translasi (3, −2) pada Q′: nilai-y = 6 + (−2) = 4",
          ],
        },
        {
          id: "C5",
          topic: "Bab 12 · Sukatan Kecenderungan Memusat (KBAT)",
          isKbat: true,
          context: "Markah ujian 6 orang murid ialah: 40, 50, 50, 60, 70, 90.",
          parts: [
            { label: "(a)", prompt: "Cari min markah keenam-enam murid itu.", answer: "60", marks: 4 },
            { label: "(b)", prompt: "Cari median markah itu.", answer: "55", marks: 3 },
            { label: "(c)", prompt: "Cari mod markah itu.", answer: "50", marks: 3 },
          ],
          solution: [
            "Jumlah = 40+50+50+60+70+90 = 360, Min = 360 ÷ 6 = 60",
            "Data tersusun, n=6 (genap), Median = (50 + 60) ÷ 2 = 55",
            "Mod = 50 (muncul 2 kali, paling kerap)",
          ],
        },
        {
          id: "C6",
          topic: "Bab 13 · Kebarangkalian Mudah (KBAT)",
          isKbat: true,
          context: "Dalam sebuah kotak terdapat 40 tiket bernombor 1 hingga 40. Satu tiket diambil secara rawak.",
          parts: [
            { label: "(a)", prompt: "Cari kebarangkalian nombor tiket itu adalah gandaan 4.", answer: "0.25", marks: 4 },
            { label: "(b)", prompt: "Cari kebarangkalian nombor tiket itu BUKAN gandaan 4 (guna peristiwa pelengkap).", answer: "0.75", marks: 3 },
            {
              label: "(c)",
              prompt: "Jika 160 tiket sedemikian dijual dengan corak yang sama, anggarkan berapa banyak tiket yang merupakan gandaan 4.",
              answer: "40",
              marks: 3,
            },
          ],
          solution: [
            "Gandaan 4 dalam 1–40: 4,8,...,40 = 10 nombor. P(A) = 10 ÷ 40 = 0.25",
            "P(A′) = 1 − 0.25 = 0.75",
            "Anggaran = 160 × 0.25 = 40 tiket",
          ],
        },
      ],
    },
  ],
};
