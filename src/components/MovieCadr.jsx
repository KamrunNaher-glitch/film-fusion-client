import React from 'react';

const MovieCadr = ({ movie }) => {
  const { title, genre, duration, releaseYear, rating, summary, poster } = movie;

  return (
    <div className="card bg-base-100 shadow-xl flex flex-col md:card-side">
      <figure className="w-full md:w-1/3">
        <img
          className="w-full h-full object-cover"
          src={poster}
          alt="Movie"
        />
      </figure>
      <div className="card-body w-full md:w-2/3">
        <h2 className="card-title">{title}</h2>
        <p>{summary}</p>
        <p><span className="font-semibold">Genre:</span> {genre}</p>
        <p><span className="font-semibold">Duration:</span> {duration}</p>
        <p><span className="font-semibold">Release Year:</span> {releaseYear}</p>
        <p><span className="font-semibold">Rating:</span> {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCadr;
