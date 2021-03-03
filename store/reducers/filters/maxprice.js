import { GET_MAXPRICE_COUNT } from "../../actions/type";

const initialState = {
  maxprice: [],
};

const MaxPrice = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAXPRICE_COUNT:
      return {
        maxprice: action.payload,
      };
    default:
      return state;
  }
};

export default MaxPrice;
