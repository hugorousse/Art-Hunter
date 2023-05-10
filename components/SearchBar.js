import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-bar">
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Rechercher</button>
    </div>
  );
};

export default SearchBar;