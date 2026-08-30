import { useState } from "react";
import { useAccess } from "../state/AccessContext.jsx";
import "./AccessGate.css";

const TOYYIBPAY_LINK = "https://toyyibpay.com/Math-Mastery-Bundle";

export default function AccessGate() {
  const { isExpired, tryUnlock } = useAccess();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const result = tryUnlock(input);
    if (!result.ok) {
      setError(
        result.reason === "expired"
          ? "Kod ni dah tamat tempoh."
          : "Kod tak sah. Semak semula ejaan kod."
      );
      return;
    }
    setError("");
  };

  return (
    <div className="screen access-gate">
      <div className="access-gate__card">
        <span className="access-gate__brand">Math Mastery</span>
        <h1 className="access-gate__heading">
          {isExpired ? "Tempoh percubaan dah tamat" : "Masukkan Kod Akses"}
        </h1>
        <p className="access-gate__sub">
          {isExpired
            ? "Progres kamu masih disimpan — masukkan kod akses penuh untuk sambung."
            : "Ada kod akses? Masukkan di bawah untuk buka semua Tingkatan."}
        </p>

        <form className="access-gate__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Masukkan kod akses anda"
            className="access-gate__input"
            autoCapitalize="characters"
            autoComplete="off"
          />
          <button type="submit" className="access-gate__submit">
            Sahkan Kod
          </button>
        </form>
        {error && <p className="access-gate__error">{error}</p>}

        <div className="access-gate__divider">
          <span>atau</span>
        </div>

        <a
          className="access-gate__buy-link"
          href={TOYYIBPAY_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Beli Akses Penuh — Bayar Online
        </a>
      </div>
    </div>
  );
}
