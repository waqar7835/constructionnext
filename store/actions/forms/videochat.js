import * as api from "@services/api";
const VideoChatModal = (data) => {
    return api.post('/api/rest-points/chatform.json', data);
};
export default VideoChatModal;