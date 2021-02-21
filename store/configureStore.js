import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import slider from "./reducers/slider";
import equipments from "./reducers/equipments";
import clients from './reducers/clients'

const reducers = combineReducers({
  slider,
  equipments,
  clients
});

export const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};