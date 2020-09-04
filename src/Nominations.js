import React from "react";
import styled from "styled-components";

const Nominations = ({ nominatedMovies, setNominatedMovies }) => {
  const handleRemove = (ev) => {
    ev.preventDefault();
  };
  return (
    <Wrapper>
      <Header>Nominations</Header>
      <List>
        {nominatedMovies.map((movie, index) => {
          return (
            <ListItem key={index}>
              <MovieInfo>
                {movie.title} ({movie.year})
              </MovieInfo>
              <RemoveBtn onClick={handleRemove}>Remove</RemoveBtn>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid rgb(10, 10, 10);
`;
const Header = styled.h2`
  margin: 10px 20px;
`;
const List = styled.ul`
  padding: 10px 40px;
`;
const ListItem = styled.li`
  margin: 10px 0;
`;
const MovieInfo = styled.p`
  display: inline-block;
  margin-right: 15px;
`;
const RemoveBtn = styled.button`
  font-size: 1rem;
  padding: 4px;
  cursor: pointer;
`;
export default Nominations;
