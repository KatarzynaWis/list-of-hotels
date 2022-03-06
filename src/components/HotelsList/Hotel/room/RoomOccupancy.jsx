import React from "react";

const RoomOccupancy = ({ ccupancy }) => {
  return (
    <div>
      <p className="hotels-list__room-occupancy">
        Adults: {ccupancy.maxAdults}
      </p>
      <p className="hotels-list__room-occupancy">
        Children: {ccupancy.maxChildren}
      </p>
    </div>
  );
};

export default RoomOccupancy;
