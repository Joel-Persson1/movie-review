import "./App.css";
import { AddMovie } from "./AddMovie";
import { MovieList } from "./MovieList";
import { MovieCardsContext } from "../Context/MovieContext";

function App() {
  return (
    <MovieCardsContext>
      <main className="container-main">
        <AddMovie />
        <MovieList />
      </main>
    </MovieCardsContext>
  );
}

export default App;
