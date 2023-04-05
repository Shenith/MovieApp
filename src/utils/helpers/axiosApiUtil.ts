import axios from 'axios';
import {API_BASE_URL} from '../../configs';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export {axiosInstance};
