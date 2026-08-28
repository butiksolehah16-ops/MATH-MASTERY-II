// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 4, Topik 4.1 (Poligon Sekata).
export const padPoligonSekataContent = {
  problem:
    "Sebuah poligon mempunyai 10 sisi yang sama panjang dan 10 sudut yang sama besar. Tentukan jenis " +
    "poligon ini dan bilangan paksi simetrinya.",
  steps: [
    {
      prompt: "Langkah 1: Sebab SEMUA sisi sama panjang DAN semua sudut sama besar, apakah jenis poligon ini?",
      choices: ["Poligon sekata (dekagon sekata)", "Poligon tak sekata", "Segi empat sama", "Tiada nama khas"],
      answer: "Poligon sekata (dekagon sekata)",
      hint: "Kedua-dua syarat (sisi sama DAN sudut sama) dipenuhi, jadi ini poligon sekata.",
    },
    {
      prompt: "Langkah 2: Berapakah bilangan sisi poligon ini (n)?",
      type: "input",
      answer: "10",
      hint: "Dinyatakan dalam soalan — 10 sisi.",
    },
    {
      prompt: "Langkah 3: Bilangan paksi simetri poligon sekata = bilangan sisinya. Apakah bilangan paksi simetri poligon ini?",
      type: "input",
      answer: "10",
      hint: "Paksi simetri = bilangan sisi = 10.",
    },
  ],
};
