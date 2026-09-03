// Kandungan Nota Interaktif — Form 3, Bab 2, Topik 2.2 (Bentuk Piawai). DSKP
// SK 2.2: mengenal dan menulis nombor dalam bentuk piawai; melaksanakan
// operasi asas aritmetik; menyelesaikan masalah melibatkan bentuk piawai.
export const notaBentukPiawaiContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Sekarang kita selesaikan masalah nombor yang TERLALU besar atau TERLALU kecil untuk ditulis penuh.",
    title: "Jarak ke Matahari, dan Saiz Virus",
    body:
      "Jarak dari Bumi ke Matahari lebih kurang 150 000 000 km — sembilan digit! Diameter sebiji virus " +
      "pula lebih kurang 0.00000009 m — banyak sifar selepas titik perpuluhan. Kedua-dua nombor ni SANGAT " +
      "senang tersalah kira sifar bila ditulis penuh. Ahli sains guna satu cara ringkas untuk tulis nombor " +
      "macam ni — dipanggil BENTUK PIAWAI (standard form).",
  },

  exploration: {
    mentorLine: "Jom kita lihat bagaimana kuasa 10 bertambah — perhatikan betapa PANTAS nilai sebenar berkembang berbanding kuasanya.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah kuasa n bagi 10¹, 10², 10³, dan 10⁴. Ingat: walaupun " +
      "kuasa n cuma naik SATU setiap kali, nilai SEBENAR (10ⁿ) berganda SEPULUH kali setiap kali!",
    categories: ["10¹", "10²", "10³", "10⁴"],
    values: [1, 2, 3, 4],
  },

  insight: {
    mentorLine: "Perasan tak kuasa n naik perlahan (1,2,3,4) tapi nilai sebenar 10ⁿ meletup (10, 100, 1000, 10000)?",
    title: "Bentuk Piawai = A × 10ⁿ",
    bullets: [
      "Inilah sebab BENTUK PIAWAI sangat berguna — ia tukar nombor yang PANJANG (banyak sifar) kepada satu digit bererti (A) didarab dengan kuasa 10 (10ⁿ) SAHAJA.",
      "150 000 000 ditulis sebagai 1.5 × 10⁸ — jauh lebih pendek dan senang dibaca!",
      "0.00000009 ditulis sebagai 9 × 10⁻⁸ — kuasa NEGATIF digunakan untuk nombor yang KURANG daripada 1.",
    ],
  },

  formula: {
    mentorLine: "Ini definisi rasmi bentuk piawai dan cara tukar — simpan dalam kepala kamu.",
    title: "Definisi Bentuk Piawai",
    expression: "A × 10ⁿ,  1 ≤ A < 10,  n ialah integer",
    bullets: [
      "Sesuatu nombor dalam BENTUK PIAWAI ditulis sebagai A × 10ⁿ, dengan A ialah nombor perpuluhan di antara 1 dan 10 (1 ≤ A < 10, iaitu SATU digit bukan sifar sebelum titik perpuluhan), dan n ialah INTEGER (boleh positif, negatif, atau sifar).",
      "TUKAR NOMBOR BESAR (≥ 10) kepada bentuk piawai: gerakkan titik perpuluhan ke KIRI sehingga tinggal SATU digit bukan sifar di hadapan; n = bilangan tempat titik perpuluhan digerakkan (POSITIF).",
      "TUKAR NOMBOR KECIL (di antara 0 dan 1) kepada bentuk piawai: gerakkan titik perpuluhan ke KANAN sehingga tinggal SATU digit bukan sifar di hadapan; n = bilangan tempat digerakkan, tetapi ditulis sebagai NEGATIF.",
      "OPERASI ARITMETIK dalam bentuk piawai: untuk DARAB/BAHAGI, darab/bahagi bahagian A, dan guna hukum indeks pada 10ⁿ (tambah/tolak kuasa). Untuk TAMBAH/TOLAK, tukar KEDUA-DUA nombor kepada kuasa 10 yang SAMA dahulu, kemudian tambah/tolak bahagian A sahaja.",
    ],
  },

  example: {
    mentorLine: "Jom kita tukar dan kira, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "(a) Tulis 150 000 000 dalam bentuk piawai. (b) Kirakan (2 × 10³) × (3 × 10²), nyatakan jawapan dalam bentuk piawai.",
    steps: [
      "(a) Gerakkan titik perpuluhan ke kiri sehingga SATU digit bukan sifar di hadapan: 150 000 000 → 1.5, " +
      "digerakkan 8 tempat → 1.5 × 10⁸",
      "(b) Darabkan bahagian A: 2 × 3 = 6. Tambahkan kuasa 10 (hukum indeks): 10³ × 10² = 10³⁺² = 10⁵",
      "Gabungkan: (2 × 10³) × (3 × 10²) = 6 × 10⁵",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Tulis 0.00045 dalam bentuk piawai.",
    choices: ["4.5 × 10⁻⁴", "4.5 × 10⁴", "45 × 10⁻⁵", "0.45 × 10⁻³"],
    answer: "4.5 × 10⁻⁴",
    feedbackCorrect: "Tepat! Titik perpuluhan digerakkan 4 tempat ke kanan (nombor < 1), jadi kuasa 10 negatif: 4.5 × 10⁻⁴.",
    feedbackIncorrect: "Belum tepat. Untuk nombor kurang daripada 1, gerakkan titik ke KANAN dan guna kuasa 10 NEGATIF, dengan A di antara 1 dan 10.",
  },
};
