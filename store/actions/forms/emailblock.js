import * as api from "@services/api";
const EmailBlock = (data) => {
    return api.post('/api/rest-points/emailform.json', data);
};
export default EmailBlock;