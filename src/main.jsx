import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddMovie from './components/AddMovie.jsx';
import UpdateMovie from './components/UpdateMovie.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"addMovie",
    element: <AddMovie></AddMovie>
  },
  {
    path: "updateMovie",
    element:<UpdateMovie></UpdateMovie>
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
