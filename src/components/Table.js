import React, { useState, useContext } from "react";
import { PartiesContext } from "../context/partiesContext";
import EditBtn from "../assets/Edit Icon.png";
import Delete from "../assets/Delete Icon.png";

const Table = () => {
  const { data, setData, filtered, searchName, setFiltered } =
    useContext(PartiesContext);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSave = (index) => {
    setEditingIndex(-1);
  };

  const handleDelete = (index) => {
    const updatedDataList = data.filter((item, i) => i !== index);
    setData(updatedDataList);
    if (filtered.length > 0) {
      setFiltered([]);
    }
  };

  const handleChange = (event, key, index) => {
    const value = event.target.value;
    const updatedDataList = [...data];
    updatedDataList[index][key] = value;
    setData(updatedDataList);
  };

  const renderRows = (rowData, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          {editingIndex === index ? (
            <input
              type="text"
              value={rowData.name}
              onChange={(event) => handleChange(event, "name", index)}
            />
          ) : (
            rowData.name
          )}
        </td>
        <td>
          {editingIndex === index ? (
            <input
              type="text"
              value={rowData.phone}
              onChange={(event) => handleChange(event, "phone", index)}
            />
          ) : (
            rowData.phone
          )}
        </td>
        <td className="red">-25.966 Gm</td>
        <td className="red">-14.200 Kg</td>
        <td className="green">+&#8377;1,850</td>
        <td>
          {editingIndex === index ? (
            <button onClick={() => handleSave(index)} className="edit">
              <img src={EditBtn} alt="Edit" />
            </button>
          ) : (
            <button onClick={() => handleEdit(index)} className="edit">
              <img src={EditBtn} alt="Ellipse" />
            </button>
          )}
          <button onClick={() => handleDelete(index)} className="delete">
            <img src={Delete} alt="delete" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr className="heading__row">{/* ... (rest of the code) */}</tr>
      </thead>
      <tbody>
        {filtered && filtered.length > 0 ? (
          filtered.map((rowData, index) => renderRows(rowData, index))
        ) : searchName.trim() !== "" ? (
          <tr>
            <td colSpan="7">No data found.</td>
          </tr>
        ) : (
          data.map((rowData, index) => renderRows(rowData, index))
        )}
      </tbody>
    </table>
  );
};

export default Table;
