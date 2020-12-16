import { season } from "./index";

export const getSeason = async (dispatch) => {
  try {
    const response = await fetch("https://api.jikan.moe/v3/season");
    const responseJSON = await response.json();
    const Season = await responseJSON.anime;
    dispatch(season(Season));
  } catch (err) {
    console.log(err);
  }
};
