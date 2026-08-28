// Kertas Ujian UASA Percubaan #3 — Matematik Tingkatan 2.
// Format sama seperti Set 1 & Set 2 (Bahagian A/B/C, 100 markah, 31 soalan,
// 120 minit, merentasi semua 13 bab, Bahagian C KBAT) dengan soalan BAHARU.
export const form2UasaPaper3 = {
  id: "form2-uasa-3",
  formId: "form2",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 3)",
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
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 2, 6, 10, 14, ... Cari sebutan seterusnya.", choices: ["18", "16", "20", "17"], answer: "18" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-15 bagi jujukan 1, 4, 7, 10, ...", choices: ["43", "46", "40", "42"], answer: "43" },
        { id: "A3", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 5(4x − 3).", choices: ["20x − 15", "20x − 3", "9x − 15", "20x − 8"], answer: "20x − 15" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 6x + 9 ialah?", choices: ["3(2x + 3)", "2(3x + 9)", "3(2x + 9)", "6(x + 9)"], answer: "3(2x + 3)" },
        { id: "A5", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi s = ut + ½at². Jika u = 2, a = 6, t = 2, cari s.", choices: ["16", "12", "20", "8"], answer: "16" },
        { id: "A6", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah oktagon (8 sisi) ialah?", choices: ["1080°", "900°", "1260°", "720°"], answer: "1080°" },
        { id: "A7", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 12cm ialah?", choices: ["24cm", "12cm", "6cm", "48cm"], answer: "24cm" },
        { id: "A8", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Lilitan bulatan berjejari 35cm (guna π = 22/7) ialah?", choices: ["220cm", "110cm", "154cm", "385cm"], answer: "220cm" },
        { id: "A9", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kuboid dengan panjang 7cm, lebar 3cm, tinggi 2cm ialah?", choices: ["42cm³", "12cm³", "21cm³", "84cm³"], answer: "42cm³" },
        { id: "A10", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan tepi bagi sebuah kubus ialah?", choices: ["12", "8", "6", "10"], answer: "12" },
        { id: "A11", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (2, 2) dan (5, 6) ialah?", choices: ["5", "4", "7", "3"], answer: "5" },
        { id: "A12", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (1, 3) dan (7, 9) ialah?", choices: ["(4, 6)", "(4, 3)", "(8, 12)", "(3, 6)"], answer: "(4, 6)" },
        { id: "A13", topic: "Bab 8 · Graf Fungsi", marks: 1, prompt: "Diberi f(x) = 5x + 1, cari f(2).", choices: ["11", "10", "12", "9"], answer: "11" },
        { id: "A14", topic: "Bab 9 · Laju dan Pecutan", marks: 1, prompt: "Sebuah motosikal menempuh 150km dalam 3 jam. Lajunya (km/j) ialah?", choices: ["50", "150", "45", "53"], answer: "50" },
        { id: "A15", topic: "Bab 10 · Kecerunan Garis Lurus", marks: 1, prompt: "Kecerunan garis lurus yang melalui (2, 5) dan (5, 14) ialah?", choices: ["3", "9", "2", "6"], answer: "3" },
        { id: "A16", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Translasi (4, −1) memetakan titik (2, 3) kepada?", choices: ["(6, 2)", "(2, 3)", "(−2, 4)", "(6, −1)"], answer: "(6, 2)" },
        { id: "A17", topic: "Bab 11 · Transformasi Isometri", marks: 1, prompt: "Peringkat simetri putaran bagi sebuah pentagon sekata (5 sisi) ialah?", choices: ["5", "1", "10", "2"], answer: "5" },
        { id: "A18", topic: "Bab 12 · Sukatan Kecenderungan Memusat", marks: 1, prompt: "Min bagi set data 3, 5, 7, 9, 11 ialah?", choices: ["7", "9", "5", "6"], answer: "7" },
        { id: "A19", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Sebiji dadu dibaling. Apakah kebarangkalian mendapat nombor lebih besar daripada 4?", choices: ["0.33", "0.5", "0.67", "0.17"], answer: "0.33" },
        { id: "A20", topic: "Bab 13 · Kebarangkalian Mudah", marks: 1, prompt: "Sebuah kotak berisi 20 kad bernombor 1 hingga 20. Apakah kebarangkalian kad dipilih bergandaan 4?", choices: ["0.25", "0.2", "0.3", "0.4"], answer: "0.25" },
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
          context: "Jujukan nombor ialah 7, 13, 19, 25, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "6", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-7 bagi jujukan itu.", answer: "43", marks: 2 },
          ],
          solution: [
            "d = 13 − 7 = 6",
            "T7 = 7 + (7 − 1)(6) = 7 + 36 = 43",
          ],
        },
        {
          id: "B2",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus luas trapezium A = ½(a + b)h, dengan a = 5cm, b = 9cm, h = 6cm.",
          parts: [
            { label: "(a)", prompt: "Cari luas trapezium itu (cm²).", answer: "42", marks: 2 },
            { label: "(b)", prompt: "Jika luas itu berubah menjadi 54cm² dengan a = 5 dan h = 6 kekal, cari nilai b baharu.", answer: "13", marks: 2 },
          ],
          solution: [
            "A = ½(5 + 9)(6) = ½ × 14 × 6 = 42cm²",
            "54 = ½(5 + b)(6) → 54 = 3(5 + b) → 18 = 5 + b → b = 13",
          ],
        },
        {
          id: "B3",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 12 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "1800", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "150", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (12 − 2) × 180° = 1800°",
            "Setiap sudut = 1800° ÷ 12 = 150°",
          ],
        },
        {
          id: "B4",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 7cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "44", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "154", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 7 = 44cm",
            "Luas = 22/7 × 7 × 7 = 154cm²",
          ],
        },
        {
          id: "B5",
          topic: "Bab 6 · Bentuk Geometri Tiga Dimensi",
          isKbat: false,
          context: "Sebuah kotak berbentuk kuboid dengan panjang 8cm, lebar 5cm, dan tinggi 3cm.",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kuboid itu (cm³).", answer: "120", marks: 2 },
            { label: "(b)", prompt: "Cari luas permukaan kuboid itu (cm²).", answer: "158", marks: 2 },
          ],
          solution: [
            "Isi padu = 8 × 5 × 3 = 120cm³",
            "Luas permukaan = 2(8×5 + 8×3 + 5×3) = 2(40 + 24 + 15) = 2 × 79 = 158cm²",
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
          context: "Titik A(1, 1) dan B(7, 9) menandakan dua hujung sebatang kabel elektrik.",
          parts: [
            { label: "(a)", prompt: "Cari jarak lurus AB (unit).", answer: "10", marks: 4 },
            { label: "(b)", prompt: "Cari nilai-x bagi titik tengah AB.", answer: "4", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi titik tengah AB.", answer: "5", marks: 3 },
          ],
          solution: [
            "AB = √((7−1)² + (9−1)²) = √(36 + 64) = √100 = 10",
            "Titik tengah = ((1+7)/2, (1+9)/2) = (4, 5)",
            "Jadi nilai-x = 4, nilai-y = 5",
          ],
        },
        {
          id: "C2",
          topic: "Bab 8 dan 9 · Graf Fungsi & Laju (KBAT)",
          isKbat: true,
          context: "Fungsi jarak sebuah kereta diberi oleh f(t) = 80t, dengan f ialah jarak (km) dan t ialah masa (jam).",
          parts: [
            { label: "(a)", prompt: "Cari jarak yang dilalui selepas 2 jam.", answer: "160", marks: 3 },
            { label: "(b)", prompt: "Berapakah laju kereta itu (km/j)?", answer: "80", marks: 3 },
            { label: "(c)", prompt: "Berapa lama masa (jam) diambil untuk menempuh 400km pada laju yang sama?", answer: "5", marks: 4 },
          ],
          solution: [
            "f(2) = 80 × 2 = 160km",
            "Pekali t dalam f(t) = 80t ialah laju = 80km/j",
            "Masa = 400 ÷ 80 = 5 jam",
          ],
        },
        {
          id: "C3",
          topic: "Bab 10 · Kecerunan Garis Lurus (KBAT)",
          isKbat: true,
          context: "Garis lurus AB melalui titik A(0, 1) dan B(4, 13).",
          parts: [
            { label: "(a)", prompt: "Cari kecerunan garis AB.", answer: "3", marks: 4 },
            {
              label: "(b)",
              prompt:
                "Garis itu diteruskan dan melalui titik C(6, y). Jika kecerunan antara B dan C sama dengan kecerunan AB, cari nilai y.",
              answer: "19",
              marks: 6,
            },
          ],
          solution: [
            "Kecerunan AB = (13 − 1) ÷ (4 − 0) = 12 ÷ 4 = 3",
            "(y − 13) ÷ (6 − 4) = 3 → y − 13 = 6 → y = 19",
          ],
        },
        {
          id: "C4",
          topic: "Bab 11 · Transformasi Isometri (KBAT)",
          isKbat: true,
          context:
            "Titik R(2, −3) dipantulkan pada paksi-x untuk mendapat imej R′, kemudian R′ ditranslasikan oleh vektor (−1, 4) untuk mendapat R″.",
          parts: [
            { label: "(a)", prompt: "Cari nilai-y bagi R′ (imej pantulan pada paksi-x).", answer: "3", marks: 3 },
            { label: "(b)", prompt: "Cari nilai-x bagi R″ (selepas translasi).", answer: "1", marks: 3 },
            { label: "(c)", prompt: "Cari nilai-y bagi R″ (selepas translasi).", answer: "7", marks: 4 },
          ],
          solution: [
            "Pantulan pada paksi-x: (2, −3) → (2, 3), jadi R′ = (2, 3)",
            "Translasi (−1, 4) pada R′: nilai-x = 2 + (−1) = 1",
            "Translasi (−1, 4) pada R′: nilai-y = 3 + 4 = 7",
          ],
        },
        {
          id: "C5",
          topic: "Bab 12 · Sukatan Kecenderungan Memusat (KBAT)",
          isKbat: true,
          context: "Markah ujian 6 orang murid ialah: 55, 60, 60, 70, 75, 100.",
          parts: [
            { label: "(a)", prompt: "Cari min markah keenam-enam murid itu.", answer: "70", marks: 4 },
            { label: "(b)", prompt: "Cari median markah itu.", answer: "65", marks: 3 },
            { label: "(c)", prompt: "Cari mod markah itu.", answer: "60", marks: 3 },
          ],
          solution: [
            "Jumlah = 55+60+60+70+75+100 = 420, Min = 420 ÷ 6 = 70",
            "Data tersusun, n=6 (genap), Median = (60 + 70) ÷ 2 = 65",
            "Mod = 60 (muncul 2 kali, paling kerap)",
          ],
        },
        {
          id: "C6",
          topic: "Bab 13 · Kebarangkalian Mudah (KBAT)",
          isKbat: true,
          context: "Dalam sebuah kotak terdapat 60 tiket bernombor 1 hingga 60. Satu tiket diambil secara rawak.",
          parts: [
            { label: "(a)", prompt: "Cari kebarangkalian nombor tiket itu adalah gandaan 10.", answer: "0.1", marks: 4 },
            { label: "(b)", prompt: "Cari kebarangkalian nombor tiket itu BUKAN gandaan 10 (guna peristiwa pelengkap).", answer: "0.9", marks: 3 },
            {
              label: "(c)",
              prompt: "Jika 300 tiket sedemikian dijual dengan corak yang sama, anggarkan berapa banyak tiket yang merupakan gandaan 10.",
              answer: "30",
              marks: 3,
            },
          ],
          solution: [
            "Gandaan 10 dalam 1–60: 10,20,30,40,50,60 = 6 nombor. P(A) = 6 ÷ 60 = 0.1",
            "P(A′) = 1 − 0.1 = 0.9",
            "Anggaran = 300 × 0.1 = 30 tiket",
          ],
        },
      ],
    },
  ],
};
