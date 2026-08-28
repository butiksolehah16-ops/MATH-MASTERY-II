// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 1, Topik 1.1 (Pola).
export const padPolaContent = {
  problem: "Kenal pasti pola bagi jujukan 8, 14, 20, 26, ... dan cari sebutan seterusnya.",
  steps: [
    {
      prompt: "Langkah 1: Cari beza antara sebutan pertama dan kedua (14 − 8).",
      choices: ["6", "5", "14", "22"],
      answer: "6",
      hint: "14 − 8 = 6.",
    },
    {
      prompt:
        "Langkah 2: Sahkan beza ini tetap. Beza antara sebutan ketiga & kedua (20 − 14), dan keempat & ketiga " +
        "(26 − 20) masing-masing ialah?",
      choices: ["6 dan 6", "6 dan 8", "5 dan 6", "8 dan 6"],
      answer: "6 dan 6",
      hint: "20 − 14 = 6, dan 26 − 20 = 6 — beza tetap +6 sepanjang jujukan ini, jadi ia satu pola yang sah.",
    },
    {
      prompt: "Langkah 3: Sebutan seterusnya = 26 + 6. Taip jawapan kamu.",
      type: "input",
      answer: "32",
      hint: "Tambah beza tetap (6) pada sebutan terakhir yang diketahui (26): 26 + 6 = 32.",
    },
  ],
};
