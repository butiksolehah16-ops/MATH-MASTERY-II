// Kandungan Latihan Berpandu (Pad) — Bab 1, Topik 1.5 (Menukar Pecahan dan Perpuluhan).
export const padNomborNisbahContent = {
  problem: "Tukarkan 3/8 kepada perpuluhan",
  steps: [
    {
      prompt: "Langkah 1: Apakah operasi yang perlu dibuat untuk tukar pecahan kepada perpuluhan?",
      choices: [
        "Bahagikan pengangka dengan penyebut (3 ÷ 8)",
        "Darab pengangka dengan penyebut",
        "Tambah pengangka dan penyebut",
        "Tolak penyebut daripada pengangka",
      ],
      answer: "Bahagikan pengangka dengan penyebut (3 ÷ 8)",
      hint: "Pecahan a/b bermaksud a ÷ b. Untuk dapatkan bentuk perpuluhan, buat pembahagian tu.",
    },
    {
      prompt: "Langkah 2: Sebelum kira dengan tepat — anggarkan dahulu. Adakah 3 ÷ 8 lebih besar atau kecil daripada 0.5?",
      choices: [
        "Lebih kecil (sebab 3 kurang daripada separuh 8)",
        "Lebih besar",
        "Sama dengan 0.5",
        "Tak dapat ditentukan",
      ],
      answer: "Lebih kecil (sebab 3 kurang daripada separuh 8)",
      hint: "Separuh daripada 8 ialah 4. Oleh kerana 3 kurang daripada 4, jawapannya mesti kurang daripada 0.5.",
    },
    {
      prompt: "Langkah 3: Selesaikan pembahagian untuk dapat jawapan akhir. Taip jawapan kamu.",
      type: "input",
      answer: "0.375",
      hint: "3 ÷ 8 = 0.375.",
    },
  ],
};
