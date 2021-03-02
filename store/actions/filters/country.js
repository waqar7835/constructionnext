import { GET_COUNTRY_COUNT } from "../type";
import { baseURL } from "@config/config";

const country = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/country/count?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_COUNTRY_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default country;