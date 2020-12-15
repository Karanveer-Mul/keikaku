import React, { useState } from "react";
import { Card, Badge, Col } from "react-bootstrap";
import ShowSummary from "./showSummary";

const CardHolder = (props) => {
  const { title, type, score, image_url } = props.show;

  const [isSummaryShown, setSummaryShown] = useState(false);

  return (
    <>
      <Col xs={6} md={3} lg={3}>
        <Card className="text-white mt-2 border-0 borderRadius-15 showImage rounded-0 showCard">
          <Card.Img variant="top img-fluid" src={image_url} />
          {
            <Card.ImgOverlay
              className="overlay-image"
              onClick={() => setSummaryShown(true)}
            >
              <div className="badges">
                <Badge variant="primary">{type}</Badge>
                <Badge variant="warning">{score}</Badge>
              </div>

              <Card.Text className="mt-auto  showTitle">{title}</Card.Text>
            </Card.ImgOverlay>
          }
        </Card>
      </Col>
      {
        <ShowSummary
          show={isSummaryShown}
          onHide={() => setSummaryShown(false)}
          info={props.show}
          key={props.show.mal_id}
        />
      }
    </>
  );
};
export default CardHolder;
