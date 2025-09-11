import axios from 'axios';
const base = import.meta.env.VITE_API_URL || '/api';
const api = axios.create({ baseURL: base, withCredentials: true });
// Add interceptor to attach token if present
api.interceptors.request.use(config => {
  const token = localStorage.getItem('hs_token');
  if (token) config.headers = { ...(config.headers || {}), Authorization: 'Bearer ' + token };
  return config;
});
export default api;
