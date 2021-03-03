import { GET_MINPRICE_COUNT } from "../../actions/type";

const initialState = {
  minprice: [],
};

const MinPrice = (state = initialState, action) => {
  switch (action.type) {
    case GET_MINPRICE_COUNT:
      return {
        minprice: !!action.payload[0] ? parseInt(action.payload[0].field_price)  : 0,
      };
    default:
      return state;
  }
};

export default MinPrice;
