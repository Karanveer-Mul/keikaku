import React from "react";
import CardHolder from "./cardHolder";
import { useSelector, useDispatch } from "react-redux";
import { getSeason } from "../../actions/getSeason";

const ShowInfo = (props) => {
  const dispatch = useDispatch();

  getSeason(dispatch);

  const data = useSelector((state) => state.season.season);

  return (
    <div className="row">
      {data.map((show) => (
        <CardHolder key={show.mal_id} show={show} />
      ))}
    </div>
  );
};

export default ShowInfo;
