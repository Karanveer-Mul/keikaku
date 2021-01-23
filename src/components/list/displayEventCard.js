import React from "react";
import deleteShow from "./deleteShow";
import { Badge, Card, Col } from "react-bootstrap";
import moment from "moment";

const DisplayEventCard = (props) => {
  let dateTime = props.event.start.dateTime;
  dateTime = moment(dateTime).format("dddd");
  const { iconLink } = props.event.gadget;

  return (
    <>
      <Col xs={6} md={3} lg={2}>
        <Card className="showCard">
          <Card.Img
            variant="top"
            className="text-white border-0 borderRadius-15"
            src={iconLink}
            alt="Key Visual"
          />
          {
            <Card.ImgOverlay>
              <div className="badges">
                <Badge variant="primary">{dateTime}</Badge>
              </div>
            </Card.ImgOverlay>
          }
          <Card.Body className="removeContainer">
            <Card.Subtitle
              style={{ textAlign: "center", justifyContent: "center" }}
              onClick={() => deleteShow(props.event.recurringEventId)}
            >
              Remove
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default DisplayEventCard;
