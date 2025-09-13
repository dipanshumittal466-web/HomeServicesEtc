import axios from 'axios';

const api = axios.create({
  baseURL: "https://homeservicesetc.onrender.com//api"
});


export default api;
