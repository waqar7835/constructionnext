import { GET_CATEGORY_COUNT } from "../../actions/type";

const initialState = {
  category: [],
};

const Category = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_COUNT:
      return {
        category: action.payload,
      };
    default:
      return state;
  }
};

export default Category;
