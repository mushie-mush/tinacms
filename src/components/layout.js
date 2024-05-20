import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import globalData from "../../contents/Global.json";

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
