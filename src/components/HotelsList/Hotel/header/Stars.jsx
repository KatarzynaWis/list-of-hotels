import React from "react";
import renderStars from "../../../../helpers/renderStars";

const Stars = ({ stars }) => {
  return <div>{renderStars(stars)}</div>;
};

export default Stars;
