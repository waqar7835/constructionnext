import { GET_SLIDER_DATA } from "../actions/type";

const initialState = {
  slider: [],
};

const Slider = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDER_DATA:
      return {
        slider: action.payload,
      };
    default:
      return state;
  }
};

export default Slider;
