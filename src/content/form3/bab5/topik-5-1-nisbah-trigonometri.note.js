// Kandungan Nota Interaktif — Form 3, Bab 5, Topik 5.1 (Sinus, Kosinus dan
// Tangen bagi Sudut Tirus dalam Segi Tiga Bersudut Tegak). DSKP SK 5.1:
// mengenal pasti sisi bertentangan/bersebelahan; mentakrifkan sinus, kosinus,
// tangen; kesan perubahan sudut; nilai bagi 30°/45°/60°; pengiraan dan
// penyelesaian masalah (termasuk objek 3D, sudut dongak/tunduk).
export const notaNisbahTrigonometriContent = {
  visualType: "trig-ratio",

  hook: {
    mentorLine: "Bab baharu — TRIGONOMETRI! Ini salah satu topik PALING penting dalam SPM. Jom mula dengan situasi sebenar.",
    title: "Mengukur Tinggi Pokok Tanpa Panjat",
    body:
      "Seorang pengembara nak tahu tinggi sebatang pokok, tapi tak boleh panjat untuk ukur terus. Dia berdiri " +
      "15 meter dari kaki pokok, dan ukur SUDUT DONGAK (angle of elevation) dari matanya ke pucuk pokok " +
      "ialah 45°. Menariknya — daripada sudut dan jarak SAHAJA, dia boleh KIRA tinggi pokok tanpa panjat " +
      "langsung! Rahsianya: NISBAH TRIGONOMETRI.",
  },

  exploration: {
    mentorLine: "Jom kita kenal pasti setiap bahagian segi tiga bersudut tegak, relatif kepada sudut tirus θ.",
    prompt:
      "Klik \"Dedah bahagian seterusnya\" untuk kenali sudut tirus θ dan tiga sisi segi tiga bersudut tegak: " +
      "sisi bertentangan, sisi bersebelahan, dan hipotenus — SEMUA ditentukan RELATIF kepada θ.",
  },

  insight: {
    mentorLine: "Perasan yang setiap sisi dinamakan RELATIF kepada kedudukan sudut θ?",
    title: "SOH-CAH-TOA",
    bullets: [
      "Dalam segi tiga bersudut tegak, RELATIF kepada sudut tirus θ (bukan sudut tegak): SISI BERTENTANGAN (opposite) ialah sisi yang TIDAK menyentuh θ. SISI BERSEBELAHAN (adjacent) ialah sisi yang MENYENTUH θ (tapi BUKAN hipotenus). HIPOTENUS (hypotenuse) ialah sisi TERPANJANG, bertentangan dengan sudut tegak (90°) — sisi ni TETAP sama tak kira sudut θ yang mana kita rujuk.",
      "TIGA NISBAH TRIGONOMETRI ditakrifkan daripada tiga sisi ni — mudah ingat guna singkatan SOH-CAH-TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.",
    ],
  },

  formula: {
    mentorLine: "Ini definisi rasmi tiga nisbah trigonometri, dan nilai istimewa bagi 30°/45°/60° — rujuk semula bila perlu.",
    title: "Nisbah Trigonometri",
    expression: "sin θ = dtg/hip     kos θ = bsb/hip     tan θ = dtg/bsb",
    bullets: [
      "sin θ = (sisi bertentangan) ÷ (hipotenus). kos θ = (sisi bersebelahan) ÷ (hipotenus). tan θ = (sisi bertentangan) ÷ (sisi bersebelahan).",
      "PERKAITAN PENTING: tan θ = sin θ ÷ kos θ (boleh diterbitkan terus daripada tiga definisi di atas).",
      "KESAN PERUBAHAN SUDUT: apabila sudut θ MEMBESAR (dari 0° ke 90°), nilai sin θ dan tan θ BERTAMBAH (semakin besar), manakala nilai kos θ BERKURANG (semakin kecil).",
      "NILAI ISTIMEWA (WAJIB HAFAL) — θ = 30°: sin = 1/2, kos = √3/2, tan = 1/√3 (= √3/3).",
      "θ = 45°: sin = 1/√2 (= √2/2), kos = 1/√2, tan = 1.",
      "θ = 60°: sin = √3/2, kos = 1/2, tan = √3.",
      "SONGSANGAN (inverse): untuk cari SUDUT daripada nilai nisbah, guna kalkulator dengan tatatanda sin⁻¹, kos⁻¹, tan⁻¹. Cth: jika sin θ = 0.5, maka θ = sin⁻¹(0.5) = 30°.",
      "SUDUT DONGAK (angle of elevation) ialah sudut diukur ke ATAS daripada garis mendatar. SUDUT TUNDUK (angle of depression) ialah sudut diukur ke BAWAH daripada garis mendatar.",
    ],
  },

  example: {
    mentorLine: "Jom kita selesaikan masalah tinggi pokok tadi, dan satu lagi contoh nisbah asas.",
    title: "Contoh Diselesaikan",
    problem:
      "(a) Pengembara berdiri 15 m dari kaki pokok, sudut dongak ke pucuk ialah 45°. Cari tinggi pokok. " +
      "(b) Dalam segi tiga bersudut tegak, sisi bertentangan θ = 3, sisi bersebelahan = 4, hipotenus = 5. " +
      "Cari sin θ.",
    steps: [
      "(a) Relatif kepada sudut dongak 45°: sisi bertentangan = tinggi pokok (tak diketahui), sisi " +
      "bersebelahan = 15 m (jarak mendatar)",
      "tan 45° = tinggi ÷ 15, dan tan 45° = 1, jadi tinggi = 1 × 15 = 15 m",
      "(b) sin θ = sisi bertentangan ÷ hipotenus = 3 ÷ 5 = 0.6",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dalam segi tiga bersudut tegak, sisi bersebelahan θ = 4, hipotenus = 5. Apakah nilai kos θ?",
    choices: ["0.8", "0.6", "1.25", "0.4"],
    answer: "0.8",
    feedbackCorrect: "Tepat! kos θ = bersebelahan ÷ hipotenus = 4 ÷ 5 = 0.8.",
    feedbackIncorrect: "Belum tepat. kos θ = sisi bersebelahan ÷ hipotenus = 4 ÷ 5.",
  },
};
