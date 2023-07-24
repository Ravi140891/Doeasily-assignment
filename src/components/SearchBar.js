import React, { useContext } from "react";
import { PartiesContext } from "../context/partiesContext";

const SearchBar = () => {
  const { setFiltered, data, searchName, setSearchName } =
    useContext(PartiesContext);

  const handleSearch = (e) => {
    setSearchName(e.target.value);
    if (searchName.trim() === "") {
      setFiltered([]);
    } else {
      const newData = data.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      );

      if (newData.length === 0) {
        setFiltered([]);
      } else {
        setFiltered(newData);
      }
    }
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        placeholder="Search Karigar"
        value={searchName}
        onChange={(e) => handleSearch(e)}
      />
      <button className="external search_btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
