import { UASA_PAPERS } from "../uasa/index.js";
import { UPSA_PAPERS } from "../upsa/index.js";

// Semua kertas ujian (UASA akhir sesi + UPSA pertengahan sesi) untuk satu
// senarai/pencarian tunggal — skrin UjianUasa & SenaraiUjian guna ini supaya
// tak perlu tahu jenis exam (UASA/UPSA) sebelum cari kertas melalui paperId.
export const ALL_EXAM_PAPERS = [...UASA_PAPERS, ...UPSA_PAPERS];

export function getExamPaper(paperId) {
  return ALL_EXAM_PAPERS.find((p) => p.id === paperId);
}
