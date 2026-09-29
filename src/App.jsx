import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/LogReg.css";
import { useEffect } from "react";
import { getMovies } from "./services/api/moviesApi";

function App() {
  useEffect(() => {
    async function fetchMovies() {
      const movies = await getMovies()

      console.log(movies);
    }

    fetchMovies();
  }, []);

  return <h1>Chill</h1>;
  // (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/register" element={<Register />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
