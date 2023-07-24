import React, { useState } from "react";
import Profile from "../assets/Top Left Profile.png";
import Box from "./Box";
import ExcelPopup from "./ExcelPopup";
import ExportToggle from "./ExportToggle";
import SearchBar from "./SearchBar";
import Table from "./Table";

const MainView = () => {
  const [activeButton, setActiveButton] = useState(2);
  const [showExport, setShowExport] = useState(false);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleExport = () => {
    setShowExport(!showExport);
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
        {showExport && <ExcelPopup />}
      </div>
      <div className="search__export">
        <SearchBar />
        <ExportToggle handleToggle={handleExport} />
      </div>
      <div className="table__container">
        <Table />
      </div>
    </div>
  );
};

export default MainView;
