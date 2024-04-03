import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes.tsx";
import "./index.css";

import { ThemeProvider } from "@/components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
