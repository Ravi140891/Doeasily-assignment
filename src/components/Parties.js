import React, { useState } from "react";
import Home from "../assets/Vector.png";
import Minus from "../assets/🦆 icon _minus rectangle_.png";
import { partyName } from "./partyNames";

const Parties = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="parties">
      <div className="header">
        <img src={Home} alt="home-icon" />
        <h2>Parties</h2>
        <img src={Minus} alt="minus icon" />
      </div>
      <ul className="list">
        {partyName.map((name, i) => (
          <li
            key={i}
            className={selected === i ? "active__name" : ""}
            onClick={() => handleClick(i)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parties;
