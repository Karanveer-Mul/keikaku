import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardHolder = (props) => {
  const { title, type, score, image_url, mal_id } = props.show;

  return (
    <>
      <Card className="text-white mt-2 border-0 col-xs-8 col-sm-8 col-md-4 col-lg-2 showImage rounded-0">
        <Card.Img variant="top img-fluid showImage" src={image_url} />
        <Link to={`/anime/${mal_id}`}>
          {
            <Card.ImgOverlay className="overlay-image">
              <div className="badges">
                <Badge variant="primary">{type}</Badge>
                <Badge variant="warning">{score}</Badge>
              </div>

              <Card.Text className="mt-auto  showTitle">{title}</Card.Text>
            </Card.ImgOverlay>
          }
        </Link>
      </Card>
    </>
  );
};
export default CardHolder;
