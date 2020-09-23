import React from "react";
import CardHolder from "./cardHolder";
import { useSelector } from "react-redux";
//import { getSeason } from "../../actions/getSeason";
//import { currentComponent } from "../../actions/index";

const ShowInfo = (props) => {
  //const [season, setSeason] = useState([]);

  /*useEffect(async () => {
    const response = await fetch("https://api.jikan.moe/v3/season");
    const responseJSON = await response.json();
    const currentSeason = await responseJSON.anime;
    setSeason(currentSeason);
  }, []);*/

  const season = useSelector((state) => state.anime.season);

  return (
    <div className="row">
      {season.map((show) => (
        <CardHolder key={show.mal_id} show={show} />
      ))}
    </div>
  );
};

export default ShowInfo;
