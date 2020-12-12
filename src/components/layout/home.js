import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="home">
        <Row>
          <h2>How to use?</h2>
        </Row>
        <Row>
          <p>
            To load the list of seasonal anime, click on <b>Season</b> in the
            navbar.
          </p>
          <p>
            Select any show and click on <b>Set Event</b> and you will be
            redirected to log into your google account.
          </p>
          <p>
            Log into the account which you want to use for setting the event.
          </p>
          <p>The event will be added to your calendar.</p>
        </Row>
      </Container>
    );
  }
}

export default Home;
