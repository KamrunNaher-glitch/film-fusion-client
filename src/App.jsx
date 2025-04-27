import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useLoaderData } from 'react-router-dom';
import MovieCadr from './components/MovieCadr';
import Banner from '../Banner';

function App() {
  const loadedMovies = useLoaderData();
  const [movies, setMovies] = useState(loadedMovies);

  return (
    <div className=''>
      <Banner />
      <h1 className='text-center text-5xl font-bold'>Featured Movies</h1>

      {/* Movie Cards Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 my-10'>
        {
          movies.slice(0, 6).map(movie => (
            <MovieCadr
              key={movie._id}
              movie={movie}
              movies={movies}
              setMovies={setMovies}
            />
          ))
        }
      </div>

      {/* See All Movies Button */}
      <div className='flex justify-center my-6'>
        <Link to="/allMovies">
          <button className="btn btn-primary text-lg px-8 py-2">
            See All Movies
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App;
