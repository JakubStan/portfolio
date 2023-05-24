import React from "react";
import { createRoot } from "react-dom/client";
import Favicon from "react-favicon";
import App from "./App";
import favicon from "./fevicon.png";
import "./i18n.js";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const rootEl = document.querySelector("#root");
if (!rootEl) throw new Error("No root");

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="...loading">
        <App />
      </Suspense>
    </BrowserRouter>
    <Favicon url={favicon} />
  </React.StrictMode>
);
