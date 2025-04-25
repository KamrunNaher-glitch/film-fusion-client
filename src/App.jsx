import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import MovieCadr from './components/MovieCadr'

function App() {
  const movies = useLoaderData();

  return (
    <div className='m-10'>
      
      <h1 className='text-center text-teal-400 text-5xl font-bold'>Movies:{movies.length}</h1>
     <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
     {
        movies.map(movie =><MovieCadr key={movie._id} movie={movie}></MovieCadr>)
      }
     </div>
      
    </div>
  )
}

export default App
