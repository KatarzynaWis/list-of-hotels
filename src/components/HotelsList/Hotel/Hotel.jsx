import HeaderHotel from "./HeaderHotel";
import RoomsList from "./RoomsList";

const Hotel = ({ hotelData, roomsData }) => {
  return (
    <li
      id={hotelData.id}
      className="hotels-list__hotel"
      value={hotelData.starRating}>
      <HeaderHotel hotelData={hotelData} />
      <RoomsList roomsData={roomsData} />
    </li>
  );
};

export default Hotel;
