// Kertas Ujian UASA Percubaan #1 — Matematik Tingkatan 3.
// Format ikut struktur sebenar UASA: Bahagian A (Objektif, 20 soalan x 1
// markah), Bahagian B (Struktur pendek, 5 soalan x 4 markah), Bahagian C
// (Struktur lanjutan/KBAT, 6 soalan x ~10 markah). Jumlah 100 markah, 31
// soalan, 120 minit. Soalan merentasi SEMUA 9 bab Tingkatan 3 supaya benar-
// benar "ulangkaji bercampur", dan Bahagian C sengaja direka sebagai soalan
// KBAT — konteks dunia sebenar, gabung >1 bab, penaakulan berbilang langkah.
export const form3UasaPaper1 = {
  id: "form3-uasa-1",
  formId: "form3",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 1)",
  subtitle: "Matematik · Tingkatan 3",
  totalMarks: 100,
  durationMinutes: 120,
  sections: [
    {
      key: "A",
      label: "Bahagian A",
      instruction: "Jawab SEMUA soalan. Setiap soalan bernilai 1 markah.",
      type: "mcq",
      questions: [
        { id: "A1", topic: "Bab 1 · Indeks", marks: 1, prompt: "Nilaikan 3⁴.", choices: ["81", "12", "64", "7"], answer: "81" },
        { id: "A2", topic: "Bab 1 · Indeks", marks: 1, prompt: "Permudahkan 5⁶ ÷ 5² dalam bentuk indeks.", choices: ["5⁴", "5³", "5⁸", "5¹²"], answer: "5⁴" },
        { id: "A3", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Berapakah bilangan angka bererti dalam 402?", choices: ["3", "2", "1", "4"], answer: "3" },
        { id: "A4", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Tulis 56000 dalam bentuk piawai.", choices: ["5.6 × 10⁴", "5.6 × 10³", "56 × 10³", "5.6 × 10⁵"], answer: "5.6 × 10⁴" },
        { id: "A5", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Kirakan faedah mudah bagi P=RM2000, r=5% setahun, t=2 tahun.", choices: ["RM200", "RM100", "RM2200", "RM400"], answer: "RM200" },
        { id: "A6", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Pinjaman RM3000 pada faedah sama rata 4% setahun selama 3 tahun. Cari jumlah bayaran balik A.", choices: ["RM3360", "RM360", "RM3000", "RM3300"], answer: "RM3360" },
        { id: "A7", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Skala 1:50. Ukuran lukisan 6 cm. Apakah ukuran sebenar?", choices: ["300 cm", "56 cm", "44 cm", "8.33 cm"], answer: "300 cm" },
        { id: "A8", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Ukuran sebenar 400 cm dilukis sebagai 8 cm. Apakah skala?", choices: ["1:50", "50:1", "1:8", "1:400"], answer: "1:50" },
        { id: "A9", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Segi tiga bersudut tegak: bertentangan θ = 6, hipotenus = 10. Cari sin θ.", choices: ["0.6", "0.8", "1.67", "0.4"], answer: "0.6" },
        { id: "A10", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apakah nilai kos 60°?", choices: ["0.5", "1", "0.87", "1.73"], answer: "0.5" },
        { id: "A11", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apakah nilai tan 45°?", choices: ["1", "0", "0.5", "1.41"], answer: "1" },
        { id: "A12", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "Sudut lilitan dicangkum lengkok XY ialah 48°. Cari sudut pusat dicangkum lengkok yang sama.", choices: ["96°", "24°", "144°", "48°"], answer: "96°" },
        { id: "A13", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "AC ialah diameter bulatan, B pada lilitan. Apakah sudut ABC?", choices: ["90°", "45°", "180°", "60°"], answer: "90°" },
        { id: "A14", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "ABCD sisi empat kitaran, ∠A = 110°. Cari ∠C (bertentangan).", choices: ["70°", "110°", "180°", "55°"], answer: "70°" },
        { id: "A15", topic: "Bab 7 · Pelan dan Dongakan", marks: 1, prompt: "Kuboid 8 cm × 5 cm × 3 cm. Cari luas unjuran dari ATAS (panjang × lebar).", choices: ["40 cm²", "24 cm²", "15 cm²", "120 cm²"], answer: "40 cm²" },
        { id: "A16", topic: "Bab 7 · Pelan dan Dongakan", marks: 1, prompt: "Jenis garis manakah digunakan untuk sisi yang TERLINDUNG dalam lukisan pelan/dongakan?", choices: ["Garis sempang (putus-putus)", "Garis padu tebal", "Garis padu halus", "Tiada garis"], answer: "Garis sempang (putus-putus)" },
        { id: "A17", topic: "Bab 8 · Lokus dalam Dua Dimensi", marks: 1, prompt: "Apakah bentuk lokus titik berjarak TETAP daripada satu titik tetap?", choices: ["Bulatan", "Garis lurus", "Segi tiga", "Pembahagi sudut"], answer: "Bulatan" },
        { id: "A18", topic: "Bab 8 · Lokus dalam Dua Dimensi", marks: 1, prompt: "Apakah bentuk lokus titik SAMA JARAK daripada dua titik tetap?", choices: ["Pembahagi dua sama serenjang", "Bulatan", "Garis selari", "Pembahagi sudut"], answer: "Pembahagi dua sama serenjang" },
        { id: "A19", topic: "Bab 9 · Garis Lurus", marks: 1, prompt: "Dalam persamaan y = 3x + 7, apakah kecerunan?", choices: ["3", "7", "-3", "4"], answer: "3" },
        { id: "A20", topic: "Bab 9 · Garis Lurus", marks: 1, prompt: "Adakah titik (5, 2) terletak pada garis y = 2x − 8?", choices: ["Ya, sebab 2(5)−8 = 2", "Tidak", "Tidak dapat ditentukan", "Ya tapi hanya untuk x negatif"], answer: "Ya, sebab 2(5)−8 = 2" },
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
          context: "Diberi ungkapan 3⁵ ÷ 3², dipermudahkan kepada bentuk indeks 3ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai n?", answer: "3", marks: 2 },
            { label: "(b)", prompt: "Nilaikan 3ⁿ (iaitu 3⁵ ÷ 3²).", answer: "27", marks: 2 },
          ],
          solution: ["3⁵ ÷ 3² = 3⁵⁻² = 3³, jadi n = 3", "3³ = 3 × 3 × 3 = 27"],
        },
        {
          id: "B2",
          topic: "Bab 2 · Bentuk Piawai",
          isKbat: false,
          context: "Sebuah bandar mempunyai populasi 245000 orang, ditulis dalam bentuk piawai A × 10ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai A?", answer: "2.45", marks: 2 },
            { label: "(b)", prompt: "Apakah nilai n?", answer: "5", marks: 2 },
          ],
          solution: ["245000 = 2.45 × 10⁵ (titik perpuluhan digerakkan 5 tempat ke kiri)", "Jadi A = 2.45 dan n = 5"],
        },
        {
          id: "B3",
          topic: "Bab 3 · Matematik Pengguna",
          isKbat: false,
          context: "Halim melabur RM4000 pada faedah mudah 3% setahun selama 5 tahun.",
          parts: [
            { label: "(a)", prompt: "Cari faedah (RM).", answer: "600", marks: 2 },
            { label: "(b)", prompt: "Cari jumlah akhir dalam akaunnya (RM).", answer: "4600", marks: 2 },
          ],
          solution: ["I = Prt = 4000 × 0.03 × 5 = RM600", "Jumlah akhir = 4000 + 600 = RM4600"],
        },
        {
          id: "B4",
          topic: "Bab 4 · Lukisan Berskala",
          isKbat: false,
          context: "Skala sebuah peta ialah 1:20000. Jarak pada peta ialah 5 cm.",
          parts: [
            { label: "(a)", prompt: "Cari jarak sebenar (cm).", answer: "100000", marks: 2 },
            { label: "(b)", prompt: "Tukar jarak sebenar itu kepada km.", answer: "1", marks: 2 },
          ],
          solution: ["Jarak sebenar = 5 × 20000 = 100000 cm", "100000 cm = 1000 m = 1 km"],
        },
        {
          id: "B5",
          topic: "Bab 5 · Nisbah Trigonometri",
          isKbat: false,
          context: "Segi tiga bersudut tegak mempunyai sisi bertentangan θ = 9, sisi bersebelahan = 12, hipotenus = 15.",
          parts: [
            { label: "(a)", prompt: "Cari sin θ.", answer: "0.6", marks: 2 },
            { label: "(b)", prompt: "Cari tan θ.", answer: "0.75", marks: 2 },
          ],
          solution: ["sin θ = bertentangan ÷ hipotenus = 9 ÷ 15 = 0.6", "tan θ = bertentangan ÷ bersebelahan = 9 ÷ 12 = 0.75"],
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
          topic: "Bab 6 · Sudut dan Tangen bagi Bulatan (KBAT)",
          isKbat: true,
          context: "Dalam bulatan berpusat O, AC ialah diameter. B ialah titik pada lilitan dengan ∠BAC = 35°.",
          parts: [
            { label: "(a)", prompt: "Cari ∠ABC (sudut dalam semibulatan).", answer: "90", marks: 4 },
            { label: "(b)", prompt: "Cari ∠BCA (guna jumlah sudut segi tiga ABC = 180°).", answer: "55", marks: 3 },
            {
              label: "(c)",
              prompt: "D ialah titik pada lilitan menjadikan ABCD sisi empat kitaran, dengan ∠ADC bertentangan ∠ABC. Cari ∠ADC.",
              answer: "90",
              marks: 3,
            },
          ],
          solution: [
            "AC diameter, jadi ∠ABC = sudut dalam semibulatan = 90°",
            "Jumlah sudut segi tiga ABC = 180°: ∠BCA = 180 − 90 − 35 = 55°",
            "Sudut bertentangan sisi empat kitaran = 180°: ∠ADC = 180 − ∠ABC = 180 − 90 = 90°",
          ],
        },
        {
          id: "C2",
          topic: "Bab 7 · Pelan dan Dongakan (KBAT)",
          isKbat: true,
          context: "Sebuah bangunan berbentuk kuboid bertapak 15 m × 10 m, dinding setinggi 6 m, dengan bumbung piramid setinggi 2 m di atasnya.",
          parts: [
            { label: "(a)", prompt: "Cari luas pelan (tapak) bangunan itu (m²).", answer: "150", marks: 4 },
            { label: "(b)", prompt: "Cari tinggi keseluruhan dongakan hadapan (dinding + bumbung, m).", answer: "8", marks: 3 },
            { label: "(c)", prompt: "Jika bangunan dilukis pada skala 1:100, cari panjang (cm) sisi 15 m pada lukisan pelan.", answer: "15", marks: 3 },
          ],
          solution: [
            "Luas pelan = panjang × lebar = 15 × 10 = 150 m²",
            "Tinggi keseluruhan = tinggi dinding + tinggi bumbung = 6 + 2 = 8 m",
            "15 m = 1500 cm, pada skala 1:100: 1500 ÷ 100 = 15 cm",
          ],
        },
        {
          id: "C3",
          topic: "Bab 8 · Lokus dalam Dua Dimensi (KBAT)",
          isKbat: true,
          context: "Seekor lembu diikat dengan tali sepanjang 9 m pada sebatang pancang. (Gunakan π ≈ 3.14)",
          parts: [
            { label: "(a)", prompt: "Nyatakan bentuk lokus kawasan yang boleh diragut lembu itu (satu perkataan).", answer: "Bulatan", marks: 3 },
            { label: "(b)", prompt: "Cari luas kawasan meragut itu (πr², bundarkan kepada nombor bulat, m²).", answer: "254", marks: 4 },
            { label: "(c)", prompt: "Jika tali diperpanjang kepada 12 m, cari luas kawasan meragut baharu (bundarkan kepada nombor bulat, m²).", answer: "452", marks: 3 },
          ],
          solution: [
            "Jarak tetap daripada satu titik (pancang) — lokus ialah BULATAN",
            "Luas = πr² = 3.14 × 9 × 9 = 254.34, dibundarkan = 254 m²",
            "Luas baharu = 3.14 × 12 × 12 = 452.16, dibundarkan = 452 m²",
          ],
        },
        {
          id: "C4",
          topic: "Bab 9 · Garis Lurus (KBAT)",
          isKbat: true,
          context: "Garis L1: y = 2x + 3. Garis L2 melalui titik (4, 1) dan SELARI dengan L1.",
          parts: [
            { label: "(a)", prompt: "Cari kecerunan L2.", answer: "2", marks: 3 },
            { label: "(b)", prompt: "Cari nilai c (pintasan-y) bagi L2.", answer: "-7", marks: 4 },
            { label: "(c)", prompt: "Cari nilai-x pada titik persilangan L2 dengan paksi-x (iaitu apabila y = 0).", answer: "3.5", marks: 3 },
          ],
          solution: [
            "Garis selari mempunyai kecerunan SAMA: kecerunan L2 = 2",
            "y = 2x + c melalui (4,1): 1 = 2(4) + c → 1 = 8 + c → c = −7",
            "L2: y = 2x − 7. Apabila y = 0: 0 = 2x − 7 → x = 3.5",
          ],
        },
        {
          id: "C5",
          topic: "Bab 1 dan 3 · Indeks & Matematik Pengguna (KBAT)",
          isKbat: true,
          context: "Sebuah pelaburan bermula RM1000 dan berganda mengikut faktor 2 setiap 3 tahun (nilai = 1000 × 2ⁿ, dengan n = bilangan kitaran 3 tahun).",
          parts: [
            { label: "(a)", prompt: "Cari nilai pelaburan (RM) selepas 9 tahun (n = 3).", answer: "8000", marks: 4 },
            { label: "(b)", prompt: "Selepas berapa TAHUN nilai pelaburan mencapai RM16000?", answer: "12", marks: 3 },
            { label: "(c)", prompt: "Selepas 15 tahun, faktor pendaraban ialah 2ᵏ. Apakah nilai k?", answer: "5", marks: 3 },
          ],
          solution: [
            "Selepas 9 tahun, n = 9 ÷ 3 = 3: nilai = 1000 × 2³ = 1000 × 8 = RM8000",
            "RM16000 = 1000 × 2ⁿ → 2ⁿ = 16 = 2⁴ → n = 4 → tahun = 4 × 3 = 12 tahun",
            "Selepas 15 tahun, n = 15 ÷ 3 = 5, jadi k = 5",
          ],
        },
        {
          id: "C6",
          topic: "Bab 2 dan 4 · Bentuk Piawai & Lukisan Berskala (KBAT)",
          isKbat: true,
          context: "Jarak sebenar antara dua bandar ialah 4.5 × 10⁴ m. Sebuah peta menggunakan skala 1:150000.",
          parts: [
            { label: "(a)", prompt: "Tukar jarak sebenar itu kepada nombor biasa (m).", answer: "45000", marks: 3 },
            { label: "(b)", prompt: "Cari jarak pada peta (cm).", answer: "30", marks: 4 },
            { label: "(c)", prompt: "45000 ditulis sebagai 4.5 × 10ⁿ. Apakah nilai n?", answer: "4", marks: 3 },
          ],
          solution: [
            "4.5 × 10⁴ = 45000 m",
            "45000 m = 4500000 cm. Jarak pada peta = 4500000 ÷ 150000 = 30 cm",
            "45000 = 4.5 × 10⁴, jadi n = 4",
          ],
        },
      ],
    },
  ],
};
