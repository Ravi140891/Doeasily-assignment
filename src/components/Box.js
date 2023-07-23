import React from "react";
import Plus from "../assets/Vector (2).png";
import Items from "./Items";

const Box = () => {
  return (
    <div className="box">
      <div className="heading">
        <h3>Party</h3>
        <button className="add__party">
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
