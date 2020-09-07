import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";

const Movie = ({ id, title, year }) => {
  const {
    nominatedMovies,
    setNominatedMovies,
    isNominated,
    setIsNominated,
  } = React.useContext(AppContext);

  const handleNomination = (ev) => {
    ev.preventDefault();
    setNominatedMovies((nominatedMovies) =>
      nominatedMovies.concat({ id, title, year })
    );
  };
  return (
    <>
      <ListItem>
        <MovieInfo>
          {title} ({year})
        </MovieInfo>
        <NominateBtn onClick={handleNomination}>Nominate</NominateBtn>
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
