import React from "react";
import { Modal, Container, Row, Col, Image, Button } from "react-bootstrap";
import ConfigureInfo from "../../configureInfo";

const ShowSummary = (props) => {
  const { title, producers, synopsis, genres, image_url } = props.showInfo;

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
              <p>
                Synopsis:<br></br> {synopsis}
              </p>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs={12} md={4} lg={4}>
              <p>Producers:{producers.name}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="float-left">
        <p>Genre:</p>
        {getGenre()}
        <Button variant="primary" className="float-right" onClick={handleClick}>
          Set Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowSummary;
