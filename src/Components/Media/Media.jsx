import React from "react";
import Style from "./Media.module.css";
import { Link } from "react-router-dom";
export default function Media(props) {
  const { data, wdth } = props;
  return (
    <>
      <div className={wdth + " p-2 position-relative"}>
        <Link to={`/mediaDetails/${data.media_type}/${data.id}`}>
          <div className="">
            {data.poster_path ? (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + data.poster_path}
                alt=""
              />
            ) : (
              <img
                src={"https://image.tmdb.org/t/p/w500/" + data.profile_path}
                alt=""
              />
            )}
          </div>
          <h6 className="my-2">
            {data.title
              ? data.title.length > 17
                ? data.title.slice(0, 22) + "..."
                : data.title
              : data.name.length > 17
              ? data.name.slice(0, 22) + "..."
              : data.name}
          </h6>
          {data.vote_average && (
            <h6 className={Style.vote}>{data.vote_average.toFixed(2)}</h6>
          )}
        </Link>
      </div>
    </>
  );
}
