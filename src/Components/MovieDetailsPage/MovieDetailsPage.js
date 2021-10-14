import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, Route, useRouteMatch, Switch } from "react-router-dom";
import React from "react";
import {
  fetchMovieDetails,
  fetchReviews,
  fetchCast,
} from "../../services/film-api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
const base_url = "https://image.tmdb.org/t/p/w500";
export default function MovieDetailsPage() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((error) => console.log(error));
    fetchReviews(movieId)
      .then(setReviews)
      .catch((error) => console.log(error));
    fetchCast(movieId)
      .then(setCast)
      .catch((error) => console.log(error));
  }, [movieId]);
  return (
    <div>
      {movie && (
        <div>
          <div>
            <div>
              <img
                src={`${base_url}/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>

            <h2>
              {movie.title}({movie.release_date.slice(0, 4)})
            </h2>
            <hr />
            <p>User score : {movie.popularity}</p>

            <ul>
              <li>
                <p>Owerview</p>
                <p>{movie.overview}</p>
              </li>
              <li>
                <p>Genres:</p>

                <ul>
                  {movie.genres.map((genre) => (
                    <li key={genre.name}>
                      {genre.name}
                      <li />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                {" "}
                <Link to={`${url}/credits`}>Cast</Link>
              </li>
              <li>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path={`${path}/credits`}>
              <Cast cast={cast} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews reviews={reviews} />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}
