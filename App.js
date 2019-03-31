import React from "react";
import { Provider } from "react-redux";

import Main from "./Main";

import store from "./state";

export default () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
