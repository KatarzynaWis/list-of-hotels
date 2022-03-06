import React from "react";
import { HotelImages, HotelName, Address, Stars } from "./header";

const HeaderHotel = ({ hotelData }) => {
  return (
    <div className="hotels-list__header-hotel">
      <HotelImages images={hotelData.images} />
      <div>
        <HotelName name={hotelData.name} />
        <Address address1={hotelData.address1} address2={hotelData.address2} />
      </div>
      <Stars stars={hotelData.starRating} />
    </div>
  );
};

export default HeaderHotel;
