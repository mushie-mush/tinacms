import React from "react";
import Card from "./card";
import FacilityCard from "./facilityCard";

function Cards({ items, category }) {
  return (
    <div className="row cards mt-4 mb-4">
      {items.map((item, index) =>
        category === "facility" ? (
          <FacilityCard item={item} key={index} />
        ) : (
          <Card item={item} category={category} key={index} />
        )
      )}
    </div>
  );
}

export default Cards;
