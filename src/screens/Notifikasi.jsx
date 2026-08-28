import { useState } from "react";
import AppHeader from "../components/AppHeader.jsx";
import { useProgress } from "../state/ProgressContext.jsx";
import "./Notifikasi.css";

const SUPPORTS_NOTIFICATION = typeof window !== "undefined" && typeof Notification !== "undefined";

function permissionLabel(permission) {
  if (permission === "granted") return { text: "Dibenarkan", tone: "success" };
  if (permission === "denied") return { text: "Disekat", tone: "error" };
  return { text: "Belum ditetapkan", tone: "neutral" };
}

export default function Notifikasi() {
  const { state, setDailyReminderEnabled } = useProgress();
  const [permission, setPermission] = useState(SUPPORTS_NOTIFICATION ? Notification.permission : "unsupported");
  const [testSent, setTestSent] = useState(false);

  const handleToggle = async () => {
    const turningOn = !state.profile.dailyReminderEnabled;
    if (turningOn) {
      if (!SUPPORTS_NOTIFICATION) return;
      let current = Notification.permission;
      if (current === "default") {
        current = await Notification.requestPermission();
        setPermission(current);
      }
      if (current !== "granted") return; // ditolak (atau masih ditolak dari sebelum ini) — jangan hidupkan toggle
    }
    setDailyReminderEnabled(turningOn);
  };

  const handleTest = () => {
    if (!SUPPORTS_NOTIFICATION || Notification.permission !== "granted") return;
    new Notification("Ini contoh peringatan! 👋", {
      body: "Beginilah rupa peringatan harian kamu nanti.",
      icon: "/icon.svg",
    });
    setTestSent(true);
    setTimeout(() => setTestSent(false), 2500);
  };

  const perm = permissionLabel(permission);

  return (
    <div className="screen notifikasi">
      <AppHeader title="Notifikasi" onBack={true} />

      <section className="notifikasi__section">
        <div className="notifikasi__toggle-row">
          <div className="notifikasi__toggle-text">
            <span className="notifikasi__toggle-title">Peringatan Harian</span>
            <span className="notifikasi__toggle-sub">Peringatan lembut untuk sambung streak kamu.</span>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={state.profile.dailyReminderEnabled}
            className={`notifikasi__switch${state.profile.dailyReminderEnabled ? " notifikasi__switch--on" : ""}`}
            onClick={handleToggle}
            disabled={!SUPPORTS_NOTIFICATION}
          >
            <span className="notifikasi__switch-knob" />
          </button>
        </div>

        {!SUPPORTS_NOTIFICATION && (
          <p className="notifikasi__hint notifikasi__hint--error">
            Peranti/pelayar ini tidak menyokong notifikasi. Cuba buka app ini dalam Chrome atau Safari terkini.
          </p>
        )}

        {SUPPORTS_NOTIFICATION && (
          <p className="notifikasi__hint">
            Kebenaran pelayar: <span className={`notifikasi__perm-badge notifikasi__perm-badge--${perm.tone}`}>{perm.text}</span>
            {permission === "denied" && " — buka tetapan pelayar untuk benarkan semula."}
          </p>
        )}

        <p className="notifikasi__hint">
          <strong>Nota penting:</strong> peringatan ni HANYA akan muncul bila kamu buka semula app ini (dan belum
          praktis hari tu) — bukan notifikasi latar belakang bila app tertutup sepenuhnya, sebab app ni tiada
          server. Untuk hasil terbaik di iPhone, "Add to Home Screen" dahulu supaya app ini berjalan macam app
          sebenar.
        </p>

        {state.profile.dailyReminderEnabled && permission === "granted" && (
          <button type="button" className="notifikasi__test-btn" onClick={handleTest}>
            {testSent ? "Notifikasi dihantar!" : "Uji Notifikasi"}
          </button>
        )}
      </section>
    </div>
  );
}
