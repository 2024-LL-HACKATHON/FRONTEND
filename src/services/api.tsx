import axios from 'axios';
import { setToken } from './authSlice';
import { store } from '../store/store';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(setToken(null));
    }
    return Promise.reject(error);
  }
);

export default api;
