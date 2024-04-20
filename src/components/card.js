import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({ item, category }) {
  return (
    <div className="col-md-3 col-6 mb-md-4">
      <Link className="card h-100 " href={`${category}/${item.slug}`}>
        <Image
          className="card-img-top"
          src={item.thumbnail}
          width={400}
          height={400}
          alt={item.name}
        />
        <div className="card-body">
          <p>{item.type}</p>
          <h2 className="card-title">{item.name}</h2>
          <button className="card-btn" aria-label="Tombol Buka">
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Card;
