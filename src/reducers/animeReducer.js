const intialState = {
  season: [],
};

const animeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_SEASON": {
      return {
        ...state,
        season: action.payload,
      };
    }

    default:
      return state;
  }
};

export default animeReducer;
