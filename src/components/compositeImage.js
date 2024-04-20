import React from "react";
import Image from "next/image";

function CompositeImage({ items }) {
  return (
    <div className="img-container">
      <a href={items.featured01.featuredImageLink01}>
        <Image
          className={`img img-about-01`}
          src={items.featured01.featuredImage01}
          width={400}
          height={400}
          alt={items.featured01.featuredImageName01}
        ></Image>
      </a>
      <a href={items.featured02.featuredImageLink02}>
        <Image
          className={`img img-about-02`}
          src={items.featured02.featuredImage02}
          width={400}
          height={400}
          alt={items.featured02.featuredImageName02}
        ></Image>
      </a>
    </div>
  );
}

export default CompositeImage;
