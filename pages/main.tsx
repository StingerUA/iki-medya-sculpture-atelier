import React from "react";
import { createRoot } from "react-dom/client";
import { StoreApp } from "@/components/store-app";
import "@/app/globals.css";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
(window as Window & { __IKI_BASE_PATH__?: string }).__IKI_BASE_PATH__ = base;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreApp initialPath="/tr" />
  </React.StrictMode>,
);
