import { SET_LANG } from "../actions/type";

const initialState = {
  langStore: 0,
};

const Lang = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        langStore: action.lang,
      };
    default:
      return state;
  }
};

export default Lang;
