import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { logout as logoutAction } from './authSlice';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    delete axios.defaults.headers.common["X-AUTH-TOKEN"];
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
