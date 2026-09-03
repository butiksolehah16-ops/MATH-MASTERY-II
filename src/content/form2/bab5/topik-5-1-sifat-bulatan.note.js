// Kandungan Nota Interaktif — Form 2, Bab 5, Topik 5.1 (Sifat Bulatan).
// DSKP SK 5.1: mengenal bahagian bulatan dan menerangkan sifat bulatan;
// membina suatu bulatan dan bahagian bulatan berdasarkan syarat yang diberi.
export const notaSifatBulatanContent = {
  visualType: "circle-parts",

  hook: {
    mentorLine: "Bab baharu — kita terokai BULATAN! Jom mula dengan situasi sebenar.",
    title: "Taman Bulat di Kompleks Perumahan",
    body:
      "Pihak berkuasa nak bina taman berbentuk bulatan lengkap dengan pancutan air tepat di tengah, laluan " +
      "berjalan mengelilingi taman, dan beberapa kawasan rumput berbentuk \"sekeping pizza\" untuk aktiviti " +
      "berbeza. Untuk rancang semua ni dengan tepat, kita perlu kenal NAMA setiap bahagian dalam sebuah " +
      "bulatan dahulu.",
  },

  exploration: {
    mentorLine: "Jom kita dedah setiap bahagian bulatan satu demi satu.",
    prompt:
      "Klik \"Dedah bahagian seterusnya\" untuk kenali setiap bahagian bulatan: pusat, jejari, diameter, " +
      "perentas, lengkok, sektor, dan tembereng.",
    parts: ["center", "radius", "diameter", "chord", "arc", "sector", "segment"],
  },

  insight: {
    mentorLine: "Perasan macam mana setiap bahagian ada peranan berbeza?",
    title: "Tujuh Bahagian Utama Bulatan",
    bullets: [
      "PUSAT (centre) — titik tetap di tengah bulatan, SAMA JARAK daripada semua titik pada lilitan (circumference, iaitu sempadan bulatan).",
      "JEJARI (radius) — garis dari pusat ke mana-mana titik pada lilitan; SEMUA jejari dalam bulatan yang sama adalah SAMA PANJANG.",
      "DIAMETER — garis lurus melalui pusat, menyambung dua titik bertentangan pada lilitan (diameter = 2 × jejari).",
      "PERENTAS (chord) — garis lurus menyambung DUA titik pada lilitan TANPA melalui pusat (diameter sebenarnya perentas terpanjang yang mungkin).",
      "LENGKOK (arc) — sebahagian daripada lilitan bulatan.",
      "SEKTOR (sector) — kawasan yang dibatasi oleh DUA jejari dan satu lengkok (macam sekeping pizza).",
      "TEMBERENG (segment) — kawasan yang dibatasi oleh SATU perentas dan SATU lengkok. BEZA dengan sektor: tembereng TAK melalui pusat langsung.",
      "MINOR vs MAJOR — lengkok, sektor DAN tembereng setiap satu boleh dibahagi kepada bahagian LEBIH KECIL (minor) dan LEBIH BESAR (major) — bandingkan dengan SEPARUH bulatan untuk tentukan mana satu.",
    ],
  },

  formula: {
    mentorLine: "Ini perkaitan rasmi antara jejari dan diameter — simpan dalam kepala kamu.",
    title: "Formula Rasmi",
    expression: "Diameter = 2 × Jejari",
    body:
      "Sebab diameter merentasi bulatan MELALUI pusat, ia sebenarnya terdiri daripada DUA jejari yang " +
      "disambung (satu ke setiap arah daripada pusat). Jadi diameter SENTIASA dua kali ganda jejari, tak " +
      "kira besar mana bulatan tersebut. Songsangannya: Jejari = Diameter ÷ 2.",
  },

  example: {
    mentorLine: "Jom kita cuba satu lagi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Sebuah bulatan mempunyai jejari 9 cm. Berapakah diameternya?",
    steps: ["Gunakan formula: Diameter = 2 × Jejari", "Diameter = 2 × 9", "= 18 cm"],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebuah bulatan mempunyai diameter 24 cm. Berapakah jejarinya?",
    choices: ["12", "48", "6", "24"],
    answer: "12",
    feedbackCorrect: "Tepat! Jejari = Diameter ÷ 2 = 24 ÷ 2 = 12.",
    feedbackIncorrect: "Belum tepat. Guna Jejari = Diameter ÷ 2: 24 ÷ 2.",
  },
};
