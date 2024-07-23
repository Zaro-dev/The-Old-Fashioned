import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar({
  data,
  setData,
  searchInput,
  setSearchInput,
}) {
  const handleOnChange = (event) => {
    let newValue = event.target.value;
    setSearchInput(newValue);

    const filteredData = data.filter((bottle) => {
      return bottle.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    //console.log(filteredData);
    setData(filteredData);
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
