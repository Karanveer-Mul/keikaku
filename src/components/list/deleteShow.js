import ConfigureInfo from "../../configureInfo";
import { useAlert } from "react-alert";
import { useState } from "react";

const DeleteShow = (eventId, title) => {
  var gapi = window.gapi;
  var CLIENT_ID = ConfigureInfo.CLIENT_ID;
  var API_KEY = ConfigureInfo.API_KEY;

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

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
        let remove = window.confirm(`Do you want to remove ${title}?`);
        if (remove) {
          gapi.client.calendar.events
            .delete({
              calendarId: "primary",
              eventId: eventId,
            })
            .execute();
          setTimeout(() => {
            window.alert(`${title} removed`);
          }, 2);
        }
      });
  });
};

export default DeleteShow;
