import React, { useState } from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
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
  } = props.info;

  const [episodes, setEpisodes] = useState(1);

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
    const until =
      date.add(episodes - 1, "weeks").format("YYYYMMDDTHHmmss") + "Z";
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

          request.execute();
          setTimeout(() => {
            window.alert(`${title} added`);
          }, 2);
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
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Row>
            <Col>
              <Form.Label
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                Episodes
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                as="select"
                onChange={(number) => setEpisodes(number.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
              </Form.Control>
            </Col>

            <Button
              variant="primary"
              style={{ float: "right" }}
              onClick={() => handleClick(moment(airing_start))}
            >
              Set Event
            </Button>
          </Form.Row>
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowSummary;
