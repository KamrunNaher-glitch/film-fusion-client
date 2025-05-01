import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://film-fusion-server.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                // Sort movies by rating (high to low)
                const sortedMovies = data.sort((a, b) => b.rating - a.rating);
                // Take top 6
                const top6Movies = sortedMovies.slice(0, 6);
                setMovies(top6Movies);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
<div>
    <h1 className='text-center text-3xl md:text-5xl font-bold px-4 mt-2 mb-2'>"Top Rated Films You Can't Miss!"</h1>
            <p className='text-center  md:text-2xl'>Discover the highest-rated movies that everyone’s talking about!
                Handpicked just for you — these 6 blockbusters are a must-watch.
                Dive into unforgettable stories with Film Fusion!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            
            {movies.map(movie => (
                <div key={movie._id} className="border rounded-xl shadow-lg p-4">
                    <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover rounded-md" />
                    <h2 className="text-xl font-bold mt-3">{movie.title}</h2>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Duration:</strong> {movie.duration} mins</p>
                    <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                    <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
                    <button
                        onClick={() => navigate(`/movies/${movie._id}`)}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        See Details
                    </button>
                </div>
            ))}
        </div>
</div>
       
    );
};

export default FeaturedMovies;
