import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App1 from "./App1";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
