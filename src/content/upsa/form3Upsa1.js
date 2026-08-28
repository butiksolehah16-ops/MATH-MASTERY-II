// Kertas Ujian UPSA (Ujian Pertengahan Sesi Akademik) Percubaan #1 —
// Matematik Tingkatan 3. UPSA ialah ujian PERTENGAHAN TAHUN, jadi liputan
// topiknya hanya Bab 1 hingga Bab 5 (Indeks, Bentuk Piawai, Matematik
// Pengguna, Lukisan Berskala, Nisbah Trigonometri) — separuh pertama silibus
// Tingkatan 3 (9 bab kesemuanya), berbeza daripada UASA (akhir sesi) yang
// merentasi kesemua 9 bab. Struktur markah (Bahagian A/B/C, 100 markah, 31
// soalan) dikekalkan sama seperti UASA supaya skema gred konsisten sepanjang
// tahun, tetapi masa diperpendekkan (90 minit) memandangkan skop lebih sempit.
export const form3UpsaPaper1 = {
  id: "form3-upsa-1",
  formId: "form3",
  examTypeLabel: "UPSA",
  title: "Ujian UPSA Percubaan (Set 1)",
  subtitle: "Matematik · Tingkatan 3 (Pertengahan Tahun · Bab 1–5)",
  totalMarks: 100,
  durationMinutes: 90,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Indeks", marks: 1, prompt: "Nilaikan 4³.", choices: ["64", "12", "34", "43"], answer: "64" },
        { id: "A2", topic: "Bab 1 · Indeks", marks: 1, prompt: "Permudahkan 7⁵ ÷ 7³ dalam bentuk indeks.", choices: ["7²", "7⁸", "7¹⁵", "7¹"], answer: "7²" },
        { id: "A3", topic: "Bab 1 · Indeks", marks: 1, prompt: "Nilaikan 5⁰.", choices: ["1", "0", "5", "50"], answer: "1" },
        { id: "A4", topic: "Bab 1 · Indeks", marks: 1, prompt: "Nilaikan 2⁻² dalam bentuk pecahan.", choices: ["1/4", "-4", "4", "-1/4"], answer: "1/4" },
        { id: "A5", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Berapakah bilangan angka bererti dalam 705?", choices: ["3", "2", "1", "4"], answer: "3" },
        { id: "A6", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Berapakah bilangan angka bererti dalam 0.0090?", choices: ["2", "4", "3", "1"], answer: "2" },
        { id: "A7", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Tulis 32000 dalam bentuk piawai.", choices: ["3.2 × 10⁴", "3.2 × 10³", "32 × 10³", "3.2 × 10⁵"], answer: "3.2 × 10⁴" },
        { id: "A8", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Tulis 0.00045 dalam bentuk piawai.", choices: ["4.5 × 10⁻⁴", "4.5 × 10⁴", "45 × 10⁻⁵", "4.5 × 10⁻³"], answer: "4.5 × 10⁻⁴" },
        { id: "A9", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Kirakan faedah mudah bagi P=RM1000, r=8% setahun, t=3 tahun.", choices: ["RM240", "RM80", "RM1240", "RM320"], answer: "RM240" },
        { id: "A10", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Antara berikut, manakah CIRI faedah kompaun (berbanding faedah mudah)?", choices: ["Faedah dikira atas prinsipal + faedah terkumpul", "Faedah setiap tahun sentiasa sama", "Faedah hanya dikira sekali", "Tiada faedah dikenakan"], answer: "Faedah dikira atas prinsipal + faedah terkumpul" },
        { id: "A11", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Pinjaman RM5000 pada faedah sama rata 6% setahun selama 2 tahun. Cari jumlah bayaran balik A.", choices: ["RM5600", "RM600", "RM5000", "RM5500"], answer: "RM5600" },
        { id: "A12", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Antara jenis simpanan/pelaburan berikut, manakah risiko PALING RENDAH?", choices: ["Akaun simpanan", "Saham", "Hartanah", "Amanah saham"], answer: "Akaun simpanan" },
        { id: "A13", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Skala 1:30. Ukuran lukisan 5 cm. Apakah ukuran sebenar?", choices: ["150 cm", "35 cm", "25 cm", "6 cm"], answer: "150 cm" },
        { id: "A14", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Ukuran sebenar 350 cm dilukis sebagai 7 cm. Apakah skala?", choices: ["1:50", "50:1", "1:7", "1:350"], answer: "1:50" },
        { id: "A15", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Skala 1:200. Ukuran sebenar 800 cm. Apakah ukuran lukisan?", choices: ["4 cm", "160000 cm", "200 cm", "196 cm"], answer: "4 cm" },
        { id: "A16", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Skala lukisan berskala biasanya ditulis dalam bentuk apa?", choices: ["1:n", "n:1", "n×1", "1+n"], answer: "1:n" },
        { id: "A17", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Segi tiga bersudut tegak: bertentangan θ = 9, hipotenus = 15. Cari sin θ.", choices: ["0.6", "0.8", "1.67", "0.4"], answer: "0.6" },
        { id: "A18", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apakah nilai tan 30° (2 tempat perpuluhan)?", choices: ["0.58", "1.73", "0.5", "1"], answer: "0.58" },
        { id: "A19", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Segi tiga bersudut tegak: bersebelahan θ = 12, hipotenus = 15. Cari kos θ.", choices: ["0.8", "0.6", "1.25", "0.4"], answer: "0.8" },
        { id: "A20", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apabila sudut θ membesar daripada 0° ke 90°, apa berlaku kepada nilai sin θ?", choices: ["Bertambah", "Berkurang", "Kekal sama", "Menjadi negatif"], answer: "Bertambah" },
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
          topic: "Bab 1 · Indeks",
          isKbat: false,
          context: "Diberi ungkapan 4² × 4³, dipermudahkan kepada bentuk indeks 4ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai n?", answer: "5", marks: 2 },
            { label: "(b)", prompt: "Nilaikan 4ⁿ.", answer: "1024", marks: 2 },
          ],
          solution: ["4² × 4³ = 4²⁺³ = 4⁵, jadi n = 5", "4⁵ = 1024"],
        },
        {
          id: "B2",
          topic: "Bab 2 · Bentuk Piawai",
          isKbat: false,
          context: "Sebuah kilang menghasilkan 56000 unit produk setahun, ditulis dalam bentuk piawai A × 10ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai A?", answer: "5.6", marks: 2 },
            { label: "(b)", prompt: "Apakah nilai n?", answer: "4", marks: 2 },
          ],
          solution: ["56000 = 5.6 × 10⁴", "Jadi A = 5.6 dan n = 4"],
        },
        {
          id: "B3",
          topic: "Bab 3 · Matematik Pengguna",
          isKbat: false,
          context: "Amir melabur RM1500 pada faedah mudah 6% setahun selama 4 tahun.",
          parts: [
            { label: "(a)", prompt: "Cari faedah (RM).", answer: "360", marks: 2 },
            { label: "(b)", prompt: "Cari jumlah akhir dalam akaunnya (RM).", answer: "1860", marks: 2 },
          ],
          solution: ["I = Prt = 1500 × 0.06 × 4 = RM360", "Jumlah akhir = 1500 + 360 = RM1860"],
        },
        {
          id: "B4",
          topic: "Bab 4 · Lukisan Berskala",
          isKbat: false,
          context: "Skala sebuah pelan ialah 1:8000. Jarak pada pelan ialah 9 cm.",
          parts: [
            { label: "(a)", prompt: "Cari jarak sebenar (cm).", answer: "72000", marks: 2 },
            { label: "(b)", prompt: "Tukar jarak sebenar itu kepada m.", answer: "720", marks: 2 },
          ],
          solution: ["Jarak sebenar = 9 × 8000 = 72000 cm", "72000 cm = 720 m"],
        },
        {
          id: "B5",
          topic: "Bab 5 · Nisbah Trigonometri",
          isKbat: false,
          context: "Segi tiga bersudut tegak mempunyai sisi bertentangan θ = 8, sisi bersebelahan = 15, hipotenus = 17.",
          parts: [
            { label: "(a)", prompt: "Cari sin θ (2 tempat perpuluhan).", answer: "0.47", marks: 2 },
            { label: "(b)", prompt: "Cari tan θ (2 tempat perpuluhan).", answer: "0.53", marks: 2 },
          ],
          solution: ["sin θ = 8 ÷ 17 = 0.4706, dibundarkan = 0.47", "tan θ = 8 ÷ 15 = 0.5333, dibundarkan = 0.53"],
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
          topic: "Bab 1 · Indeks (KBAT)",
          isKbat: true,
          context: "Populasi bakteria berganda dua setiap jam, bermula daripada 1 bakteria (iaitu 2ⁿ selepas n jam).",
          parts: [
            { label: "(a)", prompt: "Berapakah bilangan bakteria selepas 6 jam?", answer: "64", marks: 4 },
            { label: "(b)", prompt: "Selepas berapa JAM bilangan bakteria mencapai 256?", answer: "8", marks: 3 },
            { label: "(c)", prompt: "Jika bermula dengan 5 bakteria (bukan 1), berapakah bilangan bakteria selepas 3 jam?", answer: "40", marks: 3 },
          ],
          solution: [
            "Selepas 6 jam: 2⁶ = 64 bakteria",
            "2ⁿ = 256 = 2⁸, jadi n = 8 jam",
            "Selepas 3 jam faktor = 2³ = 8. 5 × 8 = 40 bakteria",
          ],
        },
        {
          id: "C2",
          topic: "Bab 2 · Bentuk Piawai (KBAT)",
          isKbat: true,
          context: "Diameter Matahari lebih kurang 1.4 × 10⁶ km. Diameter Bumi lebih kurang 1.4 × 10⁴ km.",
          parts: [
            { label: "(a)", prompt: "Berapa kali ganda diameter Matahari berbanding Bumi?", answer: "100", marks: 4 },
            { label: "(b)", prompt: "Tulis 1.4 × 10⁶ sebagai nombor biasa (km).", answer: "1400000", marks: 3 },
            { label: "(c)", prompt: "Berapakah bilangan angka bererti dalam 1.4 × 10⁶ (bahagian A = 1.4 sahaja)?", answer: "2", marks: 3 },
          ],
          solution: [
            "(1.4 × 10⁶) ÷ (1.4 × 10⁴) = 10⁶⁻⁴ = 10² = 100 kali ganda",
            "1.4 × 10⁶ = 1400000 km",
            "Bahagian A (1.4) ada 2 angka bererti (1 dan 4)",
          ],
        },
        {
          id: "C3",
          topic: "Bab 3 · Matematik Pengguna (KBAT)",
          isKbat: true,
          context: "Faridah melabur RM10000: RM5000 pada faedah mudah 4% setahun, dan RM5000 lagi pada faedah mudah 6% setahun, kedua-duanya selama 3 tahun.",
          parts: [
            { label: "(a)", prompt: "Cari faedah daripada bahagian pertama (4%, RM).", answer: "600", marks: 3 },
            { label: "(b)", prompt: "Cari faedah daripada bahagian kedua (6%, RM).", answer: "900", marks: 3 },
            { label: "(c)", prompt: "Cari jumlah faedah keseluruhan (RM).", answer: "1500", marks: 4 },
          ],
          solution: [
            "Bahagian 1: I = 5000 × 0.04 × 3 = RM600",
            "Bahagian 2: I = 5000 × 0.06 × 3 = RM900",
            "Jumlah = 600 + 900 = RM1500",
          ],
        },
        {
          id: "C4",
          topic: "Bab 4 · Lukisan Berskala (KBAT)",
          isKbat: true,
          context: "Pelan sebuah taman berskala 1:500. Kawasan taman pada lukisan ialah segi empat tepat 8 cm × 5 cm.",
          parts: [
            { label: "(a)", prompt: "Cari panjang sebenar taman itu (m).", answer: "40", marks: 3 },
            { label: "(b)", prompt: "Cari lebar sebenar taman itu (m).", answer: "25", marks: 4 },
            { label: "(c)", prompt: "Cari luas sebenar taman itu (m²).", answer: "1000", marks: 3 },
          ],
          solution: [
            "Panjang sebenar = 8 × 500 = 4000 cm = 40 m",
            "Lebar sebenar = 5 × 500 = 2500 cm = 25 m",
            "Luas = 40 × 25 = 1000 m²",
          ],
        },
        {
          id: "C5",
          topic: "Bab 5 · Nisbah Trigonometri (KBAT)",
          isKbat: true,
          context: "Sebuah tangga panjang 10 m disandarkan pada dinding, membentuk sudut 60° dengan lantai. (Gunakan sin 60° ≈ 0.87, kos 60° = 0.5, kos 30° ≈ 0.87)",
          parts: [
            { label: "(a)", prompt: "Cari tinggi tangga menyentuh dinding (m).", answer: "8.7", marks: 4 },
            { label: "(b)", prompt: "Cari jarak kaki tangga daripada dinding (m).", answer: "5", marks: 3 },
            { label: "(c)", prompt: "Jika sudut dikurangkan kepada 30°, cari jarak kaki tangga daripada dinding yang baharu (m).", answer: "8.7", marks: 3 },
          ],
          solution: [
            "Tinggi = 10 × sin 60° = 10 × 0.87 = 8.7 m",
            "Jarak = 10 × kos 60° = 10 × 0.5 = 5 m",
            "Jarak baharu = 10 × kos 30° = 10 × 0.87 = 8.7 m",
          ],
        },
        {
          id: "C6",
          topic: "Bab 1 dan 3 · Indeks & Matematik Pengguna (KBAT)",
          isKbat: true,
          context: "Sebuah simpanan bermula RM500 dan berganda mengikut faktor 2 setiap 3 tahun (nilai = 500 × 2ⁿ, dengan n = bilangan kitaran 3 tahun).",
          parts: [
            { label: "(a)", prompt: "Cari nilai simpanan (RM) selepas 9 tahun (n = 3).", answer: "4000", marks: 4 },
            { label: "(b)", prompt: "Selepas berapa TAHUN nilai simpanan mencapai RM8000?", answer: "12", marks: 3 },
            { label: "(c)", prompt: "Selepas 15 tahun, faktor pendaraban ialah 2ᵏ. Apakah nilai k?", answer: "5", marks: 3 },
          ],
          solution: [
            "Selepas 9 tahun, n = 9 ÷ 3 = 3: nilai = 500 × 2³ = 500 × 8 = RM4000",
            "RM8000 = 500 × 2ⁿ → 2ⁿ = 16 = 2⁴ → n = 4 → tahun = 4 × 3 = 12 tahun",
            "Selepas 15 tahun, n = 15 ÷ 3 = 5, jadi k = 5",
          ],
        },
      ],
    },
  ],
};
