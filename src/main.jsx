import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invitacion from "./pages/Invitacion";
import InviFriends from "./pages/InviFriends";
import Touken from "./pages/Touken";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/invitacion" element={<Invitacion />} />
      <Route path="/invifriends" element={<InviFriends />} />
      <Route path="/touken" element={<Touken />} />
    </Routes>
  </BrowserRouter>
);
