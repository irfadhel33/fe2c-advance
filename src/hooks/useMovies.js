import { useEffect, useState } from "react";
import { getMovies } from "../services/api/moviesApi";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    error,
  };
}