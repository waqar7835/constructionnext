import axios from "axios";
import { baseURL } from "../config/config";

const getUrl = (endpoint) => `${baseURL}${endpoint}`;
const getConfigs = (config) => ({
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json; charset=utf-8",
  },
  ...config,
});

const request = async (method, endpoint, params = {}, payload = {}) => {
  let request;
  if (method === "post") {
    request = axios.post(getUrl(endpoint), {...payload }, getConfigs({ params }));
  } else {
    request = axios.get(getUrl(endpoint), getConfigs({ params }));
  }

  const { data } = await request;

  return data;
};

export const get = (endpoint, params = {}) => request("get", endpoint, params);

export const post = (endpoint, data = {}, params = {}) =>
  request("post", endpoint, params, data);