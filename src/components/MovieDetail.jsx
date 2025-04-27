import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-100 shadow-xl w-full md:max-w-4xl">
        <figure>
          <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p>{movie.summary}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
