import React from "react";
import CardHolder from "./cardHolder";
import { useSelector, useDispatch } from "react-redux";
import { getSeason } from "../../actions/getSeason";
import { currentComponent } from "../../actions/index";

const ShowInfo = (props) => {
  const dispatch = useDispatch();
  console.log(props.type);
  /*{
    
    dispatch(currentComponent(props.type));
  
  }*/

  const season = useSelector((state) => state.anime.season);
  const topAnime = useSelector((state) => state.anime.top);

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
