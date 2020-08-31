const topReducer = async (state = [], action) => {
  const promises = await (async (action) => {
    try {
      switch (action.type) {
        case "GET_TOP": {
          const getSeason = async () => {
            const response = await fetch("https://api.jikan.moe/v3/top");
            const responseJSON = await response.json();
            const season = await responseJSON.anime;

            this.setState({
              season: season,
            });
          };
          return getSeason();
        }
        default:
          return;
      }
    } catch (err) {
      alert(err);
    }
  });
};

export default topReducer;
