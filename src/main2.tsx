import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App2 from "./App2";

const container = document.getElementById("root2");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App2 />
  </StrictMode>
);
