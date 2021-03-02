import { GET_STATE_COUNT } from "../../actions/type";

const initialState = {
    statecount: [],
};

const StateCount = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_COUNT:
      return {
        statecount: action.payload,
      };
    default:
      return state;
  }
};

export default StateCount;
