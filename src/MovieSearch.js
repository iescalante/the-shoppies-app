import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const apiKey = process.env.REACT_APP_OMDB_API_KEY;

const MovieSearch = ({ title, setTitle, setMovieData, setError }) => {
  const handleTitle = (ev) => {
    setTitle(ev.target.value);
  };
  const handleSearch = (ev) => {
    ev.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=movie`)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        console.log(data);
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <Wrapper>
        <Header>Movie Title</Header>
        <Form>
          <SearchButton onClick={handleSearch}>
            <FiSearch style={{ width: "80%", height: "80%" }} />
          </SearchButton>
          <SearchInput value={title} onChange={handleTitle} />
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

  &:focus {
    outline: none;
  }
`;
const SearchInput = styled.input`
  color: black;
  width: 90%;
  height: 32px;
  vertical-align: middle;
  border: 1px solid grey;
  border-left: none;
  padding-left: 5px;

  &:focus {
    outline: none;
  }
`;

export default MovieSearch;
