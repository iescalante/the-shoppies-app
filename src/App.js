import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import MovieSearch from "./MovieSearch";
import Results from "./Results";
import Nominations from "./Nominations";
import Error from "./Error";

function App() {
  const [title, setTitle] = React.useState("");
  const [movieData, setMovieData] = React.useState();
  const [nominatedMovies, setNominatedMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  console.log(nominatedMovies);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <MovieSearch
          title={title}
          setTitle={setTitle}
          setMovieData={setMovieData}
          setError={setError}
        />
        <Bottom>
          <Results
            title={title}
            movieData={movieData}
            nominatedMovies={nominatedMovies}
            setNominatedMovies={setNominatedMovies}
          />
          <Nominations
            nominatedMovies={nominatedMovies}
            setNominateMovies={setNominatedMovies}
          />
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
