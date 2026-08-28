// Kandungan Diagnostik ringkas — Bab 12, Topik 12.1 (Proses Pengumpulan,
// Pengorganisasian dan Perwakilan Data, serta Pentafsiran Perwakilan Data).
export const diagnostikPengendalianDataContent = {
  questions: [
    {
      prompt: "Data kategori ialah?",
      choices: [
        "Data berbentuk label/kategori, cth warna",
        "Data nombor sahaja",
        "Carta palang",
        "Purata data",
      ],
      answer: "Data berbentuk label/kategori, cth warna",
    },
    {
      prompt: "MOD ialah?",
      choices: ["Nilai purata", "Kategori dengan kekerapan tertinggi", "Nilai tengah", "Jumlah semua data"],
      answer: "Kategori dengan kekerapan tertinggi",
    },
    {
      prompt: "Betul atau salah: Carta palang ialah satu cara perwakilan data.",
      choices: ["Betul", "Salah"],
      answer: "Betul",
    },
  ],
};
