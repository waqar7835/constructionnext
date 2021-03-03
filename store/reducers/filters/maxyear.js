import { GET_MAXYEAR_COUNT } from "../../actions/type";

const initialState = {
  maxyear: [],
};

const MaxYear = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAXYEAR_COUNT:
      return {
        maxyear:!!action.payload[0] ?parseInt(action.payload[0].field_year)  : 2021,
      };
    default:
      return state;
  }
};

export default MaxYear;
