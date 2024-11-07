import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

function MovieList({ movies, favorites, onToggleFavorite }) {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => {
          const isFavorite = favorites.some((fav) => fav.id === movie.id);
          return (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="movie-card-link">
              <div className="movie-card">
                <img
                  src={movie.poster}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleFavorite(movie);
                  }}>
                  {isFavorite ? "Remove from Favorites" : "Add to Favorites"} ❤️
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
