import { GET_PRODUCTS_DATA, SET_LOADER } from "./type";
import { baseURL } from "@config/config";

const products = (path) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/products?_format=hal_json";
    if(!!path){
      targetURL += `&${path}`;
    }
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_PRODUCTS_DATA,
        payload: await result.json(),
      });
      dispatch({
        type: SET_LOADER,
        payload: false,
      });
      return resolve(true);
    } catch (e) {
      dispatch({
        type: SET_LOADER,
        payload: false,
      });
      return resolve(false);
    }
  });
};
export default products;