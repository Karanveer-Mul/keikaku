import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div style={{ paddingTop: "2rem" }}>
        <div className="row home">
          <h2>How to use?</h2>
          <br></br>
          <ul>
            <li>
              To load the list of seasonal anime, click on <b>Season</b> in the
              navbar.
            </li>

            <li>
              Select any show and click on <b>Set Event</b> and you will be
              redirected to log into your google account.
            </li>

            <li>
              Log into the account which you want to use for setting the event.
            </li>

            <li>The event will be added to your calendar.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
