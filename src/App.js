import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import moviesData from "./moviesData";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import NotificationBanner from "./components/NotificationBanner";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("movies-coming");
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "", isVisible: false });

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const toggleFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isAlreadyFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
      setNotification({ message: "Removed from Favorites", type: "error", isVisible: true });
    } else {
      setFavorites([...favorites, movie]);
      setNotification({
        message: "Successfully added to Favorites",
        type: "success",
        isVisible: true,
      });
    }

    setTimeout(() => {
      setNotification({ ...notification, isVisible: false });
    }, 2000);
  };

  const moviesToShow =
    category === "favorites"
      ? favorites.filter((movie) => movie.title.toLowerCase().includes(searchQuery))
      : (moviesData[category] || []).filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery)
        );

  return (
    <Router>
      <div className="App">
        <Header
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
        <NotificationBanner
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={() => setNotification({ ...notification, isVisible: false })}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={moviesToShow}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
