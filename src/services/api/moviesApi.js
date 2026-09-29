import axiosClient from "./axiosClient";

export async function getMovies() {
  const response = await axiosClient.get("/movies");
  return response.data;
}