import axios from 'axios';
import { setToken } from './authSlice';
import { store } from '../store/store';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // 로컬 저장소에서 토큰 가져오기
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
      store.dispatch(setToken(null)); // 401 에러 발생 시 토큰 제거
    }
    return Promise.reject(error);
  }
);

export default api;
