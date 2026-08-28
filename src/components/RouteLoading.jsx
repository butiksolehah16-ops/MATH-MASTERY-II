import "./RouteLoading.css";

// Fallback dipaparkan sementara chunk skrin (lazy-loaded) sedang dimuat turun
// — biasanya sekelip mata sahaja lepas kunjungan pertama (Service Worker
// dah cache semua chunk), tapi perlu ada supaya tiada skrin kosong seketika.
export default function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-label="Memuatkan">
      <span className="route-loading__dot" />
      <span className="route-loading__dot" />
      <span className="route-loading__dot" />
    </div>
  );
}
