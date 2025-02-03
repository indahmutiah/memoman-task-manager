import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { HomeRoute } from "@/routes/home";
import { MemoRoute } from "@/routes/memo";
import { LayoutRoute } from "@/routes/layout";
import { AboutRoute } from "@/routes/about";
import { CounterRoute } from "@/routes/counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route index path="/" element={<HomeRoute />} />
          <Route path="/memo/:id" element={<MemoRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/counter" element={<CounterRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
