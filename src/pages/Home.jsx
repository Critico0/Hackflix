import { useState, useEffect, useRef } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Movies from "../components/Movies";

function Home({ inputValue }) {
  const [data, setData] = useState([]);
  const currentPageRef = useRef(1);
  console.log(inputValue)

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (inputValue) {
      fetchSearchData();
    }
  }, [inputValue]);

  useEffect(() => {
    currentPageRef.current = 1; 
   fetchData();
  }, [inputValue]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=68a9152cabcadda0c72ae666d80874c4&page=1&sort_by=popularity.desc"
      );

      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSearchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=68a9152cabcadda0c72ae666d80874c4&query=${inputValue}`
      );
      const newMovies = response.data.results;

      setData(newMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const loadNextPage = async () => {
    try {
      const nextPage = currentPageRef.current + 1;
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=68a9152cabcadda0c72ae666d80874c4&page=${nextPage}&sort_by=popularity.desc`
      );
      const newMovies = response.data.results;

      setData((prevData) => [...prevData, ...newMovies]);
      currentPageRef.current = nextPage;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="movie-container d-flex">
      <InfiniteScroll
        dataLength={data.length}
        next={loadNextPage}
        hasMore={true}
      > 
        <Movies movieList={data} />
      </InfiniteScroll>
    </div>
  );
}

export default Home;