// Ikon SVG garis (line-art) bagi lima bentuk tiga dimensi asas — dikongsi
// antara ShapePropertiesExplorer (eksplorasi interaktif) dan ShapeGallery3D
// (rajah rujukan statik dalam Nota) supaya lukisan kekal SAMA di kedua-dua
// tempat, bukan diselenggara dua kali.
export function ShapeIcon3D({ shapeKey }) {
  switch (shapeKey) {
    case "kuboid":
      return (
        <g className="shape-icon__stroke">
          <polygon points="40,90 110,90 110,40 40,40" />
          <polygon points="40,40 60,20 130,20 110,40" />
          <polygon points="110,90 130,70 130,20 110,40" />
          <line x1="40" y1="90" x2="60" y2="70" />
          <line x1="60" y1="70" x2="130" y2="70" />
          <line x1="60" y1="70" x2="60" y2="20" />
        </g>
      );
    case "piramid":
      return (
        <g className="shape-icon__stroke">
          <polygon points="30,90 130,90 100,55 55,55" />
          <line x1="30" y1="90" x2="80" y2="15" />
          <line x1="130" y1="90" x2="80" y2="15" />
          <line x1="100" y1="55" x2="80" y2="15" />
          <line x1="55" y1="55" x2="80" y2="15" />
        </g>
      );
    case "silinder":
      return (
        <g className="shape-icon__stroke">
          <ellipse cx="80" cy="30" rx="45" ry="15" />
          <ellipse cx="80" cy="90" rx="45" ry="15" />
          <line x1="35" y1="30" x2="35" y2="90" />
          <line x1="125" y1="30" x2="125" y2="90" />
        </g>
      );
    case "kon":
      return (
        <g className="shape-icon__stroke">
          <ellipse cx="80" cy="90" rx="45" ry="15" />
          <line x1="35" y1="90" x2="80" y2="15" />
          <line x1="125" y1="90" x2="80" y2="15" />
        </g>
      );
    case "sfera":
    default:
      return (
        <g className="shape-icon__stroke">
          <circle cx="80" cy="55" r="45" />
          <ellipse cx="80" cy="55" rx="45" ry="16" className="shape-icon__equator" />
        </g>
      );
  }
}
