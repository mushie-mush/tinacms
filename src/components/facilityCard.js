import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function FacilityCard({ item }) {
  return (
    <div className="col-md-3 col-6 mb-md-4">
      <Link className="fa-card card h-100" href={`facilities/${item.slug}`}>
        <div style={{ height: "18rem", width: "100%", position: "relative" }}>
          <Image
            className="fa-card-img-top"
            src={item.facilityThumb}
            alt={item.facilityName}
            fill
          />
        </div>
        <div className="fa-card-body">
          <h3 className="fa-card-title">{item.facilityName}</h3>
          <div className="fa-card-btn">
            <FontAwesomeIcon icon={faCar} className="icon" />
            <h2 className="fa-card-number">{item.facilityList.length}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FacilityCard;
