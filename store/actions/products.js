import { GET_PRODUCTS_DATA } from "./type";
import { baseURL } from "@config/config";

const products = () => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/products?_format=hal_json";
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_PRODUCTS_DATA,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default products;