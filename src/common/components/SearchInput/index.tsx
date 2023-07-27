import React, { useState, ChangeEvent } from "react";
import { validateInputNumber } from '../../util';
import "./style.css";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const onlyAlphabets = validateInputNumber(event.target.value);
    setSearchQuery(onlyAlphabets);
    onSearch(onlyAlphabets);
  };

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input 
        type="text" 
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
