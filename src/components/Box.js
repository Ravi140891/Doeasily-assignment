import React, { useContext } from "react";
import Plus from "../assets/Vector (2).png";
import Items from "./Items";
import { PartiesContext } from "../context/partiesContext";

const Box = () => {
  const { handleShowModal } = useContext(PartiesContext);
  return (
    <div className="box">
      <div className="heading">
        <h3>Party</h3>
        <button className="add__party" onClick={handleShowModal}>
          <img src={Plus} alt="Plus icon" />
          Add Party
        </button>
      </div>
      <div className="items">
        <Items title="Silver" name="qty" value="14.200 Kg" action="Lena" />
        <Items title="Gold" name="qty" value="25.966 Gm" action="Lena" />
        <Items
          title="Amount"
          name="cash"
          value="&#8377;1,850.00"
          action="Dena"
        />
      </div>
    </div>
  );
};

export default Box;
