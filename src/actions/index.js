export const GET_SEASON = "GET_SEASON";
export const CURR_COMP = "CURR_COMP";

export const season = (season) => {
  return {
    type: "GET_SEASON",
    payload: season,
  };
};
