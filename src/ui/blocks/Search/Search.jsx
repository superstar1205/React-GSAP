import React, { useState } from "react";
import { ZoomIcon } from "../../icons";
import { Input } from "../../base/Input";
import { SearchBar, SearchWrapper, Title } from "./SearchStyled";
import { Container } from "../../base/Container";
import { Button } from "../../base/Button";

const Search = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmitSearch = () => onSearchSubmit(query);

  return (
    <SearchWrapper>
      <Container>
        <Title>How can we help you?</Title>
        <SearchBar>
          <Input
            icon={<ZoomIcon />}
            setValue={setQuery}
            handleSubmitSearch={handleSubmitSearch}
            value={query}
            placeholder="Type your question"
          />
          <Button onClick={handleSubmitSearch} bg="blue" width={173}>
            Search
          </Button>
        </SearchBar>
      </Container>
    </SearchWrapper>
  );
};

export default Search;
