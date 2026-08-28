// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 5, Topik 5.2 (Sifat
// Simetri Perentas).
export const padSimetriPerentasContent = {
  problem:
    "Perentas AB dalam sebuah bulatan berpusat O mempunyai panjang 24 cm. Garis OM berserenjang dengan AB " +
    "di M. Cari panjang AM dan MB.",
  steps: [
    {
      prompt: "Langkah 1: Sebab OM berserenjang dengan AB, apakah perkaitan antara AM dan MB?",
      choices: ["AM = MB", "AM = 2 × MB", "AM + MB = OM", "Tiada perkaitan"],
      answer: "AM = MB",
      hint: "Sifat simetri perentas: serenjang dari pusat membahagi perentas kepada dua bahagian SAMA panjang.",
    },
    {
      prompt: "Langkah 2: Sebab AM = MB dan AM + MB = AB = 24, apakah panjang AM?",
      type: "input",
      answer: "12",
      hint: "24 ÷ 2 = 12.",
    },
    {
      prompt: "Langkah 3: Apakah panjang MB?",
      type: "input",
      answer: "12",
      hint: "MB = AM = 12 (kedua-dua bahagian sama panjang).",
    },
  ],
};
