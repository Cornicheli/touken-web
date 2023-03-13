import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* B2B */
import HomeB2B from "./pages/b2b/HomeB2B";
import InvitacionB2B from "./pages/b2b/InvitacionB2B";
import ToukenB2B from "./pages/b2b/ToukenB2B";

/* B2C */
import HomeB2C from "./pages/b2c/HomeB2C";
import InvitacionB2C from "./pages/b2c/InvitacionB2C";
import ToukenB2C from "./pages/b2c/ToukenB2C";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* B2B */}
      <Route path="/homeb2b" element={<HomeB2B />} />
      <Route path="/invitacionb2b" element={<InvitacionB2B />} />
      <Route path="/toukenb2b" element={<ToukenB2B />} />
      {/* B2C */}
      <Route path="/" element={<HomeB2C />} />
      <Route path="/invitacionb2c" element={<InvitacionB2C />} />
      <Route path="/toukenb2c" element={<ToukenB2C />} />
    </Routes>
  </BrowserRouter>
);
