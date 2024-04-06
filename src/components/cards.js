import Image from "next/image";
import React from "react";

function Cards({ items }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {items.map((item, index) => {
        return (
          <div className="col" key={index}>
            <div className="card shadow-sm">
              <div
                className="card-img-top position-relative"
                style={{ height: "300px" }}
              >
                <Image
                  src={item.node.banner}
                  alt={item.node.title}
                  fill={true}
                />
              </div>
              <div className="card-body">
                <h3>{item.node.title}</h3>
                <p className="card-text">{item.node.subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
