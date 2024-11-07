import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../moviesData";
import "./MovieDetail.css";

function MovieDetail() {
  const { id } = useParams(); // Get movie ID from the URL
  const navigate = useNavigate(); // For navigating back to home

  // Find the movie by ID
  const movie = Object.values(moviesData)
    .flat()
    .find((movie) => movie.id === id);

  // If the movie is not found, navigate back to home
  if (!movie) {
    navigate("/");
    return null;
  }

  return (
    <div className="movie-detail">
      <button
        className="back-button"
        onClick={() => navigate("/")}>
        Back to Home
      </button>
      <div className="movie-detail-container">
        <img
          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>
            {movie.title} ({movie.year})
          </h1>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>Content Rating:</strong> {movie.contentRating}
          </p>
          <p>
            <strong>Average Rating:</strong> {movie.averageRating}
          </p>
          <p>
            <strong>Duration:</strong> {movie.duration}
          </p>
          <p>
            <strong>Genres:</strong> {movie.genres.join(", ")}
          </p>
          <p>
            <strong>Actors:</strong> {movie.actors.join(", ")}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>
          <p>
            <strong>Storyline:</strong> {movie.storyline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
