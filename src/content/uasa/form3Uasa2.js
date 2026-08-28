// Kertas Ujian UASA Percubaan #2 — Matematik Tingkatan 3. Format sama seperti
// Set 1 (Bahagian A/B/C, 100 markah, 31 soalan, 120 minit), merentasi SEMUA
// 9 bab, dengan nombor dan konteks BERBEZA daripada Set 1 supaya benar-benar
// latihan bercampur, bukan hafalan jawapan.
export const form3UasaPaper2 = {
  id: "form3-uasa-2",
  formId: "form3",
  examTypeLabel: "UASA",
  title: "Ujian UASA Percubaan (Set 2)",
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
        { id: "A1", topic: "Bab 1 · Indeks", marks: 1, prompt: "Nilaikan 2⁶.", choices: ["64", "12", "32", "36"], answer: "64" },
        { id: "A2", topic: "Bab 1 · Indeks", marks: 1, prompt: "Permudahkan 4³ × 4² dalam bentuk indeks.", choices: ["4⁵", "4⁶", "4¹", "16⁵"], answer: "4⁵" },
        { id: "A3", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Berapakah bilangan angka bererti dalam 3.050?", choices: ["4", "3", "2", "5"], answer: "4" },
        { id: "A4", topic: "Bab 2 · Bentuk Piawai", marks: 1, prompt: "Tulis 0.0068 dalam bentuk piawai.", choices: ["6.8 × 10⁻³", "6.8 × 10³", "68 × 10⁻⁴", "6.8 × 10⁻²"], answer: "6.8 × 10⁻³" },
        { id: "A5", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Kirakan faedah mudah bagi P=RM5000, r=6% setahun, t=2 tahun.", choices: ["RM600", "RM300", "RM5600", "RM1200"], answer: "RM600" },
        { id: "A6", topic: "Bab 3 · Matematik Pengguna", marks: 1, prompt: "Pinjaman RM2500 pada faedah sama rata 8% setahun selama 2 tahun. Cari jumlah bayaran balik A.", choices: ["RM2900", "RM400", "RM2500", "RM2800"], answer: "RM2900" },
        { id: "A7", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Skala 1:25. Ukuran lukisan 4 cm. Apakah ukuran sebenar?", choices: ["100 cm", "29 cm", "21 cm", "6.25 cm"], answer: "100 cm" },
        { id: "A8", topic: "Bab 4 · Lukisan Berskala", marks: 1, prompt: "Ukuran sebenar 900 cm dilukis sebagai 3 cm. Apakah skala?", choices: ["1:300", "300:1", "1:3", "1:900"], answer: "1:300" },
        { id: "A9", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Segi tiga bersudut tegak: bersebelahan θ = 8, hipotenus = 10. Cari kos θ.", choices: ["0.8", "0.6", "1.25", "0.4"], answer: "0.8" },
        { id: "A10", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apakah nilai sin 30°?", choices: ["0.5", "1", "0.87", "0.71"], answer: "0.5" },
        { id: "A11", topic: "Bab 5 · Nisbah Trigonometri", marks: 1, prompt: "Apakah nilai tan 60° (bundarkan kepada 2 tempat perpuluhan)?", choices: ["1.73", "0.58", "1", "0.5"], answer: "1.73" },
        { id: "A12", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "Sudut pusat dicangkum lengkok PQ ialah 110°. Cari sudut lilitan dicangkum lengkok yang sama.", choices: ["55°", "220°", "27.5°", "110°"], answer: "55°" },
        { id: "A13", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "Dua sudut lilitan dicangkum lengkok yang sama. Jika satu sudut ialah 47°, apakah sudut satu lagi?", choices: ["47°", "94°", "23.5°", "133°"], answer: "47°" },
        { id: "A14", topic: "Bab 6 · Sudut dan Tangen bagi Bulatan", marks: 1, prompt: "Bulatan berjejari 5 cm, titik luar T dengan OT = 13 cm. Cari panjang tangen TP.", choices: ["12 cm", "18 cm", "8 cm", "14 cm"], answer: "12 cm" },
        { id: "A15", topic: "Bab 7 · Pelan dan Dongakan", marks: 1, prompt: "Kuboid 6 cm × 4 cm × 2 cm. Cari luas unjuran dari HADAPAN (panjang × tinggi).", choices: ["12 cm²", "24 cm²", "8 cm²", "48 cm²"], answer: "12 cm²" },
        { id: "A16", topic: "Bab 7 · Pelan dan Dongakan", marks: 1, prompt: "PELAN sesuatu objek ialah pandangan daripada arah mana?", choices: ["Atas", "Hadapan", "Sisi", "Bawah"], answer: "Atas" },
        { id: "A17", topic: "Bab 8 · Lokus dalam Dua Dimensi", marks: 1, prompt: "Apakah bentuk lokus titik berjarak TETAP daripada satu garis lurus?", choices: ["Dua garis selari", "Bulatan", "Satu garis", "Pembahagi sudut"], answer: "Dua garis selari" },
        { id: "A18", topic: "Bab 8 · Lokus dalam Dua Dimensi", marks: 1, prompt: "Apakah bentuk lokus titik SAMA JARAK daripada dua garis lurus yang bersilang?", choices: ["Pembahagi dua sama sudut", "Bulatan", "Satu garis selari", "Dua bulatan"], answer: "Pembahagi dua sama sudut" },
        { id: "A19", topic: "Bab 9 · Garis Lurus", marks: 1, prompt: "Cari kecerunan garis yang melalui (1, 3) dan (4, 12).", choices: ["3", "9", "0.33", "4"], answer: "3" },
        { id: "A20", topic: "Bab 9 · Garis Lurus", marks: 1, prompt: "Garis y = 5x − 2 dan y = 5x + 9 — adakah kedua-dua garis ini SELARI?", choices: ["Ya, kecerunan kedua-duanya 5", "Tidak", "Tidak dapat ditentukan", "Ya, sebab c sama"], answer: "Ya, kecerunan kedua-duanya 5" },
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
          context: "Diberi ungkapan 2⁴ × 2³, dipermudahkan kepada bentuk indeks 2ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai n?", answer: "7", marks: 2 },
            { label: "(b)", prompt: "Nilaikan 2ⁿ.", answer: "128", marks: 2 },
          ],
          solution: ["2⁴ × 2³ = 2⁴⁺³ = 2⁷, jadi n = 7", "2⁷ = 128"],
        },
        {
          id: "B2",
          topic: "Bab 2 · Bentuk Piawai",
          isKbat: false,
          context: "Sebuah negara mempunyai kawasan seluas 132000 km², ditulis dalam bentuk piawai A × 10ⁿ.",
          parts: [
            { label: "(a)", prompt: "Apakah nilai A?", answer: "1.32", marks: 2 },
            { label: "(b)", prompt: "Apakah nilai n?", answer: "5", marks: 2 },
          ],
          solution: ["132000 = 1.32 × 10⁵ (titik perpuluhan digerakkan 5 tempat ke kiri)", "Jadi A = 1.32 dan n = 5"],
        },
        {
          id: "B3",
          topic: "Bab 3 · Matematik Pengguna",
          isKbat: false,
          context: "Aini melabur RM3500 pada faedah mudah 4% setahun selama 4 tahun.",
          parts: [
            { label: "(a)", prompt: "Cari faedah (RM).", answer: "560", marks: 2 },
            { label: "(b)", prompt: "Cari jumlah akhir dalam akaunnya (RM).", answer: "4060", marks: 2 },
          ],
          solution: ["I = Prt = 3500 × 0.04 × 4 = RM560", "Jumlah akhir = 3500 + 560 = RM4060"],
        },
        {
          id: "B4",
          topic: "Bab 4 · Lukisan Berskala",
          isKbat: false,
          context: "Skala sebuah pelan ialah 1:15000. Jarak pada pelan ialah 6 cm.",
          parts: [
            { label: "(a)", prompt: "Cari jarak sebenar (cm).", answer: "90000", marks: 2 },
            { label: "(b)", prompt: "Tukar jarak sebenar itu kepada m.", answer: "900", marks: 2 },
          ],
          solution: ["Jarak sebenar = 6 × 15000 = 90000 cm", "90000 cm = 900 m"],
        },
        {
          id: "B5",
          topic: "Bab 5 · Nisbah Trigonometri",
          isKbat: false,
          context: "Segi tiga bersudut tegak mempunyai sisi bertentangan θ = 7, sisi bersebelahan = 24, hipotenus = 25.",
          parts: [
            { label: "(a)", prompt: "Cari kos θ.", answer: "0.96", marks: 2 },
            { label: "(b)", prompt: "Cari tan θ (bundarkan kepada 2 tempat perpuluhan).", answer: "0.29", marks: 2 },
          ],
          solution: ["kos θ = bersebelahan ÷ hipotenus = 24 ÷ 25 = 0.96", "tan θ = bertentangan ÷ bersebelahan = 7 ÷ 24 = 0.2917, dibundarkan = 0.29"],
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
          context: "Tangen TA menyentuh bulatan berpusat O berjejari 8 cm pada titik A. T ialah titik luar dengan OT = 17 cm.",
          parts: [
            { label: "(a)", prompt: "Cari panjang tangen TA (cm).", answer: "15", marks: 4 },
            { label: "(b)", prompt: "Perentas AB dilukis daripada A, dengan sudut TAB = 42°. Guna teorem sudut tembereng selang-seli, cari sudut ACB (C pada tembereng selang-seli).", answer: "42", marks: 3 },
            { label: "(c)", prompt: "Jika ABCD ialah sisi empat kitaran dengan ∠C = ∠ACB = 42°, cari ∠A.", answer: "138", marks: 3 },
          ],
          solution: [
            "OA ⊥ TA, jadi TA² = OT² − OA² = 17² − 8² = 289 − 64 = 225, TA = 15 cm",
            "Teorem sudut tembereng selang-seli: sudut ACB = sudut TAB = 42°",
            "Sudut bertentangan sisi empat kitaran = 180°: ∠A = 180 − 42 = 138°",
          ],
        },
        {
          id: "C2",
          topic: "Bab 7 · Pelan dan Dongakan (KBAT)",
          isKbat: true,
          context: "Sebuah stor berbentuk kuboid bertapak 12 m × 8 m, dinding setinggi 5 m, dengan bumbung piramid setinggi 3 m di atasnya.",
          parts: [
            { label: "(a)", prompt: "Cari luas pelan (tapak) stor itu (m²).", answer: "96", marks: 4 },
            { label: "(b)", prompt: "Cari tinggi keseluruhan dongakan hadapan (dinding + bumbung, m).", answer: "8", marks: 3 },
            { label: "(c)", prompt: "Jika stor dilukis pada skala 1:200, cari panjang (cm) sisi 12 m pada lukisan pelan.", answer: "6", marks: 3 },
          ],
          solution: [
            "Luas pelan = 12 × 8 = 96 m²",
            "Tinggi keseluruhan = 5 + 3 = 8 m",
            "12 m = 1200 cm, pada skala 1:200: 1200 ÷ 200 = 6 cm",
          ],
        },
        {
          id: "C3",
          topic: "Bab 8 · Lokus dalam Dua Dimensi (KBAT)",
          isKbat: true,
          context: "Seekor kambing diikat dengan tali sepanjang 11 m pada sebatang pancang. (Gunakan π ≈ 3.14)",
          parts: [
            { label: "(a)", prompt: "Nyatakan bentuk lokus kawasan yang boleh diragut kambing itu (satu perkataan).", answer: "Bulatan", marks: 3 },
            { label: "(b)", prompt: "Cari luas kawasan meragut itu (bundarkan kepada nombor bulat, m²).", answer: "380", marks: 4 },
            { label: "(c)", prompt: "Jika tali dipendekkan kepada 7 m, cari luas kawasan meragut baharu (bundarkan kepada nombor bulat, m²).", answer: "154", marks: 3 },
          ],
          solution: [
            "Jarak tetap daripada satu titik (pancang) — lokus ialah BULATAN",
            "Luas = πr² = 3.14 × 11 × 11 = 379.94, dibundarkan = 380 m²",
            "Luas baharu = 3.14 × 7 × 7 = 153.86, dibundarkan = 154 m²",
          ],
        },
        {
          id: "C4",
          topic: "Bab 9 · Garis Lurus (KBAT)",
          isKbat: true,
          context: "Garis L1 melalui titik (2, 5) dan (6, 13). Garis L2 SELARI dengan L1 dan melalui titik (3, 4).",
          parts: [
            { label: "(a)", prompt: "Cari kecerunan L1.", answer: "2", marks: 3 },
            { label: "(b)", prompt: "Cari nilai c (pintasan-y) bagi L2.", answer: "-2", marks: 4 },
            { label: "(c)", prompt: "Guna persamaan L2, cari nilai-y apabila x = 5.", answer: "8", marks: 3 },
          ],
          solution: [
            "Kecerunan L1 = (13 − 5) ÷ (6 − 2) = 8 ÷ 4 = 2",
            "L2 selari, jadi kecerunan L2 = 2. y = 2x + c melalui (3,4): 4 = 2(3) + c → c = −2",
            "L2: y = 2x − 2. Apabila x = 5: y = 2(5) − 2 = 8",
          ],
        },
        {
          id: "C5",
          topic: "Bab 1 dan 3 · Indeks & Matematik Pengguna (KBAT)",
          isKbat: true,
          context: "Sebuah simpanan bermula RM800 dan berganda mengikut faktor 3 setiap 2 tahun (nilai = 800 × 3ⁿ, dengan n = bilangan kitaran 2 tahun).",
          parts: [
            { label: "(a)", prompt: "Cari nilai simpanan (RM) selepas 6 tahun (n = 3).", answer: "21600", marks: 4 },
            { label: "(b)", prompt: "Selepas berapa TAHUN nilai simpanan mencapai RM7200?", answer: "4", marks: 3 },
            { label: "(c)", prompt: "Selepas 10 tahun, faktor pendaraban ialah 3ᵏ. Apakah nilai k?", answer: "5", marks: 3 },
          ],
          solution: [
            "Selepas 6 tahun, n = 6 ÷ 2 = 3: nilai = 800 × 3³ = 800 × 27 = RM21600",
            "RM7200 = 800 × 3ⁿ → 3ⁿ = 9 = 3² → n = 2 → tahun = 2 × 2 = 4 tahun",
            "Selepas 10 tahun, n = 10 ÷ 2 = 5, jadi k = 5",
          ],
        },
        {
          id: "C6",
          topic: "Bab 2 dan 4 · Bentuk Piawai & Lukisan Berskala (KBAT)",
          isKbat: true,
          context: "Jarak sebenar antara dua bandar ialah 2.4 × 10⁴ m. Sebuah peta menggunakan skala 1:80000.",
          parts: [
            { label: "(a)", prompt: "Tukar jarak sebenar itu kepada nombor biasa (m).", answer: "24000", marks: 3 },
            { label: "(b)", prompt: "Cari jarak pada peta (cm).", answer: "30", marks: 4 },
            { label: "(c)", prompt: "24000 ditulis sebagai 2.4 × 10ⁿ. Apakah nilai n?", answer: "4", marks: 3 },
          ],
          solution: [
            "2.4 × 10⁴ = 24000 m",
            "24000 m = 2400000 cm. Jarak pada peta = 2400000 ÷ 80000 = 30 cm",
            "24000 = 2.4 × 10⁴, jadi n = 4",
          ],
        },
      ],
    },
  ],
};
