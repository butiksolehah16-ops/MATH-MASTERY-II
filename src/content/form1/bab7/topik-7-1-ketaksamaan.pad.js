// Kandungan Latihan Berpandu (Pad) — Bab 7, Topik 7.1 (Ketaksamaan).
export const padKetaksamaanContent = {
  problem: "Bandingkan −6 dan 4, tulis dalam bentuk ketaksamaan lengkap",
  steps: [
    {
      prompt: "Langkah 1: −6 berada di sebelah __ pada garis nombor berbanding 4?",
      choices: ["Kiri", "Kanan", "Sama", "Atas"],
      answer: "Kiri",
      hint: "−6 ialah nombor negatif yang jauh dari 0, jadi ia di sebelah kiri 4.",
    },
    {
      prompt: "Langkah 2: Nombor di sebelah kiri garis nombor adalah lebih __?",
      choices: ["Kecil", "Besar", "Genap", "Ganjil"],
      answer: "Kecil",
      hint: "Nombor di sebelah kiri garis nombor sentiasa lebih kecil.",
    },
    {
      prompt: "Langkah 3: Jadi, −6 __ 4? Taip simbol sahaja (< atau >)",
      type: "input",
      answer: "<",
      hint: "−6 lebih kecil daripada 4, jadi −6 < 4.",
    },
  ],
};
