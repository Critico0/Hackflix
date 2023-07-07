import NavbarMain from "./components/NavbarMain";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Error404 from "./components/Error404";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import "./components/NavbarMain.css";
import "./components/Movie.css";

function App() {
  return (
    <>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route
          path="/pelicula/:id"
          element={<Navigate replace to="/movie/:movieId" />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
