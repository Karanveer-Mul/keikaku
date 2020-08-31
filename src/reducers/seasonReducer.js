const intialState = {
  season: [],
  top: [],
};

const seasonReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_SEASON": {
      return {
        season: action.payload,
      };
    }
    case "GET_TOP": {
      return { ...state, top: action.payload };
    }
    default:
      return state;
  }
};

export default seasonReducer;
