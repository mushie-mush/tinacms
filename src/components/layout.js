import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
