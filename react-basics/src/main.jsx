import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
// import ComponentsOverview from "./ComponentsOverview.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ComponentsOverview /> */}
  </StrictMode>
);
