// Kertas Ujian UPSA Percubaan #3 — Matematik Tingkatan 2. Format sama seperti
// Set 1 & Set 2 (Bahagian A/B/C, 100 markah, 31 soalan, 90 minit, liputan
// Bab 1–7 sahaja, Bahagian C KBAT) dengan soalan BAHARU.
export const form2UpsaPaper3 = {
  id: "form2-upsa-3",
  formId: "form2",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 3)",
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
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 6, 11, 16, 21, ... Cari sebutan seterusnya.", choices: ["26", "25", "27", "24"], answer: "26" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-9 bagi jujukan 1, 5, 9, 13, ...", choices: ["33", "37", "29", "36"], answer: "33" },
        { id: "A3", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 25, 20, 15, 10, ... Cari sebutan seterusnya.", choices: ["5", "0", "10", "8"], answer: "5" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 6(2x + 1).", choices: ["12x + 6", "12x + 1", "8x + 6", "12x + 7"], answer: "12x + 6" },
        { id: "A5", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 15x + 20 ialah?", choices: ["5(3x + 4)", "5(3x + 20)", "3(5x + 4)", "15(x + 20)"], answer: "5(3x + 4)" },
        { id: "A6", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Permudahkan 12x²/4x.", choices: ["3x", "3x²", "8x", "48x²"], answer: "3x" },
        { id: "A7", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi P = 2(l + w). Jika l = 9cm, w = 5cm, cari P.", choices: ["28", "14", "45", "18"], answer: "28" },
        { id: "A8", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi A = πr² (guna π = 22/7). Jika r = 21cm, cari A.", choices: ["1386", "132", "693", "2772"], answer: "1386" },
        { id: "A9", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah nonagon (9 sisi) ialah?", choices: ["1260°", "1080°", "1440°", "900°"], answer: "1260°" },
        { id: "A10", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sudut peluaran bagi poligon sekata bersisi 9 ialah?", choices: ["40°", "45°", "36°", "60°"], answer: "40°" },
        { id: "A11", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sebuah poligon mempunyai jumlah sudut pedalaman 1440°. Berapakah bilangan sisinya?", choices: ["10", "8", "9", "12"], answer: "10" },
        { id: "A12", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 11cm ialah?", choices: ["22cm", "11cm", "5.5cm", "44cm"], answer: "22cm" },
        { id: "A13", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Lilitan bulatan berjejari 21cm (guna π = 22/7) ialah?", choices: ["132cm", "66cm", "1386cm", "264cm"], answer: "132cm" },
        { id: "A14", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Luas bulatan berjejari 7cm (guna π = 22/7) ialah?", choices: ["154cm²", "44cm²", "308cm²", "77cm²"], answer: "154cm²" },
        { id: "A15", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kuboid dengan panjang 4cm, lebar 3cm, tinggi 2cm ialah?", choices: ["24cm³", "9cm³", "12cm³", "18cm³"], answer: "24cm³" },
        { id: "A16", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan bucu bagi sebuah kuboid ialah?", choices: ["8", "6", "12", "4"], answer: "8" },
        { id: "A17", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Luas permukaan sebuah kubus bersisi 5cm ialah?", choices: ["150cm²", "25cm²", "125cm²", "100cm²"], answer: "150cm²" },
        { id: "A18", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (0, 0) dan (9, 12) ialah?", choices: ["15", "21", "12", "9"], answer: "15" },
        { id: "A19", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (3, 5) dan (9, 11) ialah?", choices: ["(6, 8)", "(6, 6)", "(5, 8)", "(12, 16)"], answer: "(6, 8)" },
        { id: "A20", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (0, 0) dan (8, 6) ialah?", choices: ["10", "14", "8", "6"], answer: "10" },
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
          context: "Jujukan nombor ialah 8, 13, 18, 23, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-12 bagi jujukan itu.", answer: "63", marks: 2 },
          ],
          solution: [
            "d = 13 − 8 = 5",
            "T12 = 8 + (12 − 1)(5) = 8 + 55 = 63",
          ],
        },
        {
          id: "B2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra",
          isKbat: false,
          context: "Diberi ungkapan algebra 6(x + 1) − 3x.",
          parts: [
            { label: "(a)", prompt: "Permudahkan ungkapan itu, kemudian cari nilainya apabila x = 6.", answer: "24", marks: 2 },
            { label: "(b)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 36.", answer: "10", marks: 2 },
          ],
          solution: [
            "6(x + 1) − 3x = 6x + 6 − 3x = 3x + 6",
            "Apabila x = 6: 3(6) + 6 = 18 + 6 = 24",
            "3x + 6 = 36 → 3x = 30 → x = 10",
          ],
        },
        {
          id: "B3",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus perimeter segi empat tepat P = 2(l + w). Diberi P = 50cm, w = 12cm.",
          parts: [
            { label: "(a)", prompt: "Cari panjang l.", answer: "13", marks: 2 },
            { label: "(b)", prompt: "Jika lebar berubah kepada 15cm dengan P kekal 50cm, cari panjang l yang baharu.", answer: "10", marks: 2 },
          ],
          solution: [
            "50 = 2(l + 12) → 25 = l + 12 → l = 13",
            "50 = 2(l + 15) → 25 = l + 15 → l = 10",
          ],
        },
        {
          id: "B4",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 18 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "2880", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "160", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (18 − 2) × 180° = 2880°",
            "Setiap sudut = 2880° ÷ 18 = 160°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 42cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "264", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "5544", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 42 = 264cm",
            "Luas = 22/7 × 42 × 42 = 5544cm²",
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
          context: "Jujukan aritmetik ialah 6, 13, 20, 27, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya bagi jujukan itu.", answer: "7", marks: 3 },
            { label: "(b)", prompt: "Cari sebutan ke-16 bagi jujukan itu.", answer: "111", marks: 4 },
            { label: "(c)", prompt: "Sebutan yang ke-berapakah bernilai 132?", answer: "19", marks: 3 },
          ],
          solution: [
            "d = 13 − 6 = 7",
            "T16 = 6 + (16 − 1)(7) = 6 + 105 = 111",
            "6 + (n − 1)(7) = 132 → (n − 1)(7) = 126 → n − 1 = 18 → n = 19",
          ],
        },
        {
          id: "C2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra (KBAT)",
          isKbat: true,
          context: "Luas sebuah segi empat tepat diberi oleh ungkapan (x + 4)(x + 3) cm², dengan panjang = (x + 4) dan lebar = (x + 3).",
          parts: [
            { label: "(a)", prompt: "Jika x = 5, cari luas segi empat tepat itu (cm²).", answer: "72", marks: 3 },
            { label: "(b)", prompt: "Cari panjang segi empat tepat itu (cm) apabila x = 5.", answer: "9", marks: 3 },
            { label: "(c)", prompt: "Cari lebar segi empat tepat itu (cm) apabila x = 5.", answer: "8", marks: 4 },
          ],
          solution: [
            "Luas = (x+4)(x+3), pada x=5: (5+4)(5+3) = 9 × 8 = 72cm²",
            "Panjang = x + 4 = 5 + 4 = 9cm",
            "Lebar = x + 3 = 5 + 3 = 8cm",
          ],
        },
        {
          id: "C3",
          topic: "Bab 3 · Rumus Algebra (KBAT)",
          isKbat: true,
          context:
            "Rumus kelajuan purata dua bahagian perjalanan ialah v = (u + w) ÷ 2. Sebuah bas memandu satu bahagian perjalanan pada 45km/j (u) dan bahagian lagi pada 65km/j (w).",
          parts: [
            { label: "(a)", prompt: "Cari kelajuan purata v (km/j).", answer: "55", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika kelajuan bahagian kedua berubah supaya kelajuan purata v menjadi 60km/j (u = 45 kekal), cari kelajuan bahagian kedua yang baharu (km/j).",
              answer: "75",
              marks: 6,
            },
          ],
          solution: [
            "v = (45 + 65) ÷ 2 = 55km/j",
            "60 = (45 + w) ÷ 2 → 120 = 45 + w → w = 75",
          ],
        },
        {
          id: "C4",
          topic: "Bab 4 · Poligon (KBAT)",
          isKbat: true,
          context: "Sebuah poligon sekata mempunyai sudut pedalaman yang 4 kali lebih besar daripada sudut peluarannya.",
          parts: [
            { label: "(a)", prompt: "Cari saiz sudut peluaran poligon itu.", answer: "36", marks: 4 },
            { label: "(b)", prompt: "Cari bilangan sisi poligon itu.", answer: "10", marks: 3 },
            { label: "(c)", prompt: "Cari jumlah sudut pedalaman poligon itu.", answer: "1440", marks: 3 },
          ],
          solution: [
            "Biar sudut peluaran = x, sudut pedalaman = 4x. x + 4x = 180° → 5x = 180° → x = 36°",
            "Bilangan sisi = 360° ÷ 36° = 10",
            "Jumlah sudut pedalaman = (10 − 2) × 180° = 1440°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 5 · Bulatan (KBAT)",
          isKbat: true,
          context: "Sebuah taman berbentuk bulatan mempunyai lilitan 176m. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari jejari taman itu (m).", answer: "28", marks: 4 },
            { label: "(b)", prompt: "Cari luas taman itu (m²).", answer: "2464", marks: 3 },
            { label: "(c)", prompt: "Jika kos memagar taman itu ialah RM4 semeter, cari jumlah kos memagar keseluruhan taman itu (RM).", answer: "704", marks: 3 },
          ],
          solution: [
            "176 = 2 × 22/7 × r → r = 176 × 7 ÷ 44 = 28m",
            "Luas = 22/7 × 28 × 28 = 2464m²",
            "Kos = 176 × 4 = RM704",
          ],
        },
        {
          id: "C6",
          topic: "Bab 6 dan 7 · Bentuk Geometri Tiga Dimensi & Koordinat (KBAT)",
          isKbat: true,
          context:
            "Sebuah kuboid mempunyai panjang 9cm, lebar 12cm, dan tinggi 5cm. Kedudukan dua penjuru tapaknya pada suatu peta grid ialah (1, 2) dan (10, 14).",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kuboid itu (cm³).", answer: "540", marks: 3 },
            { label: "(b)", prompt: "Cari luas permukaan kuboid itu (cm²).", answer: "426", marks: 3 },
            { label: "(c)", prompt: "Cari jarak antara dua penjuru tapak itu pada peta grid (unit).", answer: "15", marks: 4 },
          ],
          solution: [
            "Isi padu = 9 × 12 × 5 = 540cm³",
            "Luas permukaan = 2(9×12 + 9×5 + 12×5) = 2(108 + 45 + 60) = 2 × 213 = 426cm²",
            "Jarak = √((10−1)² + (14−2)²) = √(81 + 144) = √225 = 15",
          ],
        },
      ],
    },
  ],
};
