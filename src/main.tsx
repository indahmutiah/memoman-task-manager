import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

import { HomeRoute } from "@/routes/home";
import { MemoRoute } from "@/routes/memo";
import { Layout } from "@/routes/layout";
import { About } from "@/routes/about";
import { CounterRoute } from "@/routes/counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomeRoute />} />
          <Route path="/memo/:id" element={<MemoRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<CounterRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
