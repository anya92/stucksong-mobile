import { FETCH_USER_SUCCESS } from "../types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
