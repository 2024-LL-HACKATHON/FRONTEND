import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  account: string;
  email: string;
  name: string;
  nickname: string;
  phone: string;
  thumbnail: string;
  uid: number;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
}

const getUserFromLocalStorage = (): User | null => {
  const userString = localStorage.getItem('user');
  if (!userString) return null;
  try {
    return JSON.parse(userString);
  } catch (e) {
    console.error('Failed to parse user from localStorage', e);
    return null;
  }
};

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  user: getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; user: User }>) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user'); 
      delete axios.defaults.headers.common["X-AUTH-TOKEN"];
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
      if (!action.payload) {
        state.user = null;
        localStorage.removeItem('user');
      }
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    }
  },
});


export const { login, logout, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
