import { season } from "./index";

export const getSeason = async (dispatch) => {
  try {
    const response = await fetch("https://api.jikan.moe/v3/season");
    const responseJSON = await response.json();
    const currentSeason = await responseJSON.anime;
    dispatch(season(currentSeason));
  } catch (err) {
    alert(err);
  }
};
