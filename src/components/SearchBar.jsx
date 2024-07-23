import React from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar({
  allData,
  setFilteredData,
  searchInput,
  setSearchInput,
}) {
  const handleOnChange = (event) => {
    const newValue = event.target.value;
    setSearchInput(newValue);

    const filteredData = allData.filter((bottle) => {
      return bottle.name.toLowerCase().includes(newValue.toLowerCase());
    });

    setFilteredData(filteredData);
  };

  return (
    <div>
      <Form.Control
        size="sm"
        type="text"
        placeholder="Search"
        onChange={handleOnChange}
        value={searchInput}
      />
    </div>
  );
}
