import React, { useState } from "react";
import "../Field/searchField.css";
const SearchField = ({ defaultValue, name, size, height }) => {
  const [searchText, setSearchText] = useState("");
  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <span className="search-field">
      <input
        type="text"
        size={size}
        height={height}
        placeholder={defaultValue}
        name={name}
        value={searchText}
        onChange={onChangeSearchText}
      />
    </span>
  );
};
export default SearchField;
