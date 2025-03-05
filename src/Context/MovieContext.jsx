/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const movieContext = createContext();

function MovieProvider({ children }) {
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
    <movieContext.Provider
      value={{
        initialValues,
        values,
        handleOnChange,
        movieList,
        handleOnSubmit,
        clearForm,
        removeMovieCard,
      }}
    >
      {children}
    </movieContext.Provider>
  );
}

function useMovieContext() {
  const context = useContext(movieContext);
  if (context === undefined)
    throw new Error("movieContext was used outside the MoviesProvider");

  return context;
}

export { MovieProvider, useMovieContext };
