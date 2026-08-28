// Kandungan Latihan Berpandu (Pad) — Bab 12, Topik 12.1 (Proses Pengumpulan,
// Pengorganisasian dan Perwakilan Data, serta Pentafsiran Perwakilan Data).
export const padPengendalianDataContent = {
  problem: "Kekerapan haiwan kegemaran murid: Kucing = 10, Anjing = 8, Ikan = 4, Burung = 3. Cari mod dan jumlah keseluruhan murid",
  steps: [
    {
      prompt: "Langkah 1: Kategori dengan kekerapan tertinggi (mod) ialah?",
      choices: ["Kucing", "Anjing", "Ikan", "Burung"],
      answer: "Kucing",
      hint: "Kucing ada kekerapan tertinggi iaitu 10.",
    },
    {
      prompt: "Langkah 2: Jumlah keseluruhan: 10 + 8 + 4 + 3 = ?",
      choices: ["25", "24", "23", "22"],
      answer: "25",
      hint: "10 + 8 + 4 + 3 = 25.",
    },
    {
      prompt: "Langkah 3: Jadi jumlah keseluruhan murid ialah? (taip nombor sahaja)",
      type: "input",
      answer: "25",
      hint: "25 murid semuanya.",
    },
  ],
};
