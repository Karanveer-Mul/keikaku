import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import ShowSummary from "./showSummary";

const CardHolder = (props) => {
  const { title, type, score, image_url } = props.show;

  const [isSummaryShown, setSummaryShown] = useState(false);

  return (
    <>
      <div className="watchCard" style={{ cursor: "pointer" }}>
        <img
          className="img-fluid showImg"
          src={image_url}
          width="225"
          height="318"
          onClick={() => setSummaryShown(true)}
          loading="lazy"
          alt={title}
        />

        <div className="badges">
          <Badge variant="primary">{type}</Badge>
          <Badge variant="warning">{score}</Badge>
        </div>

        <p className="showTitle">{title}</p>
      </div>

      {
        <div className="watchList">
          <ShowSummary
            show={isSummaryShown}
            onHide={() => setSummaryShown(false)}
            info={props.show}
            key={props.show.mal_id}
          />
        </div>
      }
    </>
  );
};
export default CardHolder;
