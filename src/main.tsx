import "@fontsource-variable/archivo/wdth.css";
import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// Global styles load first so component styles can override them.
import "./styles/tokens.css";
import "./styles/base.css";
import App from "./App";
import {SiteProvider} from "./i18n";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element #root was not found in index.html");
}

createRoot(container).render(
  <StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </StrictMode>
);
