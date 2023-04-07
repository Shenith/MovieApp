import {ToastTypes} from './../../constants';
import {getErrorMessage} from './getErrorMessage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {API_BASE_URL} from '../../configs';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log(error);
    if (axios.isAxiosError(error)) {
      Toast.show({
        autoHide: false,
        type: ToastTypes.errorToast,
        props: {
          message: getErrorMessage(error).errorMessage,
        },
      });
    } else {
      Toast.show({
        autoHide: false,
        type: ToastTypes.errorToast,
        props: {
          message: 'An unexpected error occurred',
        },
      });
    }
    return Promise.reject(error);
  },
);

export {axiosInstance};
