import axios from "axios";
import { store } from "../configureStore";
import { types } from "../redux/ducks/conf";
import { APIURL } from "../utils/apis";
const apiList = {
  global: axios.create({
    baseURL: APIURL.GLOBAL_API_URL,
  }),
  employeesure: axios.create({
    baseURL: APIURL.EMPLOYEESURE_API_URL,
  }),
  healthsure: axios.create({
    baseURL: APIURL.HEAlTHSURE_API_URL,
  }),
};

export const postApi = (type, uri, data = {}) => {
  return apiList[type].post(uri, data);
};
export const getApi = (type, uri, data) => {
  return apiList[type].get(uri, { params: { ...data } });
};
export const putApi = (type, uri, data) => {
  return apiList[type].put(uri, { ...data });
};

export const patchApi = (type, uri, data) => {
  return apiList[type].patch(uri, { ...data });
};
const logout = () => {
  localStorage.clear();
  store.dispatch({ type: types.LOGOUT_USER });
};
export const axiosTokenIntialize = (token) => {
  for (const key in apiList) {
    apiList[key].defaults.headers.common["Authorization"] = `Bearer ${
      token || store?.getState()?.confState?.token
    }`;
    apiList[key].interceptors.response.use(
      function (response) {
        if (response && response.status && response.status === 401) {
          logout();
        } else {
          if (response && response.status && response.status === 200) {
            return response;
          }
        }
        return response;
      },
      function (error) {
        if (error?.response?.status === 401) {
          logout();
        }
        return error.response;
      }
    );
  }
};
