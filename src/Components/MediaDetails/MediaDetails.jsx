import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaDetails() {
  let { media_type, id } = useParams();
  const [details, setdetails] = useState({});
  async function getAPI() {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=8494c70d32335f06e505959598e8ff8c`
    );
    setdetails(await data);
    console.log(data);
  }

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="px-3">
      <div className="row">
        <div className="col-md-12">
          <div className="bg-media">
            {details.poster_path ? (
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + details.backdrop_path
                }
                alt=""
              />
            ) : (
              <img
                src={
                  "https://image.tmdb.org/t/p/original" + details.backdrop_path
                }
                alt=""
              />
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
