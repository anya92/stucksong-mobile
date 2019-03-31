import * as types from "../types";

const initialState = "light";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.THEME_CHANGE:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};
