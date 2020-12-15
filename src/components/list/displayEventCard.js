import React from "react";
import deleteShow from "./deleteShow";
import { Button } from "react-bootstrap";

const DisplayEventCard = (props) => {
  const { title, iconLink } = props.event.gadget;

  return (
    <div className="container col-sm-12 col-lg-4 eventCard">
      <div className="row justify-content-center">
        <b>{title}</b>
      </div>
      <div className="row justify-content-center">
        <img src={iconLink} alt="Key Visual" />
      </div>
      <div className="row justify-content-center">
        <button
          className="delteButton"
          onClick={() => deleteShow(props.event.recurringEventId)}
        >
          Remove Event
        </button>
      </div>
    </div>
  );
};

export default DisplayEventCard;
