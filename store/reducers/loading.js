import { SET_LOADER } from "../actions/type";

const initialState = {
  loader: false,
};

const Loader = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        loader: action.payload,
      };
    default:
      return state;
  }
};

export default Loader;
