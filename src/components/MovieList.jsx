/* eslint-disable react/prop-types */
import { MovieCard } from "./MovieCard";

export function MovieList({ movieList, removeMovieCard }) {
  return (
    <section className="grid" onClick={removeMovieCard}>
      {movieList.map((movie) => (
        <MovieCard values={movie} key={movie.id} />
      ))}
    </section>
  );
}
