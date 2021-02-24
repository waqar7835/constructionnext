import * as api from "@services/api";
const fianceform = (data) => {
    return api.post('/api/rest-points/financeform.json', data);
};
export default fianceform;