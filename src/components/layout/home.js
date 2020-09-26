import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="m-auto" fluid>
        <br></br>
        <Row>
          <h2 style={{ fontFamily: "Secular One" }}>How to use?</h2>
        </Row>
        <Row>
          <p style={{ fontFamily: "Secular One", fontSize: "150%" }}>
            To load the list of seasonal anime, click on <b>Season</b> in the
            navbar.
            <br></br>
            Select any show and click on <b>Set Event</b> and you will be
            redirected to log into your google account.
            <br></br>
            Log into the account which you want to use for setting the event.
            <br></br>
            The event will be added to your calendar.
          </p>
        </Row>
      </Container>
    );
  }
}

export default Home;
