import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Movies({ movieList }) {
  return (
    <>
      {movieList === null ? (
        <div className="d-flex movie-page-container">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        movieList.map((movie) => (
          <React.Fragment key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`movie poster of ${movie.title}`}
              />
            </Link>
          </React.Fragment>
        ))
      )}
    </>
  );
}

export default Movies;
