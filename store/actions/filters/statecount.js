import { GET_STATE_COUNT } from "../type";
import { baseURL } from "@config/config";

const statecount = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/state/count?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_STATE_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default statecount;