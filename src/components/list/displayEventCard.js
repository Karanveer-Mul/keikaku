import React from "react";
import deleteShow from "./deleteShow";
import { Card, Col } from "react-bootstrap";

const DisplayEventCard = (props) => {
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
