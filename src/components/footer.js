import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="container">
      <div className="row footer-menu">
        <div className="col-md-8">
          <div className="d-flex footer-nav">
            <Link href="/" className="nav-item">
              Beranda
            </Link>
            <Link href="/about" className="nav-item">
              Tentang Kami
            </Link>
            <Link href="/products" className="nav-item">
              Produk
            </Link>
            <Link href="/facilities" className="nav-item">
              Fasilitas
            </Link>
            <Link href="/access" className="nav-item">
              Akses
            </Link>
            <Link href="/contact" className="nav-item">
              Kontak
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex  footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100071002260687"
              className="social-item"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/grandwisatabekasi_official/"
              className="social-item"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://youtube.com/channel/UCAuOA0btVv_BnEb6-9lfLWA"
              className="social-item"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://vt.tiktok.com/ZGJUXMthB/" className="social-item">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
      <div className="row footer-brands">
        <span>© 2021 Grand Wisata Bekasi</span>
        <img src={"/media/logo_sinarmas.png"} alt=""></img>
      </div>
    </footer>
  );
}

export default Footer;
