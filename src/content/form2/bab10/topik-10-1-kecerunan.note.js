// Kandungan Nota Interaktif — Form 2, Bab 10, Topik 10.1 (Kecerunan). DSKP
// SK 10.1: memerihalkan kecuraman dan arah kecondongan, menerangkan maksud
// kecerunan, menerbitkan rumus kecerunan, membuat generalisasi tentang
// kecerunan, menentukan kecerunan suatu garis lurus, menyelesaikan masalah
// yang melibatkan kecerunan garis lurus.
export const notaKecerunanContent = {
  visualType: "coordinate-plane",

  hook: {
    mentorLine: "Pernah perasan sesetengah tanjakan/lorong lebih CURAM daripada yang lain? Itu semua pasal KECERUNAN.",
    title: "Tanjakan Mana Lebih Curam?",
    body:
      "Sebuah tanjakan (ramp) dibina untuk kerusi roda. Untuk pastikan ia selamat digunakan, jurutera perlu " +
      "ukur betapa CURAM tanjakan tu — iaitu KECERUNANnya. Kecerunan ialah nisbah jarak MENCANCANG (naik) " +
      "kepada jarak MENGUFUK (mendatar).",
  },

  exploration: {
    mentorLine: "Jom dedah dx dan dy garis AB, kemudian kira kecerunannya.",
    prompt: "Garis lurus melalui A(1, 2) dan B(5, 6). Klik butang untuk dedah dx, dy, kemudian kecerunan garis tu.",
    mode: "gradient",
    pointA: { x: 1, y: 2, label: "A" },
    pointB: { x: 5, y: 6, label: "B" },
  },

  insight: {
    mentorLine: "Perasan kecerunan tu sebenarnya nisbah dy berbanding dx?",
    title: "Kecerunan = Jarak Mencancang ÷ Jarak Mengufuk",
    body:
      "Garis AB naik 4 unit (dy) untuk setiap 4 unit ke kanan (dx), jadi kecerunannya = 4 ÷ 4 = 1. Semakin " +
      "BESAR nilai mutlak kecerunan, semakin CURAM garis tu. TANDA kecerunan (positif/negatif) tunjukkan " +
      "ARAH kecondongan: POSITIF = garis naik dari kiri ke kanan, NEGATIF = garis turun dari kiri ke kanan.",
  },

  formula: {
    mentorLine: "Ini rumus rasmi kecerunan — simpan dalam kepala kamu.",
    title: "Rumus Kecerunan",
    expression: "m = (y₂ − y₁) ÷ (x₂ − x₁)",
    body:
      "Bagi garis lurus melalui A(x₁, y₁) dan B(x₂, y₂), kecerunan m = (y₂ − y₁) ÷ (x₂ − x₁). KES KHAS: " +
      "garis MENDATAR (selari paksi-x) ada kecerunan m = 0 (tiada perubahan-y). Garis MENCANCANG (selari " +
      "paksi-y) kecerunannya TIDAK TERTAKRIF (dx = 0, tak boleh bahagi dengan sifar). Garis melalui ASALAN " +
      "(0,0) ringkaskan pengiraan sebab x₁ = y₁ = 0.",
  },

  example: {
    mentorLine: "Jom kita kira kecerunan garis yang TURUN (kecerunan negatif), langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Cari kecerunan garis lurus melalui P(1, 8) dan Q(5, 4).",
    steps: [
      "dy = y₂ − y₁ = 4 − 8 = −4",
      "dx = x₂ − x₁ = 5 − 1 = 4",
      "m = dy ÷ dx = −4 ÷ 4 = −1 (garis TURUN dari kiri ke kanan)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Cari kecerunan garis lurus melalui (0, 0) dan (3, 9).",
    choices: ["3", "1/3", "9", "6"],
    answer: "3",
    feedbackCorrect: "Tepat! m = (9 − 0) ÷ (3 − 0) = 9 ÷ 3 = 3.",
    feedbackIncorrect: "Belum tepat. Guna m = (y₂ − y₁) ÷ (x₂ − x₁) = (9 − 0) ÷ (3 − 0).",
  },
};
