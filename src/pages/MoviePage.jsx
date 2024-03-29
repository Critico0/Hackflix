import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import axios from "axios";

function MoviePage() {
  const params = useParams();
  const [movieData, setMovieData] = useState(null);


  useEffect(() => {
    async function fetchMovie() {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=68a9152cabcadda0c72ae666d80874c4`
      );
      setMovieData(data.data);
      console.log(data)
    }
    fetchMovie();
  }, []);

  console.log(movieData);

  console.log(movieData);
  const date = movieData === null ? "" : movieData.release_date.split("-");

  return (
    <>
      {movieData === null ? (
        <div className=" d-flex loading">
          <Audio
            height="570"
            width="370"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className=" d-flex movie-page-container">
          <div className="col-4">
            <img
              className="movie-page-poster img-fluid"
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            />
          </div>
          <div className="col-8">
            <h1>
              {movieData.title}({date[0]})
            </h1>
            <label className="m-2">Genres</label>
            {movieData.genres.map((genre) => (
              <label key={genre.id}>-{genre.name}</label>
            ))}
            <p className="fs-5">-{movieData.tagline}-</p>
            <h3>Resumen</h3>
            <p>{movieData.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MoviePage;
