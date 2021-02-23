import { GET_PRODUCTS_DATA } from "../actions/type";

const initialState = {
  products: [],
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};

export default Products;
