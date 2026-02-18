import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp"
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsapp/>
    </div>
  );
}

export default MainLayout;
