import { RoomName, RoomOccupancy, RoomDescription } from "./room";
import { v4 as uuidv4 } from "uuid";
import { useStoreState } from "easy-peasy";

const RoomsList = ({ roomsData }) => {
  const adults = useStoreState((state) => state.adults);
  const children = useStoreState((state) => state.children);

  return (
    <>
      {roomsData[1].map((room) => {
        if (
          adults <= room.occupancy.maxAdults &&
          children <= room.occupancy.maxChildren
        ) {
          return (
            <div key={uuidv4()} className="hotels-list__room">
              <div className="hotels-list__room-details">
                <RoomName name={room.name} />
                <RoomOccupancy ccupancy={room.occupancy} />
              </div>
              <RoomDescription
                className="hotels-list__room-description"
                description={room.longDescription}
              />
            </div>
          );
        }
      })}
    </>
  );
};

export default RoomsList;
