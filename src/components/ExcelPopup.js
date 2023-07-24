import React from "react";
import NotSelected from "../assets/Ellipse 11.png";
import ExcelSelected from "../assets/Ellipse 14.png";
import Empty from "../assets/Ellipse 13.png";
import Selected from "../assets/Ellipse 15.png";
import Export from "../assets/Vector (3).png";
import Print from "../assets/material-symbols_print-outline.png";
const ExcelPopup = () => {
  return (
    <div className="excel__popup">
      <div className="excel__or__pdf">
        <div className="excel">
          <h3>Excel</h3>
          <img src={NotSelected} alt="selected" />
          <img src={ExcelSelected} alt="selected" className="inner" />
        </div>
        <div className="pdf">
          <h3>PDF</h3>
          <img src={NotSelected} alt="not selected" />
        </div>
      </div>
      <div className="detailed__summary">
        <div className="detailed">
          <h3>Detailed</h3>
          <img src={Empty} alt="selected" />
          <img src={Selected} alt="selected" className="inner" />
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <img src={Empty} alt="not selected" />
        </div>
      </div>
      <div className="btn_container">
        <button className="export">
          <img src={Export} alt="export" />
          Export
        </button>
        <button className="export print">
          <img src={Print} alt="print" />
          Print
        </button>
      </div>
    </div>
  );
};

export default ExcelPopup;
