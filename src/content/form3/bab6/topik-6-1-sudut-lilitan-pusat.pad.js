// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 6, Topik 6.1 (Sudut pada Lilitan dan Sudut Pusat).
export const padSudutLilitanPusatContent = {
  problem: "Sudut lilitan yang dicangkum oleh lengkok MN ialah 55°. K ialah satu lagi titik pada lilitan dalam segmen yang sama. Cari sudut pusat dicangkum MN, dan sudut MKN.",
  steps: [
    {
      prompt: "Langkah 1: Sudut pusat = 2 × sudut lilitan = 2 × 55°.",
      choices: ["110°", "55°", "27.5°", "220°"],
      answer: "110°",
      hint: "Sudut pusat = 2 × sudut lilitan (lengkok sama): 2 × 55°.",
    },
    {
      prompt: "Langkah 2: K berada dalam SEGMEN YANG SAMA (dicangkum lengkok MN yang sama). Apakah hubungan sudut MKN dengan sudut lilitan 55° tadi?",
      choices: ["Sama besar (55°)", "Dua kali ganda (110°)", "Separuh (27.5°)", "Berbeza sepenuhnya"],
      answer: "Sama besar (55°)",
      hint: "Sudut-sudut lilitan yang dicangkum lengkok/segmen yang SAMA adalah SAMA besar.",
    },
    {
      prompt: "Langkah 3: Jadi apakah sudut MKN (dalam darjah)? Taip nombor sahaja.",
      type: "input",
      answer: "55",
      hint: "Sudut MKN = sudut lilitan lain dalam segmen sama = 55°.",
    },
  ],
};
