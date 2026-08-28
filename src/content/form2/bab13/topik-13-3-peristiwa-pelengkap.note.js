// Kandungan Nota Interaktif — Form 2, Bab 13, Topik 13.3 (Kebarangkalian
// Peristiwa Pelengkap). DSKP SK 13.3: memerihal peristiwa pelengkap dgn
// perkataan & tatatanda set; menentukan kebarangkalian peristiwa pelengkap.
export const notaPeristiwaPelengkapContent = {
  visualType: "venn-complement",

  hook: {
    mentorLine: "Kalau kebarangkalian hujan esok ialah 0.3, apakah kebarangkalian TAK hujan esok?",
    title: "Peristiwa Yang Berlawanan",
    body:
      "Untuk setiap peristiwa A, ada satu peristiwa lawan yang dipanggil PERISTIWA PELENGKAP, ditulis A′ — " +
      "iaitu 'A TIDAK berlaku'. Contoh: A = 'dapat nombor genap' apabila dadu dibaling, maka A′ = 'dapat " +
      "nombor ganjil'.",
  },

  exploration: {
    mentorLine: "Jom letak setiap kesudahan dadu — sama ada dalam A (genap) atau di luar (A′).",
    prompt: "Klik \"Letak unsur seterusnya\" untuk letak nombor 1 hingga 6 — genap masuk bulatan A, ganjil di luar.",
    universalElements: ["1", "2", "3", "4", "5", "6"],
    setElements: ["2", "4", "6"],
  },

  insight: {
    mentorLine: "Perasan n(A) + n(A′) = n(ξ)? Prinsip yang sama berlaku untuk KEBARANGKALIAN.",
    title: "P(A) + P(A′) = 1",
    body:
      "n(A) = 3 (nombor genap: 2,4,6), n(A′) = 3 (nombor ganjil: 1,3,5), n(ξ) = 6. Jadi P(A) = 3/6 = 0.5 dan " +
      "P(A′) = 3/6 = 0.5. Perhatikan P(A) + P(A′) = 0.5 + 0.5 = 1 — SENTIASA benar untuk mana-mana peristiwa! " +
      "Ini bermakna kita boleh cari P(A′) tanpa kira semula daripada awal — cukup guna P(A′) = 1 − P(A).",
  },

  formula: {
    mentorLine: "Ini formula rasmi peristiwa pelengkap — sangat berguna untuk jimat masa!",
    title: "Formula Peristiwa Pelengkap",
    expression: "P(A) + P(A′) = 1   |   P(A′) = 1 − P(A)",
    body:
      "P(A) + P(A′) = 1 untuk SEMUA peristiwa A. Susun semula: P(A′) = 1 − P(A). Juga ingat 0 ≤ P(A) ≤ 1 — " +
      "kebarangkalian tak boleh negatif atau lebih daripada 1. Dalam tatatanda set, A′ mewakili semua unsur " +
      "dalam set semesta ξ yang TIDAK berada dalam A.",
  },

  example: {
    mentorLine: "Jom kita cari P(A′) menggunakan formula pelengkap.",
    title: "Contoh Diselesaikan",
    problem: "Kebarangkalian sebuah kereta rosak pada bila-bila masa ialah 0.15. Cari kebarangkalian kereta itu TIDAK rosak.",
    steps: [
      "Biar A = 'kereta rosak', jadi P(A) = 0.15",
      "A′ = 'kereta tidak rosak'",
      "P(A′) = 1 − P(A) = 1 − 0.15 = 0.85",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Jika P(A) = 0.65, apakah P(A′)?",
    choices: ["0.35", "1.65", "0.65", "0.3"],
    answer: "0.35",
    feedbackCorrect: "Tepat! 1 − 0.65 = 0.35.",
    feedbackIncorrect: "Belum tepat. Guna P(A′) = 1 − P(A): 1 − 0.65.",
  },
};
