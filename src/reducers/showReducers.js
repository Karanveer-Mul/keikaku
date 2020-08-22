import { GET_SERIES } from "../actions/types";

const initialState = {
  series: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        series: action.payload,
      };

    default:
      return state;
  }
}
