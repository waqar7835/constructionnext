import {
  GET_NODE,
  GET_SIMILAR_VEHICLES,
  GET_OTHER_VEHICLES_BY_SHOWROOM,
  GET_USER_AD_COUNT,
} from "./type";
import * as api from "@services/api";
import { baseURL, baseNodeURL } from "@config/config";
import Cookies from "js-cookie";

export const getContent = (path) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/singleVehicle";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path }),
      });
      const data = await result.json();
      dispatch({
        type: GET_NODE,
        node: !!data.vehicle[0] ? data.vehicle[0] : null,
      });
      return resolve(data);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};

export const getContentById = (type, id) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/singleVehicle";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, id }),
      });
      const data = await result.json();
      dispatch({
        type: GET_NODE,
        node: !!data.vehicle ? data.vehicle : null,
      });
      return resolve(!!data.vehicle ? data.vehicle : null);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};

// export const getGarage = (id) => (dispatch) => {
//   return new Promise(async (resolve) => {
//     let targetURL = baseNodeURL + "/api/singleVehicle";
//     try {
//       let result = await fetch(targetURL, {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id }),
//       });
//       const data = await result.json();
//       dispatch({
//         type: GET_NODE,
//         node: !!data.vehicle ? data.vehicle : null,
//       });
//       return resolve(data);
//     } catch (e) {
//       // console.log(e);
//       return resolve(false);
//     }
//   });
// };

export const getAdCount = (uid) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/adCount";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });
      const data = await result.json();
      dispatch({
        type: GET_USER_AD_COUNT,
        count: data.count,
      });
      return resolve(data);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};

export const getD8Content = (uid, nid) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/rest-points/nodeedit.json";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, nid, token: Cookies.get("sso_key") }),
      });
      const data = await result.json();
      return resolve(!!data ? data : null);
    } catch (e) {
      return resolve(false);
    }
  });
};
export const getD8ContentImages = (uid, nid) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseURL + "/api/rest-points/nodeeditimages.json";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, nid, token: Cookies.get("sso_key") }),
      });
      const data = await result.json();
      return resolve(!!data ? data : null);
    } catch (e) {
      return resolve(false);
    }
  });
};

export const getD8AdsCount = (data) => {
  return api.post("/api/rest-points/d8PostCount.json", data);
};
export const getD7AdsCount = (data) => {
  return api.post("/api/rest-points/d7PostCount.json", data);
};
export const updateNode = (data) => {
  return api.post("/api/rest-points/promotefature.json", data);
};
export const publishStatusChange = (data) => {
  return api.post("/api/rest-points/publish.json", data);
};
export const nodePromotedAfterPay = (data) => {
  return api.post("/api/rest-points/promotedAfterPay.json", data);
};
export const getUserbyReferenceId = (data) => {
  return api.post("/api/rest-points/getUserbyReferenceId.json", data);
};
export const nodePaidActions = (data) => {
  return api.post("/api/rest-points/promoted.json", data);
};
export const refreshNode = (data) => {
  return api.post("/api/rest-points/refresh.json", data);
};
export const sponsorehNode = (data) => {
  return api.post("/api/queue_update.json", data);
};
export const syncNode = (data) => {
  return api.post("/api/rest-points/sync.json", data);
};
export const syncAllNode = (data) => {
  return api.post("/api/rest-points/user-data-sync.json", data);
};
export const checkAuth = () => {
  return api.post("/api/rest-points/auth.json");
};
export const bulkPublishNode = (data) => {
  return api.post("/api/rest-points/publish.json", data);
};

export const getSimilarVehicle = (field_vehicle_type, make) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/vehicles";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          field_vehicle_type,
          field_vehicle_make: !!make ? [make] : undefined,
        }),
      });
      dispatch({
        type: GET_SIMILAR_VEHICLES,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};

export const getShowroomVehicles = (showroomId) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/vehicles";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ showroom_id: showroomId }),
      });
      dispatch({
        type: GET_OTHER_VEHICLES_BY_SHOWROOM,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};

export const getUserVehicles = (userId) => (dispatch) => {
  return new Promise(async (resolve) => {
    let targetURL = baseNodeURL + "/api/vehicles";
    try {
      let result = await fetch(targetURL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: userId }),
      });
      dispatch({
        type: GET_OTHER_VEHICLES_BY_SHOWROOM,
        payload: await result.json(),
      });
      return resolve(true);
    } catch (e) {
      // console.log(e);
      return resolve(false);
    }
  });
};
