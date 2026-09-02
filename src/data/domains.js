import { getChapters } from "./chapters.js";
import { getFormProgress } from "../state/ProgressContext.jsx";

// Kumpulan bab merentasi Tingkatan 1-3 ikut bidang matematik KSSM yang luas —
// dipakai untuk "Analisis Mengikut Bidang" dalam Laporan Progress. Ini bukan
// kandungan baharu, cuma pengagregatan berbeza atas progres bab/topik yang
// sedia ada disimpan dalam ProgressContext.
export const DOMAINS = [
  {
    id: "nombor",
    label: "Nombor",
    chapters: [
      { formId: "form1", babId: "bab1" }, // Nombor Nisbah
      { formId: "form1", babId: "bab2" }, // Faktor dan Gandaan
      { formId: "form1", babId: "bab3" }, // Kuasa Dua/Tiga, Punca Kuasa
      { formId: "form1", babId: "bab4" }, // Nisbah, Kadar dan Kadaran
      { formId: "form2", babId: "bab9" }, // Laju dan Pecutan
      { formId: "form3", babId: "bab1" }, // Indeks
      { formId: "form3", babId: "bab2" }, // Bentuk Piawai
      { formId: "form3", babId: "bab3" }, // Matematik Pengguna
    ],
  },
  {
    id: "algebra",
    label: "Algebra",
    chapters: [
      { formId: "form1", babId: "bab5" }, // Ungkapan Algebra
      { formId: "form1", babId: "bab6" }, // Persamaan Linear
      { formId: "form1", babId: "bab7" }, // Ketaksamaan Linear
      { formId: "form1", babId: "bab11" }, // Pengenalan Set
      { formId: "form2", babId: "bab1" }, // Pola dan Jujukan
      { formId: "form2", babId: "bab2" }, // Pemfaktoran dan Pecahan Algebra
      { formId: "form2", babId: "bab3" }, // Rumus Algebra
      { formId: "form2", babId: "bab8" }, // Graf Fungsi
    ],
  },
  {
    id: "geometri",
    label: "Geometri",
    chapters: [
      { formId: "form1", babId: "bab8" }, // Garis dan Sudut
      { formId: "form1", babId: "bab9" }, // Poligon
      { formId: "form1", babId: "bab10" }, // Perimeter dan Luas
      { formId: "form1", babId: "bab13" }, // Teorem Pythagoras
      { formId: "form2", babId: "bab4" }, // Poligon
      { formId: "form2", babId: "bab5" }, // Bulatan
      { formId: "form2", babId: "bab6" }, // Bentuk Geometri Tiga Dimensi
      { formId: "form2", babId: "bab7" }, // Koordinat
      { formId: "form2", babId: "bab10" }, // Kecerunan Garis Lurus
      { formId: "form2", babId: "bab11" }, // Transformasi Isometri
      { formId: "form3", babId: "bab4" }, // Lukisan Berskala
      { formId: "form3", babId: "bab5" }, // Nisbah Trigonometri
      { formId: "form3", babId: "bab6" }, // Sudut dan Tangen bagi Bulatan
      { formId: "form3", babId: "bab7" }, // Pelan dan Dongakan
      { formId: "form3", babId: "bab8" }, // Lokus dalam Dua Dimensi
      { formId: "form3", babId: "bab9" }, // Garis Lurus
    ],
  },
  {
    id: "statistik",
    label: "Statistik & Kebarangkalian",
    chapters: [
      { formId: "form1", babId: "bab12" }, // Pengendalian Data
      { formId: "form2", babId: "bab12" }, // Sukatan Kecenderungan Memusat
      { formId: "form2", babId: "bab13" }, // Kebarangkalian Mudah
    ],
  },
];

// Peratus penguasaan sesuatu bidang, dikira dari topik yang benar-benar
// "mastered" merentasi bab yang tergolong dalam bidang tersebut. `formId`
// SKOP kiraan kepada satu Tingkatan sahaja — perlu, sebab kira merentasi
// T1-3 sekali gus buat bab yang anak belum sampai lagi dikira "0" dan
// menjadikan hampir semua bidang nampak "Lemah" walaupun anak on-track
// (isu yang dikesan bila ibu bapa perasan laporan sama je untuk T1/T2/T3).
export function getDomainMastery(state, domainId, formId) {
  const domain = DOMAINS.find((d) => d.id === domainId);
  if (!domain) return { totalTopics: 0, masteredTopics: 0, percent: 0 };

  let totalTopics = 0;
  let masteredTopics = 0;

  domain.chapters
    .filter((c) => !formId || c.formId === formId)
    .forEach(({ formId: chapterFormId, babId }) => {
      const chapters = getChapters(chapterFormId);
      const bab = chapters.find((b) => b.id === babId);
      if (!bab) return;
      const progress = getFormProgress(state, chapterFormId);
      const babState = progress.chapters[babId];
      bab.topics.forEach((topik) => {
        totalTopics += 1;
        if (babState?.topics[topik.id]?.status === "mastered") masteredTopics += 1;
      });
    });

  const percent = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0;
  return { totalTopics, masteredTopics, percent };
}

export function getAllDomainMastery(state, formId) {
  return DOMAINS.map((domain) => ({
    ...domain,
    ...getDomainMastery(state, domain.id, formId),
  })).filter((d) => d.totalTopics > 0);
}

// Label tahap penguasaan untuk paparan — ambang ikut andaian munasabah
// (sejajar dengan 85% syarat lulus Ujian Mastery topik individu).
export function getMasteryLevel(percent) {
  if (percent >= 75) return { label: "Kuat", tone: "kuat" };
  if (percent >= 45) return { label: "Sederhana", tone: "sederhana" };
  return { label: "Lemah", tone: "lemah" };
}
