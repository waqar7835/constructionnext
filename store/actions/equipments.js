import { GET_EQUIPMENTS_DATA } from "./type";
import { baseURL } from "@config/config";

const equipments = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/equipments?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_EQUIPMENTS_DATA,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default equipments;