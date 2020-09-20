import React, { Component } from "react";
import { Carousel, Row, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="m-auto" fluid>
        <Row>
          <Carousel className="m-auto">
            <Carousel.Item>
              <Carousel.Caption style={{ position: "static" }}>
                <h1 className="carousel-text">Welcome to Keikaku</h1>
                <p className="carousel-text">
                  Plan watching your shows according to your Keikaku
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption style={{ position: "static" }}>
                <h1 className="carousel-text">How it works</h1>
                <p className="carousel-text">
                  Head on over to Season to look at all the airing shows of the
                  season
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption style={{ position: "static" }}>
                <h1 className="carousel-text">Almost done</h1>
                <p className="carousel-text">
                  You can login through your google account to add the show to
                  your calender.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default Home;
