import React from "react";

function Search( {onSearchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchPlant(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Search;
