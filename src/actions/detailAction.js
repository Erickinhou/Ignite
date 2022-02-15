import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailsResult = await axios.get(gameDetailsUrl(id));
  const screenshotResult = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailsResult.data,
      screen: screenshotResult.data,
    },
  });
};
