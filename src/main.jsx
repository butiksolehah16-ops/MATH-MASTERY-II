import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ProgressProvider } from "./state/ProgressContext.jsx";
import { MisconceptionProvider } from "./state/MisconceptionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProgressProvider>
        <MisconceptionProvider>
          <App />
        </MisconceptionProvider>
      </ProgressProvider>
    </BrowserRouter>
  </StrictMode>
);
