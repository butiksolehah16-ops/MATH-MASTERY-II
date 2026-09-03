// Kandungan Nota Interaktif — Form 3, Bab 1, Topik 1.1 (Tatatanda Indeks).
// DSKP SK 1.1: mewakilkan pendaraban berulang dalam bentuk indeks dan
// menghuraikan maksudnya; menukar nombor kepada bentuk indeks dan sebaliknya.
export const notaTatatandaIndeksContent = {
  visualType: "bar-chart",

  hook: {
    mentorLine: "Selamat kembali ke Tingkatan 3! Jom mula dengan satu situasi biologi yang menarik.",
    title: "Bakteria Membelah Dua",
    body:
      "Seekor bakteria membelah kepada 2 setiap jam. Selepas 1 jam, ada 2 bakteria. Selepas 2 jam, setiap " +
      "daripada 2 bakteria itu membelah lagi jadi 4. Kalau kita nak tahu bilangan bakteria selepas 20 jam, " +
      "kita kena tulis \"2 × 2 × 2 × ... × 2\" sebanyak 20 kali — sangat panjang dan menyusahkan! Mesti ada " +
      "cara yang lebih ringkas untuk tulis pendaraban berulang macam ni.",
  },

  exploration: {
    mentorLine: "Jom kita lihat bilangan bakteria bertambah jam demi jam, dan perasan corak pendaraban berulang tu.",
    prompt:
      "Klik \"Tambah palang seterusnya\" untuk dedah bilangan bakteria bagi Jam 1 hingga Jam 5. Perhatikan: " +
      "setiap jam, bilangan bakteria DIDARAB dengan 2 daripada jam sebelumnya.",
    categories: ["Jam 1", "Jam 2", "Jam 3", "Jam 4", "Jam 5"],
    values: [2, 4, 8, 16, 32],
  },

  insight: {
    mentorLine: "Perasan tak setiap nombor tu ialah 2 didarab dengan dirinya sendiri berkali-kali?",
    title: "Tatatanda Indeks = Cara Ringkas Tulis Pendaraban Berulang",
    bullets: [
      "Bilangan bakteria pada Jam 5 ialah 2 × 2 × 2 × 2 × 2 = 32 — iaitu 2 didarab dengan DIRINYA SENDIRI sebanyak 5 kali.",
      "Daripada tulis \"2 × 2 × 2 × 2 × 2\" yang panjang, kita tulis 2⁵ (baca: \"2 kuasa 5\" atau \"2 pangkat 5\").",
      "Dalam 2⁵: nombor 2 dipanggil ASAS (base) — nombor yang didarab berulang; nombor 5 dipanggil INDEKS (index), juga dikenali sebagai EKSPONEN (exponent) atau KUASA (power) — bilangan kali asas tu didarab dengan dirinya sendiri.",
      "Selepas 20 jam, bilangan bakteria ditulis ringkas sebagai 2²⁰ — jauh lebih senang daripada tulis 20 nombor 2 didarab bersama!",
    ],
  },

  formula: {
    mentorLine: "Ini definisi rasmi tatatanda indeks — simpan dalam kepala kamu.",
    title: "Definisi Tatatanda Indeks",
    expression: "aⁿ = a × a × a × ... × a  (sebanyak n faktor)",
    bullets: [
      "aⁿ dibaca \"a kuasa n\", di mana a ialah ASAS dan n ialah INDEKS. Ia bermaksud a didarab dengan dirinya sendiri sebanyak n kali.",
      "Kes khas: a¹ = a (mana-mana nombor berkuasa 1 ialah nombor itu sendiri, sebab cuma SATU faktor).",
      "Untuk TUKAR nombor biasa kepada bentuk indeks: cari asas yang berulang, dan kira berapa kali ia didarab.",
      "Untuk TUKAR bentuk indeks kepada nombor biasa (menilai): darabkan asas dengan dirinya sendiri sebanyak yang ditunjukkan oleh indeks.",
    ],
  },

  example: {
    mentorLine: "Jom kita cuba dua arah — tukar kepada bentuk indeks, dan nilaikan bentuk indeks.",
    title: "Contoh Diselesaikan",
    problem: "(a) Tulis 5 × 5 × 5 × 5 dalam bentuk indeks. (b) Nilaikan 3⁴.",
    steps: [
      "(a) Asas ialah 5, dan ia didarab dengan dirinya sebanyak 4 kali → bentuk indeks = 5⁴",
      "(b) 3⁴ bermaksud 3 × 3 × 3 × 3",
      "= 9 × 3 × 3 = 27 × 3 = 81, jadi 3⁴ = 81",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah bentuk indeks bagi 6 × 6 × 6?",
    choices: ["6³", "3⁶", "6 × 3", "18"],
    answer: "6³",
    feedbackCorrect: "Tepat! Asas 6 didarab dengan dirinya sendiri 3 kali, jadi 6³.",
    feedbackIncorrect: "Belum tepat. Asas ialah nombor yang berulang (6), dan indeks ialah BERAPA KALI ia didarab (3 kali).",
  },
};
