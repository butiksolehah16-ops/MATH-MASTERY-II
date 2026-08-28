// Kandungan Latihan Berpandu (Pad) — Form 2, Bab 6, Topik 6.2 (Bentangan
// Bentuk Tiga Dimensi).
export const padBentanganBentuk3dContent = {
  problem:
    "Sebuah piramid tegak segi empat sama mempunyai 5 muka (1 tapak segi empat sama + 4 sisi segi tiga). " +
    "Berapakah jumlah kepingan bentuk dalam bentangannya, dan berapa kepingan segi tiga?",
  steps: [
    {
      prompt: "Langkah 1: Bilangan kepingan bentangan = bilangan muka. Berapakah jumlah kepingan?",
      type: "input",
      answer: "5",
      hint: "Bilangan muka piramid ini ialah 5.",
    },
    {
      prompt: "Langkah 2: Daripada 5 kepingan itu, 1 ialah tapak segi empat sama. Berapakah baki kepingan segi tiga?",
      type: "input",
      answer: "4",
      hint: "5 − 1 = 4.",
    },
    {
      prompt: "Langkah 3: Sebuah kuboid mempunyai bentangan dengan berapa kepingan segi empat tepat kesemuanya?",
      type: "input",
      answer: "6",
      hint: "Kuboid ada 6 muka, jadi 6 kepingan segi empat tepat.",
    },
  ],
};
