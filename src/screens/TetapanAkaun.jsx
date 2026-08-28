import { useState } from "react";
import AppHeader from "../components/AppHeader.jsx";
import { FORMS } from "../data/forms.js";
import { useProgress } from "../state/ProgressContext.jsx";
import "./TetapanAkaun.css";

// Tetapan Akaun — TEMPATAN sahaja (tiada login/backend). Progress disimpan
// dalam localStorage peranti ini sahaja, jadi skrin ni fokus kepada apa yang
// pelajar BOLEH kawal secara tempatan: nama profil, reset progress ikut
// Tingkatan, dan backup (eksport/import fail JSON) untuk pindah peranti.
export default function TetapanAkaun() {
  const { state, setProfileName, resetForm, replaceState } = useProgress();
  const [nameInput, setNameInput] = useState(state.profile.name);
  const [nameSaved, setNameSaved] = useState(false);
  const [resetTarget, setResetTarget] = useState(null);
  const [importError, setImportError] = useState(null);
  const [importSuccess, setImportSuccess] = useState(false);

  const handleSaveName = () => {
    setProfileName(nameInput);
    setNameSaved(true);
    setTimeout(() => setNameSaved(false), 2000);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `math-mastery-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportError(null);
    setImportSuccess(false);
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        if (!parsed || typeof parsed !== "object" || !parsed.forms || typeof parsed.xp !== "number") {
          throw new Error("invalid shape");
        }
        replaceState(parsed);
        setNameInput(parsed.profile?.name ?? "Pelajar");
        setImportSuccess(true);
      } catch {
        setImportError("Fail tidak sah — pastikan ia fail backup Math Mastery yang betul.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="screen tetapan-akaun">
      <AppHeader title="Tetapan Akaun" onBack={true} />

      <section className="tetapan-akaun__section">
        <h2 className="tetapan-akaun__section-title">Nama Pelajar</h2>
        <div className="tetapan-akaun__name-row">
          <input
            type="text"
            className="tetapan-akaun__input"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            maxLength={30}
            placeholder="Nama kamu"
          />
          <button
            type="button"
            className="tetapan-akaun__save-btn"
            onClick={handleSaveName}
            disabled={!nameInput.trim()}
          >
            Simpan
          </button>
        </div>
        {nameSaved && <span className="tetapan-akaun__hint tetapan-akaun__hint--success">Nama disimpan!</span>}
      </section>

      <section className="tetapan-akaun__section">
        <h2 className="tetapan-akaun__section-title">Backup Progress</h2>
        <p className="tetapan-akaun__hint">
          Progress kamu disimpan HANYA dalam phone/browser ini — tiada akaun, tiada server. Eksport fail backup
          supaya boleh pindah ke peranti lain, atau simpan sebelum tukar phone.
        </p>
        <div className="tetapan-akaun__backup-row">
          <button type="button" className="tetapan-akaun__backup-btn" onClick={handleExport}>
            Eksport Backup
          </button>
          <label className="tetapan-akaun__backup-btn tetapan-akaun__backup-btn--secondary">
            Import Backup
            <input type="file" accept="application/json" onChange={handleImportFile} hidden />
          </label>
        </div>
        {importError && <span className="tetapan-akaun__hint tetapan-akaun__hint--error">{importError}</span>}
        {importSuccess && (
          <span className="tetapan-akaun__hint tetapan-akaun__hint--success">Backup berjaya diimport!</span>
        )}
      </section>

      <section className="tetapan-akaun__section">
        <h2 className="tetapan-akaun__section-title">Reset Progress</h2>
        <p className="tetapan-akaun__hint">
          Padam SEMUA progress bagi satu Tingkatan (bab, topik, keputusan ujian). Tindakan ini TIDAK boleh
          diundur.
        </p>
        <div className="tetapan-akaun__reset-list">
          {FORMS.filter((f) => f.status === "available").map((form) => (
            <div key={form.id} className="tetapan-akaun__reset-row">
              <span className="tetapan-akaun__reset-row-label">{form.label}</span>
              {resetTarget === form.id ? (
                <div className="tetapan-akaun__reset-confirm">
                  <span className="tetapan-akaun__reset-confirm-text">Pasti?</span>
                  <button
                    type="button"
                    className="tetapan-akaun__reset-btn tetapan-akaun__reset-btn--danger"
                    onClick={() => {
                      resetForm(form.id);
                      setResetTarget(null);
                    }}
                  >
                    Ya, Reset
                  </button>
                  <button type="button" className="tetapan-akaun__reset-btn" onClick={() => setResetTarget(null)}>
                    Batal
                  </button>
                </div>
              ) : (
                <button type="button" className="tetapan-akaun__reset-btn" onClick={() => setResetTarget(form.id)}>
                  Reset
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
