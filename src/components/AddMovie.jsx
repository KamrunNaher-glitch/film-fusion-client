import React from 'react';
import Swal from 'sweetalert2';

const AddMovie = () => {
    const handleAddMovie = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const rating = form.rating.value;
        const summary = form.summary.value;
        const poster = form.poster.value;
        const newMovie = {title,genre,duration,releaseYear,rating,summary,poster}
        console.log(newMovie);
        fetch('http://localhost:5000/movies',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(newMovie)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Movie added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
             <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-6">
                <form onSubmit={handleAddMovie} className="card-body space-y-4">
      {/* First Row */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input type="text" name='title' placeholder="Enter movie title" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <input type="text" name='genre' placeholder="Enter genres (comma-separated)" className="input input-bordered w-full" required />
        </div>
      </div>
      {/* Second Row */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration (minutes)</span>
          </label>
          <input type="number" name='duration' placeholder="Enter duration" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
          <input type="number" name='releaseYear' placeholder="Enter release year" className="input input-bordered w-full" required />
        </div>
      </div>
      {/* Third Row */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" step="0.1" name='rating' placeholder="Enter rating (e.g., 8.5)" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Summary</span>
          </label>
          <input type="text" name='summary' placeholder="Enter movie summary" className="input input-bordered w-full" required />
        </div>
      </div>
      {/* Photo URL */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Movie Poster URL</span>
        </label>
        <input type="text" name='poster' placeholder="Enter poster URL" className="input input-bordered w-full" required />
      </div>
      {/* Submit Button */}
      <div>
        <input type="submit" value="Add Movie" className='btn btn-primary' />
      </div>
       
    </form>
  </div>
        </div>
    );
};

export default AddMovie;
