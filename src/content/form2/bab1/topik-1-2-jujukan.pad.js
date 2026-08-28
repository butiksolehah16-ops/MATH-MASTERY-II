// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 1, Topik 1.2 (Jujukan).
export const padJujukanContent = {
  problem: "Lengkapkan jujukan 50, 44, 38, 32, ... dan cari sebutan seterusnya (T5).",
  steps: [
    {
      prompt: "Langkah 1: Cari beza antara sebutan pertama dan kedua (44 − 50).",
      choices: ["−6", "6", "−8", "8"],
      answer: "−6",
      hint: "44 − 50 = −6.",
    },
    {
      prompt:
        "Langkah 2: Sahkan beza ini tetap. Beza antara sebutan ketiga & kedua (38 − 44), dan keempat & ketiga " +
        "(32 − 38) masing-masing ialah?",
      choices: ["−6 dan −6", "−6 dan −8", "6 dan 6", "−4 dan −6"],
      answer: "−6 dan −6",
      hint: "38 − 44 = −6, dan 32 − 38 = −6 — beza tetap −6 sepanjang jujukan ini.",
    },
    {
      prompt: "Langkah 3: Sebutan seterusnya = 32 + (−6). Taip jawapan kamu.",
      type: "input",
      answer: "26",
      hint: "Menambah (−6) sama seperti menolak 6: 32 − 6 = 26.",
    },
  ],
};
