// Kandungan Nota Interaktif — Bab 11, Topik 11.2 (Gambar Rajah Venn, Set
// Semesta, Pelengkap bagi Suatu Set dan Subset).
// Fokus: gambar rajah Venn, set semesta (ξ), pelengkap (A'), subset (⊆).
export const notaVennSubsetContent = {
  visualType: "venn-complement",

  hook: {
    mentorLine: "Kita dah faham set — sekarang jom lukis SET dalam bentuk GAMBAR RAJAH.",
    title: "Nombor 1 hingga 10",
    body:
      "Set semesta ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. Set A = {nombor genap dalam ξ} = {2, 4, 6, 8, 10}. " +
      "Apakah unsur-unsur yang TIADA dalam A?",
  },

  exploration: {
    mentorLine: "Jom kita letak setiap unsur ξ — sama ada dalam bulatan A, atau di luar bulatan.",
    prompt: "Klik \"Letak unsur seterusnya\" untuk letak semua unsur ξ ke tempat yang betul.",
    universalElements: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    setElements: ["2", "4", "6", "8", "10"],
  },

  insight: {
    mentorLine: "Perasan macam mana unsur yang BUKAN ahli A terletak di luar bulatan?",
    title: "Gambar Rajah Venn!",
    bullets: [
      "Rajah macam ni dipanggil GAMBAR RAJAH VENN.",
      "SET SEMESTA (ξ) ialah set yang mengandungi SEMUA unsur yang dibincangkan (segi empat besar).",
      "PELENGKAP bagi set A (ditulis A′) ialah SEMUA unsur dalam ξ yang TIDAK berada dalam A (kawasan luar bulatan).",
    ],
  },

  formula: {
    mentorLine: "Ini konsep rasmi yang kau akan guna sepanjang topik ni — simpan dalam kepala.",
    title: "Formula Rasmi",
    expression: "n(ξ) = n(A) + n(A′)",
    bullets: [
      "n(ξ) = n(A) + n(A′) — jumlah unsur set semesta ialah jumlah unsur A dan pelengkapnya.",
      "SUBSET: Set P ialah SUBSET bagi set Q (ditulis P ⊆ Q) jika SETIAP unsur P juga unsur Q.",
    ],
  },

  example: {
    mentorLine: "Jom kita cari pelengkap set, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "ξ = {1, 2, 3, 4, 5, 6}, B = {1, 2, 3}. Cari B′ dan n(B′)",
    steps: [
      "B′ = unsur dalam ξ yang bukan ahli B",
      "B′ = {4, 5, 6}",
      "n(B′) = 3",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "ξ = {a, b, c, d, e}, C = {a, c, e}. Cari C′.",
    choices: ["{b, d}", "{a, c, e}", "{a, b, c, d, e}", "{ }"],
    answer: "{b, d}",
    feedbackCorrect: "Tepat! C′ ialah unsur ξ yang bukan ahli C: {b, d}.",
    feedbackIncorrect: "Belum tepat. C′ = unsur dalam ξ yang TIADA dalam C: {b, d}.",
  },
};
