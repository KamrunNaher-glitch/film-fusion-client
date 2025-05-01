import React from 'react';
import Swal from 'sweetalert2';

const AddToFavorite = ({ movie, userEmail, setFavorites }) => {
  const handleAddFavorite = () => {
    const favoriteMovie = {
      userEmail: userEmail,
      movieId: movie._id,
      title: movie.title,
      poster: movie.poster,
      genre: movie.genre,
      duration: movie.duration,
      releaseYear: movie.releaseYear,
      rating: movie.rating,
    };

    fetch('https://film-fusion-server.vercel.app/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favoriteMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged || data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: 'Movie has been added to Favorites!',
          }).then(() => {
            // Fetch updated favorites after adding a movie
            fetch(`https://film-fusion-server.vercel.app/favorites?email=${userEmail}`)
              .then((res) => res.json())
              .then((data) => {
                setFavorites(data); // Update the state with the new favorites list
              });
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to add to favorites.',
          });
        }
      })
      .catch((error) => {
        console.error('Error adding to favorites:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  };

  return (
    <button onClick={handleAddFavorite} className="btn btn-secondary btn-sm">
      Add to Favorite
    </button>
  );
};

export default AddToFavorite;
