import React from "react";
import CardHolder from "./cardHolder";
import { useSelector } from "react-redux";

const ShowInfo = (props) => {
  const season = useSelector((state) => state.anime.season);

  return (
    <div className="row">
      {season.map((show) => (
        <CardHolder key={show.mal_id} show={show} />
      ))}
    </div>
  );
};

export default ShowInfo;
