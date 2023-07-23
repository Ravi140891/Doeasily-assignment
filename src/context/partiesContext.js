import { createContext, useState } from "react";

export const PartiesContext = createContext();

const PartyContext = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <PartiesContext.Provider value={{ selected, handleClick }}>
      {children}
    </PartiesContext.Provider>
  );
};

export default PartyContext;
