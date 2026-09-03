import "./TriangleTypesGallery.css";

// Titik dikira secara manual (bukan poligon sekata) sebab setiap jenis segi
// tiga sengaja LAIN bentuk/kadaran — sama macam rajah "jenis segi tiga"
// dalam buku teks (bukan untuk skala tepat, cuma untuk tunjuk ciri).
const TRIANGLES = [
  { key: "sama-sisi", name: "Sama Sisi", points: "20,80 80,80 50,25" },
  { key: "sama-kaki", name: "Sama Kaki", points: "30,80 70,80 50,15" },
  { key: "sesisi-tak-sama", name: "Sesisi Tak Sama", points: "15,85 90,75 55,15" },
  { key: "tirus", name: "Tirus (Lancip)", points: "20,85 85,65 45,15" },
  { key: "bersudut-tegak", name: "Bersudut Tegak", points: "15,85 85,85 15,15", rightAngleAt: { x: 15, y: 85 } },
  { key: "tumpul", name: "Tumpul", points: "10,85 90,85 75,20" },
];

// Rajah rujukan STATIK — senaraikan enam jenis segi tiga (ikut sisi: sama
// sisi/sama kaki/sesisi tak sama; ikut sudut: tirus/bersudut tegak/tumpul),
// macam jadual "jenis segi tiga" dalam buku teks.
export default function TriangleTypesGallery() {
  return (
    <div className="triangle-types">
      {TRIANGLES.map((tri) => (
        <figure key={tri.key} className="triangle-types__item">
          <svg viewBox="0 0 100 100" className="triangle-types__svg">
            <polygon points={tri.points} />
            {tri.rightAngleAt && (
              <rect
                x={tri.rightAngleAt.x}
                y={tri.rightAngleAt.y - 10}
                width="10"
                height="10"
                className="triangle-types__right-angle"
              />
            )}
          </svg>
          <figcaption>{tri.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
