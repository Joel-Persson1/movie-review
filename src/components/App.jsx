import "./App.css";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { MovieList } from "./MovieList";

function App() {
  const initialValues = {
    title: "",
    rating: 1,
    genre: "",
    description: "",
  };

  const initialMovieList = [];

  const [values, setValues] = useState(initialValues);
  const [movieList, setMovieList] = useState(initialMovieList);

  function handleOnSubmit(e) {
    e.preventDefault();

    const nextId =
      movieList.length > 0 ? movieList[movieList.length - 1].id + 1 : 0;

    const preparePush = {
      id: nextId,
      ...values,
    };

    console.log(
      `
        The added moviecard is being proccessed with these results: ✅
        Title: ${values.title}     
        rating: ${values.rating}   
        genre: ${values.genre}     
        description: ${values.description}
        `
    );

    setMovieList([...movieList, preparePush]);
  }

  function handleOnChange(e) {
    setValues(
      e.target.name !== "rating"
        ? { ...values, [e.target.name]: e.target.value }
        : { ...values, [e.target.name]: Number(e.target.value) }
    );
  }

  function clearForm(e) {
    e.preventDefault();
    setValues(initialValues);
  }

  function removeMovieCard(e) {
    const deleteItem = e.target.closest(".moviecard").id;

    setMovieList(movieList.filter((movie) => movie.id !== Number(deleteItem)));
  }

  return (
    <main className="container-main">
      <AddMovie
        initialValues={initialValues}
        values={values}
        onChange={handleOnChange}
        clearForm={clearForm}
        handleOnSubmit={handleOnSubmit}
      />
      <MovieList movieList={movieList} removeMovieCard={removeMovieCard} />
    </main>
  );
}

export default App;
