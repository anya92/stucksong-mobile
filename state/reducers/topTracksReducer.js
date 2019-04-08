import * as types from "../types";

const initialState = {
  items: [],
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TOP_TRACKS_START:
      return {
        ...state,
        loading: true,
        error: false
      };
    case types.FETCH_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload.items
      };
    case types.FETCH_TOP_TRACKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
