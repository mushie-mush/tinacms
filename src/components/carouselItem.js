import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const carouselButton = (props) => {
  return (
    <Link className="button-carousel" href={props.buttonLink || ``}>
      {props.buttonText}
    </Link>
  );
};

function CarouselItem({ item, index }) {
  return (
    <div
      className={`carousel-item carousel-home-item ${
        index === 0 ? "active" : ""
      }`}
    >
      <Image
        src={item.carouselImage}
        alt={item.carouselTitle}
        className="carousel-home-img"
        fill={true}
        placeholder="blur"
        blurDataURL={`data:image/jpeg;base64,${item.carouselImage}`}
      ></Image>
      <div className="container">
        {item.carouselText.children.length !== 0 && (
          <div className="carousel-caption carousel-home-caption text-start">
            <TinaMarkdown
              content={item.carouselText}
              components={{ carouselButton }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselItem;
