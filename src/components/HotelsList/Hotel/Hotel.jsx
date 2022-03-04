import HeaderHotel from "./HeaderHotel";
import RoomsList from "./RoomsList";


const Hotel = () => {
  return (
    <li className="hotels-list__hotel">
      <HeaderHotel />
      <RoomsList />
    </li>
  );
};

export default Hotel;
