import React from "react";
import { Link } from "react-router-dom";

export default function HomePage({ data }) {
  return (
    <div>
      {/* <h1>Tranding today</h1> */}
      <ul>
        {data &&
          data.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
