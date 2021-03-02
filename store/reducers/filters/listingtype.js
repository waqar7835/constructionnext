import { GET_LISTINGTYPE_COUNT } from "../../actions/type";

const initialState = {
  listingtype: [],
};

const ListingType = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTINGTYPE_COUNT:
      return {
        listingtype: action.payload,
      };
    default:
      return state;
  }
};

export default ListingType;
