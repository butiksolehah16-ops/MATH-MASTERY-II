import "./PolygonGallery.css";

// Kira titik-titik poligon SEKATA (equilateral) secara programatik — elak
// hardcode koordinat setiap bentuk secara manual (senang salah, susah
// selenggara). Bucu pertama sentiasa di ATAS (−90°) supaya semua bentuk
// dalam galeri kekal SEJAJAR orientasinya.
function regularPolygonPoints(sides, cx, cy, r) {
  const points = [];
  for (let i = 0; i < sides; i++) {
    const angle = (-90 + (360 / sides) * i) * (Math.PI / 180);
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return points.join(" ");
}

const POLYGONS = [
  { sides: 3, name: "Segi Tiga" },
  { sides: 4, name: "Segi Empat" },
  { sides: 5, name: "Pentagon" },
  { sides: 6, name: "Heksagon" },
  { sides: 7, name: "Heptagon" },
  { sides: 8, name: "Oktagon" },
  { sides: 9, name: "Nonagon" },
  { sides: 10, name: "Dekagon" },
];

// Rajah rujukan STATIK yang senaraikan poligon sekata ikut bilangan sisi (3
// hingga 10) — vokabular asas yang diperlukan sebelum formula bilangan
// pepenjuru (n − 3) dalam topik ni masuk akal.
export default function PolygonGallery() {
  return (
    <div className="polygon-gallery">
      {POLYGONS.map(({ sides, name }) => (
        <figure key={sides} className="polygon-gallery__item">
          <svg viewBox="0 0 100 100" className="polygon-gallery__svg">
            <polygon points={regularPolygonPoints(sides, 50, 50, 40)} />
          </svg>
          <figcaption>
            {name}
            <span className="polygon-gallery__sides">{sides} sisi</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
