import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';
import AuthStore from '../../stores/auth';
//@ts-ignore
const baseURL = process.env.VITE_API;
//@ts-ignore
// console.log("🚀 ~ baseURL=>", process.env)
const { token } = AuthStore.getState();

const API = axios.create({
  baseURL,
  headers: {
    authorization: `Bearer ${token}`,
  },
});
API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { API };
