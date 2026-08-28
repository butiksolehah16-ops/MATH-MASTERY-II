// Kertas Ujian UPSA (Ujian Pertengahan Sesi Akademik) Percubaan #1 —
// Matematik Tingkatan 2. UPSA ialah ujian PERTENGAHAN TAHUN sekolah, jadi
// liputan topiknya hanya Bab 1 hingga Bab 7 (separuh pertama silibus
// Tingkatan 2) — berbeza daripada UASA (akhir sesi) yang merentasi kesemua
// 13 bab. Struktur markah (Bahagian A/B/C, 100 markah, 31 soalan) dikekalkan
// sama seperti UASA supaya skema gred konsisten sepanjang tahun, tetapi masa
// diperpendekkan (90 minit) memandangkan skop lebih sempit. Bahagian C tetap KBAT.
export const form2UpsaPaper1 = {
  id: "form2-upsa-1",
  formId: "form2",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 1)",
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
        { id: "A1", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 5, 8, 11, 14, ... Cari sebutan seterusnya.", choices: ["17", "16", "18", "15"], answer: "17" },
        { id: "A2", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Cari sebutan ke-6 bagi jujukan 3, 7, 11, 15, ...", choices: ["23", "19", "27", "21"], answer: "23" },
        { id: "A3", topic: "Bab 1 · Pola dan Jujukan", marks: 1, prompt: "Jujukan 10, 7, 4, 1, ... Cari sebutan seterusnya.", choices: ["−2", "0", "2", "−1"], answer: "−2" },
        { id: "A4", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Kembangkan 2(5x + 3).", choices: ["10x + 6", "10x + 3", "7x + 6", "10x + 5"], answer: "10x + 6" },
        { id: "A5", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Pemfaktoran penuh bagi 9x + 6 ialah?", choices: ["3(3x + 2)", "3(3x + 6)", "9(x + 6)", "6(3x + 1)"], answer: "3(3x + 2)" },
        { id: "A6", topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra", marks: 1, prompt: "Permudahkan 6x²/3x.", choices: ["2x", "2x²", "3x", "18x²"], answer: "2x" },
        { id: "A7", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi P = 2(l + w). Jika l = 5cm, w = 3cm, cari P.", choices: ["16", "15", "8", "30"], answer: "16" },
        { id: "A8", topic: "Bab 3 · Rumus Algebra", marks: 1, prompt: "Diberi A = πr² (guna π = 22/7). Jika r = 7cm, cari A.", choices: ["154", "44", "22", "308"], answer: "154" },
        { id: "A9", topic: "Bab 4 · Poligon", marks: 1, prompt: "Jumlah sudut pedalaman sebuah pentagon (5 sisi) ialah?", choices: ["540°", "360°", "720°", "450°"], answer: "540°" },
        { id: "A10", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sudut peluaran bagi poligon sekata bersisi 8 ialah?", choices: ["45°", "36°", "60°", "40°"], answer: "45°" },
        { id: "A11", topic: "Bab 4 · Poligon", marks: 1, prompt: "Sebuah poligon mempunyai jumlah sudut pedalaman 1080°. Berapakah bilangan sisinya?", choices: ["8", "6", "7", "9"], answer: "8" },
        { id: "A12", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Panjang diameter sebuah bulatan berjejari 9cm ialah?", choices: ["18cm", "9cm", "4.5cm", "36cm"], answer: "18cm" },
        { id: "A13", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Lilitan bulatan berjejari 7cm (guna π = 22/7) ialah?", choices: ["44cm", "22cm", "154cm", "88cm"], answer: "44cm" },
        { id: "A14", topic: "Bab 5 · Bulatan", marks: 1, prompt: "Luas bulatan berjejari 14cm (guna π = 22/7) ialah?", choices: ["616cm²", "88cm²", "308cm²", "1232cm²"], answer: "616cm²" },
        { id: "A15", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Isi padu sebuah kubus bersisi 5cm ialah?", choices: ["125cm³", "25cm³", "15cm³", "20cm³"], answer: "125cm³" },
        { id: "A16", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Bilangan muka bagi sebuah prisma segi tiga ialah?", choices: ["5", "3", "6", "4"], answer: "5" },
        { id: "A17", topic: "Bab 6 · Bentuk Geometri Tiga Dimensi", marks: 1, prompt: "Luas permukaan sebuah kubus bersisi 3cm ialah?", choices: ["54cm²", "27cm²", "9cm²", "18cm²"], answer: "54cm²" },
        { id: "A18", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (0, 0) dan (6, 8) ialah?", choices: ["10", "14", "8", "6"], answer: "10" },
        { id: "A19", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Titik tengah antara (2, 2) dan (10, 10) ialah?", choices: ["(6, 6)", "(5, 5)", "(8, 8)", "(4, 4)"], answer: "(6, 6)" },
        { id: "A20", topic: "Bab 7 · Koordinat", marks: 1, prompt: "Jarak antara titik (1, 2) dan (4, 6) ialah?", choices: ["5", "4", "3", "7"], answer: "5" },
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
          context: "Jujukan nombor ialah 6, 10, 14, 18, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya (d) bagi jujukan itu.", answer: "4", marks: 2 },
            { label: "(b)", prompt: "Cari sebutan ke-10 bagi jujukan itu.", answer: "42", marks: 2 },
          ],
          solution: [
            "d = 10 − 6 = 4",
            "T10 = 6 + (10 − 1)(4) = 6 + 36 = 42",
          ],
        },
        {
          id: "B2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra",
          isKbat: false,
          context: "Diberi ungkapan algebra 4(x + 3) − x.",
          parts: [
            { label: "(a)", prompt: "Permudahkan ungkapan itu, kemudian cari nilainya apabila x = 5.", answer: "27", marks: 2 },
            { label: "(b)", prompt: "Cari nilai x supaya ungkapan itu bersamaan dengan 33.", answer: "7", marks: 2 },
          ],
          solution: [
            "4(x + 3) − x = 4x + 12 − x = 3x + 12",
            "Apabila x = 5: 3(5) + 12 = 15 + 12 = 27",
            "3x + 12 = 33 → 3x = 21 → x = 7",
          ],
        },
        {
          id: "B3",
          topic: "Bab 3 · Rumus Algebra",
          isKbat: false,
          context: "Diberi rumus perimeter segi empat tepat P = 2(l + w). Diberi P = 30cm, w = 7cm.",
          parts: [
            { label: "(a)", prompt: "Cari panjang l.", answer: "8", marks: 2 },
            { label: "(b)", prompt: "Jika lebar bertambah kepada 9cm dengan P kekal 30cm, cari panjang l yang baharu.", answer: "6", marks: 2 },
          ],
          solution: [
            "30 = 2(l + 7) → 15 = l + 7 → l = 8",
            "30 = 2(l + 9) → 15 = l + 9 → l = 6",
          ],
        },
        {
          id: "B4",
          topic: "Bab 4 · Poligon",
          isKbat: false,
          context: "Sebuah poligon sekata mempunyai 15 sisi.",
          parts: [
            { label: "(a)", prompt: "Cari jumlah sudut pedalamannya.", answer: "2340", marks: 2 },
            { label: "(b)", prompt: "Cari saiz setiap sudut pedalaman poligon sekata itu.", answer: "156", marks: 2 },
          ],
          solution: [
            "Jumlah sudut pedalaman = (15 − 2) × 180° = 2340°",
            "Setiap sudut = 2340° ÷ 15 = 156°",
          ],
        },
        {
          id: "B5",
          topic: "Bab 5 · Bulatan",
          isKbat: false,
          context: "Sebuah bulatan mempunyai jejari 28cm. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari lilitan bulatan itu (cm).", answer: "176", marks: 2 },
            { label: "(b)", prompt: "Cari luas bulatan itu (cm²).", answer: "2464", marks: 2 },
          ],
          solution: [
            "Lilitan = 2 × 22/7 × 28 = 176cm",
            "Luas = 22/7 × 28 × 28 = 2464cm²",
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
          context: "Jujukan aritmetik ialah 8, 15, 22, 29, ...",
          parts: [
            { label: "(a)", prompt: "Cari beza sepunya bagi jujukan itu.", answer: "7", marks: 3 },
            { label: "(b)", prompt: "Cari sebutan ke-20 bagi jujukan itu.", answer: "141", marks: 4 },
            { label: "(c)", prompt: "Sebutan yang ke-berapakah bernilai 71?", answer: "10", marks: 3 },
          ],
          solution: [
            "d = 15 − 8 = 7",
            "T20 = 8 + (20 − 1)(7) = 8 + 133 = 141",
            "8 + (n − 1)(7) = 71 → (n − 1)(7) = 63 → n − 1 = 9 → n = 10",
          ],
        },
        {
          id: "C2",
          topic: "Bab 2 · Pemfaktoran dan Pecahan Algebra (KBAT)",
          isKbat: true,
          context: "Luas sebuah segi empat tepat diberi oleh ungkapan (x + 3)(x + 2) cm², dengan panjang = (x + 3) dan lebar = (x + 2).",
          parts: [
            { label: "(a)", prompt: "Jika x = 4, cari luas segi empat tepat itu (cm²).", answer: "42", marks: 3 },
            { label: "(b)", prompt: "Cari panjang segi empat tepat itu (cm) apabila x = 4.", answer: "7", marks: 3 },
            { label: "(c)", prompt: "Cari lebar segi empat tepat itu (cm) apabila x = 4.", answer: "6", marks: 4 },
          ],
          solution: [
            "Luas = (x+3)(x+2), pada x=4: (4+3)(4+2) = 7 × 6 = 42cm²",
            "Panjang = x + 3 = 4 + 3 = 7cm",
            "Lebar = x + 2 = 4 + 2 = 6cm",
          ],
        },
        {
          id: "C3",
          topic: "Bab 3 · Rumus Algebra (KBAT)",
          isKbat: true,
          context:
            "Rumus kelajuan purata dua bahagian perjalanan ialah v = (u + w) ÷ 2. Sebuah kereta memandu satu bahagian perjalanan pada 40km/j (u) dan bahagian lagi pada 60km/j (w).",
          parts: [
            { label: "(a)", prompt: "Cari kelajuan purata v (km/j).", answer: "50", marks: 4 },
            {
              label: "(b)",
              prompt: "Jika kelajuan bahagian kedua berubah supaya kelajuan purata v menjadi 55km/j (u = 40 kekal), cari kelajuan bahagian kedua yang baharu (km/j).",
              answer: "70",
              marks: 6,
            },
          ],
          solution: [
            "v = (40 + 60) ÷ 2 = 50km/j",
            "55 = (40 + w) ÷ 2 → 110 = 40 + w → w = 70",
          ],
        },
        {
          id: "C4",
          topic: "Bab 4 · Poligon (KBAT)",
          isKbat: true,
          context: "Sebuah poligon sekata mempunyai sudut pedalaman yang 3 kali lebih besar daripada sudut peluarannya.",
          parts: [
            { label: "(a)", prompt: "Cari saiz sudut peluaran poligon itu.", answer: "45", marks: 4 },
            { label: "(b)", prompt: "Cari bilangan sisi poligon itu.", answer: "8", marks: 3 },
            { label: "(c)", prompt: "Cari jumlah sudut pedalaman poligon itu.", answer: "1080", marks: 3 },
          ],
          solution: [
            "Biar sudut peluaran = x, sudut pedalaman = 3x. x + 3x = 180° → 4x = 180° → x = 45°",
            "Bilangan sisi = 360° ÷ 45° = 8",
            "Jumlah sudut pedalaman = (8 − 2) × 180° = 1080°",
          ],
        },
        {
          id: "C5",
          topic: "Bab 5 · Bulatan (KBAT)",
          isKbat: true,
          context: "Sebuah taman berbentuk bulatan mempunyai lilitan 88m. (Gunakan π = 22/7)",
          parts: [
            { label: "(a)", prompt: "Cari jejari taman itu (m).", answer: "14", marks: 4 },
            { label: "(b)", prompt: "Cari luas taman itu (m²).", answer: "616", marks: 3 },
            { label: "(c)", prompt: "Jika kos memagar taman itu ialah RM5 semeter, cari jumlah kos memagar keseluruhan taman itu (RM).", answer: "440", marks: 3 },
          ],
          solution: [
            "88 = 2 × 22/7 × r → r = 88 × 7 ÷ 44 = 14m",
            "Luas = 22/7 × 14 × 14 = 616m²",
            "Kos = 88 × 5 = RM440",
          ],
        },
        {
          id: "C6",
          topic: "Bab 6 dan 7 · Bentuk Geometri Tiga Dimensi & Koordinat (KBAT)",
          isKbat: true,
          context:
            "Sebuah kubus mempunyai sisi 6cm. Kedudukan dua penjuru tapaknya pada suatu peta grid ialah (1, 2) dan (5, 5).",
          parts: [
            { label: "(a)", prompt: "Cari isi padu kubus itu (cm³).", answer: "216", marks: 3 },
            { label: "(b)", prompt: "Cari luas permukaan kubus itu (cm²).", answer: "216", marks: 3 },
            { label: "(c)", prompt: "Cari jarak antara dua penjuru tapak itu pada peta grid (unit).", answer: "5", marks: 4 },
          ],
          solution: [
            "Isi padu = 6³ = 216cm³",
            "Luas permukaan = 6 × 6² = 6 × 36 = 216cm²",
            "Jarak = √((5−1)² + (5−2)²) = √(16 + 9) = √25 = 5",
          ],
        },
      ],
    },
  ],
};
