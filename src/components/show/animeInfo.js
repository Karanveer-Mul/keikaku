import React, { useState, useEffect, useCallback } from "react";

const AnimeInfo = ({ match }) => {
  const [animeInfo, setAnimeInfo] = useState(null);

  const getInfo = useCallback(async () => {
    try {
      let response = await fetch(
        `https://api.jikan.moe/v3/anime/${match.params.id}`
      );
      response = await response.json();
      setAnimeInfo(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div>
      {animeInfo === null ? (
        <div className="AnimeSearch">Loading...</div>
      ) : (
        <div className="container">
          <div className="row">
            <h1>{animeInfo.title}</h1>
          </div>
          <div className="row">
            <div className="col-sm-4 col-lg-4">
              <img src={animeInfo.image_url} alt="Key Visual" />
            </div>
            <div className="col-sm-8 col-lg-8">
              <div className="row">{animeInfo.synopsis}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeInfo;
