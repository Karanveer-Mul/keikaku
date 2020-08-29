import { GET_SEASON } from "../actions/types";

const seasonReducer = async (state = [], action) => {
  const promises = await (async (action) => {
    try {
      switch (action.type) {
        case GET_SEASON: {
          const getSeason = async () => {
            const response = await fetch("https://api.jikan.moe/v3/season");
            const responseJSON = await response.json();
            const season = await responseJSON.anime;

            this.setState({
              season: season,
            });
          };
          getSeason();
        }
        default:
          return;
      }
    } catch (err) {
      throw err;
    }
  });
};

export default seasonReducer;
