import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken') || getCookieToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


function getCookieToken() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; jwt=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
}

