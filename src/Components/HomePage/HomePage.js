import React from "react";
import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
// import * as moviesAPi from "../../services/film-api";
import { fetchTrading } from "../../services/film-api";

export default function HomePage() {
  const [trends, setTrends] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchTrading().then(({ results }) => setTrends(results));
  }, [setTrends]);

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {trends &&
          trends.map((movie) => (
            <li key={movie.id}>
              <Link to={`${url}/${movie.id}`} key={movie.id}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
