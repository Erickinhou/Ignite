import axios from "axios";
import {
  popularGamesUrl,
  newGamesUrl,
  upComingGamesUrl,
  searchGameUrl,
} from "../api";

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

export const loadSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCHED",
  };
};
