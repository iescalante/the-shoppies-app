import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Results = ({ title, movieData, nominatedMovies, setNominatedMovies }) => {
  return (
    <Wrapper>
      <Header>Results for "{title}"</Header>
      <List>
        {movieData &&
          movieData.Search.slice(0, 5).map((movie, index) => {
            return (
              <Movie
                key={index}
                title={movie.Title}
                year={movie.Year}
                nominatedMovies={nominatedMovies}
                setNominatedMovies={setNominatedMovies}
              />
            );
          })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid rgb(10, 10, 10);
  flex: 1;
  margin-right: 150px;
`;
const Header = styled.h2`
  margin: 10px 20px;
`;
const List = styled.ul`
  padding: 10px 40px;
`;
export default Results;
