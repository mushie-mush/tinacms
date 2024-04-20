import React, { useEffect, useState } from "react";
import Link from "next/link";
import client from "tina/__generated__/client";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menus, setMenus] = useState();
  const currentPath = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const navbarData = await client.request({
        query: `query global {
        global(relativePath: "Global.mdx") {
          navbar {
            menu {
              label
              link
              path
            }
          }
        }
      }`,
      });

      setMenus(navbarData.data.global.navbar.menu);
    };

    fetchData();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img className="logo" src="/media/logo.png" alt="logo" />
          <div className="logo-back"></div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse `}
          id="navbarNav"
          toggle="collapse"
          data-target=".navbar-collapse"
        >
          <div className="navbar-nav ms-auto">
            {menus?.map((menu) => (
              <Link
                className={`nav-link ${
                  menu.link === currentPath ? `active` : ``
                }`}
                href={menu.link}
                key={menu.label}
              >
                {menu.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
