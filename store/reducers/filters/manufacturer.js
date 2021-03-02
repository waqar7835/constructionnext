import { GET_MANUFACTURER_COUNT } from "../../actions/type";

const initialState = {
    manufacturer: [],
};

const Manufacturer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MANUFACTURER_COUNT:
      return {
        manufacturer: action.payload,
      };
    default:
      return state;
  }
};

export default Manufacturer;
