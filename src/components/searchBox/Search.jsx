import React, { useState } from "react";

function Search({ searchEvent }) {
  const searchCars = (e) => {
    searchEvent(e.target.value);
  };

  return (
    <div className="search-box">
      <span className="icon-style">
        <i className="fas fa-search"></i>
      </span>
      <input
        className="input-style"
        type="text"
        placeholder="Search"
        onChange={(value) => searchCars(value)}
      ></input>
    </div>
  );
}

export default Search;
