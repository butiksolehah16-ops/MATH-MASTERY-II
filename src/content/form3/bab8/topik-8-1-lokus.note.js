// Kandungan Nota Interaktif — Form 3, Bab 8, Topik 8.1 (Lokus). DSKP SK 8.1:
// mengenal lokus dalam situasi kehidupan sebenar, dan menerangkan maksud lokus.
export const notaLokusContent = {
  visualType: "circle-parts",

  hook: {
    mentorLine: "Bab baharu — LOKUS! Jom mula dengan situasi yang korang mungkin pernah nampak di kampung.",
    title: "Kambing Terikat pada Pancang",
    body:
      "Seekor kambing diikat dengan tali sepanjang 5 meter pada sebatang pancang kayu yang tetap. Kambing " +
      "tu boleh bergerak BEBAS ke mana-mana arah, TETAPI tali menghadkan jaraknya daripada pancang kepada " +
      "TEPAT 5 meter (bila tali tegang). Kalau kita tandakan SETIAP kedudukan yang mungkin kambing tu " +
      "berada (bila tali tegang), bentuk APAKAH yang terhasil?",
  },

  exploration: {
    mentorLine: "Jom kita lihat bahagian PUSAT dan JEJARI sebuah bulatan — konsep asas untuk faham lokus jarak tetap.",
    prompt: "Klik \"Dedah bahagian seterusnya\" untuk kenali pusat dan jejari bulatan.",
    parts: ["center", "radius"],
  },

  insight: {
    mentorLine: "Perasan SEMUA kedudukan yang mungkin (jarak tetap 5 m daripada pancang) membentuk bulatan?",
    title: "Lokus = Set Titik Memenuhi Syarat Tertentu",
    bullets: [
      "LOKUS (locus) ialah SET SEMUA titik yang kedudukannya memenuhi SATU (atau lebih) SYARAT tertentu. Bagi kambing tadi, syaratnya ialah \"jarak TETAP 5 m daripada pancang\" — dan set SEMUA titik yang memenuhi syarat ni membentuk BULATAN berjejari 5 m, berpusat pada pancang.",
      "Lokus BOLEH jadi pelbagai bentuk bergantung SYARAT yang diberi — bulatan (jarak tetap dari SATU titik), garis lurus (jarak tetap dari SATU garis), atau bentuk lain — kita akan terokai lebih lanjut dalam topik seterusnya.",
      "CONTOH LOKUS DALAM KEHIDUPAN SEBENAR: laluan hujung jarum jam (lokus = bulatan, jarak tetap dari pusat jam), laluan buaian yang berayun (lokus = lengkok bulatan), kawasan litupan isyarat menara telefon (lokus = bulatan, jarak tetap dari menara), orbit bulan mengelilingi bumi (lokus = lengkung hampir bulatan).",
    ],
  },

  formula: {
    mentorLine: "Ini definisi rasmi lokus — simpan dalam kepala kamu.",
    title: "Definisi Lokus",
    expression: "Lokus = {titik : titik memenuhi syarat tertentu}",
    bullets: [
      "Untuk KENAL PASTI lokus sesuatu situasi: (1) Kenal pasti SYARAT yang perlu dipenuhi (cth. jarak tetap, sama jarak daripada dua objek). (2) Bayangkan atau lukis BEBERAPA titik contoh yang memenuhi syarat tu. (3) Kenal pasti BENTUK yang terhasil apabila SEMUA titik yang mungkin disambungkan.",
      "Lokus \"jarak TETAP r daripada satu titik tetap\" SENTIASA membentuk BULATAN berjejari r, berpusat pada titik tetap tersebut.",
    ],
  },

  example: {
    mentorLine: "Jom kita kenal pasti lokus bagi satu lagi situasi, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Sebuah sistem pancuran air taman berputar penuh, menyembur air sejauh TEPAT 4 meter dari pusatnya " +
      "ke SEMUA arah. Apakah bentuk lokus bagi titik-titik yang terkena air (pinggir kawasan basah)?",
    steps: [
      "Syarat: jarak TETAP (4 m) daripada SATU titik tetap (pusat pancuran)",
      "Ini padan dengan corak lokus \"jarak tetap daripada satu titik\"",
      "Jadi lokus tersebut ialah BULATAN berjejari 4 m, berpusat pada pancuran air",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Sebiji satelit mengorbit Bumi pada jarak TETAP daripada pusat Bumi. Apakah bentuk lokus orbitnya?",
    choices: ["Bulatan", "Garis lurus", "Segi tiga", "Segi empat"],
    answer: "Bulatan",
    feedbackCorrect: "Tepat! Jarak tetap daripada satu titik (pusat Bumi) membentuk lokus berbentuk bulatan.",
    feedbackIncorrect: "Belum tepat. Syarat 'jarak tetap daripada satu titik' sentiasa membentuk BULATAN.",
  },
};
