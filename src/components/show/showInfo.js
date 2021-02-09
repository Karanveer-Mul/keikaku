import React, { useEffect } from "react";
import CardHolder from "./cardHolder";
import { getSeason } from "../../actions/getSeason";
import { useDispatch, useSelector } from "react-redux";

const ShowInfo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSeason(dispatch);
  }, []);

  const season = useSelector((state) => state.anime.season);

  return (
    <div className="row watchList">
      {season.map((show) => (
        <CardHolder key={show.mal_id} show={show} />
      ))}
    </div>
  );
};

export default ShowInfo;
