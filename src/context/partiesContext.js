import { createContext, useState } from "react";

export const PartiesContext = createContext();

const PartyContext = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchName, setSearchName] = useState("");
  const handleClick = (id) => {
    setSelected(id);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <PartiesContext.Provider
      value={{
        selected,
        handleClick,
        showModal,
        setShowModal,
        handleShowModal,
        data,
        setData,
        filtered,
        setFiltered,
        searchName,
        setSearchName,
      }}
    >
      {children}
    </PartiesContext.Provider>
  );
};

export default PartyContext;
