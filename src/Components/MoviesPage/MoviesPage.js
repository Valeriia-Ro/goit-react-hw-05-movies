import React from "react";
import { useState, useEffect } from "react";
import * as moviesAPi from "../../services/film-api";

export default function MoviePage() {
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    moviesAPi.fetchSearchMovies().then(setMovies);
  }, []);

  return (
    <div>
      <form>
        <label>
          <input type="text"></input>
        </label>
      </form>
      <button type="submit">search</button>
    </div>
  );
}
