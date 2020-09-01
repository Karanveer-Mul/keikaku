const intialState = {
  season: [],
  top: [],
  anime: [],
};

const animeReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_SEASON": {
      return {
        ...state,
        season: action.payload,
      };
    }
    case "GET_TOP": {
      return {
        ...state,
        top: action.payload,
      };
    }
    case "GET_ANIME": {
      return {
        ...state,
        anime: action.payload,
      };
    }

    default:
      return state;
  }
};

export default animeReducer;
