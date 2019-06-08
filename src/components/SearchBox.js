import React from "react";

const SearchBox = ({ searchfiled, searchChange }) => {
  return (
    <input
      className="pa3 ba b--blue bg-lightest-blue"
      style={{ marginBottom: "10px" }}
      type="search"
      placeholder="search..."
      onChange={searchChange}
    />
  );
};

export default SearchBox;
