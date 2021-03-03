import { GET_MINYEAR_COUNT } from "../../actions/type";

const initialState = {
  minyear: [],
};

const MinYear = (state = initialState, action) => {
  switch (action.type) {
    case GET_MINYEAR_COUNT:
      return {
        minyear: action.payload,
      };
    default:
      return state;
  }
};

export default MinYear;
