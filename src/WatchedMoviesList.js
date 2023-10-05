import WatchedMovie from "./WatchedMovie";

export default function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
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
            paddingLeft: "55px",
            paddingTop: "20px",
          }}
        >
          <span>📽️</span> Please add watched movies <span>🍿</span>
        </p>
      ) : null}
    </ul>
  );
}
