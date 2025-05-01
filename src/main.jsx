import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout'; 
import App from './App.jsx';
import AddMovie from './components/AddMovie.jsx';
import UpdateMovie from './components/UpdateMovie.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import MovieDetail from './components/MovieDetail.jsx';
import AboutUs from './components/AboutUs.jsx';
import AllMovies from './components/AllMovies.jsx';
import FeaturedMovies from './components/FeaturedMovies.jsx';
import FavoriteMovie from './components/FavoriteMovie.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 🆕 Layout as main
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch('https://film-fusion-server.vercel.app/movies')
      },
      {
        path: "addMovie",
        element: <AddMovie />
      },
      {
        path: "AllMovies",
        element: <AllMovies></AllMovies>
      },
      {
        path: "FeatuedMovies",
        element: <FeaturedMovies></FeaturedMovies>
      },
      {
        path: "FavoriteMovie",
        element: <FavoriteMovie></FavoriteMovie>
      },
      {
        path: "movieDetail/:id",
        element:<MovieDetail></MovieDetail>

      },
      {
        path: "updateMovie/:id",
        element: <UpdateMovie />,
        loader: ({ params }) => fetch(`https://film-fusion-server.vercel.app/movies/${params.id}`)
      },
      {
        path: 'AboutUs',
        element:<AboutUs></AboutUs>
      },
      {
        path: "signIn",
        element: <SignIn />
      },
      {
        path: "signUp",
        element: <SignUp />
      },
      {
        path: "users",
        element: <Users></Users>,
        loader: () => fetch('https://film-fusion-server.vercel.app/users')
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
