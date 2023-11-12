import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';
import AuthStore from '../../strores/auth';

const baseURL = 'http://localhost:3000';
const {token} = AuthStore.getState();

const API = axios.create({
  baseURL,
  headers:{
    authorization: `Bearer ${token}`
  }

});
API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { API };
