import { GET_COUNTRY_COUNT } from "../../actions/type";

const initialState = {
  country: [],
};

const Country = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_COUNT:
      return {
       country: action.payload,
      };
    default:
      return state;
  }
};

export default Country;
