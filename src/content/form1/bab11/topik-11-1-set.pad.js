// Kandungan Latihan Berpandu (Pad) — Bab 11, Topik 11.1 (Set).
export const padSetContent = {
  problem: "Set N = {Isnin, Selasa, Rabu, Khamis, Jumaat}. Cari n(N)",
  steps: [
    {
      prompt: "Langkah 1: Set N mewakili apa?",
      choices: ["Hari dalam seminggu (5 hari bekerja)", "Bulan", "Nombor", "Warna"],
      answer: "Hari dalam seminggu (5 hari bekerja)",
      hint: "Isnin, Selasa, Rabu, Khamis, Jumaat ialah hari bekerja dalam seminggu.",
    },
    {
      prompt: "Langkah 2: Kira bilangan unsur dalam N: Isnin, Selasa, Rabu, Khamis, Jumaat = ?",
      choices: ["4", "5", "6", "7"],
      answer: "5",
      hint: "Ada 5 hari disenaraikan.",
    },
    {
      prompt: "Langkah 3: Jadi n(N) = ? (taip nombor sahaja)",
      type: "input",
      answer: "5",
      hint: "5 unsur dalam set N.",
    },
  ],
};
