import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Movie from "./Components/Movie/Movie";
import Tv from "./Components/Tv/Tv";
import People from "./Components/People/People";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Error_404 from "./Components/Error_404/Error_404";
import MediaDetails from "./Components/MediaDetails/MediaDetails";
import Day from "./Components/Day/Day";
import Week from "./Components/Week/Week";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            { path: "day", element: <Day /> },
            { path: "week", element: <Week /> },
          ],
        },
        // STORE MANAGEMENT
        { path: "movie", element: <Movie /> },
        { path: "tv", element: <Tv /> },
        { path: "people", element: <People /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "mediaDetails/:media_type/:id", element: <MediaDetails /> },
        { path: "*", element: <Error_404 /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
