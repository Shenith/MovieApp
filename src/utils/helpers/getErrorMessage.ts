import {AxiosError} from 'axios';
import {ErrorCodes} from '../../constants';

type ErrorProp = {
  errorMessage: string;
};

export const getErrorMessage = (error: AxiosError): ErrorProp => {
  let errorCodeMessage: ErrorProp;

  switch (error.code) {
    case ErrorCodes.ERR_NETWORK:
      errorCodeMessage = {
        errorMessage: 'Network error. Check your internet connection',
      };
      break;
    case ErrorCodes.ERR_BAD_REQUEST:
      errorCodeMessage = {
        errorMessage: 'Error while loading. Please pull to refresh',
      };
      break;
    default:
      errorCodeMessage = {errorMessage: 'An unexpected error occurred'};
      break;
  }

  return errorCodeMessage;
};
