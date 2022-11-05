import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
