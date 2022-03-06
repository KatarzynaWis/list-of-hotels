import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const HotelImages = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 2) {
      setSlideIndex(0);
    }
  };
  const prevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(images.length - 1);
    } else if (slideIndex <= images.length - 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div key={uuidv4()} className="hotels-list__images">
      <img
        className="hotels-list__image"
        src={images[slideIndex].url}
        alt={images[slideIndex].alt ? images[slideIndex].alt : "hotel"}
      />
      <div
        onClick={prevSlide}
        className="hotels-list__btn hotels-list__btn--prev">
        <FontAwesomeIcon icon={faAngleLeft} className="hotels-list__icon" />
      </div>
      <div
        onClick={nextSlide}
        className="hotels-list__btn hotels-list__btn--next">
        <FontAwesomeIcon icon={faAngleRight} className="hotels-list__icon" />
      </div>
    </div>
  );
};

export default HotelImages;
