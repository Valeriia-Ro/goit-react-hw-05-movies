import React from "react";

const base_url = "https://image.tmdb.org/t/p/w200";
export default function Cast({ cast, isError }) {
  return (
    <div>
      {cast && !isError && cast.cast.length
        ? cast.cast.map((actor) => (
            <ul key={actor.id}>
              {actor.profile_path && (
                <li>
                  <img
                    src={`${base_url}${actor.profile_path}`}
                    alt={actor.original_name}
                    width="100"
                  />
                  <p>{actor.original_name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              )}
            </ul>
          ))
        : cast && (
            <li>
              <p>Not Found</p>
            </li>
          )}
    </div>
  );
}
