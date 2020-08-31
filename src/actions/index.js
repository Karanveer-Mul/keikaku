export const GET_SEASON = "GET_SEASON";
export const GET_TOP = "GET_TOP";

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
