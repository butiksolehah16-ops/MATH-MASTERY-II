// Kandungan Nota Interaktif — Form 2, Bab 8, Topik 8.2 (Graf Fungsi). DSKP
// SK 8.2: membina jadual nilai bagi fungsi linear dan bukan linear,
// seterusnya melukis graf; mentafsir graf fungsi; menyelesaikan masalah
// yang melibatkan graf fungsi.
export const notaGrafFungsiContent = {
  visualType: "function-graph",

  hook: {
    mentorLine: "Sekarang kita lukis fungsi sebagai GRAF — cara visual untuk nampak corak fungsi tu.",
    title: "Melukis Fungsi Atas Grid",
    body:
      "Untuk lukis graf sesuatu fungsi, kita bina JADUAL NILAI dahulu — pilih beberapa nilai x, kira f(x) " +
      "bagi setiap satu, kemudian plot titik-titik (x, f(x)) tu atas grid dan sambungkan.",
  },

  exploration: {
    mentorLine: "Jom plot titik demi titik bagi fungsi y = 2x + 1, kemudian sambungkan.",
    prompt: "Jadual nilai bagi y = 2x + 1: x = 0, 1, 2, 3. Klik butang untuk tambah titik satu demi satu.",
    curveType: "line",
    xMax: 4,
    yMax: 8,
    points: [
      { x: 0, y: 1 },
      { x: 1, y: 3 },
      { x: 2, y: 5 },
      { x: 3, y: 7 },
    ],
  },

  insight: {
    mentorLine: "Perasan bentuk yang terhasil bila semua titik disambungkan?",
    title: "Fungsi Linear = Garis Lurus",
    bullets: [
      "Semua titik bagi y = 2x + 1 tu jatuh atas SATU garis lurus. Ini berlaku untuk SEMUA fungsi LINEAR (berbentuk y = ax + b).",
      "Fungsi BUKAN LINEAR pula (seperti y = x², y = ax³, y = a/x) akan hasilkan LENGKUNG apabila diplot — BUKAN garis lurus.",
    ],
  },

  formula: {
    mentorLine: "Ini corak am bentuk graf ikut jenis fungsi — simpan dalam kepala kamu.",
    title: "Bentuk Graf Ikut Jenis Fungsi",
    expression: "Linear (y = ax + b): garis lurus.  Bukan linear (y = ax², ax³, a/x): lengkung.",
    bullets: [
      "Fungsi LINEAR (y = ax + b, a ≠ 0) sentiasa hasilkan GARIS LURUS bila diplot.",
      "Fungsi KUADRATIK (y = ax²) hasilkan lengkung berbentuk U (parabola). Fungsi KUBIK (y = ax³) dan SONGSANGAN (y = a/x) hasilkan lengkung dengan bentuk lain.",
      "Langkah melukis graf fungsi: (1) bina jadual nilai (pilih x, kira y), (2) plot setiap titik (x, y) atas grid, (3) sambungkan titik-titik tu mengikut bentuk semula jadi (garis lurus untuk linear, lengkung licin untuk bukan linear).",
    ],
  },

  example: {
    mentorLine: "Jom kita bina jadual dan bayangkan graf bagi fungsi bukan linear.",
    title: "Contoh Diselesaikan",
    problem: "Bina jadual nilai bagi y = x² pada x = 0, 1, 2, 3, dan huraikan bentuk grafnya.",
    steps: [
      "x = 0: y = 0² = 0. x = 1: y = 1² = 1. x = 2: y = 2² = 4. x = 3: y = 3² = 9",
      "Plot titik (0,0), (1,1), (2,4), (3,9) atas grid",
      "Sambungkan titik-titik tu — hasilnya LENGKUNG berbentuk U (sebab y = x² bukan linear)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Graf bagi fungsi linear (contohnya y = 3x + 2) sentiasa berbentuk?",
    choices: ["Garis lurus", "Bulatan", "Lengkung berbentuk U", "Zig-zag"],
    answer: "Garis lurus",
    feedbackCorrect: "Tepat! Fungsi linear (y = ax + b) sentiasa hasilkan garis lurus.",
    feedbackIncorrect: "Belum tepat. Fungsi LINEAR (y = ax + b) sentiasa hasilkan graf berbentuk garis lurus.",
  },
};
