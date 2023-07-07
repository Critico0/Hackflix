import { useState, useEffect, useRef } from "react";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Movies from "../components/Movies";

function Home() {
  const [rate, setRate] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    fetchData();
  }, [rate]);

  useEffect(() => {
    currentPageRef > 1 && loadNextPage();
  }, [currentPageRef]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=68a9152cabcadda0c72ae666d80874c4&page=1&vote_average.gte${
          (rate - 1) * 2
        }`
      );

      const newMovies = response.data.results;
      const filteredMovies = newMovies.filter(
        (movie) => Math.round(movie.vote_average) > (rate - 1) * 2
      );

      setData(newMovies);
      setFilteredData(filteredMovies);
      currentPageRef.current = 1;
    } catch (error) {
      console.error(error);
    }
  };

  const loadNextPage = async () => {
    try {
      const nextPage = currentPageRef.current + 1;

      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=68a9152cabcadda0c72ae666d80874c4&page=${nextPage}&vote_average.gte${
          (rate - 1) * 2
        }`
      );

      const newMovies = response.data.results;
      const filteredMovies = newMovies.filter(
        (movie) => Math.round(movie.vote_average) > (rate - 1) * 2
      );

      setData((prevData) => [...prevData, ...newMovies]);
      setFilteredData((prevFilteredData) => [
        ...prevFilteredData,
        ...filteredMovies,
      ]);
      currentPageRef.current = nextPage;
    } catch (error) {
      console.error(error);
    }
  };

  const ratingStars = {
    size: 30,
    count: 5,
    color: "white",
    activeColor: "gold",
    value: rate,
    a11y: true,
    isHalf: true,
    onChange: (rate) => {
      setRate(rate);
    },
  };

  return (
    <div className="movie-container d-flex">
      <InfiniteScroll
        dataLength={data.length}
        next={loadNextPage}
        hasMore={true}
      >
        <div className="d-flex justify-content-center align-item-center">
          <label className=" m-2">Filtrar por reating</label>
          <ReactStars {...ratingStars} />
          <label className="m-2">{rate * 2}</label>
        </div>
        <Movies movieList={filteredData} />
      </InfiniteScroll>
    </div>
  );
}

export default Home;
