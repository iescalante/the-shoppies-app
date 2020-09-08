import React from "react";
import styled from "styled-components";
import Movie from "./Movie";
import { AppContext } from "./AppContext";

const Results = () => {
  const { title, movieData } = React.useContext(AppContext);

  return (
    <Wrapper>
      <Header>Results for "{title}"</Header>
      <List>
        {movieData && //if portion only, use .slice(0, x) after Search
          movieData.Search.map((movie) => {
            return (
              <Movie
                key={Math.random() * 1000000}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
              />
            );
          })}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid rgb(10, 10, 10);
  border-radius: 10px;
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
