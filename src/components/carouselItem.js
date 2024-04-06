import React from "react";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function CarouselItem({ item, index }) {
  return (
    <div className={`carousel-item ${index === 1 ? "active" : ""}`}>
      <Image
        src={item.carouselImage}
        alt={item.carouselTitle}
        fill={true}
      ></Image>
      <div className="container">
        <div className="carousel-caption text-start">
          <TinaMarkdown content={item.carouselText} />
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
