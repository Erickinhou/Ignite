import axios from "axios";
import { popularGamesUrl, newGamesUrl, upComingGamesUrl } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //Fetch Axios
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upComingData = await axios.get(upComingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upComingData.data.results,
    },
  });
};
