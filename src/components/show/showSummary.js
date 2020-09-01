import React, { useEffect } from "react";
import { Modal, Container, Row, Col, Image, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { anime } from "../../actions/index";

import ConfigureInfo from "../../configureInfo";

const ShowSummary = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []); /*
  var gapi = window.gapi;
  var CLIENT_ID = ConfigureInfo.CLIENT_ID;
  var API_KEY = ConfigureInfo.API_KEY;

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calender", "v3", () =>
        console.log("something happened ^_^")
      );

      gapi.auth2.getAuthInstance().signIn();
    });
  };

  const getGenre = () => {
    return genres.map((genre) => (
      <Button variant="secondary" className="float-left">
        {genre.name}
      </Button>
    ));
  };
*/
  /*
  const dispatch = useDispatch();
  const getAnime = async (mal_id) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v3/anime/${mal_id}`);
      const responseJSON = await response.json();

      dispatch(anime(responseJSON));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => getAnime(dispatch, mal_id));

  const showInfo = useSelector((state) => state.anime.anime);
  
  const { title, image_url, synopsis, genres, studios } = showInfo;
  */ return (
    <div>
      <h3>anime</h3>
    </div>
  );
};

export default ShowSummary;
