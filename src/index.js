import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';
import SongPages from './pages/SongPages';
import Login from './pages/Login';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Categories from './pages/Categories';
import Top from './pages/Top';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "playsong/:id/:url",
        element: <SongPages />
      },
      {
        path: "favorite",
        element: <Favorite />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "top",
        element: <Top />
      },
    ]
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
