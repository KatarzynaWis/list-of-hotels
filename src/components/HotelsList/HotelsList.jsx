import { useEffect, useState } from "react";
import Hotel from "./Hotel/Hotel";
import "./styleHotelsList.scss";
import { useStoreState } from "easy-peasy";

const HotelsList = () => {
  const HOTELS_API_URL =
    "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG";
  const ROOMS_API_URL = "https://obmng.dbm.guestline.net/api/roomRates/OBMNG/";
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bgImage, setbgImage] = useState([]);
  const rating = useStoreState((state) => state.rating);

  useEffect(() => {
    fetch(HOTELS_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setbgImage(data[0].images[0].url);
        setHotels(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    hotels.map((hotel) => {
      fetch(ROOMS_API_URL + hotel.id)
        .then((response) => response.json())
        .then((data) => {
          setRooms((prevRooms) => [...prevRooms, [hotel.id, data.rooms]]);
        })
        .catch((error) => console.error(error));
    });
  }, [hotels]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-background",
      `url(${bgImage})`
    );
  }, [bgImage]);

  return (
    <ul className="hotels-list">
      {hotels.map((hotel) => {
        if (rating === null) {
          if (hotels.length > 0 && rooms.length === hotels.length) {
            const hotelRooms = rooms.find((x) => x.includes(hotel.id));
            return (
              <Hotel key={hotel.id} hotelData={hotel} roomsData={hotelRooms} />
            );
          }
        } else if (String(rating) <= hotel.starRating) {
          const hotelRooms = rooms.find((x) => x.includes(hotel.id));
          if (hotels.length > 0 && rooms.length === hotels.length) {
            return (
              <Hotel key={hotel.id} hotelData={hotel} roomsData={hotelRooms} />
            );
          }
        }
      })}
    </ul>
  );
};
export default HotelsList;
