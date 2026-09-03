import "./QuadrilateralTypesGallery.css";

// Titik dikira secara manual — enam jenis sisi empat, ikut senarai yang
// SEDIA ADA dalam formula.bullets topik ni (segiempat sama, segiempat
// tepat, jajar genjang, rombus, trapezium, layang-layang). Bukan untuk
// skala tepat, cuma untuk tunjuk ciri bentuk macam buku teks.
const QUADRILATERALS = [
  { key: "segiempat-sama", name: "Segi Empat Sama", points: "20,20 80,20 80,80 20,80" },
  { key: "segiempat-tepat", name: "Segi Empat Tepat", points: "10,30 90,30 90,70 10,70" },
  { key: "jajar-genjang", name: "Jajar Genjang", points: "25,25 85,25 65,75 5,75" },
  { key: "rombus", name: "Rombus", points: "50,10 85,50 50,90 15,50" },
  { key: "trapezium", name: "Trapezium", points: "25,20 75,20 95,80 5,80" },
  { key: "layang-layang", name: "Layang-Layang", points: "50,10 85,38 50,90 15,38" },
];

// Rajah rujukan STATIK — senaraikan enam jenis sisi empat yang disebut
// dalam formula topik ni, macam jadual "jenis sisi empat" dalam buku teks.
export default function QuadrilateralTypesGallery() {
  return (
    <div className="quad-types">
      {QUADRILATERALS.map((quad) => (
        <figure key={quad.key} className="quad-types__item">
          <svg viewBox="0 0 100 100" className="quad-types__svg">
            <polygon points={quad.points} />
          </svg>
          <figcaption>{quad.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
