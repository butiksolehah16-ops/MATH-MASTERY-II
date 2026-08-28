// Kertas Ujian UASA Percubaan #1 — Matematik Tingkatan 2.
// Format ikut struktur sebenar UASA: Bahagian A (Objektif, 20 soalan x 1
// markah), Bahagian B (Struktur pendek, 5 soalan x 4 markah), Bahagian C
// (Struktur lanjutan/KBAT, 6 soalan x ~10 markah). Jumlah 100 markah, 31
// soalan, 120 minit. Soalan merentasi SEMUA 13 bab Tingkatan 2 supaya benar-
// benar "ulangkaji bercampur", dan Bahagian C sengaja direka sebagai soalan
// KBAT — konteks dunia sebenar, gabung >1 bab, penaakulan berbilang langkah.
export const form2UasaPaper1 = {
  id: "form2-uasa-1",
  formId: "form2",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 1)",
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
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 3, 7, 11, 15, ... Cari sebutan seterusnya.", choices: ["19", "17", "21", "18"], answer: "19" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-10 bagi jujukan 2, 5, 8, 11, ...", choices: ["29", "32", "27", "30"], answer: "29" },
        { id: "A3", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 3(2x + 5).", choices: ["6x + 15", "6x + 5", "5x + 15", "6x + 8"], answer: "6x + 15" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 8x + 12 ialah?", choices: ["4(2x + 3)", "2(4x + 6)", "4(2x + 12)", "8(x + 12)"], answer: "4(2x + 3)" },
        { id: "A5", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi v = u + at. Jika u = 5, a = 2, t = 3, cari v.", choices: ["11", "10", "16", "8"], answer: "11" },
        { id: "A6", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah heksagon (6 sisi) ialah?", choices: ["720°", "540°", "900°", "360°"], answer: "720°" },
        { id: "A7", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 7cm ialah?", choices: ["14cm", "7cm", "21cm", "49cm"], answer: "14cm" },
        { id: "A8", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Lilitan bulatan berjejari 7cm (guna π = 22/7) ialah?", choices: ["44cm", "22cm", "154cm", "88cm"], answer: "44cm" },
        { id: "A9", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kubus bersisi 4cm ialah?", choices: ["64cm³", "16cm³", "48cm³", "12cm³"], answer: "64cm³" },
        { id: "A10", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan muka bagi sebuah kuboid ialah?", choices: ["6", "8", "4", "12"], answer: "6" },
        { id: "A11", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (0, 0) dan (3, 4) ialah?", choices: ["5", "7", "4", "3"], answer: "5" },
        { id: "A12", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (2, 4) dan (6, 8) ialah?", choices: ["(4, 6)", "(4, 4)", "(8, 12)", "(2, 6)"], answer: "(4, 6)" },
        { id: "A13", topic: "Bab 8 · Graf Fungsi", marks: 1, prompt: "Diberi f(x) = 2x + 1, cari f(3).", choices: ["7", "6", "8", "5"], answer: "7" },
        { id: "A14", topic: "Bab 9 · Laju dan Pecutan", marks: 1, prompt: "Sebuah kereta menempuh 100km dalam 2 jam. Lajunya (km/j) ialah?", choices: ["50", "200", "100", "25"], answer: "50" },
        { id: "A15", topic: "Bab 10 · Kecerunan Garis Lurus", marks: 1, prompt: "Kecerunan garis lurus yang melalui (0, 0) dan (2, 6) ialah?", choices: ["3", "6", "2", "12"], answer: "3" },
        { id: "A16", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Translasi (3, 2) memetakan titik (1, 1) kepada?", choices: ["(4, 3)", "(3, 2)", "(1, 1)", "(2, 4)"], answer: "(4, 3)" },
        { id: "A17", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Peringkat simetri putaran bagi sebuah segi empat sama ialah?", choices: ["4", "2", "1", "8"], answer: "4" },
        { id: "A18", topic: "Bab 12 · Sukatan Kecenderungan Memusat", marks: 1, prompt: "Mod bagi set data 2, 3, 3, 5, 7 ialah?", choices: ["3", "5", "7", "4"], answer: "3" },
        { id: "A19", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Sebiji dadu dibaling. Apakah kebarangkalian mendapat nombor genap?", choices: ["0.5", "0.3", "0.6", "1"], answer: "0.5" },
        { id: "A20", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Kad bernombor 1 hingga 10 diambil secara rawak. Apakah kebarangkalian mendapat gandaan 3?", choices: ["0.3", "0.5", "0.2", "0.1"], answer: "0.3" },
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
          context: "Jujukan nombor ialah 4, 9, 14, 19, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-8 bagi jujukan itu.", answer: "39", marks: 2 },
          ],
          solution: [
            "d = 9 − 4 = 5",
            "Tn = a + (n − 1)d",
            "T8 = 4 + (8 − 1)(5) = 4 + 35 = 39",
          ],
        },
        {
          id: "B2",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus luas trapezium A = ½(a + b)h, dengan a = 6cm, b = 10cm, h = 4cm.",
          parts: [
            { label: "(a)", prompt: "Cari luas trapezium itu (cm²).", answer: "32", marks: 2 },
            { label: "(b)", prompt: "Jika luas itu berubah menjadi 40cm² dengan a = 6 dan h = 4 kekal, cari nilai b baharu.", answer: "14", marks: 2 },
          ],
          solution: [
            "A = ½(6 + 10)(4) = ½ × 16 × 4 = 32cm²",
            "40 = ½(6 + b)(4) → 40 = 2(6 + b) → 20 = 6 + b → b = 14",
          ],
        },
        {
          id: "B3",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 9 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "1260", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "140", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (9 − 2) × 180° = 1260°",
            "Setiap sudut = 1260° ÷ 9 = 140°",
          ],
        },
        {
          id: "B4",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 14cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "88", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "616", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 14 = 88cm",
            "Luas = 22/7 × 14 × 14 = 616cm²",
          ],
        },
        {
          id: "B5",
          topic: "Bab 6 · Bentuk Geometri Tiga Dimensi",
          isKbat: false,
          context: "Sebuah kotak berbentuk kuboid dengan panjang 5cm, lebar 4cm, dan tinggi 3cm.",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kuboid itu (cm³).", answer: "60", marks: 2 },
            { label: "(b)", prompt: "Cari luas permukaan kuboid itu (cm²).", answer: "94", marks: 2 },
          ],
          solution: [
            "Isi padu = 5 × 4 × 3 = 60cm³",
            "Luas permukaan = 2(5×4 + 5×3 + 4×3) = 2(20 + 15 + 12) = 2 × 47 = 94cm²",
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
          context: "Titik A(2, 3) dan B(8, 11) menandakan dua hujung sebatang paip air.",
          parts: [
            { label: "(a)", prompt: "Cari jarak lurus AB (unit).", answer: "10", marks: 4 },
            { label: "(b)", prompt: "Cari nilai-x bagi titik tengah AB.", answer: "5", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi titik tengah AB.", answer: "7", marks: 3 },
          ],
          solution: [
            "AB = √((8−2)² + (11−3)²) = √(36 + 64) = √100 = 10",
            "Titik tengah = ((2+8)/2, (3+11)/2) = (5, 7)",
            "Jadi nilai-x = 5, nilai-y = 7",
          ],
        },
        {
          id: "C2",
          topic: "Bab 8 dan 9 · Graf Fungsi & Laju (KBAT)",
          isKbat: true,
          context: "Fungsi jarak sebuah kereta diberi oleh f(t) = 60t, dengan f ialah jarak (km) dan t ialah masa (jam).",
          parts: [
            { label: "(a)", prompt: "Cari jarak yang dilalui selepas 3 jam.", answer: "180", marks: 3 },
            { label: "(b)", prompt: "Berapakah laju kereta itu (km/j)?", answer: "60", marks: 3 },
            { label: "(c)", prompt: "Berapa lama masa (jam) diambil untuk menempuh 300km pada laju yang sama?", answer: "5", marks: 4 },
          ],
          solution: [
            "f(3) = 60 × 3 = 180km",
            "Pekali t dalam f(t) = 60t ialah laju = 60km/j",
            "Masa = 300 ÷ 60 = 5 jam",
          ],
        },
        {
          id: "C3",
          topic: "Bab 10 · Kecerunan Garis Lurus (KBAT)",
          isKbat: true,
          context: "Garis lurus AB melalui titik A(1, 2) dan B(5, 14).",
          parts: [
            { label: "(a)", prompt: "Cari kecerunan garis AB.", answer: "3", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Garis itu diteruskan dan melalui titik C(7, y). Jika kecerunan antara B dan C sama dengan kecerunan AB, cari nilai y.",
              answer: "20",
              marks: 6,
            },
          ],
          solution: [
            "Kecerunan AB = (14 − 2) ÷ (5 − 1) = 12 ÷ 4 = 3",
            "(y − 14) ÷ (7 − 5) = 3 → y − 14 = 6 → y = 20",
          ],
        },
        {
          id: "C4",
          topic: "Bab 11 · Transformasi Isometri (KBAT)",
          isKbat: true,
          context:
            "Titik P(3, 5) dipantulkan pada paksi-x untuk mendapat imej P′, kemudian P′ ditranslasikan oleh vektor (2, −1) untuk mendapat P″.",
          parts: [
            { label: "(a)", prompt: "Cari nilai-y bagi P′ (imej pantulan pada paksi-x).", answer: "-5", marks: 3 },
            { label: "(b)", prompt: "Cari nilai-x bagi P″ (selepas translasi).", answer: "5", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi P″ (selepas translasi).", answer: "-6", marks: 4 },
          ],
          solution: [
            "Pantulan pada paksi-x: (3, 5) → (3, −5), jadi P′ = (3, −5)",
            "Translasi (2, −1) pada P′: nilai-x = 3 + 2 = 5",
            "Translasi (2, −1) pada P′: nilai-y = −5 + (−1) = −6",
          ],
        },
        {
          id: "C5",
          topic: "Bab 12 · Sukatan Kecenderungan Memusat (KBAT)",
          isKbat: true,
          context: "Markah ujian 6 orang murid ialah: 45, 60, 60, 72, 78, 90.",
          parts: [
            { label: "(a)", prompt: "Cari min markah keenam-enam murid itu.", answer: "67.5", marks: 4 },
            { label: "(b)", prompt: "Cari median markah itu.", answer: "66", marks: 3 },
            { label: "(c)", prompt: "Cari mod markah itu.", answer: "60", marks: 3 },
          ],
          solution: [
            "Jumlah = 45+60+60+72+78+90 = 405, Min = 405 ÷ 6 = 67.5",
            "Data tersusun, n=6 (genap), Median = (60 + 72) ÷ 2 = 66",
            "Mod = 60 (muncul 2 kali, paling kerap)",
          ],
        },
        {
          id: "C6",
          topic: "Bab 13 · Kebarangkalian Mudah (KBAT)",
          isKbat: true,
          context: "Dalam sebuah kotak terdapat 50 tiket bernombor 1 hingga 50. Satu tiket diambil secara rawak.",
          parts: [
            { label: "(a)", prompt: "Cari kebarangkalian nombor tiket itu adalah gandaan 5.", answer: "0.2", marks: 4 },
            { label: "(b)", prompt: "Cari kebarangkalian nombor tiket itu BUKAN gandaan 5 (guna peristiwa pelengkap).", answer: "0.8", marks: 3 },
            {
              label: "(c)",
              prompt: "Jika 200 tiket sedemikian dijual dengan corak yang sama, anggarkan berapa banyak tiket yang merupakan gandaan 5.",
              answer: "40",
              marks: 3,
            },
          ],
          solution: [
            "Gandaan 5 dalam 1–50: 5,10,15,...,50 = 10 nombor. P(A) = 10 ÷ 50 = 0.2",
            "P(A′) = 1 − 0.2 = 0.8",
            "Anggaran = 200 × 0.2 = 40 tiket",
          ],
        },
      ],
    },
  ],
};
