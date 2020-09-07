import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [title, setTitle] = React.useState("");
  const [movieData, setMovieData] = React.useState();
  const [nominatedMovies, setNominatedMovies] = React.useState([]);
  const [isNominated, setIsNominated] = React.useState(false);
  const [error, setError] = React.useState(null);
  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        movieData,
        setMovieData,
        nominatedMovies,
        setNominatedMovies,
        isNominated,
        setIsNominated,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
