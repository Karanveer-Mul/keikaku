import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <p className="subHeading">Welcome to</p>
        <p className="heading">Keikaku 計画</p>
      </div>
      <div className="home">
        <div className="homeCardBack season">
          <div className="homeCard">
            <Link to="/season/current">
              <div className="title">Set Reminders for Episode Release</div>
            </Link>
            <p className="para">
              Find all your favourite Seasonal Animes and set up reminders so
              that you never miss out on a release{" "}
            </p>
          </div>
        </div>
        <div className="homeCardBack search">
          <div className="homeCard">
            <Link to="/search">
              <div className="title">
                Search for Airing Shows from Previous Season
              </div>
            </Link>
            <p className="para">
              Can't seem to find your favourite show from last Season? Don't
              fret and just Search it up
            </p>
          </div>
        </div>
        <div className="homeCardBack delete">
          <div className="homeCard">
            <Link to="/watchlist">
              <div className="title">Look at your Weekly Watchlist</div>
            </Link>
            <p className="para">
              Check out the shows you have set up in your Watchlist and see the
              day of release
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
