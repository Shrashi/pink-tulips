import React, { useState } from "react";
import "../Field/searchField.css";
const SearchField = ({ defaultValue, name, size, height }) => {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="search-field">
      <input
        type="text"
        placeholder={defaultValue}
        name={name}
        value={searchText}
        onChange={onChangeSearchText}
      />
    </div>
  );
};
export default SearchField;
