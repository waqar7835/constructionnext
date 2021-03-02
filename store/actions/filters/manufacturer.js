import { GET_MANUFACTURER_COUNT } from "../type";
import { baseURL } from "@config/config";

const manufacturer = (path) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/manufact/count?_format=hal_json";
    if(!!path){
      targetURL += `&${path}`;
    }
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_MANUFACTURER_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default manufacturer;