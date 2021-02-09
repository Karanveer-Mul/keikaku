import React, { useEffect, useState } from "react";
import CardHolder from "./cardHolder";
import { getSeason } from "../../actions/getSeason";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../layout/spinner";

const ShowInfo = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSeason(dispatch);
    console.log(loading);
    setLoading(false);
  }, [loading, dispatch]);

  const season = useSelector((state) => state.anime.season);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="row watchList">
      {season.map((show) => (
        <CardHolder key={show.mal_id} show={show} />
      ))}
    </div>
  );
};

export default ShowInfo;
