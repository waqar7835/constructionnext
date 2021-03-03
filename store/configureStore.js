import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import slider from "./reducers/slider";
import equipments from "./reducers/equipments";
import clients from './reducers/clients';
import products from './reducers/products';
import loader from './reducers/loading';
import city from './reducers/filters/city';
import condition from './reducers/filters/condition';
import country from './reducers/filters/country';
import listingtype from './reducers/filters/listingtype';
import manufacturer from './reducers/filters/manufacturer';
import statecount from './reducers/filters/statecount';
import category from './reducers/filters/category';
import minprice from './reducers/filters/minprice';
import maxprice from './reducers/filters/maxprice';
import minyear from './reducers/filters/minyear';
import maxyear from './reducers/filters/maxyear';
const reducers = combineReducers({
  slider,
  equipments,
  clients,
  products,
  loader,
  city,
  condition,
  country,
  listingtype,
  manufacturer,
  statecount,
  category,
  minprice,
  maxprice,
  minyear,
  maxyear
});

export const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};