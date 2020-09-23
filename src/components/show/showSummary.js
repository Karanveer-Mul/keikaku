import React, { useState } from "react";
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
import DatePicker from "react-datepicker";
import moment from "moment";

const ShowSummary = (props) => {
  const { title, image_url, synopsis, genres, producers } = props.info;

  const [selectedDate, setSelectedDate] = useState(null);

  var gapi = window.gapi;
  var CLIENT_ID = ConfigureInfo.CLIENT_ID;
  var API_KEY = ConfigureInfo.API_KEY;

  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    console.log("did not load client yet");

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

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: title,
            start: {
              dateTime: "2020-10-2T22:00:00+05:30",
              timeZone: "Asia/Kolkata",
            },
            end: {
              dateTime: "2020-10-2T22:30:00+05:30", //ISO
              timeZone: "Asia/Kolkata",
            },
            recurrence: ["RRULE:FREQ=WEEKLY;UNTIL=20210102T200000Z"],
            reminders: {
              useDefault: false,
              overrides: [{ method: "popup", minutes: 30 }],
            },
          };

          var request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: event,
          });

          /*request.execute((event) => {
            window.open(event.htmlLink);
          });*/
          request.execute();
        })
        .then(() => (
          <Toast>
            {" "}
            <Toast.Body>Event added successfully</Toast.Body>
          </Toast>
        ));
    });
  };

  const getGenre = () => {
    return genres.map((genre) => (
      <Button variant="secondary" className="float-left" key={genre.mal_id}>
        {genre.name}
      </Button>
    ));
  };

  const getStudios = () => {
    return producers.map((studio) => studio.name);
  };

  const handleChange = (event) => {
    console.log(event);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <Image className="img-fluid" src={image_url} rounded />
            </Col>
            <Col xs={12} md={8} lg={8}>
              <p className="scrollable">{synopsis}</p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <p>Studios:{getStudios()}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="float-right">
              <DatePicker
                showTimeSelect
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                showYearDropdown
                scrollableMonthYearDropdown
              />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="float-left">
        <p>Genre:</p>
        {getGenre()}
        <Button
          variant="primary"
          className="float-right"
          onClick={() => handleClick()}
        >
          Set Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowSummary;
