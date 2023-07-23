import React, { useState } from "react";
import Profile from "../assets/Top Left Profile.png";
import Box from "./Box";
import ExcelPopup from "./ExcelPopup";

const MainView = () => {
  const [activeButton, setActiveButton] = useState(2);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="main__view">
      <div className="topbar">
        <div className="btn__container">
          <button
            className={activeButton === 0 ? "btn active__btn" : "btn"}
            onClick={() => handleClick(0)}
          >
            Gold
          </button>
          <button
            className={activeButton === 1 ? "btn active__btn" : "btn"}
            onClick={() => handleClick(1)}
          >
            Silver
          </button>
          <button
            className={activeButton === 2 ? "btn active__btn" : "btn"}
            onClick={() => handleClick(2)}
          >
            Both
          </button>
        </div>
        <div className="profile">
          <img src={Profile} alt="" />
        </div>
      </div>
      <div className="mid__section">
        <Box />
        <ExcelPopup />
      </div>
    </div>
  );
};

export default MainView;
