import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { islogged } from "../../actions";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">Do you want to Logout?</div>
      <div className="row">
        <Button onClick={() => dispatch(islogged())}>Logout</Button>
      </div>
    </div>
  );
};

export default Logout;
