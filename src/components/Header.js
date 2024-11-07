import React from "react";
import "./Header.css";

function Header({ onSearch, onCategoryChange }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="#coming-soon"
              onClick={() => onCategoryChange("movies-coming")}>
              Coming Soon
            </a>
          </li>
          <li>
            <a
              href="#in-theatre"
              onClick={() => onCategoryChange("movies-in-theaters")}>
              Movies in Theatre
            </a>
          </li>
          <li>
            <a
              href="#top-rated-indian"
              onClick={() => onCategoryChange("top-rated-india")}>
              Top Rated Indian
            </a>
          </li>
          <li>
            <a
              href="#top-rated"
              onClick={() => onCategoryChange("top-rated-movies")}>
              Top Rated Movies
            </a>
          </li>
          <li>
            <a
              href="#favorites"
              onClick={() => onCategoryChange("favorites")}>
              Favorites
            </a>
          </li>
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={handleSearch}
        />
      </div>
    </header>
  );
}

export default Header;
