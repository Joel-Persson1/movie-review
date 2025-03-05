/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const { movieList, removeMovieCard } = useContext();
  return (
    <section className="grid" onClick={removeMovieCard}>
      {movieList.map((movie) => (
        <MovieCard values={movie} key={movie.id} />
      ))}
    </section>
  );
}
