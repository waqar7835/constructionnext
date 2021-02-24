import * as api from "@services/api";
const EmailSellerModal = (data) => {
    return api.post('/api/rest-points/sellerform.json', data);
};
export default EmailSellerModal;