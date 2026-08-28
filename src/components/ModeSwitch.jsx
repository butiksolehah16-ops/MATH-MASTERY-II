import { useProgress } from "../state/ProgressContext.jsx";
import "./ModeSwitch.css";

export default function ModeSwitch() {
  const { state, setMode } = useProgress();

  return (
    <div className="mode-switch" role="radiogroup" aria-label="Mod pembelajaran">
      <button
        type="button"
        role="radio"
        aria-checked={state.mode === "baharu"}
        className={`mode-switch__option${state.mode === "baharu" ? " mode-switch__option--active" : ""}`}
        onClick={() => setMode("baharu")}
      >
        Belajar Baharu
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={state.mode === "ulangkaji"}
        className={`mode-switch__option${state.mode === "ulangkaji" ? " mode-switch__option--active" : ""}`}
        onClick={() => setMode("ulangkaji")}
      >
        Ulangkaji
      </button>
    </div>
  );
}
