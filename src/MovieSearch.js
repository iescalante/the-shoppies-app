import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const MovieSearch = () => {
  return (
    <>
      <Wrapper>
        <Header>Movie Title</Header>
        <Form>
          <SearchButton>
            <FiSearch style={{ width: "80%", height: "80%" }} />
          </SearchButton>
          <SearchInput />
        </Form>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #999;
  margin: 20px 0;
  padding: 10px;
`;
const Header = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 5px;
`;
const Form = styled.form`
  width: 90%;
`;
const SearchButton = styled.button`
  height: 32px;
  width: 32px;
  vertical-align: middle;
  border: 1px solid grey;
  border-right: none;
`;
const SearchInput = styled.input`
  color: black;
  width: 90%;
  height: 32px;
  vertical-align: middle;
  border: 1px solid grey;
  border-left: none;
`;

export default MovieSearch;
