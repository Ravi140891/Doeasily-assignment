import React from "react";
import Logo from "../assets/Doeasily Logo.png";
import Parties from "./Parties";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Doeasily logo" />
      </div>
      <Parties />
    </div>
  );
};

export default Sidebar;
