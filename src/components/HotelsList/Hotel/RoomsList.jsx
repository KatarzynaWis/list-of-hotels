import React from "react";
import { RoomName, RoomOccupancy, RoomDescription } from "./rooms";

const RoomsList = () => {
  return (
    <div>
      <RoomName />
      <RoomOccupancy />
      <RoomDescription />
    </div>
  );
};

export default RoomsList;
