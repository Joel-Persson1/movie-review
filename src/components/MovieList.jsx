/* eslint-disable react/prop-types */

import { useMovieContext } from "../Context/MovieContext";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const { movieList, removeMovieCard } = useMovieContext();
  return (
    <section className="grid" onClick={removeMovieCard}>
      {movieList.map((movie) => (
        <MovieCard values={movie} key={movie.id} />
      ))}
    </section>
  );
}
