import { GET_CLIENTS_DATA } from "../actions/type";

const initialState = {
  clients: [],
};

const Clients = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS_DATA:
      return {
        clients: action.payload,
      };
    default:
      return state;
  }
};

export default Clients;
