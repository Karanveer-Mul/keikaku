import React from "react";
import CardHolder from "./cardHolder";
import { useSelector, useDispatch } from "react-redux";

const ShowInfo = (props) => {
  const dispatch = useDispatch();

  const season = useSelector((state) => state.anime.season);
  const topAnime = useSelector((state) => state.anime.top);
  console.log(props.type);
  return (
    <div className="row">
      {props.type === "season"
        ? season.map((show) => <CardHolder key={show.mal_id} show={show} />)
        : ""}
      {props.type === "topAnime"
        ? topAnime.map((show) => <CardHolder key={show.mal_id} show={show} />)
        : ""}
    </div>
  );
};

export default ShowInfo;
