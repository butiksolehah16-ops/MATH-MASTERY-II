// Kod akses app — kod bayaran (kekal, type "paid") diberi bila customer dah
// bayar; kod beta (type "beta") ada tarikh tamat untuk tempoh percubaan.
// Senarai ni bahagian dari bundle app — untuk tambah kod baru (lepas jualan),
// edit fail ni dan push melalui GitHub Desktop macam biasa.
export const ACCESS_CODES = [
  { code: "BETA2026A", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026B", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026C", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026D", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026E", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026F", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026G", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
  { code: "BETA2026H", type: "beta", expiresAt: "2026-09-27T23:59:59+08:00" },
];

export function findAccessCode(input) {
  const normalized = String(input ?? "").trim().toUpperCase();
  if (!normalized) return null;
  return ACCESS_CODES.find((c) => c.code === normalized) ?? null;
}
