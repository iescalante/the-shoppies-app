import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import MovieSearch from "./MovieSearch";
import Results from "./Results";
import Nominations from "./Nominations";
import Banner from "react-js-banner";
import { AppContext } from "./AppContext";

const App = () => {
  const { nominatedMovies } = React.useContext(AppContext);

  return (
    <>
      <GlobalStyles />
      {nominatedMovies.length === 5 && (
        <Banner
          title="Thank you for your 5 nominations! They will be considered for our movies awards!"
          css={{ color: "white", backgroundColor: "green" }}
          visibleTime={5000}
        />
      )}
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
};
const Wrapper = styled.div`
  margin: 20px 50px;
  margin-right: 25%;
`;
const Bottom = styled.div`
  display: flex;
`;

export default App;
