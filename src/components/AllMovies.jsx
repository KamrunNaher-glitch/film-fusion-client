import { useEffect, useState } from 'react';
import MovieCadr from '../components/MovieCadr';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://film-fusion-server.vercel.app/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-center text-5xl font-bold my-8'>All Movies</h1>
      
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          movies.map(movie => (
            <MovieCadr
              key={movie._id}
              movie={movie}
              movies={movies}
              setMovies={setMovies}
            />
          ))
        }
      </div>
    </div>
  );
};

export default AllMovies;
