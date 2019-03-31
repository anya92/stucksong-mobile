import * as types from "../types";

export const changeTheme = theme => ({
  type: types.THEME_CHANGE,
  payload: theme
});
