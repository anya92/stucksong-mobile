import axios from "axios";
import * as types from "../types";

export const changeTheme = theme => ({
  type: types.THEME_CHANGE,
  payload: theme
});

export const fetchUser = access_token => async dispatch => {
  dispatch({ type: types.FETCH_USER_START });

  try {
    const response = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    dispatch({
      type: types.FETCH_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.FETCH_USER_ERROR, payload: error.message });
  }
};

export const fetchTopTracks = access_token => async dispatch => {
  dispatch({ type: types.FETCH_TOP_TRACKS_START });
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      }
    );

    dispatch({
      type: types.FETCH_TOP_TRACKS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.FETCH_TOP_TRACKS_ERROR, payload: error });
  }
};
