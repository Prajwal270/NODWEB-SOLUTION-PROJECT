import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-16 py-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
