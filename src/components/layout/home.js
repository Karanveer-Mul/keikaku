import React, { Component } from "react";
import { Carousel, Row, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="m-auto" fluid>
        {/*<Row className="d-flex justify-content-md-center">
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Image src="logo.png" fluid></Image>
          </Col>
        </Row>*/}
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
                  Head on over to Catalouge to look at all the airing shows of
                  the season
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption style={{ position: "static" }}>
                <h1 className="carousel-text">Almost done</h1>
                <p className="carousel-text">
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
