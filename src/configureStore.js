import { combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import homeReducer from "pages/Home/redux/reducer";

const rootReducer = combineReducers({
  workspace: combineReducers({
    home: homeReducer,
  }),
});

const store = () => {
  const composeEnhancer =
    process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

  const store = createStore(rootReducer, composeEnhancer());

  return store;
};

export default store;
