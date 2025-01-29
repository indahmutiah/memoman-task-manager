import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { App } from "./application";
import { MemoDetailsRoute } from "./routes/memo-details";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path = "/" element = { <App /> } />
        <Route path = "/memo-details/:id" element = { <MemoDetailsRoute /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
