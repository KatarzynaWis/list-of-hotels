import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const renderStars = (starsNumber) => {
  let starRating = [];
  switch (starsNumber) {
    case "1":
      starRating.push(true, false, false, false, false);
      break;
    case "2":
      starRating.push(true, true, false, false, false);
      break;
    case "3":
      starRating.push(true, true, true, false, false);
      break;
    case "4":
      starRating.push(true, true, true, true, false);
      break;
    case "5":
      starRating.push(true, true, true, true, true);
      break;
  }

  return starRating.map((star) =>
    star ? (
      <FontAwesomeIcon
        key={uuidv4()}
        icon={faStar}
        className="hotels-list__star hotels-list__star--gold"
      />
    ) : (
      <FontAwesomeIcon
        key={uuidv4()}
        icon={faStar}
        className="hotels-list__star hotels-list__star--grey"
      />
    )
  );
};

export default renderStars;
