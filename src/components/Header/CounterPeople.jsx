import React, { useEffect, useState } from "react";

const CounterPeople = ({ name, liftData }) => {
  const [persons, setPersons] = useState(0);
  const addPerson = () => {
    if (name === "Adults") {
      setPersons(persons <= 5 ? persons + 1 : persons);
    } else if (name === "Children") {
      setPersons(persons <= 3 ? persons + 1 : persons);
    }
  };
  const removePerson = () => {
    if (name === "Adults") {
      setPersons(persons >= 2 ? persons - 1 : persons);
    } else if (name === "Children") {
      setPersons(persons >= 1 ? persons - 1 : persons);
    }
  };

  useEffect(() => liftData(persons, name), [persons]);

  useEffect(() => {
    if (name === "Adults") {
      setPersons(2);
    }
  }, []);

  return (
    <div className="header__guests-number">
      {`${name}:`}
      <button onClick={addPerson} className="header__btn-people">
        +
      </button>
      <div>{persons}</div>
      <button onClick={removePerson} className="header__btn-people">
        -
      </button>
    </div>
  );
};

export default CounterPeople;
