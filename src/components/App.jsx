import "./App.css";
import { AddMovie } from "./AddMovie";
import { MovieList } from "./MovieList";
import { MovieProvider } from "../Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <main className="container-main">
        <AddMovie />
        <MovieList />
      </main>
    </MovieProvider>
  );
}

export default App;
