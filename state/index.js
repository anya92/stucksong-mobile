import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import mainReducer from "./reducers";

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
