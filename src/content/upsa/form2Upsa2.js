// Kertas Ujian UPSA Percubaan #2 — Matematik Tingkatan 2. Format sama seperti
// Set 1 (Bahagian A/B/C, 100 markah, 31 soalan, 90 minit, liputan Bab 1–7
// sahaja, Bahagian C KBAT) tetapi soalan BAHARU sepenuhnya.
export const form2UpsaPaper2 = {
  id: "form2-upsa-2",
  formId: "form2",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 2)",
  subtitle: "Matematik · Tingkatan 2 (Pertengahan Tahun · Bab 1–7)",
  totalMarks: 100,
  durationMinutes: 90,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 4, 9, 14, 19, ... Cari sebutan seterusnya.", choices: ["24", "23", "25", "22"], answer: "24" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-7 bagi jujukan 2, 6, 10, 14, ...", choices: ["26", "28", "24", "30"], answer: "26" },
        { id: "A3", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 20, 15, 10, 5, ... Cari sebutan seterusnya.", choices: ["0", "−5", "5", "2"], answer: "0" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 3(4x + 5).", choices: ["12x + 15", "12x + 5", "7x + 15", "12x + 8"], answer: "12x + 15" },
        { id: "A5", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 12x + 18 ialah?", choices: ["6(2x + 3)", "3(4x + 18)", "6(2x + 18)", "12(x + 18)"], answer: "6(2x + 3)" },
        { id: "A6", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Permudahkan 10x²/5x.", choices: ["2x", "2x²", "5x", "50x²"], answer: "2x" },
        { id: "A7", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi P = 2(l + w). Jika l = 6cm, w = 4cm, cari P.", choices: ["20", "24", "10", "40"], answer: "20" },
        { id: "A8", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi A = πr² (guna π = 22/7). Jika r = 14cm, cari A.", choices: ["616", "88", "308", "1232"], answer: "616" },
        { id: "A9", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah dekagon (10 sisi) ialah?", choices: ["1440°", "1260°", "1620°", "1080°"], answer: "1440°" },
        { id: "A10", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sudut peluaran bagi poligon sekata bersisi 6 ialah?", choices: ["60°", "45°", "72°", "90°"], answer: "60°" },
        { id: "A11", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sebuah poligon mempunyai jumlah sudut pedalaman 900°. Berapakah bilangan sisinya?", choices: ["7", "6", "8", "5"], answer: "7" },
        { id: "A12", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 6cm ialah?", choices: ["12cm", "6cm", "3cm", "24cm"], answer: "12cm" },
        { id: "A13", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Lilitan bulatan berjejari 14cm (guna π = 22/7) ialah?", choices: ["88cm", "44cm", "616cm", "308cm"], answer: "88cm" },
        { id: "A14", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Luas bulatan berjejari 21cm (guna π = 22/7) ialah?", choices: ["1386cm²", "132cm²", "693cm²", "2772cm²"], answer: "1386cm²" },
        { id: "A15", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kubus bersisi 6cm ialah?", choices: ["216cm³", "36cm³", "18cm³", "24cm³"], answer: "216cm³" },
        { id: "A16", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan muka bagi sebuah piramid tapak segi empat ialah?", choices: ["5", "4", "6", "8"], answer: "5" },
        { id: "A17", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Luas permukaan sebuah kubus bersisi 4cm ialah?", choices: ["96cm²", "64cm²", "16cm²", "48cm²"], answer: "96cm²" },
        { id: "A18", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (0, 0) dan (5, 12) ialah?", choices: ["13", "17", "12", "9"], answer: "13" },
        { id: "A19", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (4, 4) dan (10, 12) ialah?", choices: ["(7, 8)", "(6, 8)", "(7, 6)", "(14, 16)"], answer: "(7, 8)" },
        { id: "A20", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (2, 3) dan (5, 7) ialah?", choices: ["5", "4", "3", "7"], answer: "5" },
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
          topic: "Bab 1 · Pola dan Jujukan",
          isKbat: false,
          context: "Jujukan nombor ialah 9, 14, 19, 24, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-8 bagi jujukan itu.", answer: "44", marks: 2 },
          ],
          solution: [
            "d = 14 − 9 = 5",
            "T8 = 9 + (8 − 1)(5) = 9 + 35 = 44",
          ],
        },
        {
          id: "B2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra",
          isKbat: false,
          context: "Diberi ungkapan algebra 5(x + 2) − 2x.",
          parts: [
            { label: "(a)", prompt: "Permudahkan ungkapan itu, kemudian cari nilainya apabila x = 4.", answer: "22", marks: 2 },
            { label: "(b)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 34.", answer: "8", marks: 2 },
          ],
          solution: [
            "5(x + 2) − 2x = 5x + 10 − 2x = 3x + 10",
            "Apabila x = 4: 3(4) + 10 = 12 + 10 = 22",
            "3x + 10 = 34 → 3x = 24 → x = 8",
          ],
        },
        {
          id: "B3",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus perimeter segi empat tepat P = 2(l + w). Diberi P = 40cm, w = 8cm.",
          parts: [
            { label: "(a)", prompt: "Cari panjang l.", answer: "12", marks: 2 },
            { label: "(b)", prompt: "Jika lebar berubah kepada 10cm dengan P kekal 40cm, cari panjang l yang baharu.", answer: "10", marks: 2 },
          ],
          solution: [
            "40 = 2(l + 8) → 20 = l + 8 → l = 12",
            "40 = 2(l + 10) → 20 = l + 10 → l = 10",
          ],
        },
        {
          id: "B4",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 20 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "3240", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "162", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (20 − 2) × 180° = 3240°",
            "Setiap sudut = 3240° ÷ 20 = 162°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 35cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "220", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "3850", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 35 = 220cm",
            "Luas = 22/7 × 35 × 35 = 3850cm²",
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
          topic: "Bab 1 · Pola dan Jujukan (KBAT)",
          isKbat: true,
          context: "Jujukan aritmetik ialah 5, 12, 19, 26, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya bagi jujukan itu.", answer: "7", marks: 3 },
            { label: "(b)", prompt: "Cari sebutan ke-15 bagi jujukan itu.", answer: "103", marks: 4 },
            { label: "(c)", prompt: "Sebutan yang ke-berapakah bernilai 124?", answer: "18", marks: 3 },
          ],
          solution: [
            "d = 12 − 5 = 7",
            "T15 = 5 + (15 − 1)(7) = 5 + 98 = 103",
            "5 + (n − 1)(7) = 124 → (n − 1)(7) = 119 → n − 1 = 17 → n = 18",
          ],
        },
        {
          id: "C2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra (KBAT)",
          isKbat: true,
          context: "Luas sebuah segi empat tepat diberi oleh ungkapan (x + 5)(x + 1) cm², dengan panjang = (x + 5) dan lebar = (x + 1).",
          parts: [
            { label: "(a)", prompt: "Jika x = 3, cari luas segi empat tepat itu (cm²).", answer: "32", marks: 3 },
            { label: "(b)", prompt: "Cari panjang segi empat tepat itu (cm) apabila x = 3.", answer: "8", marks: 3 },
            { label: "(c)", prompt: "Cari lebar segi empat tepat itu (cm) apabila x = 3.", answer: "4", marks: 4 },
          ],
          solution: [
            "Luas = (x+5)(x+1), pada x=3: (3+5)(3+1) = 8 × 4 = 32cm²",
            "Panjang = x + 5 = 3 + 5 = 8cm",
            "Lebar = x + 1 = 3 + 1 = 4cm",
          ],
        },
        {
          id: "C3",
          topic: "Bab 3 · Rumus Algebra (KBAT)",
          isKbat: true,
          context:
            "Rumus kelajuan purata dua bahagian perjalanan ialah v = (u + w) ÷ 2. Seorang penunggang basikal menunggang satu bahagian perjalanan pada 50km/j (u) dan bahagian lagi pada 70km/j (w).",
          parts: [
            { label: "(a)", prompt: "Cari kelajuan purata v (km/j).", answer: "60", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika kelajuan bahagian kedua berubah supaya kelajuan purata v menjadi 65km/j (u = 50 kekal), cari kelajuan bahagian kedua yang baharu (km/j).",
              answer: "80",
              marks: 6,
            },
          ],
          solution: [
            "v = (50 + 70) ÷ 2 = 60km/j",
            "65 = (50 + w) ÷ 2 → 130 = 50 + w → w = 80",
          ],
        },
        {
          id: "C4",
          topic: "Bab 4 · Poligon (KBAT)",
          isKbat: true,
          context: "Sebuah poligon sekata mempunyai sudut pedalaman yang 5 kali lebih besar daripada sudut peluarannya.",
          parts: [
            { label: "(a)", prompt: "Cari saiz sudut peluaran poligon itu.", answer: "30", marks: 4 },
            { label: "(b)", prompt: "Cari bilangan sisi poligon itu.", answer: "12", marks: 3 },
            { label: "(c)", prompt: "Cari jumlah sudut pedalaman poligon itu.", answer: "1800", marks: 3 },
          ],
          solution: [
            "Biar sudut peluaran = x, sudut pedalaman = 5x. x + 5x = 180° → 6x = 180° → x = 30°",
            "Bilangan sisi = 360° ÷ 30° = 12",
            "Jumlah sudut pedalaman = (12 − 2) × 180° = 1800°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 5 · Bulatan (KBAT)",
          isKbat: true,
          context: "Sebuah taman berbentuk bulatan mempunyai luas 1386m². (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari jejari taman itu (m).", answer: "21", marks: 4 },
            { label: "(b)", prompt: "Cari lilitan taman itu (m).", answer: "132", marks: 3 },
            { label: "(c)", prompt: "Jika kos memagar taman itu ialah RM6 semeter, cari jumlah kos memagar keseluruhan taman itu (RM).", answer: "792", marks: 3 },
          ],
          solution: [
            "1386 = 22/7 × r² → r² = 1386 × 7 ÷ 22 = 441 → r = 21m",
            "Lilitan = 2 × 22/7 × 21 = 132m",
            "Kos = 132 × 6 = RM792",
          ],
        },
        {
          id: "C6",
          topic: "Bab 6 dan 7 · Bentuk Geometri Tiga Dimensi & Koordinat (KBAT)",
          isKbat: true,
          context:
            "Sebuah kuboid mempunyai panjang 8cm, lebar 6cm, dan tinggi 5cm. Kedudukan dua penjuru tapaknya pada suatu peta grid ialah (3, 1) dan (11, 7).",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kuboid itu (cm³).", answer: "240", marks: 3 },
            { label: "(b)", prompt: "Cari luas permukaan kuboid itu (cm²).", answer: "236", marks: 3 },
            { label: "(c)", prompt: "Cari jarak antara dua penjuru tapak itu pada peta grid (unit).", answer: "10", marks: 4 },
          ],
          solution: [
            "Isi padu = 8 × 6 × 5 = 240cm³",
            "Luas permukaan = 2(8×6 + 8×5 + 6×5) = 2(48 + 40 + 30) = 2 × 118 = 236cm²",
            "Jarak = √((11−3)² + (7−1)²) = √(64 + 36) = √100 = 10",
          ],
        },
      ],
    },
  ],
};
