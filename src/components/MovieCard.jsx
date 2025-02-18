/* eslint-disable react/prop-types */
export function MovieCard({ values }) {
  return (
    <section className="moviecard" id={values.id}>
      <div className="title-rating-section">
        <h1>{values.title}</h1>
        <span className="moviecard-rating">{`${"⭐".repeat(
          values.rating
        )}`}</span>
      </div>
      <p className="moviecard-genre">🎞️ {values.genre}</p>
      <p className="moviecard-description">{values.description}</p>
    </section>
  );
}
