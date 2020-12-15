import ConfigureInfo from "../../configureInfo";

const deleteShow = (eventId) => {
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
        var request = gapi.client.calendar.events.delete({
          calendarId: "primary",
          eventId: eventId,
        });

        request.execute(alert("Event removed"));
      });
  });
};

export default deleteShow;
