import React, { useState } from "react";
import { Card, Badge, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShowSummary from "../show/showSummary";

const Search = () => {
  const [searchResults, setSearchResults] = useState(null);

  const searchList = async (title) => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${title}&page=1`
      );
      const listJSON = await response.json();
      const list = await listJSON.results;
      setSearchResults(list);
    } catch (err) {
      console.log(err);
    }
  };

  const showInfo = (props) => {
    return (
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={6} md={3} lg={3}>
              <Image className="img-fluid" src={props.image_url} rounded />
            </Col>
            <Col xs={6} md={9} lg={9}>
              <p className="scrollable">{props.synopsis}</p>
            </Col>
          </Row>{" "}
        </Card.Body>
        <Card.Footer style={{ float: "left" }}>
          <Badge variant="primary">{props.type}</Badge>
          <Badge variant="warning">{props.score}</Badge>
          <Link style={{ float: "right" }}>
            <i className="material-icons">arrow_forward</i>
          </Link>
        </Card.Footer>
      </Card>
    );
  };

  return (
    <div>
      <div className="container searchAnime">
        <h1>Search</h1>
      </div>
      <div className="container searchAnime">
        <form>
          <i className="material-icons">search</i>
          <input
            type="search"
            placeholder="Search for Anime"
            onChange={(title) => searchList(title.target.value)}
          />
        </form>
      </div>
      <div className="container searchAnime">
        <p style={{ fontSize: "10px", color: "rgb(125, 132, 136)" }}>
          Re-type if the search results disappear
        </p>
      </div>
      {searchResults == null ? (
        <div className="container searchAnime" style={{ padding: "2rem" }}>
          <h4>Enter a valid title!</h4>
        </div>
      ) : (
        searchResults.map((show) => showInfo(show))
      )}
    </div>
  );
};

export default Search;
