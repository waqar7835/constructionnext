import { GET_LISTINGTYPE_COUNT } from "../type";
import { baseURL } from "@config/config";

const listingtype = (path) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/listingtype/count?_format=hal_json";
    if(!!path){
      targetURL += `&${path}`;
    }
    try {
      let result = await fetch(targetURL);
      dispatch({
        type: GET_LISTINGTYPE_COUNT,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      return resolve(false);
    }
  });
};
export default listingtype;