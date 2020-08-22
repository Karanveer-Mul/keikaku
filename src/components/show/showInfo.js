import React, { Component } from "react";
import SeriesInfo from "./cardHolder";

class ShowInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeason: [],
    };

    this.getSeasonal = this.getSeasonal.bind(this);
  }

  async getSeasonal() {
    try {
      const response = await fetch("https://api.jikan.moe/v3/season");
      const responseJSON = await response.json();
      const currentSeason = await responseJSON.anime;
      this.setState({
        currentSeason: currentSeason,
      });
    } catch (err) {
      alert(err);
    }
  }

  componentDidMount() {
    this.getSeasonal();
  }

  render() {
    const { currentSeason } = this.state;
    return (
      <div className="row">
        {currentSeason.map((show) => (
          <SeriesInfo key={show.mal_id} show={show} />
        ))}
      </div>
    );
  }
}

export default ShowInfo;
