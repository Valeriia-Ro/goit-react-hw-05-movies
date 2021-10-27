import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as moviesAPi from "../../services/film-api";
import MoviesView from "../../view/MoviesView";
import HomeView from "../../view/HomeView";
export default function MoviePage() {
  const [movie, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("query") ?? "";

  const onChangeMovie = (query) => {
    if (query === "") {
      alert("Enter a film!");
      setMovies([]);
    }
    history.push({
      ...location,
      search: `query=${query}`,
    });

    console.log(query);
    console.log(movie);
  };

  useEffect(() => {
    console.log(1);
    setMovies([]);
  }, [search]);

  useEffect(() => {
    if (search && search !== "") {
      moviesAPi
        .fetchSearchMovies(search)
        .then(({ results, pages }) => {
          setMovies(results);
          if (movie.length === 0 && pages === 0) {
            alert("Not Found!");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [movie.length, search]);

  return (
    <div>
      <MoviesView onSubmit={onChangeMovie} />
      {search !== movie && <HomeView data={movie} />}
    </div>
  );
}
