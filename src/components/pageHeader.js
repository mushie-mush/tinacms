import React from "react";
import Image from "next/image";

function PageHeader({ bg, children }) {
  return (
    <header className="page-header">
      <Image
        className="background-img"
        src={bg}
        alt="Banner"
        width={1920}
        height={300}
      />
      <div className="bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{children}</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
