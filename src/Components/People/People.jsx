import Axios from "axios";
import React, { useEffect, useState } from "react";
import Media from "../Media/Media";
import { Link } from "react-router-dom";

export default function People() {
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
    getAPI("person", setpeople);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row my-5 justify-content-center text-center">
          <div className="col-md-4">
            <div className="brdr w-25 mx-auto"></div>

            <h2 className="text-uppercase">
              <Link className="link" to="/people">
                Trending People
              </Link>
            </h2>

            <div className="brdr w-75 mx-auto"></div>
            <p className="h5 fw-light mt-3">Most watched people to watch now</p>
          </div>
        </div>
        <div className="row my-2">
          {people.length > 0
            ? people.map((el) => <Media data={el} wdth="col-md-2" />)
            : ""}
        </div>
      </div>
    </>
  );
}
