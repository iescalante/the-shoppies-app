import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Nominations = () => {
  const { nominatedMovies, setNominatedMovies } = React.useContext(AppContext);
  const handleRemove = (id) => {
    console.log(id);
    const newList = nominatedMovies.filter((item) => item.id !== id);
    setNominatedMovies(newList);
  };
  return (
    <Wrapper>
      <Header>Nominations</Header>
      <List>
        {nominatedMovies.map((movie) => {
          console.log(movie);
          return (
            <ListItem key={Math.random() * 1000000}>
              <MovieInfo>
                {movie.title} ({movie.year})
              </MovieInfo>
              <RemoveBtn type="button" onClick={() => handleRemove(movie.id)}>
                Remove
              </RemoveBtn>
            </ListItem>
          );
        })}
      </List>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border: 1px solid rgb(10, 10, 10);
  flex: 1;
  border-radius: 10px;
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
