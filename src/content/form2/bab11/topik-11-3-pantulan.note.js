// Kandungan Nota Interaktif — Form 2, Bab 11, Topik 11.3 (Pantulan). DSKP
// SK 11.3: mengenal pantulan, memerihalkan pantulan menggunakan pelbagai
// perwakilan (perwakilan simbolik dikecualikan), menentukan imej dan objek
// bagi pantulan, menyelesaikan masalah yang melibatkan pantulan.
export const notaPantulanContent = {
  visualType: "transformation",

  hook: {
    mentorLine: "Pantulan macam CERMIN — imej ialah 'bayangan terbalik' objek.",
    title: "Bayangan Dalam Cermin",
    body:
      "Bila kamu berdiri depan cermin, bayangan kamu nampak SAMA saiz dan bentuk, tapi 'terbalik' — kiri jadi " +
      "kanan. Ini dipanggil PANTULAN. Garis cermin (garis pantulan) berada tepat di TENGAH antara kamu dan " +
      "bayangan kamu.",
  },

  exploration: {
    mentorLine: "Jom perhatikan objek dan imej selepas dipantulkan pada garis y = 4.",
    prompt: "Segi tiga ABC (objek) dipantulkan pada garis mendatar y = 4. Klik butang untuk dedah setiap bucu imej.",
    referenceLine: { axis: "horizontal", value: 4 },
    object: [
      { x: 2, y: 5, label: "A" },
      { x: 5, y: 5, label: "B" },
      { x: 2, y: 7, label: "C" },
    ],
    image: [
      { x: 2, y: 3, label: "A'" },
      { x: 5, y: 3, label: "B'" },
      { x: 2, y: 1, label: "C'" },
    ],
  },

  insight: {
    mentorLine: "Perasan setiap titik dan imejnya jarak SAMA dari garis pantulan, tapi di sebelah bertentangan?",
    title: "Pantulan = Jarak Sama, Sebelah Bertentangan",
    body:
      "A(2,5) berada 1 unit DI ATAS garis y=4, dan imejnya A'(2,3) berada 1 unit DI BAWAH garis y=4 — jarak " +
      "yang SAMA, tapi sebelah bertentangan. C(2,7) berada 3 unit di atas, C'(2,1) berada 3 unit di bawah. " +
      "Garis yang sambungkan setiap titik ke imejnya adalah BERSERENJANG (tegak lurus) dengan garis pantulan.",
  },

  formula: {
    mentorLine: "Ini cara tentukan imej pantulan — simpan dalam kepala kamu.",
    title: "Menentukan Imej Pantulan",
    expression: "Jarak objek ke garis pantulan = Jarak imej ke garis pantulan (sebelah bertentangan)",
    body:
      "Untuk cari imej pantulan pada garis MENDATAR (cth. y = k): ukur jarak mencancang titik dari garis tu, " +
      "kemudian tandakan jarak yang SAMA di sebelah BERTENTANGAN — nilai-x KEKAL sama. Untuk garis pantulan " +
      "MENEGAK (cth. x = k): ukur jarak mengufuk, tandakan jarak sama di sebelah bertentangan — nilai-y " +
      "KEKAL sama. Sifat imej pantulan: SAIZ dan BENTUK kekal sama (kongruen), tapi ORIENTASI terbalik " +
      "(macam cermin).",
  },

  example: {
    mentorLine: "Jom kita cari imej pantulan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem: "Garis pantulan ialah y = 5. Titik Q(3, 9) dipantulkan pada garis tersebut. Cari imej Q'.",
    steps: [
      "Jarak Q dari garis: 9 − 5 = 4 unit di atas",
      "Imej mesti 4 unit di BAWAH garis: 5 − 4 = 1",
      "Nilai-x kekal sama, jadi imej Q' = (3, 1)",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Garis pantulan ialah y = 4. Titik P(2, 6) dipantulkan pada garis tersebut. Apakah imej P'?",
    choices: ["(2, 2)", "(2, 8)", "(6, 4)", "(2, 6)"],
    answer: "(2, 2)",
    feedbackCorrect: "Tepat! P berada 2 unit di atas y=4, jadi imej 2 unit di bawah: (2, 2).",
    feedbackIncorrect: "Belum tepat. P berada 2 unit di atas garis y=4 (6−4=2), jadi imej berada 2 unit di bawah (4−2=2).",
  },
};
