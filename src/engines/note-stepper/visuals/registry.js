import NumberLineExplorer from "./NumberLineExplorer.jsx";
import FractionBarExplorer from "./FractionBarExplorer.jsx";
import SquareGridExplorer from "./SquareGridExplorer.jsx";
import RatioBlocksExplorer from "./RatioBlocksExplorer.jsx";
import VariableBoxExplorer from "./VariableBoxExplorer.jsx";
import LikeTermsExplorer from "./LikeTermsExplorer.jsx";
import BalanceScaleExplorer from "./BalanceScaleExplorer.jsx";
import AngleSumExplorer from "./AngleSumExplorer.jsx";
import PolygonDiagonalExplorer from "./PolygonDiagonalExplorer.jsx";
import PolygonAngleSumExplorer from "./PolygonAngleSumExplorer.jsx";
import PerimeterWalkExplorer from "./PerimeterWalkExplorer.jsx";
import SetBuilderExplorer from "./SetBuilderExplorer.jsx";
import VennComplementExplorer from "./VennComplementExplorer.jsx";
import BarChartExplorer from "./BarChartExplorer.jsx";
import PythagorasExplorer from "./PythagorasExplorer.jsx";
import DistributionExplorer from "./DistributionExplorer.jsx";
import CirclePartsExplorer from "./CirclePartsExplorer.jsx";
import ChordBisectorExplorer from "./ChordBisectorExplorer.jsx";
import ShapePropertiesExplorer from "./ShapePropertiesExplorer.jsx";
import CubeNetExplorer from "./CubeNetExplorer.jsx";
import CoordinatePlaneExplorer from "./CoordinatePlaneExplorer.jsx";
import FunctionGraphExplorer from "./FunctionGraphExplorer.jsx";
import TransformationExplorer from "./TransformationExplorer.jsx";
import TrigRatioExplorer from "./TrigRatioExplorer.jsx";
import TangentCircleExplorer from "./TangentCircleExplorer.jsx";
import PlaceholderVisual from "./PlaceholderVisual.jsx";
import ShapeGallery3D from "./ShapeGallery3D.jsx";
import PolygonGallery from "./PolygonGallery.jsx";
import CircleAllPartsFigure from "./CircleAllPartsFigure.jsx";
import TriangleTypesGallery from "./TriangleTypesGallery.jsx";
import QuadrilateralTypesGallery from "./QuadrilateralTypesGallery.jsx";

// Slot visual eksplorasi ikut jenis topik (spec ms. 69-73):
//   Integer/nombor       -> garis nombor interaktif
//   Pecahan/Perpuluhan   -> bar berpetak (perpuluhan ialah pecahan berpenyebut
//                           kuasa 10, jadi komponen sama dikongsi guna prop
//                           `format: "decimal"`)
//   Kuasa dua/tiga       -> grid petak persegi (tunjuk n x n secara visual)
//   Nisbah/Kadaran       -> dua kumpulan blok (tunjuk a:b berubah bentuk)
//   Pemboleh ubah        -> kotak nilai berubah (tunjuk x + pemalar bagi pelbagai x,
//                           atau y = jumlah - x bagi perkaitan 2 pemboleh ubah)
//   Sebutan serupa       -> dua kumpulan blok berlabel sama bergabung jadi satu
//   Persamaan linear     -> penimbang dua pinggan (operasi songsang kekal seimbang)
//   Sudut/Geometri       -> jejari berputar dari satu bucu (tunjuk sudut membesar
//                           sehingga capai jumlah sasaran, cth 180°/360°)
const VISUAL_REGISTRY = {
  "number-line": NumberLineExplorer,
  "fraction-bar": FractionBarExplorer,
  "square-grid": SquareGridExplorer,
  "ratio-blocks": RatioBlocksExplorer,
  "variable-box": VariableBoxExplorer,
  "like-terms": LikeTermsExplorer,
  "balance-scale": BalanceScaleExplorer,
  "angle-sum": AngleSumExplorer,
  "polygon-diagonal": PolygonDiagonalExplorer,
  "polygon-angle-sum": PolygonAngleSumExplorer,
  "perimeter-walk": PerimeterWalkExplorer,
  "set-builder": SetBuilderExplorer,
  "venn-complement": VennComplementExplorer,
  "bar-chart": BarChartExplorer,
  "pythagoras": PythagorasExplorer,
  "distribution": DistributionExplorer,
  "circle-parts": CirclePartsExplorer,
  "chord-bisector": ChordBisectorExplorer,
  "shape-properties": ShapePropertiesExplorer,
  "cube-net": CubeNetExplorer,
  "coordinate-plane": CoordinatePlaneExplorer,
  "function-graph": FunctionGraphExplorer,
  "transformation": TransformationExplorer,
  "trig-ratio": TrigRatioExplorer,
  "tangent-circle": TangentCircleExplorer,
};

export function getExplorationVisual(visualType) {
  return VISUAL_REGISTRY[visualType] ?? PlaceholderVisual;
}

// Rajah rujukan STATIK (bukan eksplorasi interaktif) yang boleh dilekatkan
// pada mana-mana sub-fasa Nota (hook/insight/formula) melalui medan `figure`
// dalam kandungan — cth. `insight: { ..., figure: "shapes-3d" }`. Berasingan
// daripada VISUAL_REGISTRY sebab exploration SENTIASA satu visual interaktif
// bersama onFinished, manakala figure cuma paparan rujukan tanpa interaksi.
const FIGURE_REGISTRY = {
  "shapes-3d": ShapeGallery3D,
  "polygon-names": PolygonGallery,
  "circle-all-parts": CircleAllPartsFigure,
  "triangle-types": TriangleTypesGallery,
  "quadrilateral-types": QuadrilateralTypesGallery,
};

export function getFigure(figureKey) {
  return FIGURE_REGISTRY[figureKey] ?? null;
}
