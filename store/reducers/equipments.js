import { GET_EQUIPMENTS_DATA } from "../actions/type";

const initialState = {
  equipments: [],
};

const Equipments = (state = initialState, action) => {
  switch (action.type) {
    case GET_EQUIPMENTS_DATA:
      return {
        equipments: action.payload,
      };
    default:
      return state;
  }
};

export default Equipments;
