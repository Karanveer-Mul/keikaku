import React, { useState, useEffect } from "react";
import { Card, Badge } from "react-bootstrap";
import ShowSummary from "./showSummary";
//import { getSeries } from "../../actions/";

const CardHolder = (props) => {
  /*useEffect(() => {
    getSeries();
  });*/

  const { title, type, score, image_url } = props.show;

  const [isSummaryShown, setSummaryShown] = useState(false);

  return (
    <>
      <Card
        className="text-white border-0 col-xs-12 col-sm-12 col-md-12 col-lg-2 rounded-0"
        style={{ width: "8rem" }}
      >
        <Card className="showImage">
          <Card.Img variant="top img-fluid" src={image_url} />
          <Card.ImgOverlay
            className="d-flex flex-column show"
            onClick={() => setSummaryShown(true)}
          >
            <Badge variant="primary">{type}</Badge>
            <Badge variant="warning">{score}</Badge>
            <Card.Text className="mt-auto  showTitle">
              <h6>{title}</h6>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        {/*<Card.Footer>
          <Button
            variant="dark float-right"
            onClick={() => setSummaryShown(true)}
          >
            ADD
          </Button>{" "}
        </Card.Footer>*/}
      </Card>
      <ShowSummary
        show={isSummaryShown}
        onHide={() => setSummaryShown(false)}
        showInfo={props.show}
      />
    </>
  );
};
export default CardHolder;
