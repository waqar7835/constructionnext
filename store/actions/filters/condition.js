import { GET_CONDITION_COUNT } from "../type";
import { baseURL } from "@config/config";

const condition = (path) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/condition/count?_format=hal_json";
    if(!!path){
      targetURL += `&${path}`;
    }
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_CONDITION_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default condition;