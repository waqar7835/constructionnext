import { GET_MAXPRICE_COUNT } from "../../actions/type";

const initialState = {
  maxprice: [],
};

const MaxPrice = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAXPRICE_COUNT:
      return {
        maxprice: !!action.payload[0] ? parseInt(action.payload[0].field_price)  : 500000,
      };
    default:
      return state;
  }
};

export default MaxPrice;
