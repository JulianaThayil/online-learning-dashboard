import React from "react";
import "./nav.css";
import search from "../../assets/icons/search.svg";

const Searchbar = () => {
  return (
    <div class="search">
      <label htmlFor="search" class="icon">
        <img src={search} alt="search" />
      </label>
      <input id="search" class="ip" type="text"></input>
    </div>
  );
};

export default Searchbar;
