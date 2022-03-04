import { useEffect, useState } from "react";
import Hotel from "./Hotel/Hotel";
import "./styleHotelsList.scss";

const HotelsList = () => {
  const HOTELS_API_URL =
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";
  const [hotels, setHotels] = useState([]);
  const [hotelId, setHotelId] = useState("");

  useEffect(() => {
    fetch(HOTELS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setHotels(data)
      })
      .catch((error) => console.error(error));
    }, []);
    
    console.log(hotels);
  return (
    <ul className="hotels-list">
      <Hotel />
    </ul>
  );
};

export default HotelsList;
