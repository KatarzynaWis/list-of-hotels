import React from "react";
import { HotelImage, HotelName, Address, Stars } from "./header";

const HeaderHotel = () => {
  return (
    <div>
      <HotelImage />
      <HotelName />
      <Address />
      <Stars />
    </div>
  );
};

export default HeaderHotel;
