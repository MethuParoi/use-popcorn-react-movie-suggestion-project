import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched }) {
  return (
    <ul className="watched-list list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
      {watched.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontWeight: 400,
            fontSize: "20px",
            color: "white",
            paddingTop: "20px",
            paddingRight: "80px",
          }}
        >
          <span>📽️</span> Please add watched movies <span>🍿</span>
        </p>
      ) : null}
    </ul>
  );
}
