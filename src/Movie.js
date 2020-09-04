import React from "react";
import styled from "styled-components";

const Movie = ({ title, year }) => {
  const handleNomination = (ev) => {
    console.log("hello");
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
`;
export default Movie;
