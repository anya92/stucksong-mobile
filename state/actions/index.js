import axios from "axios";
import * as types from "../types";

export const changeTheme = theme => ({
  type: types.THEME_CHANGE,
  payload: theme
});

export const fetchUser = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://stucksong.herokuapp.com/auth/current_user"
    );

    dispatch({
      type: types.FETCH_USER_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};
