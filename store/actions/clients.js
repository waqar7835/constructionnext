import { GET_CLIENTS_DATA } from "./type";
import { baseURL } from "@config/config";

const clients = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/happy-clients?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_CLIENTS_DATA,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default clients;