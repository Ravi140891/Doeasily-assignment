import React from "react";

const Items = ({ title, name, value, action }) => {
  return (
    <div className="metal">
      <h3>{title}</h3>
      <p className={name}>{value}</p>
      <p className={name}>{action}</p>
    </div>
  );
};

export default Items;
