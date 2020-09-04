import React from "react";
import styled from "styled-components";

const Results = () => {
  return (
    <Wrapper>
      <Header>Results for "INPUT"</Header>
      <List>
        <ListItem>
          <MovieInfo>Rambo (1999)</MovieInfo>
          <NominateBtn>Nominate</NominateBtn>
        </ListItem>
        <ListItem>
          <MovieInfo>Hey Ram (2000)</MovieInfo>
          <NominateBtn>Nominate</NominateBtn>
        </ListItem>
        <ListItem>
          <MovieInfo>Ram Dass, Going Home (2007)</MovieInfo>
          <NominateBtn>Nominate</NominateBtn>
        </ListItem>
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
export default Results;
