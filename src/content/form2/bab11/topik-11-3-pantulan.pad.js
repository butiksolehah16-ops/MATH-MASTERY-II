// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 11, Topik 11.3 (Pantulan).
export const padPantulanContent = {
  problem: "Garis pantulan ialah y = 4. Titik A(3, 7) dipantulkan pada garis tersebut. Cari koordinat imej A'.",
  steps: [
    {
      prompt: "Langkah 1: Cari jarak menegak A dari garis y = 4: 7 − 4. Apakah nilainya?",
      type: "input",
      answer: "3",
      hint: "7 − 4 = 3.",
    },
    {
      prompt: "Langkah 2: Imej mesti jarak SAMA di sebelah bertentangan: 4 − 3. Apakah nilai-y bagi A'?",
      type: "input",
      answer: "1",
      hint: "4 − 3 = 1.",
    },
    {
      prompt: "Langkah 3: Nilai-x imej A' kekal SAMA seperti titik asal (garis pantulan mendatar). Apakah nilai-x A'?",
      type: "input",
      answer: "3",
      hint: "Nilai-x tidak berubah = 3.",
    },
  ],
};
