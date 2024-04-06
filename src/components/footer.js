import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer text-body-secondary py-5">
      <div className="container">
        <p className="float-end mb-1">
          <Link href="">Back to top</Link>
        </p>
        <p className="mb-1">
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p className="mb-0">
          New to Bootstrap? <Link href="/">Visit the homepage</Link> or read our{" "}
          <Link href="/docs/5.3/getting-started/introduction/">
            getting started guide
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
