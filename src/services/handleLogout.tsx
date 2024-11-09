import React from 'react';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from './authSlice';
import apiClient from '../api/clientapi';

const LogoutButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
    delete apiClient.defaults.headers.common["X-AUTH-TOKEN"];
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
