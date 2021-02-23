import * as api from "@services/api";
const contactform = (data) => {
    return api.post('api/rest-points/contactform.json', data);
  };
  export default contactform;