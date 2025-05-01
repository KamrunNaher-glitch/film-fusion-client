import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import AddToFavorite from './AddToFavorite'; // Import your AddToFavorite component
import { AuthContext } from './Providers/AuthProvider';

const MovieCadr = ({ movie, movies, setMovies }) => {
  const { _id, title, genre, duration, releaseYear, rating, summary, poster } = movie;

  // Fetch user email from the AuthContext
  const { user } = useContext(AuthContext);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });

              const remaining = movies.filter((movie) => movie._id !== _id);
              setMovies(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl flex flex-col md:card-side">
      {/* Poster */}
      <figure className="w-full md:w-1/3">
        <img className="w-full h-full object-cover" src={poster} alt="Movie" />
      </figure>

      {/* Card Body with Description + Buttons */}
      <div className="card-body w-full md:w-2/3">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="card-title">{title}</h2>
            <p className="text-sm">{summary}</p>
            <p>
              <span className="font-semibold">Genre:</span> {genre}
            </p>
            <p>
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p>
              <span className="font-semibold">Release Year:</span> {releaseYear}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>

          {/* Button Section (next to description) */}
          <div className="flex flex-col gap-2 justify-start">
            <Link to={`/movieDetail/${_id}`}>
              <button className="btn btn-sm">View</button> {/* Small button */}
            </Link>

            <Link to={`updateMovie/${_id}`}>
              <button className="btn btn-sm">Edit</button> {/* Small button */}
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm">
              Delete
            </button >

            {/* Add To Favorite Button (only show if user is logged in) */}
            {user?.email && (
              <AddToFavorite movie={movie} userEmail={user.email} />
            )}
          </div>
        </div>

        {/* Watch Button (optional at bottom) */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCadr;
