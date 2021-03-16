import React from "react";

import { Container, SearchInput, SearchIcon } from "./styles";

const Search = ({ search, setSearchFilterValue }) => {
  const handleOnchange = (e) => {
    const { value } = e.target;
    setSearchFilterValue(value);
  };

  return (
    <Container>
      <SearchInput onChange={handleOnchange} value={search} />
      <SearchIcon />
    </Container>
  );
};

export default Search;
