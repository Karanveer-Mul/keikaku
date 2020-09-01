import { top } from "./index";

export const getTop = async (dispatch) => {
  try {
    const response = await fetch("https://api.jikan.moe/v3/top/anime");
    const responseJSON = await response.json();
    const topAnime = await responseJSON.top;
    dispatch(top(topAnime));
  } catch (err) {
    console.log(err);
  }
};
