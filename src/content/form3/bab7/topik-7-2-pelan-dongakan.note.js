// Kandungan Nota Interaktif — Form 3, Bab 7, Topik 7.2 (Pelan dan Dongakan).
// DSKP SK 7.2: melukis pelan dan dongakan mengikut skala; mensintesis pelan
// dan dongakan untuk melakar objek; menyelesaikan masalah (termasuk jenis
// garis, objek gabungan, kerja projek reka bentuk bangunan).
export const notaPelanDongakanContent = {
  visualType: "cube-net",

  hook: {
    mentorLine: "Sekarang kita gunakan unjuran ortogon untuk kerja SEBENAR arkitek dan jurutera — melukis PELAN dan DONGAKAN.",
    title: "Rumah dengan Bumbung Piramid",
    body:
      "Seorang arkitek reka sebuah gudang berbentuk KUBOID dengan bumbung berbentuk PIRAMID di atasnya " +
      "(objek gabungan). Untuk hantar reka bentuk ni kepada kontraktor, dia perlu lukis PELAN (pandangan " +
      "dari atas) dan DONGAKAN (pandangan dari hadapan/sisi) — LENGKAP dengan skala yang tepat, supaya " +
      "kontraktor boleh bina TANPA sebarang keraguan.",
  },

  exploration: {
    mentorLine: "Jom kita ulang kaji bagaimana bentuk 3D diwakili sebagai beberapa pandangan rata (2D) — asas bagi pelan dan dongakan.",
    prompt: "Klik \"Dedah muka seterusnya\" untuk lihat pandangan-pandangan berasingan yang mewakili sebuah bentuk 3D.",
  },

  insight: {
    mentorLine: "Perasan PELAN dan DONGAKAN sebenarnya ialah unjuran ortogon, tapi dengan NAMA dan ARAH khusus?",
    title: "Pelan (Atas) dan Dongakan (Hadapan/Sisi)",
    body:
      "PELAN (plan) ialah unjuran ortogon objek dipandang TEGAK LURUS DARI ATAS (ke satah mengufuk). " +
      "DONGAKAN HADAPAN (front elevation) ialah unjuran dipandang dari HADAPAN (ke satah mencancang). " +
      "DONGAKAN SISI (side elevation) ialah unjuran dipandang dari SISI (ke satah mencancang yang lain, " +
      "biasanya berserenjang dengan arah dongakan hadapan). Ketiga-tiga pandangan ni, bila digabungkan, " +
      "beri gambaran LENGKAP bentuk 3D — walaupun setiap satu cuma lukisan 2D.\n\n" +
      "JENIS GARIS dalam lukisan pelan/dongakan (penting untuk kejelasan): GARIS PADU TEBAL untuk sisi yang " +
      "NAMPAK (visible edges). GARIS SEMPANG (putus-putus) untuk sisi TERLINDUNG (hidden edges, di sebalik " +
      "objek). GARIS PADU HALUS (nipis) untuk GARIS BINAAN (construction lines) — garis bantu untuk " +
      "selaraskan pelan dan dongakan semasa melukis, BUKAN sebahagian bentuk sebenar.",
  },

  formula: {
    mentorLine: "Ini langkah rasmi melukis pelan dan dongakan mengikut skala — simpan dalam kepala kamu.",
    title: "Langkah Melukis Pelan dan Dongakan",
    expression: "Pelan = pandangan atas.  Dongakan = pandangan hadapan/sisi.",
    body:
      "(1) Tentukan skala yang sesuai (cth. 1:100). (2) Lukis PELAN dahulu (pandangan dari atas), dengan " +
      "SEMUA panjang mendatar dan lebar ditukar mengikut skala. (3) Lukis DONGAKAN HADAPAN tepat DI BAWAH " +
      "pelan, selaraskan lebar menggunakan GARIS BINAAN menegak daripada pelan — pastikan tinggi objek juga " +
      "ditukar ikut skala. (4) Lukis DONGAKAN SISI (jika perlu) di sebelah, selaras tinggi dengan dongakan " +
      "hadapan. (5) UNTUK OBJEK GABUNGAN (cth. kuboid + piramid): lukis pelan dan dongakan bagi SETIAP " +
      "bahagian objek secara berasingan, kemudian GABUNGKAN dalam satu rajah, pastikan kedudukan relatifnya " +
      "betul.\n\n" +
      "MENSINTESIS (bina semula bentuk 3D daripada pelan+dongakan yang diberi): bandingkan bentuk pelan " +
      "(atas) dengan bentuk dongakan (hadapan/sisi) — pelan beri maklumat \"tapak\" objek, dongakan beri " +
      "maklumat \"profil menegak\"nya; gabungkan mental kedua-dua maklumat ni untuk bayangkan bentuk 3D asal.",
  },

  example: {
    mentorLine: "Jom kita kira dimensi pelan dan dongakan bagi sebuah objek gabungan, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Sebuah gudang berbentuk kuboid berukuran 12 m (panjang) × 8 m (lebar) × 5 m (tinggi dinding), dengan " +
      "bumbung piramid setinggi 3 m di atasnya. Cari (a) luas pelan (tapak), dan (b) tinggi KESELURUHAN " +
      "dongakan hadapan (dinding + bumbung).",
    steps: [
      "(a) Pelan (pandangan atas) menunjukkan TAPAK sahaja — luas = panjang × lebar = 12 × 8 = 96 m²",
      "(b) Dongakan hadapan menunjukkan profil menegak KESELURUHAN — tinggi dinding + tinggi bumbung",
      "Tinggi keseluruhan = 5 + 3 = 8 m",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Dalam lukisan pelan dan dongakan, jenis garis apakah yang digunakan untuk sisi TERLINDUNG (tak nampak)?",
    choices: ["Garis sempang (putus-putus)", "Garis padu tebal", "Garis padu halus", "Tiada garis dilukis"],
    answer: "Garis sempang (putus-putus)",
    feedbackCorrect: "Tepat! Garis sempang (putus-putus) mewakili sisi yang terlindung/tak nampak.",
    feedbackIncorrect: "Belum tepat. Garis padu TEBAL untuk sisi nampak; garis SEMPANG (putus-putus) untuk sisi terlindung.",
  },
};
