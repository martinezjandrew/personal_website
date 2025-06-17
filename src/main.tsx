import React from 'react';
import './style.css';
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const root = createRoot(document.getElementById("app")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
