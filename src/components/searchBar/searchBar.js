import React, { useState } from "react";
import classNames from "classnames";

import { FaSearch } from "react-icons/fa";

import "./searchBar.scss";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  function activateSearch() {
    setIsActive(!isActive);
  }

  let searchBarClasses = classNames({
    "search-box": true,
    active: isActive,
  });

  return (
    <div className={searchBarClasses}>
      <FaSearch className="search-box__icon" onClick={activateSearch} />
      <input
        class="search-box__input"
        placeholder="Título, personas, generos"
      />
    </div>
  );
};

export default SearchBar;
