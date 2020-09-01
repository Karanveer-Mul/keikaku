export const GET_SEASON = "GET_SEASON";
export const GET_TOP = "GET_TOP";
export const GET_ANIME = "GET_ANIME";
export const CURR_COMP = "CURR_COMP";

export const season = (season) => {
  return {
    type: "GET_SEASON",
    payload: season,
  };
};

export const top = (top) => {
  return {
    type: "GET_TOP",
    payload: top,
  };
};

export const anime = (anime) => {
  return {
    type: "GET_ANIME",
    payload: anime,
  };
};
