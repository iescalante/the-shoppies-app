import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import MovieSearch from "./MovieSearch";
import Results from "./Results";
import Nominations from "./Nominations";

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <MovieSearch />
        <Bottom>
          <Results />
          <Nominations />
        </Bottom>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  margin: 20px 50px;
  margin-right: 25%;
`;
const Bottom = styled.div`
  display: flex;
`;

export default App;
