import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CursorContextProvider } from "./contexts/CursorContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CursorContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CursorContextProvider>
);
