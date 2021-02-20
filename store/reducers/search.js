import {
  V_TYPE,
  MAKE_DATA,
  YEAR_DATA,
  COLOR_DATA,
  BODY_TYPE_DATA,
  DOORS_DATA,
  FUEL_TYPE_DATA,
  LOCATION_DATA,
  SERVICES_DATA,
  CONDITION_DATA,
  TRANSMISSION_DATA,
  SET_INTERIOR_COLOR,
  CAR_FEATURES,
  MAJOR_ACCIDENTS,
  MINOR_ACCIDENTS,
  SEATES,
  SEATES_TYPE,
  WARRANTY,
  DRIVE_TRAIN,
  CYLINDERS,
  UPDATE_SEARCHED_DATA,
  MODEL_DATA,
  TRIM_DATA,
  SET_TITLE,
} from "../actions/type";
import initialSearchState from "./initialSearchState";
import Search from "antd/lib/input/Search";

const initialState = initialSearchState;

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    // case V_TYPE:
    //   return {
    //     ...state,
    //     vtype: action.vtype,
    //   };
    case MAKE_DATA:
      return {
        ...state,
        make: action.make,
      };
    case MODEL_DATA:
      return {
        ...state,
        model: action.model,
      };
    case TRIM_DATA:
      return {
        ...state,
        trim: action.trim,
      };
    case SET_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    // case YEAR_DATA:
    //   return {
    //     ...state,
    //     year: action.year,
    //   };
    // case COLOR_DATA:
    //   return {
    //     ...state,
    //     color: action.color,
    //   };
    case BODY_TYPE_DATA:
      return {
        ...state,
        body: action.body,
      };
    // case DOORS_DATA:
    //   return {
    //     ...state,
    //     doors: action.doors,
    //   };
    // case FUEL_TYPE_DATA:
    //   return {
    //     ...state,
    //     ftype: action.ftype,
    //   };
    // case LOCATION_DATA:
    //   return {
    //     ...state,
    //     location: action.location,
    //   };
    // case SERVICES_DATA:
    //   return {
    //     ...state,
    //     service: action.service,
    //   };
    // case CONDITION_DATA:
    //   return {
    //     ...state,
    //     condition: action.condition,
    //   };
    // case TRANSMISSION_DATA:
    //   return {
    //     ...state,
    //     transmission: action.transmission,
    //   };
    case SET_INTERIOR_COLOR:
      return {
        ...state,
        interior_color: action.interior_color,
      };
    // case CAR_FEATURES:
    //   return {
    //     ...state,
    //     car_features: action.car_features,
    //   };
    case MAJOR_ACCIDENTS:
      return {
        ...state,
        major_accidents: action.major_accidents,
      };
    case MINOR_ACCIDENTS:
      return {
        ...state,
        minor_accidents: action.minor_accidents,
      };
    case SEATES:
      return {
        ...state,
        seats: action.seats,
      };
    case SEATES_TYPE:
      return {
        ...state,
        seats_type: action.seats_type,
      };
    case WARRANTY:
      return {
        ...state,
        warranty: action.warranty,
      };
    case DRIVE_TRAIN:
      return {
        ...state,
        drive_train: action.drive_train,
      };
    case CYLINDERS:
      return {
        ...state,
        cylinders: action.cylinders,
      };
    case UPDATE_SEARCHED_DATA:
      return {
        ...state,
        searchedData: {
          ...state.searchedData,
          ...action.data,
        },
      };
    default:
      return state;
  }
};

export default SearchReducer;
