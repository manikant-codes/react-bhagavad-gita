import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      {/* Placeholder hai page ke liye. */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
