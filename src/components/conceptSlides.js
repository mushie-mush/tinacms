import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function ConceptSlides({ items }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = function () {
    setCurrentSlide(currentSlide + 1);

    if (currentSlide === items.length - 1) {
      setCurrentSlide(0);
    }
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      setCurrentSlide(items.length - 1);
      return;
    }

    setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="row mt-5 justify-content-center">
      <div className={`col-sm-12 col-lg-9 d-flex concepts`}>
        <div className="concept-details">
          <div className="concept-text">
            <h3>{items[currentSlide]?.conceptTitle}</h3>
            <TinaMarkdown content={items[currentSlide]?.conceptText} />
          </div>
          <div className="concept-buttons">
            <button
              className="button-prev"
              onClick={() => prevSlide()}
              aria-label="Tombol Sebelum"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="button-next"
              onClick={() => nextSlide()}
              aria-label="Tombol Berikut"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="concept-img">
          <img
            key={items[currentSlide]?.conceptTitle}
            src={items[currentSlide]?.conceptImage}
            alt={items[currentSlide]?.conceptTitle}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ConceptSlides;
