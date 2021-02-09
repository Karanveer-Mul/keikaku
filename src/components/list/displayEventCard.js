import React from "react";
import DeleteShow from "./deleteShow";
import moment from "moment";

const DisplayEventCard = (props) => {
  let dateTime = props.event.start.dateTime;
  dateTime = moment(dateTime).format("dddd");

  const { iconLink, title } = props.event.gadget;

  return (
    <>
      <div className="watchCard">
        <div className="showDay">{dateTime}</div>
        <img
          class="showImg"
          src={iconLink}
          alt={title}
          width="225px"
          high="318px"
        />
        <div
          className="showRemove"
          onClick={() => DeleteShow(props.event.recurringEventId, title)}
        >
          Remove
        </div>
      </div>
    </>
  );
};

export default DisplayEventCard;
