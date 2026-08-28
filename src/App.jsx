import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PilihForm from "./screens/PilihForm.jsx";
import AccessGate from "./screens/AccessGate.jsx";
import RouteLoading from "./components/RouteLoading.jsx";
import InstallBanner from "./components/InstallBanner.jsx";
import { useThemeByRoute } from "./hooks/useThemeByRoute.js";
import { useDailyReminder } from "./hooks/useDailyReminder.js";
import { useAccess } from "./state/AccessContext.jsx";

// PilihForm (skrin pertama) dimuat terus supaya first paint pantas. Skrin
// lain (terutamanya SkrinTopik, yang tarik SEMUA kandungan Form 1/2/3 melalui
// content/index.js, dan UjianUasa, yang tarik semua kertas UASA/UPSA) di-
// lazy-load supaya pelajar tak perlu muat turun kandungan berat sebelum pun
// sempat pilih Tingkatan — Service Worker akan cache chunk-chunk ni lepas
// kunjungan pertama, jadi ini cuma optimumkan MULA pertama, bukan offline.
const DashboardForm = lazy(() => import("./screens/DashboardForm.jsx"));
const PetaBab = lazy(() => import("./screens/PetaBab.jsx"));
const BabTopikList = lazy(() => import("./screens/BabTopikList.jsx"));
const SkrinTopik = lazy(() => import("./screens/SkrinTopik.jsx"));
const SenaraiUjian = lazy(() => import("./screens/SenaraiUjian.jsx"));
const UjianUasa = lazy(() => import("./screens/UjianUasa.jsx"));
const Profil = lazy(() => import("./screens/Profil.jsx"));
const LaporanProgress = lazy(() => import("./screens/LaporanProgress.jsx"));
const TetapanAkaun = lazy(() => import("./screens/TetapanAkaun.jsx"));
const Notifikasi = lazy(() => import("./screens/Notifikasi.jsx"));

export default function App() {
  useThemeByRoute();
  useDailyReminder();
  const { isUnlocked } = useAccess();

  if (!isUnlocked) {
    return <AccessGate />;
  }

  return (
    <>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route path="/" element={<PilihForm />} />
          <Route path="/f/:formId" element={<DashboardForm />} />
          <Route path="/f/:formId/peta" element={<PetaBab />} />
          <Route path="/f/:formId/bab/:babId" element={<BabTopikList />} />
          <Route path="/f/:formId/bab/:babId/topik/:topikId" element={<SkrinTopik />} />
          <Route path="/f/:formId/ujian" element={<SenaraiUjian />} />
          <Route path="/f/:formId/ujian/:paperId" element={<UjianUasa />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profil/laporan" element={<LaporanProgress />} />
          <Route path="/profil/tetapan" element={<TetapanAkaun />} />
          <Route path="/profil/notifikasi" element={<Notifikasi />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <InstallBanner />
    </>
  );
}
