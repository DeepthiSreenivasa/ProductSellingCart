import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AppRouterProvider from "./providers/AppRouterProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouterProvider>
      <App />
    </AppRouterProvider>
  </StrictMode>,
);
