import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import userReducer from "./userReducer";
import topTracksReducer from "./topTracksReducer";

export default combineReducers({
  theme: themeReducer,
  user: userReducer,
  top_tracks: topTracksReducer
});
