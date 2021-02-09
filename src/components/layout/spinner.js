import "../../CSS/spinner.css";
import React from "react";
import spinner from "../../assets/spinner.svg";

const Spinner = () => {
  return (
    <div className="banner" style={{ color: "black", background: "none" }}>
      <img src={spinner} className="spinner" alt="loader" />
      <p>Fetching data</p>
    </div>
  );
};

export default Spinner;
