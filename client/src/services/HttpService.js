import axios from 'axios';
import { jwt_key } from '../utils/consts';
import LocalStorageService from './LocalStorageService';

class HttpService {
  defaultHeaders = {
    'Content-Type': 'application/json',
  };
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url, authenticated = false) {
    let headers = this.defaultHeaders;
    if (authenticated) headers = { ...headers, authorization: `${LocalStorageService.get(jwt_key)}` };
    return this.instance.get(url, { headers });
  }

  post(url, data, authenticated = false) {
    let headers = this.defaultHeaders;
    if (authenticated) headers = { ...headers, authorization: `${LocalStorageService.get(jwt_key)}` };
    return this.instance.post(url, data, { headers });
  }

  put(url, data) {
    return this.instance.put(url, data);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new HttpService();
