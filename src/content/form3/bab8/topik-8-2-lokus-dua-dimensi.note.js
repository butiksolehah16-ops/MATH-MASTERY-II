// Kandungan Nota Interaktif — Form 3, Bab 8, Topik 8.2 (Lokus dalam Dua
// Dimensi). DSKP SK 8.2: memerihalkan lokus titik (jarak tetap dari 1 titik,
// sama jarak dari 2 titik, jarak tetap dari 1 garis, sama jarak dari 2 garis
// selari, sama jarak dari 2 garis bersilang), dan seterusnya membina lokus
// tersebut; menentukan lokus memenuhi DUA atau lebih syarat; menyelesaikan
// masalah (termasuk syarat jarak lebih/kurang daripada nilai tertentu).
export const notaLokusDuaDimensiContent = {
  visualType: "chord-bisector",

  hook: {
    mentorLine: "Sekarang kita bina LIMA jenis lokus asas — corak yang akan muncul BERULANG kali dalam soalan SPM.",
    title: "Menara Bomba di Tengah-Tengah Dua Kampung",
    body:
      "Pihak berkuasa nak bina SATU menara bomba yang jaraknya SAMA daripada Kampung A dan Kampung B, " +
      "supaya masa tindak balas adil untuk kedua-dua kampung. Di manakah SEMUA kedudukan yang mungkin untuk " +
      "menara tu (memenuhi syarat \"sama jarak daripada A dan B\")?",
  },

  exploration: {
    mentorLine: "Jom kita lukis perentas AB (mewakili kedudukan Kampung A dan B), kemudian cari garis yang sama jarak daripada kedua-duanya.",
    prompt: "Klik butang untuk lukis AB, kemudian serenjang dari pusat O, dan lihat di mana M (titik tengah) berada.",
  },

  insight: {
    mentorLine: "Perasan garis serenjang di tengah-tengah AB tu — SETIAP titik atasnya sama jarak daripada A dan B?",
    title: "Sama Jarak Daripada Dua Titik = Pembahagi Dua Sama Serenjang",
    body:
      "Lokus titik yang SAMA JARAK daripada DUA titik tetap A dan B ialah PEMBAHAGI DUA SAMA SERENJANG " +
      "(perpendicular bisector) bagi garis AB — iaitu garis yang melalui TITIK TENGAH AB, berserenjang " +
      "(90°) dengan AB. Menara bomba tadi boleh dibina di MANA-MANA titik atas garis ini.",
  },

  formula: {
    mentorLine: "Ini KELIMA-LIMA jenis lokus asas — rujuk semula bila perlu, sebab ini SANGAT kerap keluar dalam peperiksaan.",
    title: "Lima Jenis Lokus Asas",
    expression: "Lokus bergantung SYARAT: titik / dua titik / garis / dua garis",
    body:
      "(i) JARAK TETAP daripada SATU titik tetap → BULATAN (jejari = jarak tetap tu, berpusat pada titik " +
      "tetap).\n" +
      "(ii) SAMA JARAK daripada DUA titik tetap → PEMBAHAGI DUA SAMA SERENJANG bagi garis yang menyambung " +
      "kedua-dua titik itu.\n" +
      "(iii) JARAK TETAP daripada SATU garis lurus → DUA garis SELARI dengan garis asal (satu pada SETIAP " +
      "belah, masing-masing pada jarak tetap tersebut).\n" +
      "(iv) SAMA JARAK daripada DUA garis lurus SELARI → SATU garis SELARI, tepat di TENGAH-TENGAH kedua-dua " +
      "garis asal.\n" +
      "(v) SAMA JARAK daripada DUA garis lurus BERSILANG → PEMBAHAGI DUA SAMA SUDUT (angle bisector) bagi " +
      "sudut-sudut yang dibentuk kedua-dua garis — sebenarnya DUA garis pembahagi sudut yang saling " +
      "berserenjang (membahagi kesemua 4 sudut yang terbentuk).\n\n" +
      "LOKUS MEMENUHI DUA SYARAT: bina/lukis KEDUA-DUA lokus secara berasingan (ikut syarat masing-masing), " +
      "kemudian titik yang memenuhi KEDUA-DUA syarat ialah TITIK PERSILANGAN antara dua lokus tersebut.\n\n" +
      "SYARAT \"KURANG/LEBIH DARIPADA\" jarak tertentu (bukan \"tepat sama dengan\"): ini menghasilkan " +
      "SATU KAWASAN (region), bukan hanya satu garis/lengkung. Cth. \"jarak KURANG daripada 5 cm daripada " +
      "titik P\" ialah KAWASAN DI DALAM bulatan jejari 5 cm berpusat P (tidak termasuk garis lilitan itu " +
      "sendiri).",
  },

  example: {
    mentorLine: "Jom kita gabungkan DUA syarat lokus sekali gus, langkah demi langkah.",
    title: "Contoh Diselesaikan",
    problem:
      "Titik P mesti (a) sama jarak daripada dua titik tetap A dan B, DAN (b) berjarak tepat 4 cm daripada " +
      "titik A. Bagaimana kita cari kedudukan P?",
    steps: [
      "(a) Syarat pertama (sama jarak A dan B) → lokus 1 ialah pembahagi dua sama serenjang bagi AB",
      "(b) Syarat kedua (jarak tetap 4 cm dari A) → lokus 2 ialah bulatan jejari 4 cm berpusat A",
      "P mesti berada pada KEDUA-DUA lokus serentak → P ialah titik PERSILANGAN garis pembahagi dua sama " +
      "serenjang tu dengan bulatan jejari 4 cm berpusat A",
    ],
  },

  checkQuestion: {
    mentorLine: "Cuba sendiri — satu soalan pantas sebelum kita masuk latihan penuh.",
    prompt: "Apakah bentuk lokus titik yang sama jarak daripada DUA garis lurus SELARI?",
    choices: [
      "Satu garis selari di tengah-tengah kedua-duanya",
      "Bulatan",
      "Pembahagi dua sama sudut",
      "Dua garis selari",
    ],
    answer: "Satu garis selari di tengah-tengah kedua-duanya",
    feedbackCorrect: "Tepat! Sama jarak daripada dua garis selari membentuk SATU garis selari, tepat di tengah-tengah.",
    feedbackIncorrect: "Belum tepat. 'Sama jarak dari DUA garis SELARI' ialah SATU garis di tengah — jangan keliru dengan 'jarak tetap dari SATU garis' (dua garis).",
  },
};
