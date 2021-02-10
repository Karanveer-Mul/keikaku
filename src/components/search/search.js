import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../CSS/search.css";
import Spinner from "../layout/spinner";

const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchList = async (title) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${title}&page=1`
      );
      const listJSON = await response.json();
      const list = await listJSON.results;
      setSearchResults(list);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showInfo = (props) => {
    return (
      <div className="searchResult">
        <Link
          to={{
            pathname: `/anime/${props.mal_id}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <p className="searchResultPara">{props.title} </p>
        </Link>
      </div>
    );
  };

  return (
    <div className="container searchAnime">
      <p className="heading">Search</p>

      <div className="searchDiv">
        <input
          type="search"
          placeholder="Search for Anime"
          onChange={(title) => searchList(title.target.value)}
        />
      </div>
      <p style={{ fontSize: "10px", color: "rgb(125, 132, 136)" }}>
        Re-type if the search results disappear
      </p>

      {searchResults == null ? (
        <div
          className="container searchAnime"
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <h4>Enter a valid title!</h4>
        </div>
      ) : (
        <div className="container searchAnime">
          {searchResults.slice(0, 10).map((show) => showInfo(show))}
        </div>
      )}
      {loading === true && (
        <div className="container searchAnime">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Search;
