import { GET_CONDITION_COUNT } from "../../actions/type";

const initialState = {
  condition: [],
};

const Condition = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONDITION_COUNT:
      return {
        condition: action.payload,
      };
    default:
      return state;
  }
};

export default Condition;
