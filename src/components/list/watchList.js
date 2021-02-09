import React, { useState, useEffect } from "react";
import ConfigureInfo from "../../configureInfo";
import DisplayEventCard from "./displayEventCard";
import moment from "moment";

const WatchList = () => {
  const [events, setEvents] = useState([]);

  var gapi = window.gapi;
  var CLIENT_ID = ConfigureInfo.CLIENT_ID;
  var API_KEY = ConfigureInfo.API_KEY;

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    const until =
      moment(new Date()).add(7, "days").format("YYYY-MM-DDTHH:mm:ss") + "Z";
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
        .then(async () => {
          const response = await gapi.client.calendar.events.list({
            calendarId: "primary",
            timeMax: until,
            timeMin: new Date().toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 40,
            orderBy: "startTime",
          });
          const items = await response.result.items;
          const filteredList = await items.filter(
            (event) =>
              event.gadget.link.slice(0, 23) === "https://myanimelist.net"
          );
          setEvents(filteredList);
        });
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="container">
      <div className="row home">
        <p className="heading" style={{ textAlign: "center" }}>
          Watchlist
        </p>
      </div>

      <div className="row watchList" style={{ width: "100%" }}>
        {events.length < 1 ? (
          <div className="container" style={{ textAlign: "center" }}>
            So empty :(
          </div>
        ) : (
          events.map((event) => <DisplayEventCard event={event} />)
        )}
      </div>
    </div>
  );
};

export default WatchList;
