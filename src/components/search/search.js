import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="searchResult">
        <Link
          to={{
            pathname: `/anime/${props.mal_id}`,
          }}
        >
          <p>
            {props.title}

            <i
              className="material-icons"
              style={{ float: "right", paddingLeft: "10px" }}
            >
              arrow_forward
            </i>
          </p>
        </Link>
      </div>
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
        <div className="container searchAnime">
          {searchResults.map((show) => showInfo(show))}
        </div>
      )}
    </div>
  );
};

export default Search;
