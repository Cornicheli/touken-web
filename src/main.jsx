import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitacion from "./pages/Invitacion";
import Touken from "./pages/Touken";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitacion" element={<Invitacion />} />
      <Route path="/touken" element={<Touken />} />
    </Routes>
  </BrowserRouter>
);
