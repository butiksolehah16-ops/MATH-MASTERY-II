// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 5, Topik 5.1 (Nisbah Trigonometri).
export const padNisbahTrigonometriContent = {
  problem: "Segi tiga bersudut tegak PQR (sudut tegak di Q) mempunyai PQ = 12, QR = 5, PR = 13 (hipotenus). Relatif kepada sudut P, cari tan P.",
  steps: [
    {
      prompt: "Langkah 1: Relatif kepada sudut P, sisi QR (bertentangan P, tak menyentuh P) ialah sisi apa?",
      choices: ["Sisi bertentangan", "Sisi bersebelahan", "Hipotenus", "Sisi tegak"],
      answer: "Sisi bertentangan",
      hint: "Sisi yang TIDAK menyentuh sudut P ialah sisi bertentangan.",
    },
    {
      prompt: "Langkah 2: Relatif kepada sudut P, sisi PQ (menyentuh P, bukan hipotenus) ialah sisi apa?",
      choices: ["Sisi bersebelahan", "Sisi bertentangan", "Hipotenus", "Sisi tegak"],
      answer: "Sisi bersebelahan",
      hint: "Sisi yang MENYENTUH sudut P (tapi bukan hipotenus) ialah sisi bersebelahan.",
    },
    {
      prompt: "Langkah 3: tan P = bertentangan ÷ bersebelahan = QR ÷ PQ = 5 ÷ 12. Taip jawapan kamu (bentuk perpuluhan, 2 tempat perpuluhan).",
      type: "input",
      answer: "0.42",
      hint: "5 ÷ 12 = 0.4166..., dibundarkan kepada 2 tempat perpuluhan = 0.42.",
    },
  ],
};
