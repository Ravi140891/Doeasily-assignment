import React from "react";
import ExportExt from "../assets/Vector (4).png";

const ExportToggle = ({ handleToggle }) => {
  return (
    <button className="export external" onClick={handleToggle}>
      <img src={ExportExt} alt="export" />
      Export
    </button>
  );
};

export default ExportToggle;
