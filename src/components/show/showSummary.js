import React from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Image,
  Button,
  Toast,
} from "react-bootstrap";
import ConfigureInfo from "../../configureInfo";
import moment from "moment";

const ShowSummary = (props) => {
  const {
    title,
    image_url,
    synopsis,
    genres,
    producers,
    airing_start,
    url,
    source,
    type,
  } = props.info;

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

  const getGenre = () => {
    return genres.map((genre) => genre.name + " ");
  };

  const getStudios = () => {
    return producers.map((studio) => studio.name);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Container className="all-font">
          <Row>
            <Modal.Title>{title}</Modal.Title>
          </Row>
          <Row className="justify-content-center">{getGenre()}</Row>
        </Container>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className="all-font">
          <Row>
            <Col xs={6} md={5} lg={4}>
              <Image className="img-fluid" src={image_url} rounded />
            </Col>
            <Col xs={6} md={7} lg={8}>
              <Row className="justify-content-center">{getStudios()}</Row>
              <Row className="justify-content-center">{source}</Row>
              <Row className="justify-content-center">
                {moment(airing_start).format("MMM Do, YYYY [at] h:mma")}
              </Row>
              <Row>
                <p className="scrollable">{synopsis}</p>
              </Row>
            </Col>
          </Row>
          <br></br>
        </Container>
      </Modal.Body>
      <Modal.Footer className="float-left">
        <Button
          variant="primary"
          className="float-right"
          onClick={() => handleClick(moment(airing_start))}
        >
          Set Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowSummary;
