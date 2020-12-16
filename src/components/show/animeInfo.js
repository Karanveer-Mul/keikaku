import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import ConfigureInfo from "../../configureInfo";
import moment from "moment";

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

  const SetEvent = (props) => {
    const { title, image_url, aired, url } = props;

    var gapi = window.gapi;
    var CLIENT_ID = ConfigureInfo.CLIENT_ID;
    var API_KEY = ConfigureInfo.API_KEY;

    var DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ];

    var SCOPES = "https://www.googleapis.com/auth/calendar.events";

    const handleClick = (date) => {
      const startDate = date.format();
      const endDate = date.add(30, "minutes").format();
      const until = date.add(12, "weeks").format("YYYYMMDDTHHmmss") + "Z";
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

      gapi.load("client:auth2", () => {
        console.log("loaded client");

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });

        gapi.client.load("calender", "v3");

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            var event = {
              summary: title,
              start: {
                dateTime: startDate,
                timeZone: tz,
              },
              end: {
                dateTime: endDate,
                timeZone: tz,
              },
              gadget: {
                link: url,
                iconLink: image_url,
                display: "icon",
                title: title,
              },
              recurrence: [`RRULE:FREQ=WEEKLY;UNTIL=${until}`],
              reminders: {
                useDefault: false,
                overrides: [{ method: "popup", minutes: 30 }],
              },
            };

            var request = gapi.client.calendar.events.insert({
              calendarId: "primary",
              resource: event,
            });

            request.execute(alert("Event added"));
          });
      });
    };

    return handleClick(moment(aired.from));
  };

  const getGenre = () => {
    return animeInfo.genres.map((genre) => genre.name + " ");
  };

  const getStudios = () => {
    return animeInfo.studios.map((studio) => studio.name + " ");
  };

  return (
    <div>
      {animeInfo === null ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <div className="container" style={{ position: "relative" }}>
          <div className="row">
            <h3>{animeInfo.title}</h3>
          </div>

          <div className="row">
            <div className="col-sm-4 col-lg-4">
              <div className="row animeImage" style={{ paddingBottom: "2rem" }}>
                <img
                  className="img-fluid"
                  src={animeInfo.image_url}
                  alt="Key Visual"
                />
              </div>
              <div className="row">Genres: {getGenre()}</div>
              <div className="row">
                Airing:{" "}
                {animeInfo.airing ? (
                  <p style={{ color: "green", paddingLeft: "10px" }}>True</p>
                ) : (
                  <p style={{ color: "red", paddingLeft: "10px" }}>False</p>
                )}
              </div>
              <div className="row">Source: {animeInfo.source}</div>
              <div className="row">Studios: {getStudios()}</div>
            </div>
            <div
              className="col-sm-8 col-lg-8"
              style={{ paddingTop: "1rem", paddingBottom: "3rem" }}
            >
              <div className="row">
                <b>Synopsis</b>
              </div>
              <div className="row scrollable">{animeInfo.synopsis}</div>
              <div className="row setEventButton">
                {animeInfo.airing ? (
                  <Button variant="primary" onClick={() => SetEvent(animeInfo)}>
                    Set Event
                  </Button>
                ) : (
                  <Button variant="secondary" disabled>
                    Set Event
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeInfo;
