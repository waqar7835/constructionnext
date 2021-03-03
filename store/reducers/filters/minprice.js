import { GET_MINPRICE_COUNT } from "../../actions/type";

const initialState = {
  minprice: [],
};

const MinPrice = (state = initialState, action) => {
  switch (action.type) {
    case GET_MINPRICE_COUNT:
      return {
        minprice: action.payload,
      };
    default:
      return state;
  }
};

export default MinPrice;
