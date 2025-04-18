import Axios from "axios";
import React, { useEffect, useState } from "react";
import Media from "../Media/Media";
import { Link } from "react-router-dom";

export default function Home() {
  const API = "https://api.themoviedb.org/3/trending/movie/day";
  const API_KEY = "8494c70d32335f06e505959598e8ff8c";
  // STORE MANAGEMENT ===> REDUXJS
  const [movies, setmovies] = useState([]);
  const [tv, settv] = useState([]);
  const [people, setpeople] = useState([]);
  async function getAPI(type, setdata) {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=8494c70d32335f06e505959598e8ff8c`
    );
    console.log(data.results);

    // CallBackFunction \\
    setdata(await data.results);
  }

  useEffect(() => {
    getAPI("movie", setmovies);
    getAPI("tv", settv);
    getAPI("person", setpeople);
  }, []);

  return (
    <>
      <div className="container my-4">
        <div className="row my-2">
          <div className="col-md-3">
            <div className="brdr w-25"></div>

            <h2 className="text-uppercase">
              <Link className="link" to="movie">
                Trending Movies
              </Link>
            </h2>

            <div className="brdr w-75"></div>
            <p className="h5 fw-light mt-3">Most watched movies to watch now</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              {movies.length > 0
                ? movies
                    .slice(0, 4)
                    .map((el) => <Media data={el} wdth="col-md-3" />)
                : ""}
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-3">
            <div className="brdr w-25"></div>

            <h2 className="text-uppercase">
              <Link className="link" to="tv">
                Trending Tv
              </Link>
            </h2>

            <div className="brdr w-75"></div>
            <p className="h5 fw-light mt-3">Most watched series to watch now</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              {tv.length > 0
                ? tv
                    .slice(0, 4)
                    .map((el) => <Media data={el} wdth="col-md-3" />)
                : ""}
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-3">
            <div className="brdr w-25"></div>

            <h2 className="text-uppercase">
              <Link className="link" to="people">
                Trending People
              </Link>
            </h2>

            <div className="brdr w-75"></div>
            <p className="h5 fw-light mt-3">Most watched people to watch now</p>
          </div>
          <div className="col-md-9">
            <div className="row">
              {people.length > 0
                ? people
                    .slice(0, 4)
                    .map((el) => <Media data={el} wdth="col-md-3" />)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
