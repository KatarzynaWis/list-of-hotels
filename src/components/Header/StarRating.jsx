import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useStoreActions } from "easy-peasy";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const upDateRating = useStoreActions((actions) => actions.upDateRating);

  useEffect(() => {
    upDateRating(rating);
  }, [rating]);

  return (
    <div className="header__star-rating">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={uuidv4()}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={faStar}
              className="header__selected-star"
              color={
                ratingValue <= (hover || rating)
                  ? "var(--gold)"
                  : "var(--white-230)"
              }
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
