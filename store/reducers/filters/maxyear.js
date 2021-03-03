import { GET_MAXYEAR_COUNT } from "../../actions/type";

const initialState = {
  maxyear: [],
};

const MaxYear = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAXYEAR_COUNT:
      return {
        maxyear: action.payload,
      };
    default:
      return state;
  }
};

export default MaxYear;
