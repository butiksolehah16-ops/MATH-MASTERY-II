// Kandungan Diagnostik ringkas — Bab 11, Topik 11.2 (Gambar Rajah Venn, Set
// Semesta, Pelengkap bagi Suatu Set dan Subset).
export const diagnostikVennSubsetContent = {
  questions: [
    {
      prompt: "Set semesta (ξ) ialah?",
      choices: [
        "Set kosong",
        "Set yang mengandungi SEMUA unsur yang dibincangkan",
        "Subset terkecil",
        "Pelengkap set A",
      ],
      answer: "Set yang mengandungi SEMUA unsur yang dibincangkan",
    },
    {
      prompt: "Pelengkap set A (A′) ialah?",
      choices: [
        "Semua unsur dalam A",
        "Semua unsur dalam ξ yang bukan ahli A",
        "Set kosong",
        "Sama dengan set A",
      ],
      answer: "Semua unsur dalam ξ yang bukan ahli A",
    },
    {
      prompt: "Betul atau salah: P ⊆ Q bermaksud setiap unsur P juga unsur Q.",
      choices: ["Betul", "Salah"],
      answer: "Betul",
    },
  ],
};
