// main.jsx  ← faqat shu ko‘rinishda bo‘lsin!
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "../src/firdavshome/Home.jsx";
import ZooRepeat from "../src/firdavshome/sections/ZooRepeat.jsx";
// SectionOne ni bu yerga import qilmang! U Home ichida chaqiriladi

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repeat" element={<ZooRepeat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);