import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <input 
        type="text" 
        className="searchTerm" 
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
