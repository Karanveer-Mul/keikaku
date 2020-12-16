import React, { useEffect } from "react";
import CardHolder from "./cardHolder";
import { getSeason } from "../../actions/getSeason";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ShowInfo = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSeason(dispatch);
  }, []);

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
