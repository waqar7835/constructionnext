import { GET_CATEGORY_COUNT } from "../type";
import { baseURL } from "@config/config";

const category = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/category/count?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_CATEGORY_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default category;