// Kocok array secara rawak (Fisher-Yates). Dipakai oleh setiap engine soalan
// supaya jawapan betul TIDAK PERNAH konsisten di kedudukan sama (cth. selalu
// pilihan pertama) — mengelak pelajar "hafal kedudukan" dan bukan konsep.
export function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Sesuaikan jawapan teks ditaip pelajar dengan jawapan rujukan: buang ruang,
// seragamkan pelbagai bentuk tanda tolak (−, –, —) kepada "-" biasa supaya
// papan kekunci mudah alih (tiada simbol −) tetap diterima, dan abaikan
// huruf besar/kecil (cth. jawapan teks seperti "Ya"/"Betul" tetap sepadan
// tak kira huruf besar/kecil ditaip pelajar).
export function normalizeAnswer(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[−–—]/g, "-")
    .replace(/\s+/g, "");
}
