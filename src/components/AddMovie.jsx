/* eslint-disable react/prop-types */

import myImage from "../assets/myImage.jpg";
import { useMovieContext } from "../Context/MovieContext";

export function AddMovie() {
  const { values, handleOnChange, handleOnSubmit, clearForm } =
    useMovieContext();
  return (
    <section className="header">
      <section className="form-image-container">
        <form className="form-container" onSubmit={handleOnSubmit}>
          <h1>Rate a Movie 📽️</h1>
          <div className="input-container">
            <label>Title 🖋️</label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-container">
            <label>{`Rating: ${"⭐".repeat(values.rating)}`}</label>
            <input
              className="range-input"
              name="rating"
              type="range"
              min={1}
              max={5}
              value={values.rating}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-container">
            <label>Genre 🎭</label>
            <select name="genre" value={values.genre} onChange={handleOnChange}>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Comedi">Comedi</option>
              <option value="Horror">Horror</option>
              <option value="Documentary">Documentary</option>
            </select>
          </div>
          <div className="input-container">
            <label>Description 📝 </label>
            <textarea
              name="description"
              value={values.description}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <div className="btn-container">
            <button onClick={clearForm}>Clear</button>
            <button type="submit">Add</button>
          </div>
        </form>
        <div>
          <img src={myImage} alt="" />
        </div>
      </section>
    </section>
  );
}
