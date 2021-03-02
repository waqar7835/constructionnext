import { GET_CITY_COUNT } from "../../actions/type";

const initialState = {
  city: [],
};

const City = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_COUNT:
      return {
        city: action.payload,
      };
    default:
      return state;
  }
};

export default City;
