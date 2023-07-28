import React, { useState, ChangeEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase, SearchIconWrapper } from "./SearchInput.styles";
import { validateInputNumber } from "../../util";
import "./index.css";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = validateInputNumber(event.target.value);
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className="main-search-container">
      <h1 className="title">User Lists</h1>
      <div className="search-container">
        <Search style={{ marginRight: 0 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            type="text"
            inputProps={{ "aria-label": "search" }}
            value={searchQuery}
            onChange={handleChange}
          />
        </Search>
      </div>
    </div>
  );
};

export default SearchInput;
