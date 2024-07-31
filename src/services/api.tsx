import axios from 'axios';
import { RootState } from '../store/store';
import store from '../store/store';
import { setToken } from './authSlice';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState() as RootState;
    const token = state.auth.token;
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

