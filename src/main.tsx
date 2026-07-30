import "@/styles/global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@/pages/home.tsx";
import AboutPage from "@/pages/about.tsx";
import Pets from "@/pages/pet.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pet" element={<Pets />} />
    </Routes>
  </BrowserRouter>,
);