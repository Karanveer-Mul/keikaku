import React, { Component } from "react";
import { Carousel, Image, Col, Row, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="m-auto" fluid>
        <Row className="d-flex justify-content-md-center">
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Image src="logo.png" fluid></Image>
          </Col>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="back.png"
                alt="First slide"
                fluid
              />
              <Carousel.Caption>
                <h3>Welcome to When Is My Show</h3>
                <p>
                  A website where you can add airing shows as events to your
                  google calender
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="back.png"
                alt="Third slide"
                fluid
              />
              <Carousel.Caption>
                <h3>How it works</h3>
                <p>
                  Head on over to Catalouge to look at all the airing shows of
                  the season
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="back.png"
                alt="Third slide"
                fluid
              />
              <Carousel.Caption>
                <h3>Almost done</h3>
                <p>
                  When you click on add you will have to login through your
                  google account and the event will be added to your calender.
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
