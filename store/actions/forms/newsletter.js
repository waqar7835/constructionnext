import * as api from "@services/api";
const newsletterform = (data) => {
    return api.post('/api/rest-points/newsletter.json', data);
};
export default newsletterform;