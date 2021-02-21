import { GET_SLIDER_DATA } from "./type";
import { baseURL } from "@config/config";

export default () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/slider?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_SLIDER_DATA,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
