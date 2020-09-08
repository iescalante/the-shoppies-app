import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Movie = ({ id, title, year }) => {
  const { nominatedMovies, setNominatedMovies } = React.useContext(AppContext);

  const handleNomination = (ev) => {
    ev.preventDefault();
    setNominatedMovies((nominatedMovies) =>
      nominatedMovies.concat({ id, title, year })
    );
  };
  return (
    <>
      <ListItem id={id}>
        <MovieInfo>
          {title} ({year})
        </MovieInfo>
        <NominateBtn
          disabled={
            nominatedMovies.find((movie) => movie.id === id) ? true : false
          }
          onClick={handleNomination}
        >
          Nominate
        </NominateBtn>
      </ListItem>
    </>
  );
};
const ListItem = styled.li`
  margin: 5px 0;
`;
const MovieInfo = styled.p`
  display: inline-block;
  margin-right: 15px;
`;
const NominateBtn = styled.button`
  font-size: 1rem;
  padding: 4px;
  cursor: pointer;
`;
export default Movie;
