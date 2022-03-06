import CounterPeople from "./CounterPeople";
import StarRating from "./StarRating";
import { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";

const SelectedHotels = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const upDateAdults = useStoreActions((actions) => actions.upDateAdults);
  const upDateChildren = useStoreActions((actions) => actions.upDateChildren);

  const liftData = (amount, name) => {
    if (name === "Adults") {
      setAdults(amount);
    } else if (name === "Children") {
      setChildren(amount);
    }
  };

  useEffect(() => {
    upDateAdults(adults);
  }, [adults]);

  useEffect(() => {
    upDateChildren(children);
  }, [children]);

  return (
    <div className="header__selected-hotels">
      <StarRating />
      <CounterPeople name="Adults" liftData={liftData} />
      <CounterPeople name="Children" liftData={liftData} />
    </div>
  );
};

export default SelectedHotels;
