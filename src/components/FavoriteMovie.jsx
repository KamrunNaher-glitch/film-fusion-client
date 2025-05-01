import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider"; // Make sure this is correct
import AddToFavorite from "./AddToFavorite"; // Import AddToFavorite

const FavoriteMovies = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [favorites, setFavorites] = useState([]);

  // Ensure user is logged in before proceeding
  if (!user) {
    return <div>Please log in to view your favorite movies.</div>;
  }

  const userEmail = user.email; // Extract user email from the user object

  useEffect(() => {
    // Fetch favorites from the server when the component mounts
    fetch(`https://film-fusion-server.vercel.app/favorites?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setFavorites(data));
  }, [userEmail]);

  return (
    <div>
      <h1>Favorite Movies</h1>
      <div className="movie-cards">
        {favorites.length === 0 ? (
          <p>No favorite movies found.</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.movieId} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.genre}</p>
              <p>{movie.rating}</p>
              {/* Add To Favorite button */}
              <AddToFavorite movie={movie} userEmail={userEmail} setFavorites={setFavorites} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;
