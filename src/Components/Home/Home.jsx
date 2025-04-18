import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const API = "https://api.themoviedb.org/3/trending/movie/day";
  const API_KEY = "8494c70d32335f06e505959598e8ff8c";
  const [movies, setmovies] = useState([]);
  const [tv, settv] = useState([]);
  const [people, setpeople] = useState([]);
  async function getAPI(type, setdata) {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=8494c70d32335f06e505959598e8ff8c`
    );
    // CallBackFunction \\
    setdata(await data);
  }

  useEffect(() => {
    getAPI("movie", setmovies);
    getAPI("tv", settv);
    getAPI("person", setpeople);
  }, []);

  return (
    <>
      <div>{movies.total_results}</div>
      <div>{tv.total_results}</div>
      <div>{people.total_results}</div>
    </>
  );
}
