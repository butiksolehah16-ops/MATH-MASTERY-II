// Kandungan Nota Interaktif — Form 3, Bab 7, Topik 7.1 (Unjuran Ortogon).
// DSKP SK 7.1: melukis unjuran ortogon; membanding dan membeza antara objek
// dan unjuran ortogon yang sepadan.
export const notaUnjuranOrtogonContent = {
  visualType: "cube-net",

  hook: {
    mentorLine: "Bab baharu — kita belajar cara lukis objek TIGA DIMENSI supaya boleh dilihat dalam DUA DIMENSI, TEPAT ikut skala.",
    title: "Bayang Kotak di Bawah Cahaya Lurus",
    body:
      "Bayangkan cahaya lampu yang SANGAT jauh (sinar selari) menyuluh LURUS ke atas sebuah kotak (kuboid), " +
      "dan bayang yang terbentuk pada dinding di belakangnya. Bayang tu TIDAK ada \"kedalaman\" — ia cuma " +
      "bentuk RATA (2D) yang mewakili pandangan kotak dari SATU arah sahaja. Inilah konsep UNJURAN ORTOGON " +
      "(orthogonal projection).",
  },

  exploration: {
    mentorLine: "Jom kita lihat bagaimana bentuk 3D 'dibuka' menjadi beberapa pandangan rata (2D) — konsep asas yang sama digunakan untuk unjuran.",
    prompt: "Klik \"Dedah muka seterusnya\" untuk lihat bagaimana bentuk tiga dimensi diwakili oleh beberapa permukaan rata (2D).",
  },

  insight: {
    mentorLine: "Perasan setiap 'muka' 2D tu mewakili SATU pandangan sahaja daripada bentuk 3D asal?",
    title: "Unjuran Ortogon = Pandangan Rata dari SATU Arah",
    bullets: [
      "UNJURAN ORTOGON ialah pandangan DUA DIMENSI (rata) bagi sesuatu objek TIGA DIMENSI, dihasilkan dengan \"mengunjur\" (project) SETIAP titik pada objek secara SERENJANG (tegak lurus, 90°) ke atas satu SATAH (permukaan rata) pandangan. Terdapat dua jenis satah utama: SATAH MENCANCANG (vertical plane — untuk pandangan HADAPAN dan SISI) dan SATAH MENGUFUK (horizontal plane — untuk pandangan ATAS/pelan).",
      "MEMBANDING objek 3D dengan unjuran ortogonnya: objek SEBENAR ada TIGA dimensi (panjang, lebar, tinggi) dan kelihatan berbeza bentuk ikut arah kita pandang. Unjuran ortogon pula HANYA tunjukkan DUA daripada tiga dimensi tu (dimensi \"kedalaman\" ke arah pandangan HILANG/dimampatkan menjadi rata).",
      "Itu sebab kita perlukan LEBIH DARIPADA SATU unjuran (cth. pandangan hadapan + pandangan atas) untuk gambarkan bentuk 3D SEPENUHNYA di atas kertas rata.",
    ],
  },

  formula: {
    mentorLine: "Ini prinsip rasmi unjuran ortogon — simpan dalam kepala kamu.",
    title: "Prinsip Unjuran Ortogon",
    expression: "Unjuran = Pandangan objek diunjur SERENJANG ke satah pandangan",
    bullets: [
      "Untuk lukis unjuran ortogon: (1) Tentukan ARAH pandangan (cth. dari hadapan, dari atas, dari sisi). (2) Unjurkan SETIAP bucu/tepi objek secara SERENJANG ke satah pandangan tersebut (bayangkan garis lurus 90° daripada setiap titik objek terus ke satah). (3) Sambungkan titik-titik yang terunjur untuk bentuk rangka 2D.",
      "Panjang dan sudut YANG SELARI dengan satah pandangan dikekalkan TEPAT dalam unjuran; dimensi yang TEGAK LURUS dengan satah pandangan (\"kedalaman\") TIDAK kelihatan dalam unjuran tersebut.",
    ],
  },

  example: {
    mentorLine: "Jom kita bandingkan unjuran hadapan dan unjuran atas bagi sebuah kuboid.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah kuboid berukuran panjang 6 cm, lebar 4 cm, tinggi 3 cm. Huraikan bentuk unjuran ortogon (a) dari HADAPAN, dan (b) dari ATAS.",
    steps: [
      "(a) Pandangan dari HADAPAN nampak dimensi panjang dan tinggi (lebar 'hilang' ke arah kedalaman) — " +
      "unjuran ialah segi empat tepat 6 cm × 3 cm",
      "(b) Pandangan dari ATAS nampak dimensi panjang dan lebar (tinggi 'hilang' ke arah kedalaman) — " +
      "unjuran ialah segi empat tepat 6 cm × 4 cm",
      "Perhatikan: KEDUA-DUA unjuran diperlukan bersama untuk gambarkan SEMUA tiga dimensi kuboid tu",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Unjuran ortogon ialah pandangan objek diunjur ke satah pandangan pada sudut berapa darjah?",
    choices: ["90°", "45°", "60°", "180°"],
    answer: "90°",
    feedbackCorrect: "Tepat! Unjuran ortogon diunjur SERENJANG (90°) ke satah pandangan.",
    feedbackIncorrect: "Belum tepat. \"Ortogon\" bermaksud SERENJANG — unjuran mesti pada sudut 90° ke satah pandangan.",
  },
};
