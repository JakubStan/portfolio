import React from "react";
import { createRoot } from "react-dom/client";
import Favicon from "react-favicon";
import App from "./App";
import favicon from "./fevicon.png";
const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("No root");

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
    <Favicon url={favicon} />
  </React.StrictMode>
);
