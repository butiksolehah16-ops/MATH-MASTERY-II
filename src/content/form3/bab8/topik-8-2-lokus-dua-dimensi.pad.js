// Kandungan Latihan Berpandu (Pad) — Form 3, Bab 8, Topik 8.2 (Lokus dalam Dua Dimensi).
export const padLokusDuaDimensiContent = {
  problem: "Titik Q mesti (a) berjarak tetap 6 cm daripada titik tetap C, DAN (b) sama jarak daripada dua garis selari L1 dan L2. Terangkan cara cari kedudukan Q.",
  steps: [
    {
      prompt: "Langkah 1: Syarat (a) 'jarak tetap 6 cm daripada titik C' menghasilkan lokus berbentuk apa?",
      choices: ["Bulatan jejari 6 cm berpusat C", "Garis lurus", "Pembahagi dua sama serenjang", "Segi tiga"],
      answer: "Bulatan jejari 6 cm berpusat C",
      hint: "Jarak tetap daripada SATU titik = bulatan.",
    },
    {
      prompt: "Langkah 2: Syarat (b) 'sama jarak daripada dua garis selari' menghasilkan lokus berbentuk apa?",
      choices: ["Satu garis selari di tengah-tengah L1 dan L2", "Bulatan", "Pembahagi dua sama sudut", "Dua garis selari"],
      answer: "Satu garis selari di tengah-tengah L1 dan L2",
      hint: "Sama jarak daripada DUA garis SELARI = satu garis di tengah-tengah.",
    },
    {
      prompt: "Langkah 3: Q mesti memenuhi KEDUA-DUA syarat serentak. Q ialah apa antara dua lokus tersebut?",
      choices: ["Titik persilangan", "Jumlah kedua-dua lokus", "Purata kedua-dua lokus", "Tiada kaitan"],
      answer: "Titik persilangan",
      hint: "Bila DUA syarat perlu dipenuhi serentak, jawapannya ialah titik PERSILANGAN antara dua lokus.",
    },
  ],
};
