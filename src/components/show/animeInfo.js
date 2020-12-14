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
    <div>{animeInfo === null ? <p>getInfo</p> : <p>{animeInfo.title}</p>}</div>
  );
};

export default AnimeInfo;
